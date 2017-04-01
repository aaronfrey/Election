import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }   	from '@angular/forms';
import { HttpModule } 		from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component';
import { LocationFormComponent } from './location-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, HeaderComponent, LocationFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
