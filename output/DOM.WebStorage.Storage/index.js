// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_WebStorage_Types = require("../DOM.WebStorage.Types");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var key = function (i) {
    return function ($0) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._key(i)($0));
    };
};
var getItem = function (s) {
    return function ($1) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._getItem(s)($1));
    };
};
module.exports = {
    key: key,
    getItem: getItem,
    length: $foreign.length,
    setItem: $foreign.setItem,
    removeItem: $foreign.removeItem,
    clear: $foreign.clear
};
