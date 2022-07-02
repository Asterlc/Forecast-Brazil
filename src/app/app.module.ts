import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';

import { FormComponent } from './components/form-component/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//Modules
import { AppRoutingModule } from './app.routes';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
