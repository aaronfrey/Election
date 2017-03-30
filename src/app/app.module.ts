import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component';
import { LocationFormComponent } from './location-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, LocationFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
