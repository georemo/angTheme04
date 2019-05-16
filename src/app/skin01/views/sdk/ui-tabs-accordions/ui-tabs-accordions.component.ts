import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-tabs-accordions',
  templateUrl: './ui-tabs-accordions.component.html',
  styleUrls: ['./ui-tabs-accordions.component.css']
})
export class UiTabsAccordionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'letterHead':
        html = this.getPanelTabs(d);
        break;
      case 'Invoice':
        html = this.getInlineTabs(d);
        break;
      case 'Invoice':
        html = this.getAccordions(d);
        break;
      default:
        html = this.getPanelTabs(d);
    }
    return html;
  }

  getPanelTabs(d) {
    const html = `<div class="row">
    <div class="col-sm-12">
      <!-- start: PANLEL TABS -->
      <div class="panel panel-white panel-tabs">
        <div class="panel-heading">
          <h4 class="panel-title">Panel <span class="text-bold">Tabs</span></h4>
        </div>
        <div class="panel-body">
          <div class="tabbable">
            <ul class="nav nav-tabs">
              <li class="active">
                <a data-toggle="tab" href="ui_tabs_accordions.html#panel_tab_example1">
                  Tab 1
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="ui_tabs_accordions.html#panel_tab_example2">
                  Tab 2
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="ui_tabs_accordions.html#panel_tab_example3">
                  Tab 3
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="panel_tab_example1" class="tab-pane fade in active">
                <p>
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.
                </p>
                <p>
                  Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
                <div class="alert alert-warning">
                  <p>
                    Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                  </p>
                  <p>
                    Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
                  </p>
                  <p>
                    <a class="btn btn-red show-tab" href="ui_tabs_accordions.html#panel_tab_example2">
                      Go to tab 2
                    </a>
                  </p>
                </div>
              </div>
              <div id="panel_tab_example2" class="tab-pane fade">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                </p>
                <p>
                  <a target="_blank" href="ui_tabs_accordions.html%3FtabId=panel_tab_example2.html" class="btn btn-purple">
                    Activate this tab via URL
                  </a>
                </p>
              </div>
              <div id="panel_tab_example3" class="tab-pane fade">
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
                <p>
                  <a target="_blank" href="ui_tabs_accordions.html%3FtabId=panel_tab_example3.html" class="btn btn-blue">
                    Activate this tab via URL
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end: PANLEL TABS -->
    </div>
  </div>`;
    return html;
  }

  getInlineTabs(d) {
    const html = `<div class="row">
    <div class="col-sm-6">
      <div class="tabbable">
        <ul id="myTab" class="nav nav-tabs">
          <li class="active">
            <a href="ui_tabs_accordions.html#myTab_example1" data-toggle="tab">
              <i class="green fa fa-home"></i> Tab 1
            </a>
          </li>
          <li>
            <a href="ui_tabs_accordions.html#myTab_example2" data-toggle="tab">
              Tab 2 <span class="badge badge-danger">4</span>
            </a>
          </li>
          <li class="dropdown">
            <a href="ui_tabs_accordions.html#" class="dropdown-toggle" data-toggle="dropdown">
              Dropdown &nbsp; <i class="fa fa-caret-down width-auto"></i>
            </a>
            <ul class="dropdown-menu dropdown-info">
              <li>
                <a href="ui_tabs_accordions.html#myTab_example3" data-toggle="tab">
                  Dropdown 1
                </a>
              </li>
              <li>
                <a href="ui_tabs_accordions.html#myTab_example4" data-toggle="tab">
                  Dropdown 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active" id="myTab_example1">
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.
            </p>
            <div class="alert alert-info">
              <p>
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
              </p>
              <p>
                <a href="ui_tabs_accordions.html#myTab_example2" class="btn btn-green show-tab">
                  Go to tab 2
                </a>
              </p>
            </div>
          </div>
          <div class="tab-pane fade" id="myTab_example2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
            </p>
            <p>
              <a href="ui_tabs_accordions.html#myTab_example3" class="btn btn-red show-tab">
                Go to Dropdown 1
              </a>
            </p>
          </div>
          <div class="tab-pane fade" id="myTab_example3">
            <p>
              Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
            </p>
            <p>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            </p>
            <p>
              <a href="ui_tabs_accordions.html#myTab_example4" class="btn btn-purple show-tab">
                Go to Dropdown 2
              </a>
            </p>
          </div>
          <div class="tab-pane fade" id="myTab_example4">
            <p>
              Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.
            </p>
            <p>
              <a href="ui_tabs_accordions.html#myTab_example1" class="btn btn-purple show-tab">
                Return to tab 1
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="tabbable">
        <ul id="myTab2" class="nav nav-tabs">
          <li class="active">
            <a href="ui_tabs_accordions.html#myTab2_example1" data-toggle="tab">
              Tab 1
            </a>
          </li>
          <li>
            <a href="ui_tabs_accordions.html#myTab2_example2" data-toggle="tab">
              Tab 2
            </a>
          </li>
          <li>
            <a href="ui_tabs_accordions.html#myTab2_example3" data-toggle="tab">
              Tab 3
            </a>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade in active" id="myTab2_example1">
            <p>
              Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            </p>
            <p>
              Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
            </p>
          </div>
          <div class="tab-pane fade" id="myTab2_example2">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
            </p>
            <p>
              <a href="ui_tabs_accordions.html#myTab2_example3" class="btn btn-blue show-tab">
                Go to tab 3
              </a>
            </p>
          </div>
          <div class="tab-pane fade" id="myTab2_example3">
            <p>
              Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.
            </p>
            <p>
              <a href="ui_tabs_accordions.html#myTab2_example1" class="btn btn-purple show-tab">
                Return to tab 1
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getAccordions(d) {
    const html = `<div class="row">
    <div class="col-sm-12">
      <!-- start: ACCORDION PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Accordions</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_tabs_accordions.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_tabs_accordions.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_tabs_accordions.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_tabs_accordions.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_tabs_accordions.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="panel-group accordion" id="accordion">
            <div class="panel panel-white">
              <div class="panel-heading">
                <h5 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="ui_tabs_accordions.html#collapseOne">
                  <i class="icon-arrow"></i> Collapsible Group Item #1
                </a></h5>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-white">
              <div class="panel-heading">
                <h5 class="panel-title">
                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="ui_tabs_accordions.html#collapseTwo">
                  <i class="icon-arrow"></i> Collapsible Group Item #2
                </a></h5>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-white">
              <div class="panel-heading">
                <h5 class="panel-title">
                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="ui_tabs_accordions.html#collapseThree">
                  <i class="icon-arrow"></i> Collapsible Group Item #3
                </a></h5>
              </div>
              <div id="collapseThree" class="panel-collapse collapse">
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end: ACCORDION PANEL -->
    </div>
  </div>`;
    return html;
  }

}
