Package.describe({
  name: 'mtomm:kml-to-geojson',
  version: '0.0.1',
  summary: 'A wrapper for geojson.lib to parse kml files stored in public dir',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.export('KmlToGeojson', 'server');
  api.addFiles('kml-to-geojson.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mtomm:kml-to-geojson');
  api.addFiles('kml-to-geojson-tests.js');
});


Npm.depends({
  "jsdom": "3.1.2",
  'geojson.lib': '0.0.9'
});