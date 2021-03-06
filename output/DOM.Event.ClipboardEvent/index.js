// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM_Event_Types = require("../DOM.Event.Types");
var DOM_HTML_Event_DataTransfer = require("../DOM.HTML.Event.DataTransfer");
var Data_Foreign = require("../Data.Foreign");
var Prelude = require("../Prelude");
var eventToClipboardEvent = function ($0) {
    return DOM_Event_Types.readClipboardEvent(Data_Foreign.toForeign($0));
};
module.exports = {
    eventToClipboardEvent: eventToClipboardEvent,
    clipboardData: $foreign.clipboardData
};
