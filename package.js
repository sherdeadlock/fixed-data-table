Package.describe({
  name: 'sherdeadlock:fixed-data-table',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'npm wrapper for https://github.com/facebook/fixed-data-table',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sherdeadlock/fixed-data-table',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'externalify': '0.1.0',
  'fixed-data-table': '0.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['react@0.1.4'], 'client');
  api.use(['cosmos:browserify@0.5.0'], 'client');
  api.addFiles(['fixed-data-table.browserify.options.json', 
               'fixed-data-table.browserify.js'], 'client');

  api.export(['FixedDataTable'], 'client');
});
