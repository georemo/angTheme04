import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-typography',
  templateUrl: './ui-typography.component.html',
  styleUrls: ['./ui-typography.component.css']
})
export class UiTypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'Demo1':
        html = this.getDemo1(d);
        break;
      case 'Demo2':
        html = this.getDemo2(d);
        break;
      default:
        html = this.getDemo1(d);
    }
    return html;
  }

  getDemo1(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: GENERAL PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          General
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-6">
              <h3>Sample text with lead body</h3>
              <p class="lead">
                Lead body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
              </p>
            </div>
            <div class="col-md-6">
              <h3>Sample text</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.
              </p>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h3>Texts</h3>
              <p class="text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              </p>
              <p class="text-primary">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p class="text-success">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <p class="text-info">
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <p class="text-warning">
                Etiam porta sem malesuada magna mollis euismod.
              </p>
              <p class="text-danger">
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div class="col-md-6">
              <h3>Headings</h3>
              <h1>h1. Heading 1</h1>
              <h2>h2. Heading 2</h2>
              <h3>h3. Heading 3</h3>
              <h4>h4. Heading 4</h4>
              <h5>h5. Heading 5</h5>
              <h6>h6. Heading 6</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h3>Address</h3>
              <div class="well">
                <address>
                  <strong>Twitter, Inc.</strong>
                  <br>
                  795 Folsom Ave, Suite 600
                  <br>
                  San Francisco, CA 94107
                  <br>
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                  <strong>Full Name</strong>
                  <br>
                  <a href="mailto:#">
                    first.last@example.com
                  </a>
                </address>
              </div>
            </div>
            <div class="col-md-6">
              <h3>Some more text here</h3>
              <p>
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- end: GENERAL PANEL -->
    </div>
  </div>`;
    return html;
  }

  getDemo2(d) {
    const html = `<div class="row">
    <div class="col-md-8">
      <!-- start: BLOCKQUOTES PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-quote-left"></i>
          Blockquotes
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Duis mollis, est non commodo luctus, nisi erat porttitor ligula integer posuere erat a ante.
            </p>
          </blockquote>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </p>
            <small>Someone famous <cite title="Source Title">Source Title</cite></small>
          </blockquote>
          <div class="clearfix">
            <blockquote class="pull-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <small>Someone famous <cite title="Source Title">Source Title</cite></small>
            </blockquote>
          </div>
        </div>
      </div>
      <!-- end: BLOCKQUOTES PANEL -->
      <!-- start: WELLS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Wells
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="well well-lg">
            <h4>Look, I'm in a large well!</h4>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.Integer molestie lorem at massa Integer molestie lorem at massa Integer molestie lorem at massa Integer molestie lorem at massa.
          </div>
          <div class="well well-sm">
            <h4>Look, I'm in a small well!</h4>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Integer molestie lorem at massa Integer molestie lorem at massa  Integer molestie lorem at massa
          </div>
        </div>
      </div>
      <!-- end: WELLS PANEL -->
      <!-- start: DESCRIPTIONS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Descriptions
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <h4> Vertical description </h4>
          <dl>
            <dt>
              Description lists
            </dt>
            <dd>
              A description list is perfect for defining terms.
            </dd>
            <dt>
              Euismod
            </dt>
            <dd>
              Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
            </dd>
            <dd>
              Donec id elit non mi porta gravida at eget metus.
            </dd>
            <dt>
              Malesuada porta
            </dt>
            <dd>
              Etiam porta sem malesuada magna mollis euismod.
            </dd>
          </dl>
          <h4> Horizontal description </h4>
          <dl class="dl-horizontal">
            <dt>
              Description lists
            </dt>
            <dd>
              A description list is perfect for defining terms.
            </dd>
            <dt>
              Euismod
            </dt>
            <dd>
              Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
            </dd>
            <dd>
              Donec id elit non mi porta gravida at eget metus.
            </dd>
            <dt>
              Malesuada porta
            </dt>
            <dd>
              Etiam porta sem malesuada magna mollis euismod.
            </dd>
            <dt>
              Felis euismod semper eget lacinia
            </dt>
            <dd>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </dd>
          </dl>
        </div>
      </div>
      <!-- end: DESCRIPTIONS PANEL -->
    </div>
    <div class="col-md-4">
      <!-- start: UNORDERED LISTS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Unordered Lists
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <ul>
            <li>
              Lorem ipsum dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
            <li>
              Integer molestie lorem at massa
            </li>
            <li>
              Facilisis in pretium nisl aliquet
            </li>
            <li>
              Nulla volutpat aliquam velit
              <ul>
                <li>
                  Phasellus iaculis neque
                </li>
                <li>
                  Purus sodales ultricies
                </li>
                <li>
                  Vestibulum laoreet porttitor sem
                </li>
                <li>
                  Ac tristique libero volutpat at
                </li>
              </ul>
            </li>
            <li>
              Faucibus porta lacus fringilla vel
            </li>
            <li>
              Aenean sit amet erat nunc
            </li>
            <li>
              Eget porttitor lorem
            </li>
          </ul>
        </div>
      </div>
      <!-- end: UNORDERED LISTS PANEL -->
      <!-- start: ORDERED LISTS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Ordered Lists
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <ol>
            <li>
              Lorem ipsum dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
            <li>
              Integer molestie lorem at massa
            </li>
            <li>
              Facilisis in pretium nisl aliquet
            </li>
            <li>
              Nulla volutpat aliquam velit
            </li>
            <li>
              Faucibus porta lacus fringilla vel
            </li>
            <li>
              Aenean sit amet erat nunc
            </li>
            <li>
              Eget porttitor lorem
            </li>
          </ol>
        </div>
      </div>
      <!-- end: ORDERED LISTS PANEL -->
      <!-- start: UNSTYLED LISTS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Unstyled Lists
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <ul class="list-unstyled">
            <li>
              Lorem ipsum dolor sit amet
            </li>
            <li>
              Consectetur adipiscing elit
            </li>
            <li>
              Integer molestie lorem at massa
            </li>
            <li>
              Facilisis in pretium nisl aliquet
            </li>
            <li>
              Nulla volutpat aliquam velit
              <ul>
                <li>
                  Phasellus iaculis neque
                </li>
                <li>
                  Purus sodales ultricies
                </li>
                <li>
                  Vestibulum laoreet porttitor sem
                </li>
                <li>
                  Ac tristique libero volutpat at
                </li>
              </ul>
            </li>
            <li>
              Faucibus porta lacus fringilla vel
            </li>
            <li>
              Aenean sit amet erat nunc
            </li>
            <li>
              Eget porttitor lorem
            </li>
          </ul>
        </div>
      </div>
      <!-- end: UNSTYLED LISTS PANEL -->
      <!-- start: INLINE LIST PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-reorder"></i>
          Inline List
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_typography.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_typography.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_typography.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_typography.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_typography.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <ul class="list-inline">
            <li>
              Lorem ipsum
            </li>
            <li>
              Phasellus iaculis
            </li>
            <li>
              Nulla volutpat
            </li>
          </ul>
        </div>
      </div>
      <!-- end: INLINE LIST PANEL -->
    </div>
  </div>`;
    return html;
  }

}
