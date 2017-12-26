import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';

import { DraftService } from './services/draft.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DraftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
