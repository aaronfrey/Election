import { Component } from '@angular/core';

import {RepresentativeSearchService} from './representative.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['css/app.component.css'],
  providers: [RepresentativeSearchService]
})
export class AppComponent  {}
