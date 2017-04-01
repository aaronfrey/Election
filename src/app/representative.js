"use strict";
var Representative = (function () {
    function Representative(name, title, division, party, address, phones, urls, photoUrl, emails) {
        this.name = name;
        this.title = title;
        this.division = division;
        this.party = party;
        this.address = address;
        this.phones = phones;
        this.urls = urls;
        this.photoUrl = photoUrl;
        this.emails = emails;
    }
    return Representative;
}());
exports.Representative = Representative;
//# sourceMappingURL=representative.js.map