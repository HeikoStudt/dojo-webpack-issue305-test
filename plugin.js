// because we need the dojo imports (including guiWidgetElement having more imports like dijit),
// we need to use dojo-webpack-plugin to bundle all of that.
// we will look into optimizations later on.

// I changed the Plugin to be an exported class - it was a dojo class before; 
// however, this is not the problem - it did not work as a dojo class as well.

//import "dojo/io-query";
//import "dojox/rpc/JsonRPC";
//import "app-b/guiWidgetElement";
//import "dojo/i18n!app-b/nls/app-b-i18n.js";

export default class Plugin {

	//Here are several (static) methods. Please do hesistate to condemn this, as this is for the moment legacy
	static getUrlMap() {
		var dataSourceNameToCode = new Object();

		dataSourceNameToCode["gui_treeSelector"] = {
			urlPrefix: "/app-b/svc/data",
			//label: i18n.treeSelectorLabel,  // to show, we are using dojo i18n
		};

		return dataSourceNameToCode;
	}
}

