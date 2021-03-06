// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_HTML_HTMLMediaElement_CanPlayType = require("../DOM.HTML.HTMLMediaElement.CanPlayType");
var DOM_HTML_HTMLMediaElement_NetworkState = require("../DOM.HTML.HTMLMediaElement.NetworkState");
var DOM_HTML_HTMLMediaElement_ReadyState = require("../DOM.HTML.HTMLMediaElement.ReadyState");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Data_Enum = require("../Data.Enum");
var Data_Functor = require("../Data.Functor");
var Data_JSDate = require("../Data.JSDate");
var Data_Maybe = require("../Data.Maybe");
var Prelude = require("../Prelude");
var readyState = function (dictPartial) {
    return function ($2) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(function ($3) {
            return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(DOM_HTML_HTMLMediaElement_ReadyState.boundedEnumReadyState)($3));
        })($foreign.readyStateIndex($2));
    };
};
var networkState = function (dictPartial) {
    return function ($4) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(function ($5) {
            return Data_Maybe.fromJust(dictPartial)(Data_Enum.toEnum(DOM_HTML_HTMLMediaElement_NetworkState.boundedEnumNetworkState)($5));
        })($foreign.readyStateIndex($4));
    };
};
module.exports = {
    networkState: networkState,
    readyState: readyState,
    src: $foreign.src,
    setSrc: $foreign.setSrc,
    currentSrc: $foreign.currentSrc,
    crossOrigin: $foreign.crossOrigin,
    setCrossOrigin: $foreign.setCrossOrigin,
    networkStateIndex: $foreign.networkStateIndex,
    preload: $foreign.preload,
    setPreload: $foreign.setPreload,
    load: $foreign.load,
    canPlayType: $foreign.canPlayType,
    readyStateIndex: $foreign.readyStateIndex,
    seeking: $foreign.seeking,
    currentTime: $foreign.currentTime,
    setCurrentTime: $foreign.setCurrentTime,
    duration: $foreign.duration,
    getStartDate: $foreign.getStartDate,
    paused: $foreign.paused,
    defaultPlaybackRate: $foreign.defaultPlaybackRate,
    setDefaultPlaybackRate: $foreign.setDefaultPlaybackRate,
    playbackRate: $foreign.playbackRate,
    setPlaybackRate: $foreign.setPlaybackRate,
    ended: $foreign.ended,
    autoplay: $foreign.autoplay,
    setAutoplay: $foreign.setAutoplay,
    loop: $foreign.loop,
    setLoop: $foreign.setLoop,
    play: $foreign.play,
    pause: $foreign.pause,
    mediaGroup: $foreign.mediaGroup,
    setMediaGroup: $foreign.setMediaGroup,
    controls: $foreign.controls,
    setControls: $foreign.setControls,
    volume: $foreign.volume,
    setVolume: $foreign.setVolume,
    muted: $foreign.muted,
    setMuted: $foreign.setMuted,
    defaultMuted: $foreign.defaultMuted,
    setDefaultMuted: $foreign.setDefaultMuted
};
