import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ListDataService } from './list-data.service';

@NgModule({
  bootstrap:    [ AppComponent ],
  imports:      [ BrowserModule, CommonModule, FormsModule, AppRoutingModule ],
  providers:    [ListDataService],
  declarations: [
    AppComponent,
    SampleComponent,
    ListComponent,
    ItemComponent,
  ],
})
export class AppModule { }
