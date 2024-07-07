import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbookDetailsComponent } from './ebook-details/ebook-details.component';
import { EbookDetailFormComponent } from './ebook-details/ebook-detail-form/ebook-detail-form.component';


import { EbookDetailService } from './shared/ebook-detail.service';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    EbookDetailsComponent,
    EbookDetailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right'}),
    RouterModule.forRoot([{ path: '', component: HomeComponent},{ path: 'ebooks', component: EbookDetailsComponent}])
  ],
  providers: [
    EbookDetailService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


