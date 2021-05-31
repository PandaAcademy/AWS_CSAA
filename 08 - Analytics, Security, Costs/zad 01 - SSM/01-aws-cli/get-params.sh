#~/bin/bash

aws ssm get-parameter \
    --name string-param-name-from-aws-cli 

aws ssm get-parameter \
    --name secure-string-param-name-from-aws-cli \
   --with-decryption