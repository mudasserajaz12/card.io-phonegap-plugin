/**
 * CardIOPGPlugin.js
 * card.io phonegap plugin
 * @Copyright 2013 Cubet Technologies http://www.cubettechnologies.com
 * @author Robin <robin@cubettech.com>
 * @Since 28 June, 2013
 */

//Your response array contain these fields
// redacted_card_number, card_number, expiry_month,expiry_year, cvv, zip

//set your configurations here
var cardIOConfig = {
	'apiKey': 'NOTSET',
	'expiry': false,
	'cvv': false,
	'zip': false,
    'confirm': true,
    'showLogo': true,
    'suppressManual': true
};


var CardIOPlugin = function() {};
  
CardIOPlugin.prototype.setKey = function(key) {
    cardIOConfig.apiKey = key;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.requireExpiry = function(b) {
    cardIOConfig.expiry = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.requireCVV = function(b) {
    cardIOConfig.cvv = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.requireZip = function(b) {
    cardIOConfig.zip = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.requireConfirmation = function(b) {
    cardIOConfig.confirm = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.showLogo = function(b) {
    cardIOConfig.showLogo = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.suppressManual = function(b) {
    cardIOConfig.showLogo = b;
    console.log(cardIOConfig);
};

CardIOPlugin.prototype.scan = function(success, fail) {
    return cordova.exec(function(args) {
    	console.log("card.io scanning completed", args);
        success(args.card_number && args || args[0]);
    }, function(args) {
    	console.log("card.io scanning Failed");
        fail(args);
    }, "CardIOPlugin", "execute", [cardIOConfig]);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.CardIOPlugin) {
    window.plugins.CardIOPlugin = new CardIOPlugin();
}


//EOF
