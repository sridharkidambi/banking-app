import {  SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteComponent } from './favourite/favourite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ChartsModule } from 'ng2-charts';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgMarqueeModule } from 'ng-marquee';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './src/app/contact-form/contact-form.component';
import { SignupFormComponent } from './src/app/signup-form/signup-form.component';


// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SummaryPipe,
    // CoursesService,
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent
    // NgbModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    SelectDropDownModule,
    HttpClientModule,
    NgMarqueeModule,
    ReactiveFormsModule

  ],
  providers: [
    CoursesService,
    DatePipe
  ],

  bootstrap: [AppComponent,CoursesComponent]
})
export class AppModule { }
