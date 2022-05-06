import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FormComponent } from './components/form-component/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//Modules
import { AppRoutingModule } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
