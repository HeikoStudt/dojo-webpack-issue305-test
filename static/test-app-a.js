// this is a minimal javascript file with minimal dependencies only to load the plugin into the debugger
// we have tried to use AMD require() in our "real" application A as well

let xhr = new XMLHttpRequest();
xhr.onload = function () {
  eval(this.responseText)

  // x = f (userConfig, defaultConfig, global, window) => this is the module dojo.js
  var x = MyLibrary 

  if (x === undefined) {
    window.alert("did not get any module from webpack (e.g. if libraryExport: 'default' is set, but in the module is no default export class - like in dojo.js)")
  } else {

    // default class
    //   -> x.default is the exported class
    // otherwise
    //   -> x.Plugin, as the class is exported by name
    // if default class AND libraryExport: "default" in webpack.config set
    //   -> x, because we like magic
    var y = x.default || x.Plugin || x 

    if (y === undefined) {
      window.alert("did not get any module from webpack (strange; plugin.js might have errors)")
    } else if (y.getUrlMap === undefined) {
      window.alert("did not get class Plugin (or getUrlMap is not static)");
    } else if (!y.getUrlMap()) {
      window.alert("probably works, but getUrlMap() returnd false, 0, null or undefined - whatever");
    } else {
      window.alert("works");
    }
  }
};
xhr.open("GET", "plugin.bundle.js", true);
xhr.send();
