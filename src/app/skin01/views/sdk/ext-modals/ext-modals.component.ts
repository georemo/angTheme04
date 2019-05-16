import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ext-modals',
  templateUrl: './ext-modals.component.html',
  styleUrls: ['./ext-modals.component.css']
})
export class ExtModalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'NativeModals':
        html = this.getNativeModals(d);
        break;
      case 'ProgrammaticDialogBoxes':
        html = this.getProgrammaticDialogBoxes(d);
        break;
      case 'ExtendedModals':
        html = this.getExtendedModals(d);
        break;
      default:
        html = this.getNativeModals(d);
    }
    return html;
  }

  getNativeModals(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Bootstrap <span class="text-bold">Native Modals</span> indicator</h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_modals.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_modals.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_modals.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_modals.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_modals.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.
          </p>
          <table class="table table-hover table-striped table-bordered">
            <tbody>
              <tr>
                <td class="col-xs-6"><h5><span class="text-bold">Basic</span> Example</h5>
                <p>
                  Toggle a modal via JavaScript by clicking the button on the right. It will slide down and fade in from the top of the page.
                </p></td>
                <td class="col-xs-6">
                <button data-target=".bs-example-modal-basic" data-toggle="modal" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5><span class="text-bold">Large Width</span> Example </h5>
                <p>
                  Large Modal Size vailable by adding <code> .modal-lg </code>
                  on a <code> .modal-dialog </code>
                  .
                </p></td>
                <td class="col-xs-6">
                <button data-target=".bs-example-modal-lg" data-toggle="modal" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5><span class="text-bold">Small Width</span> Example </h5>
                <p>
                  Small Modal Size vailable by adding <code> .modal-sm </code>
                  on a <code> .modal-dialog </code>
                  .
                </p></td>
                <td class="col-xs-6">
                <button data-target=".bs-example-modal-sm" data-toggle="modal" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getProgrammaticDialogBoxes(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Programmatic <span class="text-bold">Dialog Boxes</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_modals.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_modals.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_modals.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_modals.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <p>
            <b>Please note:</b> the ‘Example’ object used in the following examples
            simply displays a toastr notification to help illustrate when each callback is invoked.
          </p>
          <table class="table table-hover table-striped table-bordered">
            <tbody>
              <tr>
                <td class="col-xs-6"><h5>Alert</h5></td>
                <td class="col-xs-6">
                <button data-bb="alert_callback" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Confirm</h5></td>
                <td class="col-xs-6">
                <button data-bb="confirm" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Prompt</h5></td>
                <td class="col-xs-6">
                <button data-bb="prompt" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Custom Dialog</h5></td>
                <td class="col-xs-6">
                <button data-bb="dialog" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Custom HTML Contents</h5></td>
                <td class="col-xs-6">
                <button data-bb="custom_html" class="btn btn-blue">
                  View Demo
                </button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getExtendedModals(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: BOOTSTRAP EXTENDED MODALS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Extended <span class="text-bold">Modals</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_modals.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_modals.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_modals.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_modals.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Extends Bootstrap's native modals to provide additional functionality. Introduces a <strong>ModalManager</strong> class that operates behind the scenes to handle multiple modals by listening on their events.
          </p>
          <table class="table table-hover table-striped table-bordered">
            <tbody>
              <tr>
                <td class="col-xs-6"><h5>Responsive</h5></td>
                <td class="col-xs-6">
                <a href="ui_modals.html#responsive" data-toggle="modal" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Stackable</h5></td>
                <td class="col-xs-6">
                <a href="ui_modals.html#stack1" data-toggle="modal" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>AJAX (via jQuery.load)</h5></td>
                <td class="col-xs-6 ajax">
                <a data-toggle="modal" id="modal_ajax_demo_btn" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Static Background with Animation</h5></td>
                <td class="col-xs-6">
                <a href="ui_modals.html#static" data-toggle="modal" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Full Width</h5></td>
                <td class="col-xs-6">
                <a href="ui_modals.html#full-width" data-toggle="modal" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
              <tr>
                <td class="col-xs-6"><h5>Long Modals</h5></td>
                <td class="col-xs-6">
                <a href="ui_modals.html#long" data-toggle="modal" class="demo btn btn-blue">
                  View Demo
                </a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end: BOOTSTRAP EXTENDED MODALS PANEL -->
    </div>
  </div>`;
    return html;
  }

}
