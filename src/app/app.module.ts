import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
  
import { appRoutes } from './routerConfig';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { MyserviceService } from './my-service/myservice.service.ts';
import { HttpTutorialPointComponent } from './http-tutorial-point/http-tutorial-point.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ParentViewComponent,
    ChildViewComponent,
    HttpRequestComponent,
    MyServiceComponent,
    HttpTutorialPointComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }