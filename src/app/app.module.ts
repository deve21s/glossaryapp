import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterComponent } from './letter/letter.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';
import { AddgComponent } from './addg/addg.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { EditpComponent } from './editp/editp.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuillModule } from 'ngx-quill-wrapper';
import { QUILL_CONFIG } from 'ngx-quill-wrapper';
import { QuillConfigInterface } from 'ngx-quill-wrapper';

const DEFAULT_QUILL_CONFIG: QuillConfigInterface = {
  theme: 'snow',
  modules: {
    toolbar: true,
  },
  placeholder: 'Enter Details',
};

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    DetailsComponent,
    AdminComponent,
    AddgComponent,
    LoginComponent,
    EditpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    QuillModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: QUILL_CONFIG,
      useValue: DEFAULT_QUILL_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
