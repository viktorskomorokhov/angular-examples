import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClassExampleComponent } from './components/ng-class-example/ng-class-example.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgStyleExampleComponent } from "./components/ng-style-example/ng-style-example.component";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NgClassExampleComponent,
    NgStyleExampleComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
