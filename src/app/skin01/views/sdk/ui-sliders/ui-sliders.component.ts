import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sliders',
  templateUrl: './ui-sliders.component.html',
  styleUrls: ['./ui-sliders.component.css']
})
export class UiSlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'Range':
        html = this.getRange(d);
        break;
      case 'Bootstrap':
        html = this.getBootstrap(d);
        break;
      case 'CircleDials':
        html = this.getCircleDials(d);
        break;
      default:
        html = this.getRange(d);
    }
    return html;
  }

  getRange(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: RANGE SLIDERS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Range <span class="text-bold">Sliders</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_sliders.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_sliders.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_sliders.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_sliders.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_sliders.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            A powerful slider for selecting value ranges, supporting dates and more.
          </p>
          <table class="table sliders table-striped">
            <tbody>
              <tr>
                <td class="small-width">Basic</td>
                <td>
                <div class="example">
                  <div id="slider_example_1" class="slider-teal ui-rangeSlider ui-rangeSlider-withArrows" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 685.4px;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 431px;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Date slider</td>
                <td>
                <div class="example">
                  <div id="slider_example_3" class="slider-purple ui-rangeSlider ui-rangeSlider-withArrows ui-dateRangeSlider" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 470.316px; left: 70.2497px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 70.2497px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 534.566px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 761.75px;"><div class="ui-rangeSlider-label-value">2013-03-01</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 297.435px;"><div class="ui-rangeSlider-label-value">2014-03-31</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Delay out</td>
                <td>
                <div class="example">
                  <div id="slider_example_4" class="slider-green ui-rangeSlider ui-rangeSlider-withArrows" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 685.4px;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 431px;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Duration in/out</td>
                <td>
                <div class="example">
                  <div id="slider_example_5" class="slider-yellow ui-rangeSlider ui-rangeSlider-withArrows" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: none;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: none;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Disabled</td>
                <td>
                <div class="example">
                  <div id="slider_example_6" class="slider-teal ui-rangeSlider ui-rangeSlider-withArrows ui-rangeSlider-disabled" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 685.4px;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 431px;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Range</td>
                <td>
                <div class="example">
                  <div id="slider_example_7" class="slider-blue ui-rangeSlider ui-rangeSlider-withArrows" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 685.4px;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 431px;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Step</td>
                <td>
                <div class="example">
                  <div id="slider_example_8" class="slider-green ui-rangeSlider ui-rangeSlider-withArrows" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 685.4px;"><div class="ui-rangeSlider-label-value">20</div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 431px;"><div class="ui-rangeSlider-label-value">50</div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
              <tr>
                <td>Edit slider</td>
                <td>
                <div class="example">
                  <div id="slider_example_2" class="slider-bricky ui-rangeSlider ui-rangeSlider-withArrows ui-editRangeSlider" style="position: relative;"><div class="ui-rangeSlider-container" style="position: absolute; width: 868px;"><div class="ui-rangeSlider-innerBar" style="position: absolute; top: 0px; left: 0px; width: 856px;"></div><div style="position: absolute; top: 0px; width: 260.4px; left: 173.6px;" class="ui-rangeSlider-bar"></div><div style="position: absolute; top: 0px; left: 173.6px;" class="ui-rangeSlider-handle ui-rangeSlider-leftHandle"><div class="ui-rangeSlider-handle-inner"></div></div><div style="position: absolute; top: 0px; left: 428px;" class="ui-rangeSlider-handle ui-rangeSlider-rightHandle"><div class="ui-rangeSlider-handle-inner"></div></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-leftArrow" style="position: absolute; left: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-arrow ui-rangeSlider-rightArrow" style="position: absolute; right: 0px;"><div class="ui-rangeSlider-arrow-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-leftLabel" style="position: absolute; display: block; right: 671.4px;"><div class="ui-rangeSlider-label-value"><input type="text" class="ui-editRangeSlider-inputValue" name="slider_example_2left"></div><div class="ui-rangeSlider-label-inner"></div></div><div class="ui-rangeSlider-label ui-rangeSlider-rightLabel" style="position: absolute; display: block; right: 417px;"><div class="ui-rangeSlider-label-value"><input type="text" class="ui-editRangeSlider-inputValue" name="slider_example_2right"></div><div class="ui-rangeSlider-label-inner"></div></div></div>
                </div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end: RANGE SLIDERS PANEL -->
    </div>
  </div>`;
    return html;
  }

  getBootstrap(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: BOOTSTRAP SLIDER -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Boostrap <span class="text-bold">Sliders</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_sliders.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_sliders.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_sliders.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_sliders.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_sliders.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-4 margin-bottom-30">
              <table>
                <tbody>
                  <tr>
                    <td>
                    <div class="slider slider-blue">
                      <div class="slider slider-vertical"><div class="slider-track"><div class="slider-selection" style="top: 0%; height: 17.5%;"></div><div class="slider-handle round" style="top: 17.5%;"></div><div class="slider-handle round hide" style="top: 0%;"></div></div><div class="tooltip right hide" style="left: 100%; top: 25.25px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">-13</div></div><input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-13" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="hide"></div>
                    </div></td>
                    <td>
                    <div class="slider slider-red">
                      <div class="slider slider-vertical"><div class="slider-track"><div class="slider-selection" style="top: 0%; height: 22.5%;"></div><div class="slider-handle round" style="top: 22.5%;"></div><div class="slider-handle round hide" style="top: 0%;"></div></div><div class="tooltip right hide" style="left: 100%; top: 35.75px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">-11</div></div><input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-11" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="hide"></div>
                    </div></td>
                    <td>
                    <div class="slider slider-green">
                      <div class="slider slider-vertical"><div class="slider-track"><div class="slider-selection" style="top: 0%; height: 35%;"></div><div class="slider-handle round" style="top: 35%;"></div><div class="slider-handle round hide" style="top: 0%;"></div></div><div class="tooltip right hide" style="left: 100%; top: 62px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">-6</div></div><input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-6" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="hide"></div>
                    </div></td>
                    <td>
                    <div class="slider slider-orange">
                      <div class="slider slider-vertical"><div class="slider-track"><div class="slider-selection" style="top: 0%; height: 40%;"></div><div class="slider-handle round" style="top: 40%;"></div><div class="slider-handle round hide" style="top: 0%;"></div></div><div class="tooltip right hide" style="left: 100%; top: 72.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">-4</div></div><input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-4" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="hide"></div>
                    </div></td>
                    <td>
                    <div class="slider slider-purple">
                      <div class="slider slider-vertical"><div class="slider-track"><div class="slider-selection" style="top: 0%; height: 35%;"></div><div class="slider-handle round" style="top: 35%;"></div><div class="slider-handle round hide" style="top: 0%;"></div></div><div class="tooltip right hide" style="left: 100%; top: 62px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">-6</div></div><input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-6" data-slider-orientation="vertical" data-slider-selection="before" data-slider-tooltip="hide"></div>
                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-4 margin-bottom-30">
              <table>
                <tbody>
                  <tr>
                    <td>
                    <div class="slider slider-red">
                      <div class="slider slider-horizontal" style="width: 210px;"><div class="slider-track"><div class="slider-selection" style="left: 85.7143%; width: 14.2857%;"></div><div class="slider-handle round" style="left: 85.7143%;"></div><div class="slider-handle round hide" style="left: 100%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 165.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">60</div></div><input type="text" class="slider-element form-control" value="" data-slider-value="60" data-slider-step="1" data-slider-max="70" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-yellow">
                      <div class="slider slider-horizontal" style="width: 210px;"><div class="slider-track"><div class="slider-selection" style="left: 71.4286%; width: 28.5714%;"></div><div class="slider-handle round" style="left: 71.4286%;"></div><div class="slider-handle round hide" style="left: 100%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 135.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">50</div></div><input type="text" class="slider-element form-control" value="" data-slider-max="70" data-slider-step="1" data-slider-value="50" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-azure">
                      <div class="slider slider-horizontal" style="width: 210px;"><div class="slider-track"><div class="slider-selection" style="left: 62.8571%; width: 37.1429%;"></div><div class="slider-handle round" style="left: 62.8571%;"></div><div class="slider-handle round hide" style="left: 100%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 117.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">44</div></div><input type="text" class="slider-element form-control" value="" data-slider-max="70" data-slider-step="1" data-slider-value="44" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-green">
                      <div class="slider slider-horizontal" style="width: 210px;"><div class="slider-track"><div class="slider-selection" style="left: 42.8571%; width: 57.1429%;"></div><div class="slider-handle round" style="left: 42.8571%;"></div><div class="slider-handle round hide" style="left: 100%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 75.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">30</div></div><input type="text" class="slider-element form-control" value="" data-slider-max="70" data-slider-step="1" data-slider-value="30" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-purple">
                      <div class="slider slider-horizontal" style="width: 210px;"><div class="slider-track"><div class="slider-selection" style="left: 85.7143%; width: 14.2857%;"></div><div class="slider-handle round" style="left: 85.7143%;"></div><div class="slider-handle round hide" style="left: 100%;"></div></div><div class="tooltip top hide" style="top: -30px; left: 165.5px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">60</div></div><input type="text" class="slider-element form-control" value="" data-slider-value="60" data-slider-step="1" data-slider-max="70" data-slider-orientation="horizontal" data-slider-selection="after" data-slider-tooltip="hide" style=""></div>
                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-4 margin-bottom-30">
              <table>
                <tbody>
                  <tr>
                    <td>
                    <div class="slider slider-azure">
                      <div class="slider slider-horizontal" style="width: 162px;"><div class="slider-track"><div class="slider-selection" style="left: 24.2424%; width: 20.202%;"></div><div class="slider-handle round" style="left: 24.2424%;"></div><div class="slider-handle round" style="left: 44.4444%;"></div></div><div class="tooltip top" style="top: -30px; left: 39.1212px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">250 : 450</div></div><input type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-red">
                      <div class="slider slider-horizontal" style="width: 162px;"><div class="slider-track"><div class="slider-selection" style="left: 14.1414%; width: 50.505%;"></div><div class="slider-handle round" style="left: 14.1414%;"></div><div class="slider-handle round" style="left: 64.6465%;"></div></div><div class="tooltip top" style="top: -30px; left: 49.7273px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">150 : 650</div></div><input type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[150,650]" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-yellow">
                      <div class="slider slider-horizontal" style="width: 162px;"><div class="slider-track"><div class="slider-selection" style="left: 34.3434%; width: 50.505%;"></div><div class="slider-handle round" style="left: 34.3434%;"></div><div class="slider-handle round" style="left: 84.8485%;"></div></div><div class="tooltip top" style="top: -30px; left: 92.1515px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">350 : 850</div></div><input type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[350,850]" style=""></div>
                    </div></td>
                  </tr>
                                              <tr>
                    <td>
                    <div class="slider slider-green">
                      <div class="slider slider-horizontal" style="width: 162px;"><div class="slider-track"><div class="slider-selection" style="left: 24.2424%; width: 30.303%;"></div><div class="slider-handle round" style="left: 24.2424%;"></div><div class="slider-handle round" style="left: 54.5455%;"></div></div><div class="tooltip top" style="top: -30px; left: 49.7273px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">250 : 550</div></div><input type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,550]" style=""></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>
                    <div class="slider slider-purple">
                      <div class="slider slider-horizontal" style="width: 162px;"><div class="slider-track"><div class="slider-selection" style="left: 44.4444%; width: 20.202%;"></div><div class="slider-handle round" style="left: 44.4444%;"></div><div class="slider-handle round" style="left: 64.6465%;"></div></div><div class="tooltip top" style="top: -30px; left: 81.5455px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">450 : 650</div></div><input type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[450,650]" style=""></div>
                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- end: BOOTSTRAP SLIDER -->
    </div>
  </div>`;
    return html;
  }

  getCircleDials(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <!-- start: CIRCLE DIALS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Circle <span class="text-bold">Dials</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_sliders.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_sliders.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_sliders.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_sliders.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_sliders.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <p>
                Nice, downward compatible, touchable, jQuery dial
              </p>
            </div>
            <div class="col-md-4 text-center">
              <h4>× Disable display input</h4>
              <div style="display: inline; width: 100px; height: 200px;"><canvas width="200" height="400" style="width: 100px; height: 200px;"></canvas><input class="knob" data-width="100" data-displayinput="false" value="35" style="display: none; width: 0px; visibility: hidden;"></div>
            </div>
            <div class="col-md-4 text-center">
              <h4>× 'cursor' mode</h4>
              <div style="display: inline; width: 150px; height: 200px;"><canvas width="300" height="400" style="width: 150px; height: 200px;"></canvas><input class="knob" data-width="150" data-cursor="true" data-fgcolor="#222222" data-thickness=".3" value="29" style="width: 79px; height: 50px; position: absolute; vertical-align: middle; margin-top: 50px; margin-left: -114px; border: 0px none; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; font: bold 30px Arial; text-align: center; color: rgb(34, 34, 34); padding: 0px; -moz-appearance: none;"></div>
            </div>
            <div class="col-md-4 text-center">
              <h4>× Display previous value</h4>
              <div style="display: inline; width: 200px; height: 200px;"><canvas width="400" height="400" style="width: 200px; height: 200px;"></canvas><input class="knob" data-width="200" data-min="-100" data-displayprevious="true" value="44" style="width: 104px; height: 66px; position: absolute; vertical-align: middle; margin-top: 66px; margin-left: -152px; border: 0px none; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; font: bold 40px Arial; text-align: center; color: rgb(135, 206, 235); padding: 0px; -moz-appearance: none;"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 text-center">
              <h4>× Angle offset</h4>
              <div style="display: inline; width: 200px; height: 200px;"><canvas width="400" height="400" style="width: 200px; height: 200px;"></canvas><input class="knob" data-angleoffset="90" data-linecap="round" value="35" style="width: 104px; height: 66px; position: absolute; vertical-align: middle; margin-top: 66px; margin-left: -152px; border: 0px none; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; font: bold 40px Arial; text-align: center; color: rgb(135, 206, 235); padding: 0px; -moz-appearance: none;"></div>
            </div>
            <div class="col-md-4 text-center">
              <h4>× Angle offset and arc</h4>
              <div style="display: inline; width: 200px; height: 200px;"><canvas width="400" height="400" style="width: 200px; height: 200px;"></canvas><input class="knob" data-angleoffset="-125" data-anglearc="250" data-fgcolor="#66EE66" value="35" style="width: 104px; height: 66px; position: absolute; vertical-align: middle; margin-top: 66px; margin-left: -152px; border: 0px none; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; font: bold 40px Arial; text-align: center; color: rgb(102, 238, 102); padding: 0px; -moz-appearance: none;"></div>
            </div>
            <div class="col-md-4 text-center">
              <h4>× 5-digit values, step 1000</h4>
              <div style="display: inline; width: 200px; height: 200px;"><canvas width="400" height="400" style="width: 200px; height: 200px;"></canvas><input class="knob" data-min="-15000" data-displayprevious="true" data-max="15000" data-step="1000" value="-11000" style="width: 104px; height: 66px; position: absolute; vertical-align: middle; margin-top: 66px; margin-left: -152px; border: 0px none; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; font: bold 28px Arial; text-align: center; color: rgb(135, 206, 235); padding: 0px; -moz-appearance: none;"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- end: CIRCLE DIALS PANEL -->
    </div>
  </div>`;
    return html;
  }

}
