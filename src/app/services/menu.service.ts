import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuitems = [];
  constructor(
  ) { }

  /*
  invoked following getUserData() when all menu items are fetched
  */
  init(res) {
    this.menuitems = res['data']['menu_data'];
  }

  // /*
  // invoked everytime a menu item is clicked
  // - menu data has menu_cmd field. 
  // - menu_cmd contains the request command for setting up the data for menu item
  // */
  // cmd(cmd) {
  //   console.log('menuCmd>>');
  //   console.log(cmd);
  //   const jCmd = JSON.parse(cmd);
  //   const token = this.svSess.getCdToken();
  //   jCmd['dat']['token'] = token;
  //   /*
  //   post login request to server
  //   */
  //   this.svServer.proc(jCmd).subscribe((res) => {
  //     console.log(res);
  //   });
  // }


}
