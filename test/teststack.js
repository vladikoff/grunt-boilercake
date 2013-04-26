define({
  proxyPort: 9000,

  proxyUrl: 'http://localhost:9000/',

  capabilities: {
    'selenium-version': '2.30.0'
  },

  environments: [
    { browserName: 'firefox', version: '19', platform: [ 'Mac 10.8' ] }
  ],

  maxConcurrency: 3,

  useSauceConnect: true,

  webdriver: {
    host: 'localhost',
    port: 4445
  },

  loader: {
    packages: [ 'dojo2-teststack' ],
    map: { 'dojo2-teststack': { 'dojo-ts': 'dojo2-teststack/dojo' } }
  },

  suites: [ ],

  functionalSuites: [ 'test/all' ],

  excludeInstrumentation: /^dojo2-teststack\/dojo\//
});
