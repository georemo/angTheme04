import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  state = {
    mode: 'login'
  };
  constructor() {

  }

  getState() {
    return this.state;
  }

  setMode(mode) {
    return this.state.mode = mode;
  }
}
