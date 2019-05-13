import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopbarComponent } from './skin01/topbar/topbar.component';
import { SidebarComponent } from './skin01/sidebar/sidebar.component';
import { PagesliderightComponent } from './skin01/pageslideright/pageslideright.component';
import { PageslideleftComponent } from './skin01/pageslideleft/pageslideleft.component';
import { MaincontainerComponent } from './skin01/maincontainer/maincontainer.component';
import { SlidingbarComponent } from './skin01/slidingbar/slidingbar.component';
import { FooterComponent } from './skin01/footer/footer.component';
import { SubviewsComponent } from './skin01/subviews/subviews.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    PagesliderightComponent,
    PageslideleftComponent,
    MaincontainerComponent,
    SlidingbarComponent,
    FooterComponent,
    SubviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
