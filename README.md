#mtomm:kml-to-geojson

```
$ meteor add mtomm:kml-to-geojson
```

## Usage
Put your kml file in the projects public folder and call KmlToGeojson.parse(filename) on the server.

###Example

```bash
/home/guestuser/meteor_project_root $ ls -la public
-rw-rw-r--  1 guestuser guestuser   4201 apr   10 01:10 map.kml
```

```javascript
Meteor.methods({  
  parseKml: function(location) {
    return KmlToGeojson.parse(location);
  }
});
```

```javascript
Template.layout.onRendered(function() {
  Meteor.call('parseKml', 'map.kml', function(err, res) {
    if(!err) {
      console.log('got kml: ', res);
    }
  });
});
```