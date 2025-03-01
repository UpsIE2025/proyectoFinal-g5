output "vpc_id" {
  value = aws_vpc.integrations_vpc.id
}

output "public_subnet_1_id" {
  value = aws_subnet.public_subnet_1.id
}

output "private_subnet_1_id" {
  value = aws_subnet.private_subnet_1.id
}

output "public_sg_id" {
  value = aws_security_group.public_sg.id
}

output "private_db_sg_id" {
  value = aws_security_group.private_db_sg.id
}