resource "aws_ssm_parameter" "string_param" {
  name  = "string-param-name-from-terraform"
  type  = "String"
  value = "string-param-value-from-terraform"
}

resource "aws_ssm_parameter" "secure_string_param" {
  name  = "secure-string-param-name-from-terraform"
  type  = "SecureString"
  value = "secure-string-value-name-from-terraform"
}
