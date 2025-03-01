provider "aws" {
  region = "us-east-1"
}

data "aws_vpc" "selected" {
  filter {
    name   = "tag:Name"
    values = [var.vpc_name]
  }
}

data "aws_subnet" "selected" {
  filter {
    name   = "tag:Name"
    values = [var.public_subnet_name]
  }
}

resource "tls_private_key" "ec2_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

resource "aws_key_pair" "ssh_key" {
  key_name   = var.ssh_key_name
  public_key = tls_private_key.ec2_key.public_key_openssh
}

resource "local_file" "private_key" {
  content  = tls_private_key.ec2_key.private_key_pem
  filename = var.ssh_pem_name
  file_permission = "0400"
}

resource "aws_security_group" "ec2_sg" {
  vpc_id = data.aws_vpc.selected.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "ssh" }
}

resource "aws_eip" "ec2_eip" {
  instance = aws_instance.deploy_instance.id
}

resource "aws_instance" "deploy_instance" {
  ami                         = var.ubuntu_ami
  instance_type               = var.ec2_instance_type
  subnet_id                   = data.aws_subnet.selected.id
  security_groups             = [aws_security_group.ec2_sg.id]
  key_name                    = aws_key_pair.ssh_key.key_name
  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install -y docker.io python3 python3-pip
              sudo systemctl start docker
              sudo systemctl enable docker
              sudo usermod -aG docker ubuntu
              newgrp docker
              sudo apt install git
              EOF

  tags = { Name = "ec2_deploy" }
}
