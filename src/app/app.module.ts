import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopbarComponent } from './skin01/structure/topbar/topbar.component';
import { SidebarComponent } from './skin01/structure/sidebar/sidebar.component';
import { PagesliderightComponent } from './skin01/structure/pageslideright/pageslideright.component';
import { PageslideleftComponent } from './skin01/structure/pageslideleft/pageslideleft.component';
import { MaincontainerComponent } from './skin01/structure/maincontainer/maincontainer.component';
import { SlidingbarComponent } from './skin01/structure/slidingbar/slidingbar.component';
import { FooterComponent } from './skin01/structure/footer/footer.component';
import { SubviewsComponent } from './skin01/structure/subviews/subviews.component';
import { DesktopComponent } from './skin01/views/desktop/desktop.component';
import { SocialComponent } from './skin01/views/social/social.component';
import { BlogComponent } from './skin01/views/blog/blog.component';
import { MessagesComponent } from './skin01/views/messages/messages.component';
import { TableComponent } from './skin01/views/table/table.component';
import { FormComponent } from './skin01/views/form/form.component';
import { ChartComponent } from './skin01/views/chart/chart.component';
import { GeoComponent } from './skin01/views/geo/geo.component';
import { SmsComponent } from './skin01/views/sms/sms.component';
import { EmailComponent } from './skin01/views/email/email.component';
import { UssdServiceComponent } from './skin01/views/ussd-service/ussd-service.component';
import { CompanyDocComponent } from './skin01/views/company-doc/company-doc.component';
import { UserProfileComponent } from './skin01/views/user-profile/user-profile.component';
import { GalleryComponent } from './skin01/views/gallery/gallery.component';
import { TimeLineComponent } from './skin01/views/time-line/time-line.component';
import { CalendarComponent } from './skin01/views/calendar/calendar.component';
import { UiElementsComponent } from './skin01/views/sdk/ui-elements/ui-elements.component';
import { UiButtonsComponent } from './skin01/views/sdk/ui-buttons/ui-buttons.component';
import { UiIconsComponent } from './skin01/views/sdk/ui-icons/ui-icons.component';
import { UiAnimationComponent } from './skin01/views/sdk/ui-animation/ui-animation.component';
import { ExtModalsComponent } from './skin01/views/sdk/ext-modals/ext-modals.component';
import { UiTabsAccordionsComponent } from './skin01/views/sdk/ui-tabs-accordions/ui-tabs-accordions.component';
import { UiPanelsComponent } from './skin01/views/sdk/ui-panels/ui-panels.component';
import { UiNotificationsComponent } from './skin01/views/sdk/ui-notifications/ui-notifications.component';
import { UiSubviewsComponent } from './skin01/views/sdk/ui-subviews/ui-subviews.component';
import { UiSlidersComponent } from './skin01/views/sdk/ui-sliders/ui-sliders.component';
import { UiTreeComponent } from './skin01/views/sdk/ui-tree/ui-tree.component';
import { UiNestableListComponent } from './skin01/views/sdk/ui-nestable-list/ui-nestable-list.component';
import { UiTypographyComponent } from './skin01/views/sdk/ui-typography/ui-typography.component';
import { Dashboard1Component } from './skin01/views/dashboard1/dashboard1.component';
import { LoginComponent } from './skin01/views/login/login.component';


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
    SubviewsComponent,
    DesktopComponent,
    SocialComponent,
    BlogComponent,
    MessagesComponent,
    TableComponent,
    FormComponent,
    ChartComponent,
    GeoComponent,
    SmsComponent,
    EmailComponent,
    UssdServiceComponent,
    CompanyDocComponent,
    UserProfileComponent,
    GalleryComponent,
    TimeLineComponent,
    CalendarComponent,
    UiElementsComponent,
    UiButtonsComponent,
    UiIconsComponent,
    UiAnimationComponent,
    ExtModalsComponent,
    UiTabsAccordionsComponent,
    UiPanelsComponent,
    UiNotificationsComponent,
    UiSubviewsComponent,
    UiSlidersComponent,
    UiTreeComponent,
    UiNestableListComponent,
    UiTypographyComponent,
    Dashboard1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
