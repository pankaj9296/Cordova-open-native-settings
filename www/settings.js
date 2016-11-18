var exec = require("cordova/exec");

function NativeSettings() {
}

NativeSettings.prototype.open = function(onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", "open", []);
};

NativeSettings.prototype.openSetting = function(settingName, onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", settingName, []);
};

if(!window.plugins) window.plugins = {};
window.plugins.NativeSettings = new NativeSettings();

console.log('NativeSettings');
