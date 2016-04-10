KmlToGeojson = {
  parse: function(location) {
    var fs = Npm.require('fs');
    var jsdom = Npm.require('jsdom').jsdom;
    var geojson = Npm.require('geojson.lib');
    
    try {
      var data = jsdom(fs.readFileSync(process.cwd() + '/../web.browser/app/' + location, 'utf8'));
    } catch (err) {
      throw new Meteor.Error(500, 'kml-to-geojson file not found', err);
    }
    
    return geojson.parser.kml(data);
  }
};