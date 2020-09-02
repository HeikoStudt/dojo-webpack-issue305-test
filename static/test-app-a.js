// this is a minimal javascript file with minimal dependencies only to load the plugin into the debugger
// we have tried to use AMD require() in our "real" application A as well

let xhr = new XMLHttpRequest();
xhr.onload = function () {
    eval(this.responseText)
    var x = MyLibrary // x = f (userConfig, defaultConfig, global, window) => this is the module dojo.js
    window.alert(x);
};
xhr.open("GET", "plugin.bundle.js", true);
xhr.send();
