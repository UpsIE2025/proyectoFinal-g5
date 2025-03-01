output "route53_name_servers" {
  description = "NS para el dominio en Route 53"
  value       = aws_route53_zone.g5_domain.name_servers
}