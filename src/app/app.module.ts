import { AuthGuard } from './guards/auth.guard';
import { HttpInterceptor } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AngularEpubViewerModule } from 'angular-epub-viewer';

import { AppComponent } from './app.component';
import { HomeComponent } from './digi-lib/components/home.component';
import { SigninComponent } from './digi-lib/components/signin/signin.component';
import { SignupComponent } from './digi-lib/components/signup/signup.component';
import { SigninHomeComponent } from './digi-lib/components/signin-home/signin-home.component';
import { MyShelfComponent } from './digi-lib/components/my-shelf/my-shelf.component';
import { CourseSelectionComponent } from './digi-lib/components/course-selection/course-selection.component';
import { DigiLibraryComponent } from './digi-lib/components/digi-library/digi-library.component';
import { SettingsComponent } from './digi-lib/components/settings/settings.component';
import { FindMyLibraryComponent } from './digi-lib/components/find-my-library/find-my-library.component';
import { BranchesComponent } from './digi-lib/components/find-my-library/branches/branches.component';
import { SuggestedComponent } from './digi-lib/components/suggested/suggested.component';
import { HelpAndFeedbackComponent } from './digi-lib/components/help-and-feedback/help-and-feedback.component';
import { ChangePasswordComponent } from './digi-lib/components/change-password/change-password.component';
import { MapViewerComponent } from './digi-lib/components/find-my-library/map-viewer/map-viewer.component';
import { WebHomeComponent } from './landing-website/components/web-home.component';
import { FirstPageComponent } from './landing-website/components/home/home.component';
import { AboutComponent } from './landing-website/components/about/about.component';
import { CatalogComponent } from './landing-website/components/catalog/catalog.component';
import { LocationfinderComponent } from './landing-website/components/location-finder/location-finder.component';
import { NewsEventsComponent } from './landing-website/components/news-events/news-events.component';
import { ServicesComponent } from './landing-website/components/services/services.component';
import { BookingFacilitiesComponent } from './landing-website/components/booking-facilities/booking-facilities.component';
import { Erro404Component } from './landing-website/components/erro404/erro404.component';
import { VideoPlayerComponent } from './digi-lib/components/digi-library/video-player/video-player.component';
import { EpubReaderComponent } from './digi-lib/components/digi-library/epup-reader/epub-reader.component';
import { ContentViewComponent } from './digi-lib/components/content-view/content-view.component';
import { EbookDetailComponent } from './digi-lib/components/ebook-detail/ebook-detail.component';
import { ReaderComponent } from './digi-lib/components/ebook-detail/reader/reader.component';
import { AudiobookDetailComponent } from './digi-lib/components/audiobook-detail/audiobook-detail.component';
import { VideoDetailComponent } from './digi-lib/components/video-detail/video-detail.component';
import { CommonModule } from '@angular/common';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SigninGuard } from './guards/signin.guard';
import { SeeAllComponent } from './digi-lib/components/see-all/see-all.component';
import { ItemComponent } from './digi-lib/components/see-all/item/item.component';

// import { MapViewerComponent } from './routes/user-app/find-my-library/map-viewer/map-viewer.component';




const routes: Route[] = [

  {
    path: 'web-home',
    component: WebHomeComponent,
    children: [
      { path: '', redirectTo: 'web-home', pathMatch: 'full' },
      { path: 'web-home', component: FirstPageComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Catalog', component: CatalogComponent },
      { path: 'LocationFinder', component: LocationfinderComponent },
      { path: 'Newsevents', component: NewsEventsComponent },
      { path: 'Services', component: ServicesComponent },
      { path: 'BookingFacilities', component: BookingFacilitiesComponent },
      { path: '**', component: Erro404Component }

    ]
  },
  { path: 'signin', component: SigninComponent,canActivate:[SigninGuard] },
  { path: 'signup', component: SignupComponent },

  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'discover', pathMatch: 'full' },
      { path: 'discover', component: SigninHomeComponent },
      { path: 'Myshelf', component: MyShelfComponent },
      { path: 'Changepassword', component: ChangePasswordComponent },
      { path: 'Findmylibrary', component: FindMyLibraryComponent },
      { path: 'Help&feedback', component: HelpAndFeedbackComponent },
      { path: 'Suggested', component: SuggestedComponent },
      { path: 'Settings', component: SettingsComponent },
      { path: 'Courseselection', component: CourseSelectionComponent },
      { path: 'DigiLibrary', component: DigiLibraryComponent },
      { path: 'content', component: ContentViewComponent },
      { path: 'Branches', component: BranchesComponent },
      { path: 'Mapviewer', component: MapViewerComponent },
      { path: 'Video', component: VideoPlayerComponent },
      { path: 'Epub', component: EpubReaderComponent },
      { path: 'ebook-details', component: EbookDetailComponent },
      { path: 'audiobook-details', component: AudiobookDetailComponent },
      { path: 'video-details', component: VideoDetailComponent },
      { path: 'reader', component: ReaderComponent },
      { path: 'more', component: SeeAllComponent },
    ]
  },
  { path: '', redirectTo: 'web-home', pathMatch: 'full' },
  { path: '', redirectTo: 'web-home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-unversal' }),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // DeviceDetectorModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCF312eF8mXsWmzXxRxt-VX6HraOAyBXOQ'
    }),
    AngularEpubViewerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ChangePasswordComponent,
    MyShelfComponent,
    FindMyLibraryComponent,
    HelpAndFeedbackComponent,
    SuggestedComponent,
    SettingsComponent,
    CourseSelectionComponent,
    DigiLibraryComponent,
    BranchesComponent,
    MapViewerComponent,
    WebHomeComponent,
    FirstPageComponent,
    AboutComponent,
    CatalogComponent,
    LocationfinderComponent,
    NewsEventsComponent,
    ServicesComponent,
    BookingFacilitiesComponent,
    Erro404Component,
    VideoPlayerComponent,
    EpubReaderComponent,
    ContentViewComponent,
    EbookDetailComponent,
    ReaderComponent,
    AudiobookDetailComponent,
    VideoDetailComponent,
    SigninComponent,
    SignupComponent,
    SigninHomeComponent,
    SeeAllComponent,
    ItemComponent

  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class AppModule { }
