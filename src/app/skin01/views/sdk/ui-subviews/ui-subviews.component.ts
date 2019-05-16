import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-subviews',
  templateUrl: './ui-subviews.component.html',
  styleUrls: ['./ui-subviews.component.css']
})
export class UiSubviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'Basic':
        html = this.getBasic(d);
        break;
      case 'Infinite':
        html = this.getInfinite(d);
        break;
      case 'CallBacks':
        html = this.getCallBacks(d);
        break;
      default:
        html = this.getBasic(d);
    }
    return html;
  }

  getBasic(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <div class="alert alert-info">
        A true alternative solution to the modal is the sub-view.
        Through the sub-view you can easily and quickly display any content, thus considerably improving the user’s experience.
        <br>
        You can choose to show the sub-view either in the right or in the top corner of your screen.
      </div>
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Basic <span class="text-bold">Subview</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_subview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_subview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_subview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_subview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green show-sv" href="ui_subview.html#example-subview-1" data-startfrom="right">
                  Show Right Subview <i class="fa fa-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                <p>
                  If you decide to show it in the right corner, remember to insert the class <code>show-sv</code> and the attribute <code>data-startFrom="right" </code> on the button.
                </p>
                <div class="highlight">
                  <pre><code class="html">&lt;a class="btn btn-green show-sv" href="#example-subview-1" data-startFrom="right"&gt;Show Right Subview &lt;i class="fa fa-chevron-right"&gt;&lt;/i&gt;&lt;/a&gt;</code></pre>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green show-sv" href="ui_subview.html#example-subview-1">
                  Show Top Subview <i class="fa fa-chevron-up"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                <p>
                  Otherwise, if you do not insert any attribute data, the sub-view will automatically appear in the top corner of the screen.
                </p>
                <div class="highlight">
                  <pre><code class="html">&lt;a class="btn btn-green show-sv" href="#example-subview-1"&gt;Show Top Subview &lt;i class="fa fa-chevron-up"&gt;&lt;/i&gt;&lt;/a&gt;
</code></pre>
                </div>
                <div class="alert alert-success">
                  The sub-view will automatically display the close button in the top right end corner of the screen. You can also create your customized close buttons with the class <code>hide-sv</code>
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

  getInfinite(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Infinite <span class="text-bold">Subview</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_subview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_subview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_subview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_subview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green show-sv" href="ui_subview.html#example-subview-2" data-startfrom="right">
                  Show Infinite Subview <i class="fa fa-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                <p>
                  If you recall a sub-view link in an already open sub-view, the content will be shown with a fade-out effect. Then, a back button will appear, allowing you to scroll back the contents.
                </p>
                <div class="alert alert-success">
                  You can also create your customized back buttons with the class <code>back-sv</code>
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

  getCallBacks(d) {
    const html = `<div class="row">
    <div class="col-md-12">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Callbacks</h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_subview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_subview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_subview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_subview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green sv-callback1" href="ui_subview.html#">
                  On Show <i class="fa fa-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                <p>
                  You can use the call-back functions when the sub-view is shown, when you click the close button or when you hide the sub-view content.
                  
                </p>
                <div class="highlight">
                  <pre><code class="havascript">$(".sv-callback1").on("click", function() {
$.subview({
content: "#example-subview-1",
onShow: function() {
bootbox.alert("Do something when the subview is shown!");
}
});
})</code></pre>
                </div>
                <div class="alert alert-success">
                  when the sbview appear, an alert displays the message "Do something when the subview is shown!"
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green sv-callback2" href="ui_subview.html#">
                  On Close <i class="fa fa-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                <p>
                  If you choose to associate a function to the close button, you can also program the automatic dismissal of the sub-view, by inserting the hidesubview function <code>$.hideSubview();</code> in the desired point.
                </p>
                <div class="highlight">
                  <pre><code class="javascript">$(".sv-callback2").on("click", function() {					
$.subview({
content: "#example-subview-1",
startFrom: "right",
onClose: function() {
bootbox.confirm("Are you sure you want to close subview?", function(result) {
if(result) {
$.hideSubview();
};
});						
}
});
});</code></pre>
                </div>
                <div class="alert alert-success">
                  before closing an alert message will ask for confirmation
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-3 col-sm-4 space20">
                <a class="btn btn-green sv-callback3" href="ui_subview.html#">
                  On Hide <i class="fa fa-chevron-right"></i>
                </a>
              </div>
              <div class="col-md-9 col-sm-8">
                
                <div class="highlight">
                  <pre><code class="javascript">$(".sv-callback3").on("click", function() {
$.subview({
content: "#example-subview-1",
startFrom: "right",
onHide: function() {
bootbox.alert("Do something when the subview is hidden!");
}
});
});</code></pre>
                </div>
                <div class="alert alert-success">
                  when the sbview disappear, an alert displays the message "Do something when the subview is hidden!" 
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
