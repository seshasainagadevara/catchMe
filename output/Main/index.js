"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Random = require("../Control.Monad.Eff.Random");
var Control_Plus = require("../Control.Plus");
var DOM = require("../DOM");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_Lens = require("../Data.Lens");
var Data_Lens_Getter = require("../Data.Lens.Getter");
var Data_Maybe = require("../Data.Maybe");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_Unit = require("../Data.Unit");
var FRP = require("../FRP");
var FRP_Behavior = require("../FRP.Behavior");
var FRP_Behavior_Keyboard = require("../FRP.Behavior.Keyboard");
var FRP_Event = require("../FRP.Event");
var FRP_Event_Keyboard = require("../FRP.Event.Keyboard");
var FRP_Event_Time = require("../FRP.Event.Time");
var Prelude = require("../Prelude");
var PrestoDOM_Core = require("../PrestoDOM.Core");
var PrestoDOM_Elements = require("../PrestoDOM.Elements");
var PrestoDOM_Events = require("../PrestoDOM.Events");
var PrestoDOM_Properties = require("../PrestoDOM.Properties");
var PrestoDOM_Types = require("../PrestoDOM.Types");
var PrestoDOM_Types_DomAttributes = require("../PrestoDOM.Types.DomAttributes");
var PrestoDOM_Util = require("../PrestoDOM.Util");
var view = function (action) {
    return function (state) {
        return PrestoDOM_Elements.relativeLayout([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.background("#323232"), PrestoDOM_Properties.name("rootNode") ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.width(PrestoDOM_Types_DomAttributes.Match_Parent.value), PrestoDOM_Properties.imageUrl("back") ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(170)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(170)), PrestoDOM_Properties.name("name"), PrestoDOM_Events.onClick(action.clicked) ])([ PrestoDOM_Elements.imageView([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(165)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(165)), PrestoDOM_Properties.imageUrl("smil"), PrestoDOM_Properties.margin(Data_Show.show(Data_Show.showInt)(state.left) + ("," + (Data_Show.show(Data_Show.showInt)(state.top) + (Data_Show.show(Data_Show.showInt)(state.right) + ("," + Data_Show.show(Data_Show.showInt)(state.bottom)))))) ]) ]), PrestoDOM_Elements.linearLayout([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(200)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(500)) ])([ PrestoDOM_Elements.textView([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(100)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(300)), PrestoDOM_Properties.text("time:" + Data_Show.show(Data_Show.showInt)(state.time)), PrestoDOM_Properties.color("#ffffff"), PrestoDOM_Properties.textSize("50") ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(100)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(400)), PrestoDOM_Properties.text("TimeOut:" + "40"), PrestoDOM_Properties.color("#ffffff"), PrestoDOM_Properties.textSize("50") ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(100)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(400)), PrestoDOM_Properties.text("Status:" + state.text), PrestoDOM_Properties.color("#ffffff"), PrestoDOM_Properties.textSize("50") ]), PrestoDOM_Elements.textView([ PrestoDOM_Properties.height(new PrestoDOM_Types_DomAttributes.V(100)), PrestoDOM_Properties.width(new PrestoDOM_Types_DomAttributes.V(400)), PrestoDOM_Properties.text("Score:" + Data_Show.show(Data_Show.showInt)(state.score)), PrestoDOM_Properties.color("#ffffff"), PrestoDOM_Properties.textSize("50") ]) ]) ]);
    };
};
var main = (function () {
    var validate = function (stop) {
        return function (val) {
            return function (prevState) {
                var $6 = stop && val === 1;
                if ($6) {
                    var $7 = {};
                    for (var $8 in prevState) {
                        if ({}.hasOwnProperty.call(prevState, $8)) {
                            $7[$8] = prevState[$8];
                        };
                    };
                    $7.left = 2;
                    $7.top = 0;
                    $7.right = 0;
                    $7.bottom = 0;
                    $7.time = prevState.time;
                    $7.text = "gotcha !!";
                    $7.score = prevState.score + 1 | 0;
                    return $7;
                };
                var $10 = prevState.time !== 40 && prevState.left !== 0;
                if ($10) {
                    var left = $foreign.getRand(0)(1200);
                    var top = $foreign.getRand(3)(70);
                    var right = $foreign.getRand(0)(1);
                    var bottom = $foreign.getRand(0)(1);
                    var $11 = {};
                    for (var $12 in prevState) {
                        if ({}.hasOwnProperty.call(prevState, $12)) {
                            $11[$12] = prevState[$12];
                        };
                    };
                    $11.left = left;
                    $11.top = top;
                    $11.right = right;
                    $11.bottom = bottom;
                    $11.time = prevState.time + 1 | 0;
                    $11.text = "Catch Me!";
                    return $11;
                };
                var $14 = prevState.score > 0;
                if ($14) {
                    var $15 = {};
                    for (var $16 in prevState) {
                        if ({}.hasOwnProperty.call(prevState, $16)) {
                            $15[$16] = prevState[$16];
                        };
                    };
                    $15.left = 0;
                    $15.top = 0;
                    $15.right = 0;
                    $15.bottom = 0;
                    $15.time = 0;
                    $15.text = "Another trail? reload";
                    return $15;
                };
                var $18 = {};
                for (var $19 in prevState) {
                    if ({}.hasOwnProperty.call(prevState, $19)) {
                        $18[$19] = prevState[$19];
                    };
                };
                $18.left = 0;
                $18.top = 0;
                $18.right = 0;
                $18.bottom = 0;
                $18.time = 0;
                $18.text = "Haha! You can't catch Me!";
                return $18;
            };
        };
    };
    var initialState = {
        left: 1,
        top: 10,
        right: 0,
        bottom: 0,
        time: 1,
        text: " Catch Me ",
        score: 0
    };
    return function __do() {
        var v = PrestoDOM_Core.mkDyn(PrestoDOM_Core.boolDyn)(false)();
        var v1 = PrestoDOM_Util.render(view({
            clicked: v
        }))(initialState)();
        Control_Apply.applySecond(Control_Monad_Eff.applyEff)(v1.updateState(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate(true)(1))(v1.stateBeh))(Control_Apply.applySecond(FRP_Event.applyEvent)(Data_Lens_Getter.viewOn(v)(PrestoDOM_Core.ev))(Control_Applicative.pure(FRP_Event.applicativeEvent)(Data_Unit.unit))))(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
        return Control_Apply.applySecond(Control_Monad_Eff.applyEff)(v1.updateState(Data_Functor.map(FRP_Behavior.functorABehavior(FRP_Event.functorEvent))(validate(false)(0))(v1.stateBeh))(Control_Apply.applySecond(FRP_Event.applyEvent)(FRP_Event_Time.interval(940))(Control_Applicative.pure(FRP_Event.applicativeEvent)(Data_Unit.unit))))(Control_Applicative.pure(Control_Monad_Eff.applicativeEff)(Data_Unit.unit))();
    };
})();
module.exports = {
    main: main,
    view: view,
    getRand: $foreign.getRand
};
