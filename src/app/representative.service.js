"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var RepresentativeSearchService = (function () {
    function RepresentativeSearchService(http) {
        this.http = http;
        this.apiKey = 'AIzaSyC-801rMzPAEUoU7N-uC1Q3xIRC1oWBp0U';
    }
    RepresentativeSearchService.prototype.getData = function (zip) {
        return this.http.get("https://www.googleapis.com/civicinfo/v2/representatives?key=" + this.apiKey + "&address=" + zip)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RepresentativeSearchService.prototype.extractData = function (res) {
        var body = res.json();
        for (var _i = 0, _a = body.offices; _i < _a.length; _i++) {
            var office = _a[_i];
            if (office.officialIndices.length) {
                for (var _b = 0, _c = office.officialIndices; _b < _c.length; _b++) {
                    var officialIndex = _c[_b];
                    body.officials[officialIndex].title = office.name;
                    body.officials[officialIndex].division = body.divisions[office.divisionId].name;
                }
            }
        }
        return body.officials || [];
    };
    RepresentativeSearchService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    RepresentativeSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RepresentativeSearchService);
    return RepresentativeSearchService;
}());
exports.RepresentativeSearchService = RepresentativeSearchService;
//# sourceMappingURL=representative.service.js.map