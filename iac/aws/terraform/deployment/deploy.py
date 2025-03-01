import os
import sys
import subprocess

# Variables globales
GITHUB_REPO = "https://github.com/UpsIE2025/proyectoFinal-g5.git"
BUCKET_NAME = "integrations.mssalazarb.dev"
ECR_REPO = "782402091617.dkr.ecr.us-east-1.amazonaws.com/integrations_repository"
EC2_HOST = "ec2-user@tu-ec2-public-ip"
SSH_KEY = "ec2_key.pem"

def run_command(command, cwd=None):
    try:
        subprocess.run(command, shell=True, check=True, cwd=cwd)
    except subprocess.CalledProcessError as e:
        print(f"Error ejecutando comando: {command}")
        sys.exit(1)

def clone_repo():
    print("🔄 Clonando el repositorio...")
    run_command(f"git clone {GITHUB_REPO} app")

def deploy_frontend():
    print("🚀 Desplegando frontend en S3...")
    os.chdir("app/frontend")
    
    run_command("npm install")
    run_command("npm run build")

    run_command(f"aws s3 sync ./out s3://{BUCKET_NAME} --delete")

    print("✅ Frontend desplegado correctamente.")

def deploy_gateway():
    print("🐳 Construyendo imagen de Docker para Gateway...")
    os.chdir("app/gateway")

    run_command(f"aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin {ECR_REPO}")

    run_command(f"docker build -t gateway .")
    run_command(f"docker tag gateway:latest {ECR_REPO}:latest")
    run_command(f"docker push {ECR_REPO}:latest")

    print("🚀 Imagen subida a ECR.")

    print("🔗 Conectándose a la EC2 para desplegar el Gateway...")
    remote_command = f"docker pull {ECR_REPO}:latest && docker stop gateway || true && docker rm gateway || true && docker run -d --name gateway -p 8080:8080 {ECR_REPO}:latest"
    run_command(f"ssh -i {SSH_KEY} {EC2_HOST} '{remote_command}'")

    print("✅ Gateway desplegado correctamente.")

def main():
    if len(sys.argv) != 2:
        print("Uso: python deploy.py <service>")
        sys.exit(1)

    service = sys.argv[1].lower()

    clone_repo()

    if service == "frontend":
        deploy_frontend()
    elif service == "gateway":
        deploy_gateway()
    else:
        print("❌ Error: Servicio no válido. Usa 'frontend' o 'gateway'")
        sys.exit(1)

if __name__ == "__main__":
    main()
