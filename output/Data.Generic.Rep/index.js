// Generated by purs version 0.11.7
"use strict";
var Data_Maybe = require("../Data.Maybe");
var Inl = (function () {
    function Inl(value0) {
        this.value0 = value0;
    };
    Inl.create = function (value0) {
        return new Inl(value0);
    };
    return Inl;
})();
var Inr = (function () {
    function Inr(value0) {
        this.value0 = value0;
    };
    Inr.create = function (value0) {
        return new Inr(value0);
    };
    return Inr;
})();
var Rec = function (x) {
    return x;
};
var Product = (function () {
    function Product(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Product.create = function (value0) {
        return function (value1) {
            return new Product(value0, value1);
        };
    };
    return Product;
})();
var NoArguments = (function () {
    function NoArguments() {

    };
    NoArguments.value = new NoArguments();
    return NoArguments;
})();
var Field = function (x) {
    return x;
};
var Constructor = function (x) {
    return x;
};
var Argument = function (x) {
    return x;
};
var Generic = function (from, to) {
    this.from = from;
    this.to = to;
};
var to = function (dict) {
    return dict.to;
};
var genericMaybe = new Generic(function (v) {
    if (v instanceof Data_Maybe.Nothing) {
        return new Inl(NoArguments.value);
    };
    if (v instanceof Data_Maybe.Just) {
        return new Inr(v.value0);
    };
    throw new Error("Failed pattern match at Data.Generic.Rep line 49, column 1 - line 51, column 63: " + [ v.constructor.name ]);
}, function (v) {
    if (v instanceof Inl) {
        return Data_Maybe.Nothing.value;
    };
    if (v instanceof Inr) {
        return new Data_Maybe.Just(v.value0);
    };
    throw new Error("Failed pattern match at Data.Generic.Rep line 49, column 1 - line 51, column 63: " + [ v.constructor.name ]);
});
var from = function (dict) {
    return dict.from;
};
module.exports = {
    Generic: Generic,
    to: to,
    from: from,
    NoArguments: NoArguments,
    Inl: Inl,
    Inr: Inr,
    Product: Product,
    Constructor: Constructor,
    Argument: Argument,
    Rec: Rec,
    Field: Field,
    genericMaybe: genericMaybe
};
