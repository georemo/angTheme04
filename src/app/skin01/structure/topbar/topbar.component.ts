import { Component, OnInit } from '@angular/core';
// import { AppStateService } from '../../../services/app-state.service';
import { SessService } from '../../../services/sess.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    // private appState: AppStateService, /* injecting access to appState. Dectates layout modes eg login, anon, private */
    private sess: SessService
  ) {

  }

  ngOnInit() {
  }

  logout() {
    console.log('logout clicked');
    this.sess.logout();
  }

}
