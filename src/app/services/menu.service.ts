import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuData = [];
  constructor(
  ) { }

  /*
  invoked following svUser::getUserData() when all menu items are fetched
  */
  init(res) {
    this.setMenuData(res['data']['menu_data']);
  }

  setMenuData(menuData){
    this.menuData = menuData;
  }
}
