import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';
import { PageLoadmoreComponent } from './page-loadmore/page-loadmore.component';
import { PagePaginateComponent } from './page-paginate/page-paginate.component';
import { PageScrollComponent } from './page-scroll/page-scroll.component';
import { SecondShadowComponent } from './second-shadow/second-shadow.component';
import { ThirdShadowComponent } from './third-shadow/third-shadow.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageFullComponent } from './page-full/page-full.component';
@NgModule({
  declarations: [
    AppComponent,
    SecondShadowComponent,
    ThirdShadowComponent,
    PageBComponent,
    PageCComponent,
    PageAComponent,
    PageScrollComponent,
    PageLoadmoreComponent,
    NextpageComponent,
    PagePaginateComponent,
    PageFullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    NgxPaginationModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
