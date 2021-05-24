#!/bin/bash
sudo yum update -y
sudo yum install -y awslogs
sudo systemctl start awslogsd
sudo chkconfig awslogs on
sudo systemctl enable awslogsd.service