import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InnovateComponent } from './home/innovate-sec/innovate/innovate.component';
import { InnovateSecComponent } from './home/innovate-sec/innovate-sec.component';
import { ArchitectureSecComponent } from './home/architecture-sec/architecture-sec.component';
import { WorksComponent } from './home/works/works.component';
import { WorkComponent } from './home/works/work/work.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faGooglePlus, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    InnovateComponent,
    InnovateSecComponent,
    ArchitectureSecComponent,
    WorksComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebook, faTwitter, faGooglePlus, faLinkedin, faInstagram);
  }
}
