import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GettyImagesContainerComponent } from './getty-images-container/getty-images-container.component';
import { HeaderComponent } from './getty-images-container/header/header.component';
import { MainComponent } from './getty-images-container/main/main.component';
import { FooterComponent } from './getty-images-container/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';


const appRoutes: Routes= [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: MainComponent},
  { path:'Editorial', component: ImagesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    GettyImagesContainerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
