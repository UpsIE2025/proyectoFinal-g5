output "s3_bucket_name" {
  description = "Nombre del bucket para la aplicación web"
  value       = aws_s3_bucket.site.bucket
}

output "s3_bucket_website_endpoint" {
  description = "Endpoint del sitio web estático en S3"
  value       = aws_s3_bucket.site.website_endpoint
}

output "subdomain_url" {
  description = "URL del subdominio que apunta al bucket de S3"
  value       = "https://${var.subdomain}"
}