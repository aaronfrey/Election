import { Component } from '@angular/core';

import { Address } from './address';
import { Representative } from './representative';

import {RepresentativeSearchService} from './representative.service';

@Component({
	selector: 'location-form',
	templateUrl: './location-form.component.html'
})
export class LocationFormComponent {

	constructor(private _representativeSearchService:RepresentativeSearchService) {}

  private representatives:Representative[] = [];
  private errorMessage:any = '';

	public address: Address;

	onSubmit(model: Address, isValid: boolean) {
    this._representativeSearchService.getData(model.zip)
      .subscribe(
        representatives => this.representatives = representatives,
        error => this.errorMessage = <any>error);
	}
}
