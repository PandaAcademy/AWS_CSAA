var AWS = require('aws');

var credentials = new AWS.SharedIniFileCredentials(
    {
        profile: 'panda'
    }
);

var createContext = function(name, value, type) {
    return {
        Name: name,
        Value: value,
        Type: type
    }
}

var ssm = new AWS.ssm();

ssm.putParameter(createContext(
    'string-param-name-from-aws-sdk',
    'string-param-value-from-aws-sdk',
    'String'
), function(err, data) {
    if (err) {
        console.log(err, err.stack); 
    } else {     
        console.log(data);           
    }
  });

  ssm.putParameter(createContext(
    'secure-string-param-name-from-aws-sdk',
    'secure-string-param-value-from-aws-sdk',
    'SecureString'
), function(err, data) {
    if (err) {
        console.log(err, err.stack); 
    } else {     
        console.log(data);           
    }
  });