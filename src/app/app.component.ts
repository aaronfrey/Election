import { Component } from '@angular/core';

import {RepresentativeSearchService} from './representative.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [RepresentativeSearchService]
})
export class AppComponent  {}
