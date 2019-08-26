import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { SafeHtmlPipe } from '../../../safe-html.pipe';
// import { DesktopComponent } from '../../views/desktop/desktop.component';
import { DesktopService } from '../../views/desktop/desktop.service';
import { getComponent } from '@angular/core/src/linker/component_factory_resolver';




@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  // template: `<span #element [innerHTML] = "htmlSnippet | safeHtml: 'html'"></span>
  //           <h1 (click) = "appendHTMLSnippetToDOM()" data-heading="Run the script again">Run the script again</h1>`,
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  dataHtml;
  htmlSnippet = '<script>console.log("Hi !, I am script and I bypassed angular security", "", "success")</script>';
  htmlSelector = '<app-dashboard1></app-dashboard1>';
  @ViewChild('element') public viewElement: ElementRef;
  public element: any;

  constructor(
    private svDesktop: DesktopService,
    public renderer: Renderer2
  ) {
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
        component: 'svDashboard',
        docType: 'Multiple1'
      },
      children: []
    };
    // this.svDesktop.load(menuData);

    ///////////////////////////////////
    this.appendHTMLSnippetToDOM();
  } // end ngOnInit()

  getSelector() {
    return '<app-dashboard1></app-dashboard1>';
  }

  safeCode() {
    console.log('starting safe script');
  }

  public appendHTMLSnippetToDOM() {
    this.element = this.viewElement.nativeElement;
    const fragment = document.createRange().createContextualFragment(this.htmlSnippet);
    this.element.appendChild(fragment);
  }

}
