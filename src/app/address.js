"use strict";
var Address = (function () {
    function Address(name, line1, line2, line3, city, state, zip) {
        this.name = name;
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=address.js.map