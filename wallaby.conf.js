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
    if (!global._moduleAliasesRegistered) {
      const { delimeter, join } = require('path');
      const tsConfigPaths = require('tsconfig-paths');
      const { compilerOptions: { baseUrl, paths }} = require('./jsconfig.json');
      tsConfigPaths.register({ baseUrl, paths });
      global._moduleAliasesRegistered = true;
    }

    require('babel-polyfill');
    require('./packages/mocha-config/setup')
  },

  debug: true,
});
