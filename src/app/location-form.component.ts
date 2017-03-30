import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'location-form',
  templateUrl: './location-form.component.html'
})
export class LocationFormComponent {
  submitted = false;
  onSubmit(zipcode: string) {
  	this.submitted = true;
  }
}
