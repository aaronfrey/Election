"use strict";
var Representative = (function () {
    function Representative(id, name, address, party, phones, urls, photoUrl, emails) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.party = party;
        this.phones = phones;
        this.urls = urls;
        this.photoUrl = photoUrl;
        this.emails = emails;
    }
    return Representative;
}());
exports.Representative = Representative;
//# sourceMappingURL=representative.js.map