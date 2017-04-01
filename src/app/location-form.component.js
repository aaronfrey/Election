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
var representative_service_1 = require('./representative.service');
var LocationFormComponent = (function () {
    function LocationFormComponent(_representativeSearchService) {
        this._representativeSearchService = _representativeSearchService;
        this.representatives = [];
        this.errorMessage = '';
    }
    LocationFormComponent.prototype.onSubmit = function (model, isValid) {
        var _this = this;
        this._representativeSearchService.getData(model.zip)
            .subscribe(function (representatives) { return _this.representatives = representatives; }, function (error) { return _this.errorMessage = error; });
    };
    LocationFormComponent = __decorate([
        core_1.Component({
            selector: 'location-form',
            templateUrl: './location-form.component.html'
        }), 
        __metadata('design:paramtypes', [representative_service_1.RepresentativeSearchService])
    ], LocationFormComponent);
    return LocationFormComponent;
}());
exports.LocationFormComponent = LocationFormComponent;
//# sourceMappingURL=location-form.component.js.map