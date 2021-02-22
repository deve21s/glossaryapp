import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { AddgComponent } from './addg/addg.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { EditpComponent } from './editp/editp.component';
import { SearchComponent } from './search/search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    DetailsComponent,
    AdminComponent,
    AddgComponent,
    LoginComponent,
    EditpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    NgAisModule.forRoot(),
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
