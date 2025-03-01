variable "vpc_cidr" {
  description = "VPC cidr"
  type        = string
}

variable "public_subnet_cidr_1" {
  description = "Public subnet 1 cidr"
  type        = string
}

variable "public_subnet_cidr_2" {
  description = "Public subnet 2 cidr"
  type        = string
}

variable "private_subnet_cidr_1" {
  description = "Private subnet 1 cidr"
  type        = string
}

variable "private_subnet_cidr_2" {
  description = "Private subnet 2 cidr"
  type        = string
}