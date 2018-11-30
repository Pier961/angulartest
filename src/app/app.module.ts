import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { ChangeColorComponent } from './change-color/change-color.component';




@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DescriptionComponent,
    ChangeColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
