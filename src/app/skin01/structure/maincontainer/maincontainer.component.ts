import { Component, OnInit } from '@angular/core';
import { DesktopComponent } from '../../views/desktop/desktop.component';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  desktop;
  constructor() {
    this.desktop = new DesktopComponent();
  }

  ngOnInit() {
    /*********************************************
    Initialize Desktop with chosen home component
    **********************************************/
    const menuData = {
      title: 'Home',
      href: '#',
      icon: 'fa fa-home',
      id: 'm0',
      module: 'user', controller: 'user', action: 'action1',
      d: {
        title: 'Home',
        subTitle: 'user setting',
        breadcrumb: ['Home'],
        component: 'dashboard',
        docType: 'Multiple1'
      },
      children: []
    };
    this.desktop.load(menuData);
  }

}
