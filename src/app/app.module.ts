import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';
import { Example4Component } from './example4/example4.component';
import { Example5Component } from './example5/example5.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    HomeComponent,
    PageNotFoundComponent 
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
