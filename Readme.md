# How to reproduce
## Start with old version 2.8.17
    No resemblence of plugin
    rm -r node_modules/dojo-webpack-plugin

    edit package.json
    "dojo-webpack-plugin": "2.8.17",

    npm install

    npm run serve
    open http://localhost:8080/index.html
    --> did not get class Plugin (or getUrlMap is not static)

## Test fix of HeikoStudt
    edit node_modules/dojo-webpack-plugin/lib/DojoLoaderPlugin.js
    according to issue in succeedModule
    var pl = module.dependencies.pop();
    ...
    module.dependencies.push(pl);

    npm run serve
    open http://localhost:8080/index.html
    --> works

## Test 2.8.18-rc1
    edit package.json
    "dojo-webpack-plugin": "2.8.18-rc1",

    npm install

    npm run serve
    open http://localhost:8080/index.html
    --> did not get class Plugin (or getUrlMap is not static)

