import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuController } from './menucontroller';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menucontroller;
  list;
  constructor() {
    this.menucontroller = new MenuController();
    this.list = this.menucontroller.menudata;
  }

  ngOnInit() {
  }

  sayHello(){
    console.log("Hellow");
  }
}
