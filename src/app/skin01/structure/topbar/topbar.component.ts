import { Component, OnInit } from '@angular/core';
// import { AppStateService } from '../../../services/app-state.service';
import { SessService } from '../../../services/sess.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  userData;
  userName;
  avatarLg;
  avatarSm;

  constructor(
    // private appState: AppStateService, /* injecting access to appState. Dectates layout modes eg login, anon, private */
    private sess: SessService,
    private svUser: UserService
  ) {
    this.init();
  }

  init() {
    this.userData = this.svUser.userData;
    this.userName = this.userData[0]['fname'] + ' ' + this.userData[0]['lname'];
    this.setAvatar(this.userData[0]['avatar']);
  }

  setAvatar(strImg) {
    const jImg = JSON.parse(strImg);
    this.avatarLg = jImg['large'];
    this.avatarSm = jImg['small'];
  }

  ngOnInit() {
  }

  logout() {
    console.log('logout clicked');
    this.sess.logout();
  }

}
