import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatVideoModule } from 'mat-video';
import { MatSidenavModule } from '@angular/material/sidenav';



import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Erro404Component } from './projects/landing-website/components/erro404/erro404.component';
import { AboutComponent } from './projects/landing-website/components/about/about.component';
import { CatalogComponent } from './projects/landing-website/components/catalog/catalog.component';
import { LocationfinderComponent } from './projects/landing-website/components/location-finder/location-finder.component';
import { NewsEventsComponent } from './projects/landing-website/components/news-events/news-events.component';
import { ServicesComponent } from './projects/landing-website/components/services/services.component';
import { SigninComponent } from './projects/user-app/components/signin/signin.component';
import { HomeComponent } from './projects/landing-website/components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavfooterComponent } from './navfooter/navfooter.component';
import { SocialHandlesComponent } from './social-handles/social-handles.component';
import { PlayerComponent } from './media/player/player.component';
import { ProfileComponent } from './media/profile/profile.component';
import { VideoStreamerComponent } from './media/video-streamer/video-streamer.component';
import { SignupComponent } from './projects/user-app/components/signup/signup.component';
import { SigninHomeComponent } from './projects/user-app/components/signin-home/signin-home.component';
import { IsbnhomeComponent } from './projects/isbn/components/home/home.component';

import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    Erro404Component,
    AboutComponent,
    CatalogComponent,
    LocationfinderComponent,
    NewsEventsComponent,
    ServicesComponent,
    SigninComponent,
    HomeComponent,
    NavbarComponent,
    NavfooterComponent,
    SocialHandlesComponent,
    PlayerComponent,
    ProfileComponent,
    VideoStreamerComponent,
    SignupComponent,
    SigninHomeComponent,
    IsbnhomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatVideoModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRadioModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
