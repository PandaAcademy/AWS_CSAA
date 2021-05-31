import * as cdk from '@aws-cdk/core';
import * as ssm from '@aws-cdk/aws-ssm';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const param = new ssm.StringParameter(this, 'string-param-name-from-aws-sdk', {
      // description: 'Some user-friendly description',
      // name: 'ParameterName',
      stringValue: 'string-param-value-from-aws-sdk',
      // allowedPattern: '.*',
    });
  }
}
