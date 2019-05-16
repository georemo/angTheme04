import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-notifications',
  templateUrl: './ui-notifications.component.html',
  styleUrls: ['./ui-notifications.component.css']
})
export class UiNotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'Toastr':
        html = this.getToastr(d);
        break;
      case 'SweetAlert':
        html = this.getSweetAlert(d);
        break;
      default:
        html = this.getToastr(d);
    }
    return html;
  }

  getToastr(d) {
    const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Toastr <span class="text-bold">Notifications</span></h4>
                <div class="panel-tools">
                    <div class="dropdown">
                        <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                            <i class="fa fa-cog"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                            <li>
                                <a class="panel-collapse collapses" href="ui_notifications.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                            </li>
                            <li>
                                <a class="panel-refresh" href="ui_notifications.html#">
                                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-config" href="ui_notifications.html#panel-config" data-toggle="modal">
                                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-expand" href="ui_notifications.html#">
                                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="title" class="control-label">
                                Title
                            </label>
                            <input type="text" placeholder="Enter a title ..." value="Toastr Notifications" class="form-control" id="title">
                        </div>
                        <div class="form-group">
                            <label for="message" class="control-label">
                                Message
                            </label>
                            <textarea placeholder="Enter a message ..." rows="3" id="message" class="form-control">Gnome &amp; Growl type non-blocking notifications</textarea>
                        </div>
                        <div class="form-group">
                            <div class="checkbox-list">
                                <div class="checkbox">
                                    <label>
                                        <div class="icheckbox_minimal-grey" style="position: relative;"><input type="checkbox" value="" class="grey" id="closeButton" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Close Button
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <div class="icheckbox_minimal-grey" style="position: relative;"><input type="checkbox" value="" class="grey" id="addBehaviorOnToastClick" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Add behavior on toast click
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <div class="icheckbox_minimal-grey" style="position: relative;"><input type="checkbox" value="" class="grey" id="addBehaviorOnToastClick" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Debug
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div id="toastTypeGroup" class="form-group">
                            <label>
                                Toast Type
                            </label>
                            <div class="radio-list">
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey checked" style="position: relative;"><input type="radio" value="success" name="toasts" class="grey" checked="checked" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Success
                                    </label>
                                </div>
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="info" name="toasts" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Info
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="warning" name="toasts" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Warning
                                    </label>
                                </div>
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="error" name="toasts" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Error
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="positionGroup" class="form-group">
                            <label>
                                Position
                            </label>
                            <div class="radio-list">
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey checked" style="position: relative;"><input type="radio" value="toast-top-right" name="positions" class="grey" checked="checked" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Top Right
                                    </label>
                                </div>
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="toast-bottom-right" name="positions" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Bottom Right
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="toast-bottom-left" name="positions" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Bottom Left
                                    </label>
                                </div>
                                <div class="radio">
                                    <label class="">
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="toast-top-left" name="positions" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Top Left
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="toast-top-full-width" name="positions" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Top Full Width
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <div class="iradio_minimal-grey" style="position: relative;"><input type="radio" value="toast-bottom-full-width" name="positions" class="grey" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                                        Bottom Full Width
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="controls">
                                <label for="showEasing" class="control-label">
                                    Show Easing
                                </label>
                                <input type="text" value="swing" class="form-control input-small" placeholder="swing, linear" id="showEasing">
                                <label for="hideEasing" class="control-label">
                                    Hide Easing
                                </label>
                                <input type="text" value="linear" class="form-control input-small" placeholder="swing, linear" id="hideEasing">
                                <label for="showMethod" class="control-label">
                                    Show Method
                                </label>
                                <input type="text" value="fadeIn" class="form-control input-small" placeholder="show, fadeIn, slideDown" id="showMethod">
                                <label for="hideMethod" class="control-label">
                                    Hide Method
                                </label>
                                <input type="text" value="fadeOut" class="form-control input-small" placeholder="hide, fadeOut, slideUp" id="hideMethod">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group">
                            <div class="controls">
                                <label for="showDuration" class="control-label">
                                    Show Duration
                                </label>
                                <input type="text" value="1000" class="form-control input-small" placeholder="ms" id="showDuration">
                                <label for="hideDuration" class="control-label">
                                    Hide Duration
                                </label>
                                <input type="text" value="1000" class="form-control input-small" placeholder="ms" id="hideDuration">
                                <label for="timeOut" class="control-label">
                                    Time out
                                </label>
                                <input type="text" value="5000" class="form-control input-small" placeholder="ms" id="timeOut">
                                <label for="timeOut" class="control-label">
                                    Extended time out
                                </label>
                                <input type="text" value="1000" class="form-control input-small" placeholder="ms" id="extendedTimeOut">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row space20">
                    <div class="col-md-12">
                        <button id="showtoast" class="btn btn-green" type="button">
                            Show Toast
                        </button>
                        <button id="cleartoasts" class="btn btn-red" type="button">
                            Clear Toasts
                        </button>
                        <button id="clearlasttoast" class="btn brn-red" type="button">
                            Clear Last Toast
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <pre id="toastrOptions">													Settings...
    </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    return html;
  }

  getSweetAlert(d) {
    const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">SweetAlert <span class="text-bold">A beautiful replacement for Javascript's "Alert"</span></h4>
                <div class="panel-tools">
                    <div class="dropdown">
                        <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                            <i class="fa fa-cog"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                            <li>
                                <a class="panel-collapse collapses" href="ui_notifications.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                            </li>
                            <li>
                                <a class="panel-refresh" href="ui_notifications.html#">
                                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-config" href="ui_notifications.html#panel-config" data-toggle="modal">
                                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-expand" href="ui_notifications.html#">
                                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Basic message
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    Show a basic message to give information to the user or to warn about a potentially damaging operation.
                                </p>
                                <a id="basicSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Title with a text under
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    Not enough basic message? Show more information to the user by entering a text below the title
                                </p>
                                <a id="textUnderSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Success message
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    Shows the user a message to warn him that a certain operation is successful.
                                </p>
                                <a id="successSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Warning message
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    Shows the user a warning message, with a function attached to the "Confirm" button.
                                </p>
                                <a id="confirmSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Another warning message
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    By passing a parameter to warning message, you can execute something else for "Cancel".
                                </p>
                                <a id="cancellSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="panel panel-transparent min-height-200">
                            <div class="panel-heading">
                                <div class="panel-title">
                                    Custom icon
                                </div>
                            </div>
                            <div class="panel-body">
                                <p class="margin-bottom-30">
                                    If desired, you can make more effective the message by adding a custom icon
                                </p>
                                <a id="customIconSweetAlert" class="btn btn-primary pull-right">
                                    Open Message
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    return html;
  }

}
