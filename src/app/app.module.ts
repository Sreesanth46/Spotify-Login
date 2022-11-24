import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGridComponent } from './test-grid/test-grid.component';
import { LoginComponent } from './login/login.component';
import { Testgrid2Component } from './testgrid2/testgrid2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestGridComponent,
    LoginComponent,
    Testgrid2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
