// Allows babel to be run using PM2 or Forever.js
require('babel/register')({
  "stage": 0,
  "env": {
    "development": {
      "plugins": ["react-transform"],
      "extra": {
        "react-transform": {
          "transforms": [{
            "transform": "react-transform-hmr",
            "imports": ["react"],
            "locals": ["module"]
          }, {
            "transform": "react-transform-catch-errors",
            "imports": ["react", "redbox-react"]
          }]
        }
      }
    }
  }
});

require('./index.js');
