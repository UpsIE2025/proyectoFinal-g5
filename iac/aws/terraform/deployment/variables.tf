variable "ssh_key_name" {
  description = "ssh key name"
  type        = string
}

variable "ssh_pem_name" {
  description = "ssh pem name"
  type        = string
}

variable "ubuntu_ami" {
  description = "Ubuntu ami id"
  type        = string
}

variable "ec2_instance_type" {
  description = "ec2_instance_type"
  type        = string
}

variable "vpc_name" {
  description = "VPC subnet name"
  type        = string
}

variable "public_subnet_name" {
  description = "Public subnet name"
  type        = string
}