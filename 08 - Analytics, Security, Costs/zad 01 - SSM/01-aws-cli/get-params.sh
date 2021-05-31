#!/bin/bash

aws ssm get-parameter \
    --name string-param-name-from-aws-cli \
    --profile panda

aws ssm get-parameter \
    --name secure-string-param-name-from-aws-cli \
    --with-decryption \
    --profile panda
