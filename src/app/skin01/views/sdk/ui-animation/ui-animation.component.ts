import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-animation',
  templateUrl: './ui-animation.component.html',
  styleUrls: ['./ui-animation.component.css']
})
export class UiAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(){
    const html = `<div class="row">
    <div class="col-sm-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Animation</h4>
                <div class="panel-tools">
                    <div class="dropdown">
                        <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                            <i class="fa fa-cog"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                            <li>
                                <a class="panel-collapse collapses" href="ui_animations.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                            </li>
                            <li>
                                <a class="panel-refresh" href="ui_animations.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
                            </li>
                            <li>
                                <a class="panel-config" href="ui_animations.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
                            </li>
                            <li>
                                <a class="panel-expand" href="ui_animations.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <p>
                    <code> animate.css</code>
                    is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.
                </p>
                <div class="text-center padding-20">
                    <h1 id="animationSandbox" class="text-extra-large text-red">Animate.css</h1>
                </div>
                <div class="text-center padding-20">
                    <p>
                        <select class="form-control inline-block js--animations width-200">
                            <optgroup label="Attention Seekers">
                                <option value="bounce">bounce</option>
                                <option value="flash">flash</option>
                                <option value="pulse">pulse</option>
                                <option value="rubberBand">rubberBand</option>
                                <option value="shake">shake</option>
                                <option value="swing">swing</option>
                                <option value="tada">tada</option>
                                <option value="wobble">wobble</option>
                            </optgroup>
                            <optgroup label="Bouncing Entrances">
                                <option value="bounceIn">bounceIn</option>
                                <option value="bounceInDown">bounceInDown</option>
                                <option value="bounceInLeft">bounceInLeft</option>
                                <option value="bounceInRight">bounceInRight</option>
                                <option value="bounceInUp">bounceInUp</option>
                            </optgroup>
                            <optgroup label="Bouncing Exits">
                                <option value="bounceOut">bounceOut</option>
                                <option value="bounceOutDown">bounceOutDown</option>
                                <option value="bounceOutLeft">bounceOutLeft</option>
                                <option value="bounceOutRight">bounceOutRight</option>
                                <option value="bounceOutUp">bounceOutUp</option>
                            </optgroup>
                            <optgroup label="Fading Entrances">
                                <option value="fadeIn">fadeIn</option>
                                <option value="fadeInDown">fadeInDown</option>
                                <option value="fadeInDownBig">fadeInDownBig</option>
                                <option value="fadeInLeft">fadeInLeft</option>
                                <option value="fadeInLeftBig">fadeInLeftBig</option>
                                <option value="fadeInRight">fadeInRight</option>
                                <option value="fadeInRightBig">fadeInRightBig</option>
                                <option value="fadeInUp">fadeInUp</option>
                                <option value="fadeInUpBig">fadeInUpBig</option>
                            </optgroup>
                            <optgroup label="Fading Exits">
                                <option value="fadeOut">fadeOut</option>
                                <option value="fadeOutDown">fadeOutDown</option>
                                <option value="fadeOutDownBig">fadeOutDownBig</option>
                                <option value="fadeOutLeft">fadeOutLeft</option>
                                <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                                <option value="fadeOutRight">fadeOutRight</option>
                                <option value="fadeOutRightBig">fadeOutRightBig</option>
                                <option value="fadeOutUp">fadeOutUp</option>
                                <option value="fadeOutUpBig">fadeOutUpBig</option>
                            </optgroup>
                            <optgroup label="Flippers">
                                <option value="flip">flip</option>
                                <option value="flipInX">flipInX</option>
                                <option value="flipInY">flipInY</option>
                                <option value="flipOutX">flipOutX</option>
                                <option value="flipOutY">flipOutY</option>
                            </optgroup>
                            <optgroup label="Lightspeed">
                                <option value="lightSpeedIn">lightSpeedIn</option>
                                <option value="lightSpeedOut">lightSpeedOut</option>
                            </optgroup>
                            <optgroup label="Rotating Entrances">
                                <option value="rotateIn">rotateIn</option>
                                <option value="rotateInDownLeft">rotateInDownLeft</option>
                                <option value="rotateInDownRight">rotateInDownRight</option>
                                <option value="rotateInUpLeft">rotateInUpLeft</option>
                                <option value="rotateInUpRight">rotateInUpRight</option>
                            </optgroup>
                            <optgroup label="Rotating Exits">
                                <option value="rotateOut">rotateOut</option>
                                <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                                <option value="rotateOutDownRight">rotateOutDownRight</option>
                                <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                                <option value="rotateOutUpRight">rotateOutUpRight</option>
                            </optgroup>
                            <optgroup label="Sliders">
                                <option value="slideInDown">slideInDown</option>
                                <option value="slideInLeft">slideInLeft</option>
                                <option value="slideInRight">slideInRight</option>
                                <option value="slideOutLeft">slideOutLeft</option>
                                <option value="slideOutRight">slideOutRight</option>
                                <option value="slideOutUp">slideOutUp</option>
                            </optgroup>
                            <optgroup label="Specials">
                                <option value="hinge">hinge</option>
                                <option value="rollIn">rollIn</option>
                                <option value="rollOut">rollOut</option>
                            </optgroup>
                        </select>
                        <button class="btn btn-transparent-red js--triggerAnimation">
                            Animate it
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`;
    return html;
  }

}
