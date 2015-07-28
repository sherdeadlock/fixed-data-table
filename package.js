Package.describe({
  name: 'sherdeadlock:fixed-data-table',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'npm wrapper for https://github.com/facebook/fixed-data-table',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('react@0.1.4', 'client');
  api.addFiles('fixed-data-table.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sherdeadlock:fixed-data-table');
  api.addFiles('fixed-data-table-tests.js');
});
