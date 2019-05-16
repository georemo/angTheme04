import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-buttons',
  templateUrl: './ui-buttons.component.html',
  styleUrls: ['./ui-buttons.component.css']
})
export class UiButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d){

  }

  getButtons1(d){
    const html = `<div class="row">
    <div class="col-sm-6">
      <!-- start: BUTTONS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Buttons</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <p>
            Use any of the available button classes to quickly create a styled button.
          </p>
          <h5>Default <span class="text-bold">Buttons</span></h5>
          <p class="space20">
            <!-- Standard grey button with gradient -->
            <button type="button" class="btn btn-default">
              Default
            </button>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-primary">
              Primary
            </button>
            <!-- Indicates a successful or positive action -->
            <button type="button" class="btn btn-success">
              Success
            </button>
            <!-- Contextual button for informational alert messages -->
            <button type="button" class="btn btn-info">
              Info
            </button>
            <!-- Indicates caution should be taken with this action -->
            <button type="button" class="btn btn-warning">
              Warning
            </button>
            <!-- Indicates a dangerous or potentially negative action -->
            <button type="button" class="btn btn-danger">
              Danger
            </button>
            <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
            <button type="button" class="btn btn-link">
              Link
            </button>
          </p>
          <h5>Colorful <span class="text-bold">Buttons</span></h5>
          <p class="space20">
            <button type="button" class="btn btn-azure">
              Azure
            </button>
            <button type="button" class="btn btn-light-azure">
              Light Azure
            </button>
            <button type="button" class="btn btn-dark-azure">
              Dark Azure
            </button>
            <button type="button" class="btn btn-beige">
              Beige
            </button>
            <button type="button" class="btn btn-light-beige">
              Light Beige
            </button>
            <button type="button" class="btn btn-dark-beige">
              Dark Beige
            </button>
            <button type="button" class="btn btn-orange">
              Orange
            </button>
            <button type="button" class="btn btn-light-orange">
              Light Orange
            </button>
            <button type="button" class="btn btn-dark-orange">
              Dark Orange
            </button>
            <button type="button" class="btn btn-red">
              Red
            </button>
            <button type="button" class="btn btn-light-red">
              Light Red
            </button>
            <button type="button" class="btn btn-dark-red">
              Dark Red
            </button>
            <button type="button" class="btn btn-green">
              Green
            </button>
            <button type="button" class="btn btn-light-green">
              Light Green
            </button>
            <button type="button" class="btn btn-dark-green">
              Dark Green
            </button>
            <button type="button" class="btn btn-blue">
              Blue
            </button>
            <button type="button" class="btn btn-light-blue">
              Light Blue
            </button>
            <button type="button" class="btn btn-dark-blue">
              Dark Blue
            </button>
            <button type="button" class="btn btn-yellow">
              Yellow
            </button>
            <button type="button" class="btn btn-light-yellow">
              Light Yellow
            </button>
            <button type="button" class="btn btn-dark-yellow">
              Dark Yellow
            </button>
            <button type="button" class="btn btn-purple">
              Purple
            </button>
            <button type="button" class="btn btn-light-purple">
              Light Purple
            </button>
            <button type="button" class="btn btn-dark-purple">
              Dark Purple
            </button>
            <button type="button" class="btn btn-grey">
              Grey
            </button>
            <button type="button" class="btn btn-light-grey">
              Light Grey
            </button>
            <button type="button" class="btn btn-dark-grey">
              Dark Grey
            </button>
          </p>
          <h5>Square <span class="text-bold">Buttons</span></h5>
          <p>
            Do you like the square buttons? Add <code> .btn-squared </code>
            to it
          </p>
          <p class="space20">
            <!-- Standard grey button with gradient -->
            <button type="button" class="btn btn-default btn-squared">
              Squared
            </button>
            <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
            <button type="button" class="btn btn-primary btn-squared">
              Squared
            </button>
            <!-- Indicates a successful or positive action -->
            <button type="button" class="btn btn-success btn-squared btn-lg">
              Squared
            </button>
            <!-- Contextual button for informational alert messages -->
            <button type="button" class="btn btn-info btn-squared btn-lg">
              Squared <i class="fa fa-arrow-circle-right"></i>
            </button>
          </p>
          <h5>Disabled <span class="text-bold">State</span></h5>
          <p>
            Add the <code> disabled </code>
            attribute to <code> &lt;button&gt; </code>
            buttons.
          </p>
          <p class="space20">
            <button type="button" class="btn btn-primary" disabled="disabled">
              Disabled
            </button>
            <button type="button" class="btn btn-azure" disabled="disabled">
              Disabled
            </button>
            <button type="button" class="btn btn-beige" disabled="disabled">
              Disabled
            </button>
          </p>
          <h5>Sizes</h5>
          <p>
            Fancy larger or smaller buttons? Add <code> .btn-lg </code>
            , <code> .btn-sm </code>
            , or <code> .btn-xs </code>
            for additional sizes.
          </p>
          <p class="space20">
            <button type="button" class="btn btn-red btn-lg">
              Large button
            </button>
            <button type="button" class="btn btn-green btn-sm">
              Small button
            </button>
            <button type="button" class="btn btn-blue btn-xs">
              Extra small button
            </button>
          </p>
          <h5>Button <span class="text-bold">tags</span></h5>
          <p>
            Use the button classes on an <code> &lt;a&gt; </code>
            , <code> &lt;button&gt; </code>
            , or <code> &lt;input&gt; </code>
            element.
          </p>
          <p class="space20">
            <button class="btn btn-purple">
              Button <i class="fa fa-arrow-circle-right"></i>
            </button>
            <input type="submit" value="Submit" class="btn btn-red">
            <a class="btn btn-dark-grey" href="ui_buttons.html#">
              Go to link <i class="fa fa-arrow-circle-right"></i>
            </a>
          </p>
          <h5>Button <span class="text-bold">groups</span></h5>
          <p>
            Wrap a series of buttons with <code> .btn </code>
            in <code> .btn-group </code>
            .
          </p>
          <div class="space12">
            <div class="btn-group btn-group-lg">
              <a class="btn btn-default active" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-default hidden-xs" href="javascript:;">
                Settings
              </a>
              <a class="btn btn-default" href="javascript:;">
                Help
              </a>
              <a class="btn btn-default" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
          <div class="space12">
            <div class="btn-group">
              <a class="btn btn-azure active" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-azure hidden-xs" href="javascript:;">
                Settings
              </a>
              <a class="btn btn-azure" href="javascript:;">
                Help
              </a>
              <a class="btn btn-azure" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
          <div class="space12">
            <div class="btn-group btn-group-sm">
              <a class="btn btn-red active" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-red" href="javascript:;">
                Settings
              </a>
              <a class="btn btn-red" href="javascript:;">
                Help
              </a>
              <a class="btn btn-red" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
          <div class="space12">
            <div class="btn-group btn-group-xs">
              <a class="btn btn-green active" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-green" href="javascript:;">
                Settings
              </a>
              <a class="btn btn-green" href="javascript:;">
                Help
              </a>
              <a class="btn btn-green" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
          <div class="space12">
            <div class="btn-group-vertical">
              <a class="btn btn-orange" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-orange active" href="javascript:;">
                Settings
              </a>
              <a class="btn btn-orange" href="javascript:;">
                Help
              </a>
              <a class="btn btn-orange" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- end: BUTTONS PANEL-->
      <!-- start: BUTTONS WITH ICONS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Buttons with <span class="text-bold">icons</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <p>
            Examples to use buttons with font awesome icons.
          </p>
          <p>
            <a class="btn btn-primary" href="ui_buttons.html#"><i class="fa fa-share"></i></a>
            <a class="btn btn-red" href="ui_buttons.html#"><i class="fa fa-times fa fa-white"></i></a>
            <a class="btn btn-blue" href="ui_buttons.html#"><i class="fa fa-arrow-circle-right"></i></a>
            <a class="btn btn-green" href="ui_buttons.html#"><i class="fa fa-user fa fa-white"></i></a>
          </p>
          <p>
            Examples to use buttons with glyphicon halflings icons.
          </p>
          <p>
            <a class="btn btn-primary" href="ui_buttons.html#"><i class="glyphicon glyphicon-log-in"></i></a>
            <a class="btn btn-red" href="ui_buttons.html#"><i class="glyphicon glyphicon-remove-circle"></i></a>
            <a class="btn btn-blue" href="ui_buttons.html#"><i class="glyphicon glyphicon-thumbs-up"></i></a>
            <a class="btn btn-green" href="ui_buttons.html#"><i class="glyphicon glyphicon-ok-sign"></i></a>
          </p>
          <p>
            Buttons with both text and icon.
          </p>
          <p>
            <a class="btn btn-xs btn-red" href="ui_buttons.html#"><i class="fa fa-trash-o"></i> Delete Item</a>
            <a class="btn btn-primary" href="ui_buttons.html#"><i class="fa fa-plus"></i> Add Item</a>
            <a class="btn btn-purple">
              Listen <i class="fa fa-headphones"></i>
            </a>
          </p>
          <p>
            <a class="btn btn-blue" href="ui_buttons.html#"><i class="fa fa-plus"></i> Submit Entry</a>
            <a class="btn btn-purple btn-lg">
              pricing options <i class="fa fa-arrow-circle-right"></i>
            </a>
          </p>
          <p>
            Navigation icons.
          </p>
          <p>
            <a class="btn btn-light-grey" href="ui_buttons.html#"><i class="fa fa-arrow-circle-left"></i></a>
            <a class="btn btn-green" href="ui_buttons.html#"><i class="fa fa-arrow-circle-right"></i></a>
            <a class="btn btn-blue" href="ui_buttons.html#"><i class="fa fa-arrow-circle-up"></i></a>
            <a class="btn btn-dark-grey" href="ui_buttons.html#"><i class="fa fa-arrow-circle-down"></i></a>
          </p>
          <p>
            <a class="btn btn-light-grey btn-lg" href="ui_buttons.html#"><i class="fa fa-arrow-circle-left"></i></a>
            <a class="btn btn-green btn-lg" href="ui_buttons.html#"><i class="fa fa-arrow-circle-right"></i></a>
            <a class="btn btn-blue btn-lg" href="ui_buttons.html#"><i class="fa fa-arrow-circle-up"></i></a>
            <a class="btn btn-dark-grey btn-lg" href="ui_buttons.html#"><i class="fa fa-arrow-circle-down"></i></a>
          </p>
          <p>
            Toolbar icon example
          </p>
          <div class="space12">
            <div class="btn-group">
              <button class="btn btn-primary">
                <i class="fa fa-step-backward"></i>
              </button>
              <button class="btn btn-primary hidden-xs">
                <i class="fa fa-fast-backward"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-backward"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-play"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-stop"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-forward"></i>
              </button>
              <button class="btn btn-primary hidden-xs">
                <i class="fa fa-fast-forward"></i>
              </button>
              <button class="btn btn-primary">
                <i class="fa fa-step-forward"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end: BUTTONS WITH ICONS PANEL -->
      <!-- start: SOCIAL BUTTONS -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-external-link-square"></i>
          Social Buttons
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <p>
            Only Icons
          </p>
          <p>
            <a class="btn btn-social-icon btn-adn"><i class="fa fa-adn"></i></a>
            <a class="btn btn-social-icon btn-bitbucket"><i class="fa fa-bitbucket"></i></a>
            <a class="btn btn-social-icon btn-dropbox"><i class="fa fa-dropbox"></i></a>
            <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
            <a class="btn btn-social-icon btn-flickr"><i class="fa fa-flickr"></i></a>
            <a class="btn btn-social-icon btn-foursquare"><i class="fa fa-foursquare"></i></a>
            <a class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></a>
            <a class="btn btn-social-icon btn-google-plus"><i class="fa fa-google-plus"></i></a>
            <a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a>
            <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>
            <a class="btn btn-social-icon btn-microsoft"><i class="fa fa-windows"></i></a>
            <a class="btn btn-social-icon btn-openid"><i class="fa fa-openid"></i></a>
            <a class="btn btn-social-icon btn-reddit"><i class="fa fa-reddit"></i></a>
            <a class="btn btn-social-icon btn-soundcloud"><i class="fa fa-soundcloud"></i></a>
            <a class="btn btn-social-icon btn-tumblr"><i class="fa fa-tumblr"></i></a>
            <a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>
            <a class="btn btn-social-icon btn-vimeo"><i class="fa fa-vimeo-square"></i></a>
            <a class="btn btn-social-icon btn-vk"><i class="fa fa-vk"></i></a>
            <a class="btn btn-social-icon btn-yahoo"><i class="fa fa-yahoo"></i></a>
          </p>
          <p>
            Icons and Text
          </p>
          <p>
            <a class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>
            <a class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i> Sign in with Twitter</a>
            <a class="btn btn-social btn-flickr"><i class="fa fa-flickr"></i> Sign in with Flickr</a>
            <a class="btn btn-social btn-google-plus"><i class="fa fa-google-plus"></i> Sign in with Google</a>
          </p>
          <p>
            Animated Icons
          </p>
          <div class="social-icons">
            <ul>
              <li class="social-twitter tooltips" data-original-title="Twitter" data-placement="top">
                <a target="_blank" href="http://www.twitter.com">
                  Twitter
                </a>
              </li>
              <li class="social-dribbble tooltips" data-original-title="Dribbble" data-placement="top">
                <a target="_blank" href="http://dribbble.com">
                  Dribbble
                </a>
              </li>
              <li class="social-facebook tooltips" data-original-title="Facebook" data-placement="top">
                <a target="_blank" href="http://facebook.com">
                  Facebook
                </a>
              </li>
              <li class="social-google tooltips" data-original-title="Google" data-placement="top">
                <a target="_blank" href="http://google.com">
                  Google+
                </a>
              </li>
              <li class="social-linkedin tooltips" data-original-title="LinkedIn" data-placement="top">
                <a target="_blank" href="http://linkedin.com">
                  LinkedIn
                </a>
              </li>
              <li class="social-youtube tooltips" data-original-title="YouTube" data-placement="top">
                <a target="_blank" href="http://youtube.com/">
                  YouTube
                </a>
              </li>
              <li class="social-rss tooltips" data-original-title="RSS" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  RSS
                </a>
              </li>
              <li class="social-behance tooltips" data-original-title="Behance" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Behance
                </a>
              </li>
              <li class="social-dropbox tooltips" data-original-title="Dropbox" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Dropbox
                </a>
              </li>
              <li class="social-github tooltips" data-original-title="Github" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Github
                </a>
              </li>
              <li class="social-spotify tooltips" data-original-title="Spotify" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Spotify
                </a>
              </li>
              <li class="social-stumbleupon tooltips" data-original-title="Stumbleupon" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Stumbleupon
                </a>
              </li>
              <li class="social-skype tooltips" data-original-title="Skype" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Skype
                </a>
              </li>
              <li class="social-tumblr tooltips" data-original-title="Tumblr" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Tumblr
                </a>
              </li>
              <li class="social-spotify tooltips" data-original-title="Spotify" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Spotify
                </a>
              </li>
              <li class="social-vimeo tooltips" data-original-title="Vimeo" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Vimeo
                </a>
              </li>
              <li class="social-wordpress tooltips" data-original-title="Wordpress" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Wordpress
                </a>
              </li>
              <li class="social-xing tooltips" data-original-title="Xing" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Xing
                </a>
              </li>
              <li class="social-yahoo tooltips" data-original-title="Yahoo" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Yahoo
                </a>
              </li>
              <li class="social-vk tooltips" data-original-title="VK" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  VK
                </a>
              </li>
              <li class="social-instagram tooltips" data-original-title="Instagram" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Instagram
                </a>
              </li>
              <li class="social-reddit tooltips" data-original-title="Reddit" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Reddit
                </a>
              </li>
              <li class="social-flickr tooltips" data-original-title="Flickr" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Flickr
                </a>
              </li>
              <li class="social-foursquare tooltips" data-original-title="Foursquare" data-placement="top">
                <a target="_blank" href="ui_buttons.html#">
                  Foursquare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end: SOCIAL BUTTONS -->
    </div>
    <div class="col-sm-6">
      <!-- start: BUTTONS WITH LOADING INDICATOR PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Buttons with <span class="text-bold">loading</span> indicator</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <p>
            A UI concept which merges loading indicators into the action that invoked them. <span class="text-bold">Click the buttons to see the effect.</span>
          </p>
          <p>
            <button data-style="expand-left" class="ladda-button" data-color="green"><span class="ladda-label">
              expand <i class="fa fa-arrow-circle-left"></i>
            </span><span class="ladda-spinner"></span></button>
            <button data-style="expand-right" class="ladda-button" data-color="green"><span class="ladda-label">
              expand <i class="fa fa-arrow-circle-right"></i>
            </span><span class="ladda-spinner"></span></button>
            <button data-style="expand-up" class="ladda-button" data-color="green"><span class="ladda-label">
              expand <i class="fa fa-arrow-circle-up"></i>
            </span><span class="ladda-spinner"></span></button>
            <button data-style="expand-down" class="ladda-button" data-color="green"><span class="ladda-label">
              expand <i class="fa fa-arrow-circle-down"></i>
            </span><span class="ladda-spinner"></span></button>
          </p>
          <p>
            <button data-style="contract" class="ladda-button" data-color="red"><span class="ladda-label">
              contract
            </span><span class="ladda-spinner"></span></button>
            <button data-style="contract-overlay" class="ladda-button" data-color="red"><span class="ladda-label">
              overlay
            </span><span class="ladda-spinner"></span></button>
            <button data-style="zoom-in" class="ladda-button" data-color="red"><span class="ladda-label">
              zoom-in
            </span><span class="ladda-spinner"></span></button>
            <button data-style="zoom-out" class="ladda-button" data-color="red"><span class="ladda-label">
              zoom-out
            </span><span class="ladda-spinner"></span></button>
          </p>
          <p>
            <button data-style="slide-left" class="ladda-button" data-color="blue"><span class="ladda-label">
              slide-left
            </span><span class="ladda-spinner"></span></button>
            <button data-style="slide-right" class="ladda-button" data-color="blue"><span class="ladda-label">
              slide-right
            </span><span class="ladda-spinner"></span></button>
            <button data-style="slide-up" class="ladda-button" data-color="blue"><span class="ladda-label">
              slide-up
            </span><span class="ladda-spinner"></span></button>
            <button data-style="slide-down" class="ladda-button" data-color="blue"><span class="ladda-label">
              slide-down
            </span><span class="ladda-spinner"></span></button>
          </p>
          <h5> Built-in progress bar </h5>
          <p class="progress-demo">
            <button data-style="expand-right" class="ladda-button" data-color="mint"><span class="ladda-label">
              Expand
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
            <button data-style="contract" class="ladda-button" data-color="mint"><span class="ladda-label">
              Contract
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
          </p>
          <h5> Sizes </h5>
          <p class="progress-demo">
            <button class="ladda-button" data-color="mint" data-style="expand-right" data-size="xs"><span class="ladda-label">
              Extra Small
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
            <button class="ladda-button" data-color="mint" data-style="expand-right" data-size="s"><span class="ladda-label">
              Small
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
            <button class="ladda-button" data-color="mint" data-style="expand-right" data-size="l"><span class="ladda-label">
              Large
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
            <button class="ladda-button" data-color="mint" data-style="expand-right" data-size="xl"><span class="ladda-label">
              Extra Large
            </span><span class="ladda-spinner"></span><span class="ladda-spinner"></span></button>
          </p>
        </div>
      </div>
      <!-- end: BUTTONS WITH LOADING INDICATOR PANEL -->
      <!-- start: SWITCH PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Switch <span class="text-bold">Buttons</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <p>
            Turn checkboxes and radio buttons in toggle switches.
          </p>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 104px;"><div class="bootstrap-switch-container" style="width: 153px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-primary" style="width: 51px;">ON</span><span class="bootstrap-switch-label" style="width: 51px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-default" style="width: 51px;">OFF</span><input type="checkbox" class="make-switch" data-on-color="primary" checked=""></div></div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 104px;"><div class="bootstrap-switch-container" style="width: 153px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-info" style="width: 51px;">ON</span><span class="bootstrap-switch-label" style="width: 51px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-default" style="width: 51px;">OFF</span><input type="checkbox" class="make-switch" data-on-color="info" checked=""></div></div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 104px;"><div class="bootstrap-switch-container" style="width: 153px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-success" style="width: 51px;">YES</span><span class="bootstrap-switch-label" style="width: 51px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-danger" style="width: 51px;">NO</span><input type="checkbox" class="make-switch" data-on-color="success" data-off-color="danger" data-on-text="YES" data-off-text="NO" checked=""></div></div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 104px;"><div class="bootstrap-switch-container" style="width: 153px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-danger" style="width: 51px;">ON</span><span class="bootstrap-switch-label" style="width: 51px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-default" style="width: 51px;">OFF</span><input type="checkbox" class="make-switch" data-on-color="danger" checked=""></div></div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 104px;"><div class="bootstrap-switch-container" style="width: 153px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-warning" style="width: 51px;">ON</span><span class="bootstrap-switch-label" style="width: 51px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-default" style="width: 51px;">OFF</span><input type="checkbox" class="make-switch" data-on-color="warning" checked=""></div></div>
          <div class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-on bootstrap-switch-animate" style="width: 78px;"><div class="bootstrap-switch-container" style="width: 114px; margin-left: 0px;"><span class="bootstrap-switch-handle-on bootstrap-switch-primary" style="width: 38px;"><i class="fa fa-check"></i></span><span class="bootstrap-switch-label" style="width: 38px;">&nbsp;</span><span class="bootstrap-switch-handle-off bootstrap-switch-default" style="width: 38px;"><i class="fa fa-times"></i></span><input type="checkbox" class="make-switch" checked="" data-on-text="<i class='fa fa-check'></i>" data-off-text="<i class='fa fa-times'></i>"></div></div>
        </div>
      </div>
      <!-- end: SWITCH PANEL -->
      <!-- start: BLOCK BUTTONS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Block level <span class="text-bold">buttons</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body">
          <p>
            Create block level buttons—those that span the full width of a parent— by adding <code> .btn-block </code>
            .
          </p>
          <p>
            <button class="btn btn-blue btn-block">
              Button <i class="fa fa-arrow-circle-right"></i>
            </button>
            <input type="submit" value="Submit" class="btn btn-blue btn-block">
            <a class="btn btn-blue btn-block" href="ui_buttons.html#">
              Link <i class="fa fa-arrow-circle-right"></i>
            </a>
          </p>
          <p>
            <button class="btn btn-green btn-lg btn-block">
              Button (big) <i class="fa fa-arrow-circle-right"></i>
            </button>
            <input type="submit" value="Submit (big)" class="btn btn-green btn-lg btn-block">
            <a class="btn btn-green btn-lg btn-block" href="ui_buttons.html#">
              Link (big) <i class="fa fa-arrow-circle-right"></i>
            </a>
          </p>
          <div class="space12">
            <div class="btn-group btn-group-justified">
              <a class="btn btn-purple" href="javascript:;">
                Tools
              </a>
              <a class="btn btn-green active" href="javascript:;">
                Help
              </a>
              <a class="btn btn-blue" href="javascript:;">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- end: BLOCK BUTTONS PANEL -->
      <!-- start: DROPDOWNS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Dropdown</h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <div class="space20">
            <h5> Dropdown <span class="text-bold">buttons</span></h5>
            <p>
              Use any button to trigger a dropdown menu by placing it within a <code> .btn-group </code>
              and providing the proper menu markup.
            </p>
            <div class="btn-group">
              <a href="ui_buttons.html#" data-toggle="dropdown" class="btn btn-primary dropdown-toggle">
                Tools <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-red dropdown-toggle">
                Help <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-purple dropdown-toggle">
                Tools <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space20">
            <h5> Split button <span class="text-bold">dropdowns</span></h5>
            <p>
              Similarly, create split button dropdowns with the same markup changes, only with a separate button.
            </p>
            <div class="btn-group">
              <button type="button" class="btn btn-danger">
                Tools
              </button>
              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-purple">
                Help
              </button>
              <button type="button" class="btn btn-purple dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-green">
                Tools
              </button>
              <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space20">
            <h5> Dropdown button with <span class="text-bold">icons</span></h5>
            <p>
              Examples to use dropdown with font awesome icons.
            </p>
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-red dropdown-toggle">
                <i class="fa fa-user"></i>
                User <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-pencil"></i> Edit
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-trash-o"></i> Delete
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-ban"></i> Ban
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="i"></i> Make admin
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button type="button" class="btn btn-purple">
                <i class="fa fa-wrench"></i>
                Setting
              </button>
              <button data-toggle="dropdown" class="btn btn-purple dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-pencil"></i> Edit
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-trash-o"></i> Delete
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="fa fa-ban"></i> Ban
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="ui_buttons.html#">
                    <i class="i"></i> Make admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space20">
            <h5> Sizing </h5>
            <p>
              Button dropdowns work with buttons of all sizes.
            </p>
            <div class="btn-group">
              <a class="btn btn-grey btn-lg dropdown-toggle" data-toggle="dropdown" href="ui_buttons.html#">
                Large Button <span class="caret"></span>
              </a>
              <ul role="menu" class="dropdown-menu">
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-light-grey btn-sm dropdown-toggle" data-toggle="dropdown">
                Small Button <span class="caret"></span>
              </button>
              <ul role="menu" class="dropdown-menu">
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-dark-grey btn-xs dropdown-toggle" data-toggle="dropdown">
                Extra Small Button <span class="caret"></span>
              </button>
              <ul role="menu" class="dropdown-menu">
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header" role="presentation">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="space20">
            <h5> Dropdowns <span class="text-bold">button groups</span></h5>
            <div class="space12">
              <div class="btn-group">
                <div class="btn-group">
                  <button type="button" class="btn btn-azure dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group hidden-xs">
                  <button type="button" class="btn btn-azure dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-azure dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="space12">
              <div class="btn-group">
                <button type="button" class="btn btn-default">
                  1
                </button>
                <button type="button" class="btn btn-default">
                  2
                </button>
                <div class="btn-group">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="space12">
              <div class="btn-group-vertical">
                <div class="btn-group">
                  <button type="button" class="btn btn-dark-grey dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-dark-grey dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-dark-grey dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a href="ui_buttons.html#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="space20">
            <h5> Dropdown with <span class="text-bold">checkboxes</span></h5>
            <div class="space10">
              <div class="btn-group">
                <div class="btn-group">
                  <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <div class="dropdown-menu dropdown-enduring dropdown-checkboxes">
                    <label>
                      <input type="checkbox">
                      Option 1
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 2
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 3
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 4
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 5
                    </label>
                  </div>
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-green dropdown-toggle" data-toggle="dropdown">
                    Dropdown <span class="caret"></span>
                  </button>
                  <div class="dropdown-menu dropdown-enduring dropdown-checkboxes">
                    <label>
                      <input type="checkbox">
                      Option 1
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 2
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 3
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 4
                    </label>
                    <label>
                      <input type="checkbox">
                      Option 5
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <span class="label label-success"> NOTE: </span>
              &nbsp;
              By adding <code> dropdown-enduring </code>
              class you can avoid closing the dropdown on click
            </p>
          </div>
          <div class="space20">
            <h5> Dropup menu <span class="text-bold">options</span></h5>
            <div class="space10">
              <!-- /btn-group -->
              <div class="btn-group dropup">
                <button type="button" class="btn btn-dark-beige dropdown-toggle" data-toggle="dropdown">
                  Dropup <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="ui_buttons.html#">
                      Dropup link
                    </a>
                  </li>
                  <li>
                    <a href="ui_buttons.html#">
                      Dropup link
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /btn-group -->
              <div class="btn-group dropup">
                <button type="button" class="btn btn-red">
                  Dropup
                </button>
                <button type="button" class="btn btn-red dropdown-toggle" data-toggle="dropdown">
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a href="ui_buttons.html#">
                      Dropup link
                    </a>
                  </li>
                  <li>
                    <a href="ui_buttons.html#">
                      Dropup link
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /btn-group -->
            </div>
            <p>
              <span class="label label-success"> NOTE: </span>
              &nbsp;
              By adding <code> dropup </code>
              class you make dropup menu.
            </p>
          </div>
          <div class="space20">
            <h5> Dropdown <span class="text-bold"> Different Styles</span></h5>
            <div class="btn-group">
              <a href="ui_buttons.html#" data-toggle="dropdown" class="btn btn-dark-grey dropdown-toggle">
                Dark Left <span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-dark" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <a href="ui_buttons.html#" data-toggle="dropdown" class="btn btn-dark-grey dropdown-toggle">
                Dark Right <span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-dark pull-right" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <a href="ui_buttons.html#" data-toggle="dropdown" class="btn btn-light-grey dropdown-toggle">
                Light Left <span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-light" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <a href="ui_buttons.html#" data-toggle="dropdown" class="btn btn-light-grey dropdown-toggle">
                Light Right <span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Another action
                  </a>
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Something else here
                  </a>
                </li>
                <li class="divider"></li>
                <li role="presentation" class="dropdown-header">
                  Dropdown header
                </li>
                <li>
                  <a href="ui_buttons.html#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end: DROPDOWNS PANEL -->
    </div>
  </div>`;
    return html;
  }

  getButtons2(d){
    const html = `<div class="row">
    <div class="col-sm-12">
      <!-- start: RESPONSIVE ICONS BUTTONS PANEL -->
      <div class="panel panel-white">
        <div class="panel-heading">
          <i class="fa fa-external-link-square"></i>
          Responsive Icons Buttons
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_buttons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_buttons.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_buttons.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_buttons.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_buttons.html#"> <i class="fa fa-times"></i> </a>
          </div>
        </div>
        <div class="panel-body buttons-widget">
          <div class="row">
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-group"></i>
                Users <span class="badge badge-primary"> 4 </span>
              </button>
            </div>
            <div class="col-sm-4">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-comments-o"></i>
                Comments <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
            <div class="col-sm-3">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-shopping-cart"></i>
                Orders <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
            <div class="col-sm-3">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-barcode"></i>
                Products <span class="badge badge-warning"> 4 </span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-calendar"></i>
                Calendar <span class="badge badge-success"> 4 </span>
              </button>
            </div>
            <div class="col-sm-3">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-heart-o"></i>
                Favorites <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-thumbs-up"></i>
                Likes <span class="badge badge-warning"> 4 </span>
              </button>
            </div>
            <div class="col-sm-4">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-exclamation-triangle"></i>
                Warning <span class="badge badge-success"> 4 </span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-tasks"></i>
                Tasks <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-check"></i>
                To Do <span class="badge badge-success"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-list"></i>
                Tickets <span class="badge badge-warning"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-picture-o"></i>
                Pictures <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-upload"></i>
                Upload <span class="badge badge-success"> 4 </span>
              </button>
            </div>
            <div class="col-sm-2">
              <button class="btn btn-icon btn-block">
                <i class="fa fa-tags"></i>
                Tags <span class="badge badge-danger"> 4 </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end: RESPONSIVE ICONS BUTTONS PANEL -->
    </div>
  </div>`;
    return html;
  }

}
