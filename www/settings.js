var exec = require("cordova/exec");

function NativeSettings() {
}

NativeSettings.prototype.open = function(onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", "open", []);
};

NativeSettings.prototype.openSetting = function(settingName, onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", settingName, []);
};

var NativeSettings = new NativeSettings();
module.exports = NativeSettings;

if(!window.plugins) window.plugins = {};
window.plugins.NativeSettings = new NativeSettings;

//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.NativeSettings = new NativeSettings;
});

