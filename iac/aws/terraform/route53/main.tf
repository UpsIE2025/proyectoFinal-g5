provider "aws" {
  region = "us-east-1"
}

resource "aws_route53_zone" "g5_domain" {
  name = var.domain_name
}

output "name_servers" {
  value = aws_route53_zone.g5_domain.name_servers
}