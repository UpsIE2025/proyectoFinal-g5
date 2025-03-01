provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "integrations_ecr" {
  name                 = "integrations_repository"
  image_tag_mutability = "MUTABLE"

  tags = {
    "Project" = "integrations_project"
    "Owner"   = "Michael"
  }
}
