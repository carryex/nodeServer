// Container for all the environments
const environments = {};

// Staging (default) environment
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret',
  'maxChecks': 5,
  'twilio': {
    accountSid: 'ACc9600f9a90620c5bad684dd813deef92',
    authToken: '6e8c01fd69801b98e985d5ce2cb8ce7d',
    fromPhone: '+13368495233',
  },
  'templateGlobals': {
    'appName': 'UptimeChecker',
    'companyName': 'NotARealCompany, Inc',
    'yearCreated': '2021',
    'baseUrl': 'http://localhost:3000',

  },
};

// Production  environment
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsASecretToo',
  'maxChecks': 5,
  'twilio': {
    accountSid: 'ACc9600f9a90620c5bad684dd813deef92',
    authToken: '6e8c01fd69801b98e985d5ce2cb8ce7d',
    fromPhone: '+13368495233',
  },
  'templateGlobals': {
    'appName': 'UptimeChecker',
    'companyName': 'NotARealCompany, Inc',
    'yearCreated': '2021',
    'baseUrl': 'http://localhost:5000',

  },
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
const environmentToExport = typeof (environments[currentEnvironment]) == 'object' ?
  environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
