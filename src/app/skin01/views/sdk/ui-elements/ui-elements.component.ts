import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-elements',
  templateUrl: './ui-elements.component.html',
  styleUrls: ['./ui-elements.component.css']
})
export class UiElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'Alerts':
        html = this.getAlerts(d);
        break;
      case 'Notifications':
        html = this.getNotifications(d);
        break;
      default:
      html = this.getAlerts(d);
    }
    return html;
  }

  getAlerts(d){
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: ALERTS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Alerts</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Wrap any text and an optional dismiss button in <code> .alert </code>
            and one of the four contextual classes (e.g., <code> .alert-success </code>
            ) for basic alert messages.
          </p>
          <p>
            Use the <code> .alert-link </code>
            utility class to quickly provide matching colored links within any alert.
          </p>
          <div class="alert alert-success">
            <button data-dismiss="alert" class="close">
              ×
            </button>
            <strong>Well done!</strong> You successfully read <a class="alert-link" href="ui_elements.html#">
              this important alert message</a>
            .
          </div>
          <div class="alert alert-info">
            <button data-dismiss="alert" class="close">
              ×
            </button>
            <strong>Heads up!</strong>
            This <a class="alert-link" href="ui_elements.html#">
              alert needs your attention</a>
            , but it's not super important.
          </div>
          <div class="alert alert-warning">
            <button data-dismiss="alert" class="close">
              ×
            </button>
            <strong>Warning!</strong>
            Better check yourself, you're <a class="alert-link" href="ui_elements.html#">
              not looking too good</a>
            .
          </div>
          <div class="alert alert-danger">
            <button data-dismiss="alert" class="close">
              ×
            </button>
            <strong>Oh snap!</strong>
            <a class="alert-link" href="ui_elements.html#">
              Change a few things up</a>
            and try submitting again.
          </div>
        </div>
      </div>
      <!-- end: ALERTS PANEL -->
    </div>
  </div>`;
    return html;
  }

  getNotifications(d){
    const html = `<div class="row">
    <div class="col-md-6">
      <!-- start: NOTIFICATION PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Notifications</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="alert alert-block alert-danger fade in">
            <button data-dismiss="alert" class="close" type="button">
              ×
            </button>
            <h4 class="alert-heading"><i class="fa fa-times"></i> Error!</h4>
            <p>
              Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              <a href="ui_elements.html#" class="btn btn-red">
                Take this action
              </a>
              <a href="ui_elements.html#" class="btn btn-light-grey">
                Or do this
              </a>
            </p>
          </div>
          <div class="alert alert-block alert-success fade in">
            <button data-dismiss="alert" class="close" type="button">
              ×
            </button>
            <h4 class="alert-heading"><i class="fa fa-check"></i> Success!</h4>
            <p>
              Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              <a href="ui_elements.html#" class="btn btn-green">
                Take this action
              </a>
              <a href="ui_elements.html#" class="btn btn-light-grey">
                Or do this
              </a>
            </p>
          </div>
          <div class="alert alert-block alert-info fade in">
            <button data-dismiss="alert" class="close" type="button">
              ×
            </button>
            <h4 class="alert-heading"><i class="fa fa-info"></i> Info!</h4>
            <p>
              Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              <a href="ui_elements.html#" class="btn btn-blue">
                Take this action
              </a>
              <a href="ui_elements.html#" class="btn btn btn-light-grey">
                Or do this
              </a>
            </p>
          </div>
          <div class="alert alert-block alert-warning fade in">
            <button data-dismiss="alert" class="close" type="button">
              ×
            </button>
            <h4 class="alert-heading"><i class="fa fa-exclamation"></i> Warning!</h4>
            <p>
              Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              <a href="ui_elements.html#" class="btn btn-yellow">
                Take this action
              </a>
              <a href="ui_elements.html#" class="btn btn-light-grey">
                Or do this
              </a>
            </p>
          </div>
        </div>
      </div>
      <!-- end: NOTIFICATION PANEL -->
      <!-- start: LIST GROUP -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">List <span class="text-bold">Group</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
          </p>
          <h5 class="text-bold">Basic example with Badges</h5>
          <ul class="list-group">
            <li class="list-group-item">
              <span class="badge">14</span>
              Cras justo odio
            </li>
            <li class="list-group-item">
              <span class="badge">2</span>
              Dapibus ac facilisis in
            </li>
            <li class="list-group-item">
              <span class="badge">1</span>
              Morbi leo risus
            </li>
          </ul>
          <h5 class="text-bold">Linked items</h5>
          <div class="list-group">
            <a class="list-group-item active" href="ui_elements.html#">
              Cras justo odio
            </a>
            <a class="list-group-item" href="ui_elements.html#">
              Dapibus ac facilisis in</a>
            <a class="list-group-item" href="ui_elements.html#">
              Morbi leo risus</a>
            <a class="list-group-item" href="ui_elements.html#">
              Porta ac consectetur ac</a>
            <a class="list-group-item" href="ui_elements.html#">
              Vestibulum at eros</a>
          </div>
          <h5 class="text-bold">Contextual classes</h5>
          <div class="list-group">
            <a class="list-group-item list-group-item-success" href="ui_elements.html#">
              Dapibus ac facilisis in</a>
            <a class="list-group-item list-group-item-info" href="ui_elements.html#">
              Cras sit amet nibh libero</a>
            <a class="list-group-item list-group-item-warning" href="ui_elements.html#">
              Porta ac consectetur ac</a>
            <a class="list-group-item list-group-item-danger" href="ui_elements.html#">
              Vestibulum at eros</a>
          </div>
          <h5 class="text-bold">Custom content</h5>
          <p>
            Add nearly any HTML within, even for linked list groups like the one below.
          </p>
          <div class="list-group">
            <a class="list-group-item active" href="ui_elements.html#">
              <h5 class="list-group-item-heading">List group item heading</h5>
              <p class="list-group-item-text">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
            </a>
            <a class="list-group-item" href="ui_elements.html#">
              <h5 class="list-group-item-heading">List group item heading</h5>
              <p class="list-group-item-text">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
            </a>
            <a class="list-group-item" href="ui_elements.html#">
              <h5 class="list-group-item-heading">List group item heading</h5>
              <p class="list-group-item-text">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </p>
            </a>
          </div>
        </div>
      </div>
      <!-- end: LIST GROUP -->
      <!-- start: TOOLTIPS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Tooltips</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Tight pants next level keffiyeh
            <a data-original-title="Default tooltip" class="tooltips" href="ui_elements.html#">
              you probably
            </a>
            haven't heard of them.
            Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
            <a data-original-title="Another tooltip" class="tooltips" href="ui_elements.html#">
              have a
            </a>
            terry richardson vinyl chambray.
            <a data-original-title="12" title="" class="tooltips" href="ui_elements.html#">
              twitter handle
            </a>
            freegan cred raw denim single-origin coffee viral.
          </p>
          <p>
            <button data-original-title="Tooltip in top" data-placement="top" class="btn tooltips">
              Top
            </button>
            <button data-original-title="Tooltip in left" data-placement="left" class="btn tooltips">
              Left
            </button>
            <button data-original-title="Tooltip in right" data-placement="right" class="btn tooltips">
              Right
            </button>
            <button data-original-title="Tooltip in bottom" data-placement="bottom" class="btn tooltips">
              Bottom
            </button>
          </p>
        </div>
      </div>
      <!-- end: TOOLTIPS PANEL -->
      <!-- start: POPOVERS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Popovers</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Tight pants next level keffiyeh
            <a data-original-title="Default Popover" data-content="Popover body goes here! Popover body goes here!" class="popovers" href="javascript:;">
              trigger me on click
            </a>
            haven't heard of them.
            Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
            <a data-original-title="Another Popover" data-content="Popover body goes here! Popover body goes here!" data-trigger="hover" class="popovers" href="javascript:;">
              trigger me on hover
            </a>
            terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa.
          </p>
          <p>
            <button data-original-title="Popover in top" data-content="Popover body goes here! Popover body goes here!" data-placement="top" data-trigger="hover" id="test" class="btn popovers">
              Top
            </button>
            <button data-original-title="Popover in left" data-content="Popover body goes here! Popover body goes here!" data-placement="left" data-trigger="hover" class="btn popovers">
              Left
            </button>
            <button data-original-title="Popover in right" data-content="Popover body goes here! Popover body goes here!" data-placement="right" data-trigger="hover" class="btn popovers">
              Right
            </button>
            <button data-original-title="Popover in bottom" data-content="Popover body goes here! Popover body goes here!" data-placement="bottom" data-trigger="hover" class="btn popovers">
              Bottom
            </button>
          </p>
        </div>
      </div>
      <!-- end: POPOVERS PANEL -->
      <!-- start: PULSATE PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Pulsate</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <h5>Pulsate any page elements.</h5>
          <div id="pulsate-regular padding-5">
            Repeating Pulsate
          </div>
          <div class="space20"></div>
          <span class="label label-info"> NOTE!</span>
          <span> Pulsate works in Chrome, Safari and Firefox. Prettiest in Firefox since it supports Outline-radius </span>
        </div>
      </div>
      <!-- end: PULSATE PANEL -->
      <!-- start: MEDIA OBJECTS -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Media <span class="text-bold">Objects</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p class="space20">
            Abstract object styles for building various types of components (like blog comments, Tweets, etc) that feature a left or right aligned image alongside textual content.
          </p>
          <ul class="media-list">
            <li class="media">
              <a href="ui_elements.html#" class="pull-left">
                <img alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" class="media-object" data-src="holder.js/64x64" style="width: 64px; height: 64px;">
              </a>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                </p>
                <!-- Nested media object -->
                <div class="media">
                  <a href="ui_elements.html#" class="pull-left">
                    <img alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" class="media-object" data-src="holder.js/64x64" style="width: 64px; height: 64px;">
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">Nested media heading</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                    <!-- Nested media object -->
                    <div class="media">
                      <a href="ui_elements.html#" class="pull-left">
                        <img alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" class="media-object" data-src="holder.js/64x64" style="width: 64px; height: 64px;">
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">Nested media heading</h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Nested media object -->
                <div class="media">
                  <a href="ui_elements.html#" class="pull-left">
                    <img alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" class="media-object" data-src="holder.js/64x64" style="width: 64px; height: 64px;">
                  </a>
                  <div class="media-body">
                    <h4 class="media-heading">Nested media heading</h4>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                  </div>
                </div>
              </div>
            </li>
            <li class="media">
              <a href="ui_elements.html#" class="pull-right">
                <img alt="64x64" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgeD0iMzIiIHk9IjMyIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjEycHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9zdmc+" class="media-object" data-src="holder.js/64x64" style="width: 64px; height: 64px;">
              </a>
              <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- end: MEDIA OBJECTS -->
      <!-- start: THUMBNAILS -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Thumbnails</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Extend Bootstrap's grid system with the thumbnail component to easily display grids of images, videos, text, and more.
          </p>
          <h5>Default</h5>
          <div class="row">
            <div class="col-sm-6 col-md-3">
              <a href="ui_elements.html#" class="thumbnail">
                                          <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNlZWUiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0OS41IiB5PSI5MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjk5eDE4MDwvdGV4dD48L3N2Zz4=">
              </a>
            </div>
            <div class="col-sm-6 col-md-3">
              <a href="ui_elements.html#" class="thumbnail">
                                          <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNlZWUiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0OS41IiB5PSI5MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjk5eDE4MDwvdGV4dD48L3N2Zz4=">
              </a>
            </div>
            <div class="col-sm-6 col-md-3">
              <a href="ui_elements.html#" class="thumbnail">
                                          <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNlZWUiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0OS41IiB5PSI5MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjk5eDE4MDwvdGV4dD48L3N2Zz4=">
              </a>
            </div>
            <div class="col-sm-6 col-md-3">
              <a href="ui_elements.html#" class="thumbnail">
                                          <img data-src="holder.js/100%x180" alt="100%x180" style="height: 180px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNlZWUiLz48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI0OS41IiB5PSI5MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjk5eDE4MDwvdGV4dD48L3N2Zz4=">
              </a>
            </div>
          </div>
          <h5>Custom Content</h5>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="thumbnail">
                                          <img data-src="holder.js/100%x200" alt="100%x200" style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzgiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjM4IiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjExOSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE1cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjM4eDIwMDwvdGV4dD48L3N2Zz4=">
                <div class="caption">
                  <h3>Thumbnail label</h3>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a href="ui_elements.html#" class="btn btn-blue">
                      Button
                    </a>
                    <a href="ui_elements.html#" class="btn btn-default">
                      Button
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="thumbnail">
                                          <img data-src="holder.js/100%x200" alt="100%x200" style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzgiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjM4IiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjExOSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE1cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjM4eDIwMDwvdGV4dD48L3N2Zz4=">
                <div class="caption">
                  <h3>Thumbnail label</h3>
                  <p>
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </p>
                  <p>
                    <a href="ui_elements.html#" class="btn btn-red">
                      Button
                    </a>
                    <a href="ui_elements.html#" class="btn btn-default">
                      Button
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end: THUMBNAILS -->
    </div>
    <div class="col-md-6">
      <!-- start: PROGRESS BARS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Progress <span class="text-bold">Bars</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.
          </p>
          <div class="alert alert-block alert-warning">
            Progress bars use CSS3 gradients, transitions, and animations to achieve all their effects. These features are not supported in IE7-9 or older versions of Firefox. Versions earlier than Internet Explorer 10 and Opera 12 do not support animations.
          </div>
          <h5>Basic</h5>
          <div class="progress progress-xs">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
              <span class="sr-only"> 60% Complete</span>
            </div>
          </div>
          <div class="progress progress-sm">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only"> 40% Complete (success)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only"> 20% Complete</span>
            </div>
          </div>
          <div class="progress progress-sm">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only"> 60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only"> 80% Complete</span>
            </div>
          </div>
          <h5>Striped</h5>
          <div class="progress progress-striped progress-xs">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only"> 60% Complete (success)</span>
            </div>
          </div>
          <div class="progress progress-striped progress-sm">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only"> 40% Complete (success)</span>
            </div>
          </div>
          <div class="progress progress-striped">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only"> 20% Complete</span>
            </div>
          </div>
          <div class="progress progress-striped progress-sm">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only"> 60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress progress-striped">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only"> 80% Complete (danger)</span>
            </div>
          </div>
          <h5>Animated</h5>
          <div class="progress progress-striped active progress-xs">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only"> 60% Complete</span>
            </div>
          </div>
          <div class="progress progress-striped active progress-sm">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only"> 40% Complete (success)</span>
            </div>
          </div>
          <div class="progress progress-striped active">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only"> 20% Complete</span>
            </div>
          </div>
          <div class="progress progress-striped active progress-sm">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only"> 60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress progress-striped active">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only"> 80% Complete (danger)</span>
            </div>
          </div>
          <h5>Stacked</h5>
          <div class="progress">
            <div class="progress-bar progress-bar-success" style="width: 35%">
              <span class="sr-only"> 35% Complete (success)</span>
            </div>
            <div class="progress-bar progress-bar-warning" style="width: 20%">
              <span class="sr-only"> 20% Complete (warning)</span>
            </div>
            <div class="progress-bar progress-bar-danger" style="width: 10%">
              <span class="sr-only"> 10% Complete (danger)</span>
            </div>
          </div>
          <h5>With label</h5>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
              60%
            </div>
          </div>
          <h5>Animated When Appear With Custom Style</h5>
          <div class="progress progress-xs transparent-black no-radius">
            <div aria-valuetransitiongoal="60" class="progress-bar partition-blue animate-progress-bar"></div>
          </div>
          <div class="progress progress-sm transparent-black no-radius">
            <div aria-valuetransitiongoal="40" class="progress-bar partition-green animate-progress-bar"></div>
          </div>
          <div class="progress transparent-black no-radius">
            <div aria-valuetransitiongoal="20" class="progress-bar partition-azure animate-progress-bar"></div>
          </div>
          <div class="progress progress-sm transparent-black no-radius">
            <div aria-valuetransitiongoal="60" class="progress-bar partition-orange animate-progress-bar"></div>
          </div>
          <div class="progress transparent-black no-radius">
            <div aria-valuetransitiongoal="80" class="progress-bar partition-purple animate-progress-bar"></div>
          </div>
        </div>
      </div>
      <!-- end: PROGRESS BARS PANEL -->
      <!-- start: LABELS AND BADGES PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Labels and <span class="text-bold">Badges</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <h5>Available labels</h5>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Labels</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="label label-default"> Default</span></td>
                <td><code> label label-default </code></td>
              </tr>
              <tr>
                <td><span class="label label-success"> Success</span></td>
                <td><code> label label-success </code></td>
              </tr>
              <tr>
                <td><span class="label label-warning"> Warning</span></td>
                <td><code> label label-warning; </code></td>
              </tr>
              <tr>
                <td><span class="label label-danger"> Danger</span></td>
                <td><code> label label-danger </code></td>
              </tr>
              <tr>
                <td><span class="label label-info"> Info</span></td>
                <td><code> label label-info </code></td>
              </tr>
              <tr>
                <td><span class="label label-inverse"> Inverse</span></td>
                <td><code> label label-inverse </code></td>
              </tr>
            </tbody>
          </table>
          <h5>Available badges</h5>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="hidden-xs">Name</th>
                <th>Example</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="hidden-xs"> Default </td>
                <td><span class="badge"> 1</span></td>
                <td><code> badge badge-default </code></td>
              </tr>
              <tr>
                <td class="hidden-xs"> Success </td>
                <td><span class="badge badge-success"> 2</span></td>
                <td><code> badge badge-success </code></td>
              </tr>
              <tr>
                <td class="hidden-xs"> Warning </td>
                <td><span class="badge badge-warning"> 4</span></td>
                <td><code> badge badge-warning </code></td>
              </tr>
              <tr>
                <td class="hidden-xs"> Danger </td>
                <td><span class="badge badge-danger"> 6</span></td>
                <td><code> badge badge-danger </code></td>
              </tr>
              <tr>
                <td class="hidden-xs"> Info </td>
                <td><span class="badge badge-info"> 8</span></td>
                <td><code> badge badge-info </code></td>
              </tr>
              <tr>
                <td class="hidden-xs"> Inverse </td>
                <td><span class="badge badge-inverse"> 10</span></td>
                <td><code> badge badge-inverse </code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end: LABELS AND BADGES PANEL -->
      <!-- start: PAGINATION PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Pagination</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.
            Simple pagination, great for apps and search results. The large block is hard to miss, easily scalable, and provides large click areas.
          </p>
          <h5>Basic</h5>
          <div>
            <ul class="pagination pagination-lg margin-bottom-10">
              <li>
                <a href="ui_elements.html#">
                  Prev
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="pagination margin-bottom-10">
              <li>
                <a href="ui_elements.html#">
                  Prev
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  4
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="pagination pagination-sm margin-bottom-10">
              <li>
                <a href="ui_elements.html#">
                  Prev
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  4
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  Next
                </a>
              </li>
            </ul>
          </div>
          <h5>Colorful</h5>
          <div>
            <ul class="pagination pagination-blue margin-bottom-10">
              <li class="disabled">
                <a href="ui_elements.html#"><i class="fa fa-chevron-left"></i></a>
              </li>
              <li class="active">
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  4
                </a>
              </li>
              <li>
                <a href="ui_elements.html#"><i class="fa fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="pagination pagination-green margin-bottom-10">
              <li class="disabled">
                <a href="ui_elements.html#"><i class="fa fa-chevron-left"></i></a>
              </li>
              <li class="active">
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  4
                </a>
              </li>
              <li>
                <a href="ui_elements.html#"><i class="fa fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="pagination pagination-red margin-bottom-10">
              <li class="disabled">
                <a href="ui_elements.html#"><i class="fa fa-chevron-left"></i></a>
              </li>
              <li class="active">
                <a href="ui_elements.html#">
                  1
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  2
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  3
                </a>
              </li>
              <li>
                <a href="ui_elements.html#">
                  4
                </a>
              </li>
              <li>
                <a href="ui_elements.html#"><i class="fa fa-chevron-right"></i></a>
              </li>
            </ul>
          </div>
          <h5 class="border-bottom border-light padding-bottom-10">Pager Default</h5>
          <ul class="pager">
            <li>
              <a href="ui_elements.html#">
                Previous</a>
            </li>
            <li>
              <a href="ui_elements.html#">
                Next</a>
            </li>
          </ul>
          <h5 class="border-bottom border-light padding-bottom-10">Aligned links</h5>
          <ul class="pager">
            <li class="previous">
              <a href="ui_elements.html#">
                ← Older</a>
            </li>
            <li class="next">
              <a href="ui_elements.html#">
                Newer →</a>
            </li>
          </ul>
          <h5 class="border-bottom border-light padding-bottom-10">Optional disabled state</h5>
          <ul class="pager">
            <li class="previous disabled">
              <a href="ui_elements.html#">
                ← Older</a>
            </li>
            <li class="next">
              <a href="ui_elements.html#">
                Newer →</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end: PAGINATION PANEL -->
      <!-- start: DYNAMIC PAGINATION PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Dynamic <span class="text-bold">Pagination</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <h5>page-clicked Event</h5>
          <div id="paginator-content-1" class="alert alert-info">
            Click on the pages to trigger the page-clicked event.
          </div>
          <ul id="paginator-example-1" class="pagination"><li><a title="Go to first page">&lt;&lt;</a></li><li><a title="Go to previous page">&lt;</a></li><li><a title="Go to page 1">1</a></li><li><a title="Go to page 2">2</a></li><li class="active"><a title="Current page is 3">3</a></li><li><a title="Go to page 4">4</a></li><li><a title="Go to page 5">5</a></li><li><a title="Go to next page">&gt;</a></li><li><a title="Go to last page">&gt;&gt;</a></li></ul>
          <h5>page-changed Event</h5>
          <div id="paginator-content-2" class="alert alert-info">Current page changed, old: 1 new: 3</div>
          <ul id="paginator-example-2" class="pagination"><li><a title="Go to first page">&lt;&lt;</a></li><li><a title="Go to previous page">&lt;</a></li><li><a title="Go to page 1">1</a></li><li><a title="Go to page 2">2</a></li><li class="active"><a title="Current page is 3">3</a></li><li><a title="Go to page 4">4</a></li><li><a title="Go to page 5">5</a></li><li><a title="Go to next page">&gt;</a></li><li><a title="Go to last page">&gt;&gt;</a></li></ul>
          <div>
            Go to page:
            <select id="paginator-changed-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
      <!-- end: DYNAMIC PAGINATION PANEL -->
      <!-- start: WELLS -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Wells</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Use the well as a simple effect on an element to give it an inset effect.
          </p>
          <div class="well">
            Look, I'm in a well!
          </div>
          <div class="well well-lg">
            Look, I'm in a large well!
          </div>
          <div class="well well-sm">
            Look, I'm in a small well!
          </div>
        </div>
      </div>
      <!-- end: WELLS -->
      <!-- start: IMAGE SHAPES -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Image <span class="text-bold">shapes</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_elements.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_elements.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_elements.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_elements.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_elements.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Add classes to an <code> &lt;img&gt;</code>
            element to easily style images in any project.
          </p>
          <img data-src="holder.js/140x140" class="img-rounded" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+">
          <img data-src="holder.js/140x140" class="img-circle" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+">
          <img data-src="holder.js/140x140" class="img-thumbnail" alt="140x140" style="width: 140px; height: 140px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+">
        </div>
      </div>
      <!-- end: IMAGE SHAPES -->
    </div>
  </div>`;
    return html;
  }

}
