import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.chartType) {
      case 'CumulativeLine':
        html = this.getBasic(d);
        break;
      case 'DiscreteBar':
        html = this.getBasicBordered(d);
        break;
      case 'DonutChart':
        html = this.getBasicCondensed(d);
        break;
      case 'LineWithViewFinder':
        html = this.getBasicContextual(d);
        break;
      case 'RegularPie':
        html = this.getBasicStrippedRows(d);
        break;
      case 'BasicSamples':
        html = this.getBasicSamples(d);
        break;
      default:
        html = this.getBasicSamples(d);
    }
    return html;
  }

  getBasicSamples(d) {
    const html = `<div class="row">
        <div class="col-md-12">
          <!-- start: BASIC TABLE PANEL -->
          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">Basic <span class="text-bold">table</span></h4>
              <div class="panel-tools">										
                <div class="dropdown">
                <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                  <i class="fa fa-cog"></i>
                </a>
                <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                  <li>
                    <a class="panel-collapse collapses" href="table_basic.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                  </li>
                  <li>
                    <a class="panel-refresh" href="table_basic.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
                  </li>
                  <li>
                    <a class="panel-config" href="table_basic.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
                  </li>
                  <li>
                    <a class="panel-expand" href="table_basic.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
                  </li>										
                </ul>
                </div>
                <a class="btn btn-xs btn-link panel-close" href="table_basic.html#"> <i class="fa fa-times"></i> </a>
              </div>
            </div>
            <div class="panel-body">
              <p>
                For basic styling—light padding and only horizontal dividers—add the base class <code>.table</code> to any <code>&lt;table&gt;</code>. It may seem super redundant, but given the widespread use of tables for other plugins like calendars and date pickers, we've opted to isolate our custom table styles.
              </p>
              <table class="table table-hover" id="sample-table-1">
                <thead>
                  <tr>
                    <th class="center">#</th>
                    <th>Browser</th>
                    <th class="hidden-xs">Creator</th>
                    <th>Software license</th>
                    <th class="hidden-xs">Current layout engine</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="center">1</td>
                    <td class="hidden-xs">Google Chrome</td>
                    <td>Google</td>
                    <td>
                    <a href="table_basic.html#" rel="nofollow" target="_blank">
                      Terms of Service
                    </a></td>
                    <td class="hidden-xs">Blink</td>
                    <td class="center">
                    <div class="visible-md visible-lg hidden-sm hidden-xs">
                      <a href="table_basic.html#" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-green tooltips" data-placement="top" data-original-title="Share"><i class="fa fa-share"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>
                    </div>
                    <div class="visible-xs visible-sm hidden-md hidden-lg">
                      <div class="btn-group">
                        <a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="table_basic.html#">
                          <i class="fa fa-cog"></i> <span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu pull-right dropdown-dark">
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-edit"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-share"></i> Share
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-times"></i> Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div></td>
                  </tr>
                  <tr>
                    <td class="center">2</td>
                    <td>Internet Explorer</td>
                    <td class="hidden-xs">Microsoft, Spyglass</td>
                    <td>
                    <a href="table_basic.html#" rel="nofollow" target="_blank">
                      Proprietary
                    </a></td>
                    <td class="hidden-xs">Trident</td>
                    <td class="center">
                    <div class="visible-md visible-lg hidden-sm hidden-xs">
                      <a href="table_basic.html#" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-green tooltips" data-placement="top" data-original-title="Share"><i class="fa fa-share"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>
                    </div>
                    <div class="visible-xs visible-sm hidden-md hidden-lg">
                      <div class="btn-group">
                        <a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="table_basic.html#">
                          <i class="fa fa-cog"></i> <span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu pull-right dropdown-dark">
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-edit"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-share"></i> Share
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-times"></i> Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div></td>
                  </tr>
                  <tr>
                    <td class="center">3</td>
                    <td>Mozilla Firefox</td>
                    <td class="hidden-xs">Mozilla Foundation</td>
                    <td>
                    <a href="table_basic.html#" rel="nofollow" target="_blank">
                      MPR
                    </a></td>
                    <td class="hidden-xs">Gecko</td>
                    <td class="center">
                    <div class="visible-md visible-lg hidden-sm hidden-xs">
                      <a href="table_basic.html#" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-green tooltips" data-placement="top" data-original-title="Share"><i class="fa fa-share"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>
                    </div>
                    <div class="visible-xs visible-sm hidden-md hidden-lg">
                      <div class="btn-group">
                        <a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="table_basic.html#">
                          <i class="fa fa-cog"></i> <span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu pull-right dropdown-dark">
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-edit"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-share"></i> Share
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-times"></i> Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div></td>
                  </tr>
                  <tr>
                    <td class="center">4</td>
                    <td>Safari</td>
                    <td class="hidden-xs">Apple Inc.</td>
                    <td>
                    <a href="table_basic.html#" rel="nofollow" target="_blank">
                      Proprietary
                    </a></td>
                    <td class="hidden-xs">WebKit</td>
                    <td class="center">
                    <div class="visible-md visible-lg hidden-sm hidden-xs">
                      <a href="table_basic.html#" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-green tooltips" data-placement="top" data-original-title="Share"><i class="fa fa-share"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>
                    </div>
                    <div class="visible-xs visible-sm hidden-md hidden-lg">
                      <div class="btn-group">
                        <a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="table_basic.html#">
                          <i class="fa fa-cog"></i> <span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu pull-right dropdown-dark">
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-edit"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-share"></i> Share
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-times"></i> Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div></td>
                  </tr>
                  <tr>
                    <td class="center">5</td>
                    <td>Opera</td>
                    <td class="hidden-xs">Opera Software</td>
                    <td>
                    <a href="table_basic.html#" rel="nofollow" target="_blank">
                      Proprietary
                    </a></td>
                    <td class="hidden-xs">Presto</td>
                    <td class="center">
                    <div class="visible-md visible-lg hidden-sm hidden-xs">
                      <a href="table_basic.html#" class="btn btn-xs btn-blue tooltips" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-green tooltips" data-placement="top" data-original-title="Share"><i class="fa fa-share"></i></a>
                      <a href="table_basic.html#" class="btn btn-xs btn-red tooltips" data-placement="top" data-original-title="Remove"><i class="fa fa-times fa fa-white"></i></a>
                    </div>
                    <div class="visible-xs visible-sm hidden-md hidden-lg">
                      <div class="btn-group">
                        <a class="btn btn-green dropdown-toggle btn-sm" data-toggle="dropdown" href="table_basic.html#">
                          <i class="fa fa-cog"></i> <span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu pull-right dropdown-dark">
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-edit"></i> Edit
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-share"></i> Share
                            </a>
                          </li>
                          <li>
                            <a role="menuitem" tabindex="-1" href="table_basic.html#">
                              <i class="fa fa-times"></i> Remove
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- end: BASIC TABLE PANEL -->
        </div>
      </div>`;
    return html;
  }

  getBasic(d) {
    const html = ``;
    return html;
  }

  getBasicStrippedRows(d) {
    const html = ``;
    return html;
  }

  getBasicCondensed(d) {
    const html = ``;
    return html;
  }

  getBasicBordered(d) {
    const html = ``;
    return html;
  }

  getBasicContextual(d) {
    const html = ``;
    return html;
  }

  getResponsive(d) {
    const html = `<div class="row">
        <div class="col-md-12">
          <div class="alert alert-info">
            Please try to re-size your browser window in order to see the tables in responsive mode.
          </div>
          <!-- start: RESPONSIVE TABLE PANEL -->
          <div class="panel panel-white">
            <div class="panel-heading">
              <i class="fa fa-external-link-square"></i>
              Responsive Table
              <div class="panel-tools">										
                <div class="dropdown">
                <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                  <i class="fa fa-cog"></i>
                </a>
                <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                  <li>
                    <a class="panel-collapse collapses" href="table_responsive.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                  </li>
                  <li>
                    <a class="panel-refresh" href="table_responsive.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
                  </li>
                  <li>
                    <a class="panel-config" href="table_responsive.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
                  </li>
                  <li>
                    <a class="panel-expand" href="table_responsive.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
                  </li>										
                </ul>
                </div>
              </div>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-bordered table-hover" id="sample-table-1">
                  <thead>
                    <tr>
                      <th class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey selectall" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></th>
                      <th>Domain</th>
                      <th>Price</th>
                      <th>Clicks</th>
                      <th><i class="fa fa-time"></i> Update </th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        alpha.com
                      </a></td>
                      <td>$45</td>
                      <td>3,330</td>
                      <td>Feb 13</td>
                      <td><span class="label label-sm label-warning">Expiring</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        beta.com
                      </a></td>
                      <td>$70</td>
                      <td>3,330</td>
                      <td>Jen 15</td>
                      <td><span class="label label-sm label-success">Registered</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        gamma.com
                      </a></td>
                      <td>$25</td>
                      <td>3,330</td>
                      <td>Mar 09</td>
                      <td><span class="label label-sm label-danger">Expired</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        delta.com
                      </a></td>
                      <td>$50</td>
                      <td>3,330</td>
                      <td>Feb 10</td>
                      <td><span class="label label-sm label-inverse">Flagged</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        epsilon.com
                      </a></td>
                      <td>$35</td>
                      <td>3,330</td>
                      <td>Feb 18</td>
                      <td><span class="label label-sm label-success">Registered</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        zeta.com
                      </a></td>
                      <td>$45</td>
                      <td>3,330</td>
                      <td>Feb 13</td>
                      <td><span class="label label-sm label-warning">Expiring</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        eta.com
                      </a></td>
                      <td>$70</td>
                      <td>3,330</td>
                      <td>Jen 15</td>
                      <td><span class="label label-sm label-success">Registered</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        theta.com
                      </a></td>
                      <td>$25</td>
                      <td>3,330</td>
                      <td>Mar 09</td>
                      <td><span class="label label-sm label-danger">Expired</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        iota.com
                      </a></td>
                      <td>$50</td>
                      <td>3,330</td>
                      <td>Feb 10</td>
                      <td><span class="label label-sm label-inverse">Flagged</span></td>
                    </tr>
                    <tr>
                      <td class="center">
                      <div class="checkbox-table">
                        <label>
                          <div class="icheckbox_flat-grey" style="position: relative;"><input type="checkbox" class="flat-grey foocheck" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                        </label>
                      </div></td>
                      <td>
                      <a href="table_responsive.html#">
                        kappa.com
                      </a></td>
                      <td>$35</td>
                      <td>3,330</td>
                      <td>Feb 18</td>
                      <td><span class="label label-sm label-success">Registered</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end: RESPONSIVE TABLE PANEL -->
        </div>
      </div>`;
    return html;
  }

  getDtDynamic(d) {
    const html = `<div class="row">
							<div class="col-md-12">
								<!-- start: DYNAMIC TABLE PANEL -->
								<div class="panel panel-white">
									<div class="panel-heading">
										<h4 class="panel-title">Dynamic <span class="text-bold">Table</span></h4>
										<div class="panel-tools">
											<div class="dropdown">
												<a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
													<i class="fa fa-cog"></i>
												</a>
												<ul class="dropdown-menu dropdown-light pull-right" role="menu">
													<li>
														<a class="panel-collapse collapses" href="table_data.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
													</li>
													<li>
														<a class="panel-refresh" href="table_data.html#">
															<i class="fa fa-refresh"></i> <span>Refresh</span>
														</a>
													</li>
													<li>
														<a class="panel-config" href="table_data.html#panel-config" data-toggle="modal">
															<i class="fa fa-wrench"></i> <span>Configurations</span>
														</a>
													</li>
													<li>
														<a class="panel-expand" href="table_data.html#">
															<i class="fa fa-expand"></i> <span>Fullscreen</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="panel-body">
										<div id="sample_1_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="sample_1_length"><label>Show <div class="select2-container m-wrap small" id="s2id_autogen1"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-2">10</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen2" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-2" id="s2id_autogen2"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen2_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-2" id="s2id_autogen2_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-2">   </ul></div></div><select name="sample_1_length" aria-controls="sample_1" class="m-wrap small select2-offscreen" tabindex="-1" title=""><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="-1">All</option></select> Rows</label></div><div id="sample_1_filter" class="dataTables_filter"><label><input type="search" class="form-control input-sm" placeholder="Search" aria-controls="sample_1"></label></div><table class="table table-striped table-bordered table-hover table-full-width dataTable no-footer" id="sample_1" role="grid" aria-describedby="sample_1_info">
											<thead>
												<tr role="row"><th class="sorting" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 230px;" aria-label="Browser: activate to sort column ascending">Browser</th><th class="hidden-xs sorting_asc" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 272px;" aria-sort="ascending" aria-label="Creator: activate to sort column ascending">Creator</th><th class="sorting" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 122px;" aria-label="Cost (
													USD): activate to sort column ascending">Cost (
													USD)</th><th class="hidden-xs sorting" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 195px;" aria-label=" Software license: activate to sort column ascending"> Software license</th><th class="sorting" tabindex="0" aria-controls="sample_1" rowspan="1" colspan="1" style="width: 145px;" aria-label="Current
													layout engine: activate to sort column ascending">Current
													layout engine</th></tr>
											</thead>
											<tbody>
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
											<tr role="row" class="odd">
													<td>w3m</td>
													<td class="hidden-xs sorting_1">Akinori Ito</td>
													<td>Free</td>
													<td class="hidden-xs">MIT</td>
													<td>-</td>
												</tr><tr role="row" class="even">
													<td>iCab</td>
													<td class="hidden-xs sorting_1">Alexander Clauss</td>
													<td>$20 (Pro)</td>
													<td class="hidden-xs">Proprietary</td>
													<td>WebKit</td>
												</tr><tr role="row" class="odd">
													<td>AOL Explorer</td>
													<td class="hidden-xs sorting_1">America Online, Inc</td>
													<td>Free</td>
													<td class="hidden-xs">Proprietary</td>
													<td>Trident</td>
												</tr><tr role="row" class="even">
													<td>Safari</td>
													<td class="hidden-xs sorting_1">Apple Inc.</td>
													<td>Free</td>
													<td class="hidden-xs">Proprietary</td>
													<td>WebKit</td>
												</tr><tr role="row" class="odd">
													<td>Avant</td>
													<td class="hidden-xs sorting_1">Avant Force</td>
													<td>Free</td>
													<td class="hidden-xs">Proprietary</td>
													<td>Tri-engine</td>
												</tr><tr role="row" class="even">
													<td>ELinks</td>
													<td class="hidden-xs sorting_1">Baudis, Fonseca, <i>et al.</i></td>
													<td>Free</td>
													<td class="hidden-xs">GPL</td>
													<td>built-in</td>
												</tr><tr role="row" class="odd">
													<td>Arora</td>
													<td class="hidden-xs sorting_1">Benjamin C. Meyer</td>
													<td>Free</td>
													<td class="hidden-xs">GPL</td>
													<td>WebKit</td>
												</tr><tr role="row" class="even">
													<td>Midori</td>
													<td class="hidden-xs sorting_1">Christian Dywan, et al.</td>
													<td>Free</td>
													<td class="hidden-xs">LGPL</td>
													<td>WebKit</td>
												</tr><tr role="row" class="odd">
													<td>QupZilla</td>
													<td class="hidden-xs sorting_1">David Rosca</td>
													<td>Free</td>
													<td class="hidden-xs">GNU GPLv3</td>
													<td>WebKit</td>
												</tr><tr role="row" class="even">
													<td>Uzbl</td>
													<td class="hidden-xs sorting_1">Dieter Plaetinck</td>
													<td>Free</td>
													<td class="hidden-xs">GNU GPLv3</td>
													<td>Webkit</td>
												</tr></tbody>
										</table><div class="dataTables_info" id="sample_1_info" role="status" aria-live="polite">Showing 1 to 10 of 46 entries</div><div class="dataTables_paginate paging_simple_numbers" id="sample_1_paginate"><span><a class="paginate_button current" aria-controls="sample_1" data-dt-idx="0" tabindex="0">1</a><a class="paginate_button " aria-controls="sample_1" data-dt-idx="1" tabindex="0">2</a><a class="paginate_button " aria-controls="sample_1" data-dt-idx="2" tabindex="0">3</a><a class="paginate_button " aria-controls="sample_1" data-dt-idx="3" tabindex="0">4</a><a class="paginate_button " aria-controls="sample_1" data-dt-idx="4" tabindex="0">5</a></span></div></div>
									</div>
								</div>
								<!-- end: DYNAMIC TABLE PANEL -->
							</div>
						</div>`;
    return html;
  }

  getDtEditable(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: DYNAMIC TABLE PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Editable <span class="text-bold">Table</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="table_data.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="table_data.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="table_data.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="table_data.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="table_data.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12 space20">
              <button class="btn btn-green add-row">
                Add New <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <div id="sample_2_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="sample_2_length"><label>Show <div class="select2-container m-wrap small" id="s2id_autogen3"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-4">10</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen4" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen4_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-4">   </ul></div></div><select name="sample_2_length" aria-controls="sample_2" class="m-wrap small select2-offscreen" tabindex="-1" title=""><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="-1">All</option></select> Rows</label></div><div id="sample_2_filter" class="dataTables_filter"><label><input type="search" class="form-control input-sm" placeholder="Search" aria-controls="sample_2"></label></div><table class="table table-striped table-hover dataTable no-footer" id="sample_2" role="grid" aria-describedby="sample_2_info">
              <thead>
                <tr role="row"><th class="sorting" tabindex="0" aria-controls="sample_2" rowspan="1" colspan="1" style="width: 263px;" aria-label="Full Name: activate to sort column ascending">Full Name</th><th class="sorting_asc" tabindex="0" aria-controls="sample_2" rowspan="1" colspan="1" style="width: 253px;" aria-sort="ascending" aria-label="Role: activate to sort column ascending">Role</th><th class="sorting" tabindex="0" aria-controls="sample_2" rowspan="1" colspan="1" style="width: 223px;" aria-label="Phone: activate to sort column ascending">Phone</th><th class="sorting" tabindex="0" aria-controls="sample_2" rowspan="1" colspan="1" style="width: 97px;" aria-label="Edit: activate to sort column ascending">Edit</th><th class="sorting" tabindex="0" aria-controls="sample_2" rowspan="1" colspan="1" style="width: 134px;" aria-label="Delete: activate to sort column ascending">Delete</th></tr>
              </thead>
              <tbody>
                
                
                
                
                
              <tr role="row" class="odd">
                  <td>Nicole Bell</td>
                  <td class="sorting_1">Content Designer</td>
                  <td>(741)-034-4573</td>
                  <td>
                  <a href="table_data.html#" class="edit-row">
                    Edit
                  </a></td>
                  <td>
                  <a href="table_data.html#" class="delete-row">
                    Delete
                  </a></td>
                </tr><tr role="row" class="even">
                  <td>Kenneth Ross</td>
                  <td class="sorting_1">Senior Designer</td>
                  <td>(111)-114-1173</td>
                  <td>
                  <a href="table_data.html#" class="edit-row">
                    Edit
                  </a></td>
                  <td>
                  <a href="table_data.html#" class="delete-row">
                    Delete
                  </a></td>
                </tr><tr role="row" class="odd">
                  <td>Peter Clark</td>
                  <td class="sorting_1">UI Designer</td>
                  <td>(641)-734-4763</td>
                  <td>
                  <a href="table_data.html#" class="edit-row">
                    Edit
                  </a></td>
                  <td>
                  <a href="table_data.html#" class="delete-row">
                    Delete
                  </a></td>
                </tr><tr role="row" class="even">
                  <td>Steven Thompson</td>
                  <td class="sorting_1">Visual Designer</td>
                  <td>(471)-543-4073</td>
                  <td>
                  <a href="table_data.html#" class="edit-row">
                    Edit
                  </a></td>
                  <td>
                  <a href="table_data.html#" class="delete-row">
                    Delete
                  </a></td>
                </tr><tr role="row" class="odd">
                  <td>Ella Patterson</td>
                  <td class="sorting_1">Web Editor</td>
                  <td>(799)-994-9999</td>
                  <td>
                  <a href="table_data.html#" class="edit-row">
                    Edit
                  </a></td>
                  <td>
                  <a href="table_data.html#" class="delete-row">
                    Delete
                  </a></td>
                </tr></tbody>
            </table><div class="dataTables_info" id="sample_2_info" role="status" aria-live="polite">Showing 1 to 5 of 5 entries</div><div class="dataTables_paginate paging_simple_numbers" id="sample_2_paginate"><span><a class="paginate_button current" aria-controls="sample_2" data-dt-idx="0" tabindex="0">1</a></span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getBasicExportable(d) {
    const html = `<div class="row">
        <div class="col-md-12">
          <!-- start: EXPORT BASIC TABLE PANEL -->
          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">Export <span class="text-bold">Basic</span> Table</h4>
              <div class="panel-tools">
                <div class="dropdown">
                  <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                    <i class="fa fa-cog"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                    <li>
                      <a class="panel-collapse collapses" href="table_export.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                    </li>
                    <li>
                      <a class="panel-refresh" href="table_export.html#">
                        <i class="fa fa-refresh"></i> <span>Refresh</span>
                      </a>
                    </li>
                    <li>
                      <a class="panel-config" href="table_export.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i> <span>Configurations</span>
                      </a>
                    </li>
                    <li>
                      <a class="panel-expand" href="table_export.html#">
                        <i class="fa fa-expand"></i> <span>Fullscreen</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a class="btn btn-xs btn-link panel-close" href="table_export.html#">
                  <i class="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div class="panel-body">
              <p>
                Export HTML Table to JSON, XML, PNG, CSV, TXT, SQL, MS-Word, Ms-Excel, Ms-Powerpoint and PDF. You can easily set the font size, separator, export type, margin and etc..
              </p>
              <div class="row">
                <div class="col-md-12 space20">
                  <div class="btn-group pull-right">
                    <button data-toggle="dropdown" class="btn btn-green dropdown-toggle">
                      Export <i class="fa fa-angle-down"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-light pull-right">
                      <li>
                        <a href="table_export.html#" class="export-pdf" data-table="#sample-table-1">
                          Save as PDF
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-png" data-table="#sample-table-1">
                          Save as PNG
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-csv" data-table="#sample-table-1">
                          Save as CSV
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-txt" data-table="#sample-table-1">
                          Save as TXT
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-xml" data-table="#sample-table-1">
                          Save as XML
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-sql" data-table="#sample-table-1">
                          Save as SQL
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-json" data-table="#sample-table-1">
                          Save as JSON
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-excel" data-table="#sample-table-1">
                          Export to Excel
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-doc" data-table="#sample-table-1">
                          Export to Word
                        </a>
                      </li>
                      <li>
                        <a href="table_export.html#" class="export-powerpoint" data-table="#sample-table-1">
                          Export to PowerPoint
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover" id="sample-table-1">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Population</th>
                      <th>Date</th>
                      <th>%ge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chinna</td>
                      <td>1,363,480,000</td>
                      <td>March 24, 2014</td>
                      <td>19.1</td>
                    </tr>
                    <tr>
                      <td>India</td>
                      <td>1,241,900,000</td>
                      <td>March 24, 2014</td>
                      <td>17.4</td>
                    </tr>
                    <tr>
                      <td>United States</td>
                      <td>317,746,000</td>
                      <td>March 24, 2014</td>
                      <td>4.44</td>
                    </tr>
                    <tr>
                      <td>Indonesia</td>
                      <td>249,866,000</td>
                      <td>July 1, 2013</td>
                      <td>3.49</td>
                    </tr>
                    <tr>
                      <td>Brazil</td>
                      <td>201,032,714</td>
                      <td>July 1, 2013</td>
                      <td>2.81</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end: EXPORT BASIC TABLE PANEL -->
        </div>
      </div>`;
    return html;
  }

}
