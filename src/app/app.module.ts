import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InnovateComponent } from './home/innovate-sec/innovate/innovate.component';
import { InnovateSecComponent } from './home/innovate-sec/innovate-sec.component';
import { ArchitectureSecComponent } from './home/architecture-sec/architecture-sec.component';
import { WorksComponent } from './home/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    InnovateComponent,
    InnovateSecComponent,
    ArchitectureSecComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
