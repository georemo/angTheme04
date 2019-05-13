import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angTheme04';
  public ngOnInit() {
    $(document).ready(function () {
      console.log('...jquery is ready');
    });
  }
}
