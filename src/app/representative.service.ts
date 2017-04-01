import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';

import { Representative } from './representative';

@Injectable()
export class RepresentativeSearchService {

  constructor(private http: Http) {}

  public apiKey: string = 'AIzaSyC-801rMzPAEUoU7N-uC1Q3xIRC1oWBp0U';

	getData(zip: string):Observable<Representative[]> {
    return this.http.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${this.apiKey}&address=${zip}`)
      .map(this.extractData)
      .catch(this.handleError);
	}

  private extractData(res:Response) {

    let body = res.json();

    console.log(body);

    for (let office of body.offices) {
		  if (office.officialIndices.length) {
		  	for (let officialIndex of office.officialIndices) {
		  		body.officials[officialIndex].title = office.name;
		  		body.officials[officialIndex].division = body.divisions[office.divisionId].name;
		  	}
		  }
		}

    return body.officials || [];
  }

  private handleError(error:any) {
	  let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	  console.error(errMsg);
	  return Observable.throw(errMsg);
  }

}