import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuController } from './menucontroller';
import { DesktopComponent } from '../../views/desktop/desktop.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menucontroller;
  desktop;
  list;
  constructor() {
    this.menucontroller = new MenuController();
    this.desktop = new DesktopComponent();
    this.list = this.menucontroller.menudata;
  }

  ngOnInit() {
  }

  loadDesktop(menuData) {
    // const d = menuData.d;
    // const htmlString = this.desktop.getPage(d);
    // $('#main-content').html(htmlString);
    this.desktop.load(menuData);
  }

}

