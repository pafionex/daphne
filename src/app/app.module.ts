import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';
import { ArticleComponent } from './sections/article/article.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WidgetComponent } from './footer/widget/widget.component';
import { SocialsComponent } from './header/socials/socials.component';
import { NavComponent } from './header/nav/nav.component';
import { NavUtilsComponent } from './header/nav-utils/nav-utils.component';
import { BannerComponent } from './sections/banner/banner.component';
import { MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TeamComponent } from './sections/team/team.component';
import { ContactFormComponent } from './sections/contact-form/contact-form.component';


library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faGooglePlus);
library.add(faPhone);
library.add(faMapMarkerAlt);
library.add(faSearch);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    WidgetComponent,
    SocialsComponent,
    NavComponent,
    NavUtilsComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TeamComponent,
    BannerComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    MatExpansionModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
