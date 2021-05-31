#~/bin/bash

aws ssm put-parameter \
    --name string-param-name-from-aws-cli \
    --type String \
    --value string-param-value-from-aws-cli

aws ssm put-parameter \
    --name secure-string-param-name-from-aws-cli \
    --type SescureString \
    --value secure-string-value-from-aws-cli