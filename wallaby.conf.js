module.exports = wallaby => ({
  testFramework: 'mocha',

  env: {
    type: 'node',
  },

  files: [
    'jsconfig.json',
    'packages/mocha-config/*.js',
    'packages/environment/*.js',
    'packages/app/**/*.js',

    '!packages/app/**/*.spec.js',
    '!packages/app/**/*.test.js',
    '!packages/app/node_modules/',
  ],

  tests: [
    'packages/app/**/*.spec.js',
    'packages/app/**/*.test.js',

    '!node_modules/',
    '!packages/*/node_modules/',
  ],

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
    '**/*.jsx': wallaby.compilers.babel(),
  },

  setup: () => {
    // Configure module aliases
    require('module-alias').addAliases({ '@package': w.projectCacheDir + '/packages' });

    require('babel-polyfill');
    require('./packages/mocha-config/setup')
  },

  debug: true,
});
