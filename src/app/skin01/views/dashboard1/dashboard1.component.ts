import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {

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
      case 'Demo3':
        html = this.getDemo3(d);
        break;
      default:
        html = this.getDemo1(d);
    }
    return html;
  }

  getDemo1(d) {
    const html = `<div class="row">
    <div class="col-md-6 col-lg-3 col-sm-6">
      <div class="panel panel-default panel-white core-box">
        <div class="panel-tools">
          <a href="index.html#" class="btn btn-xs btn-link panel-close">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="panel-body no-padding">
          <div class="partition-green padding-20 text-center core-icon">
            <i class="fa fa-bar-chart-o fa-2x icon-big"></i>
          </div>
          <div class="padding-20 core-content">
            <h3 class="title block no-margin">SEO</h3>
            <span class="subtitle"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
          </div>
        </div>
        <div class="panel-footer clearfix no-padding">
          <div class=""></div>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="More Options"><i class="fa fa-cog"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-blue" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add Content"><i class="fa fa-plus"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="View More"><i class="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 col-sm-6">
      <div class="panel panel-default panel-white core-box">
        <div class="panel-tools">
          <a href="index.html#" class="btn btn-xs btn-link panel-close">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="panel-body no-padding">
          <div class="partition-blue padding-20 text-center core-icon">
            <i class="fa fa-code fa-2x icon-big"></i>
          </div>
          <div class="padding-20 core-content">
            <h3 class="title block no-margin">Programming</h3>
            <span class="subtitle"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
          </div>
        </div>
        <div class="panel-footer clearfix no-padding">
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="More Options"><i class="fa fa-cog"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-blue" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add Content"><i class="fa fa-plus"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="View More"><i class="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 col-sm-6">
      <div class="panel panel-default panel-white core-box">
        <div class="panel-tools">
          <a href="index.html#" class="btn btn-xs btn-link panel-close">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="panel-body no-padding">
          <div class="partition-red padding-20 text-center core-icon">
            <i class="fa fa-desktop fa-2x icon-big"></i>
          </div>
          <div class="padding-20 core-content">
            <h3 class="title block no-margin">Web design</h3>
            <span class="subtitle"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
          </div>
        </div>
        <div class="panel-footer clearfix no-padding">
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="More Options"><i class="fa fa-cog"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-blue" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add Content"><i class="fa fa-plus"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="View More"><i class="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3 col-sm-6">
      <div class="panel panel-default panel-white core-box">
        <div class="panel-tools">
          <a href="index.html#" class="btn btn-xs btn-link panel-close">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="panel-body no-padding">
          <div class="partition-azure padding-20 text-center core-icon">
            <i class="fa fa-shopping-cart fa-2x icon-big"></i>
          </div>
          <div class="padding-20 core-content">
            <h3 class="title block no-margin">Orders</h3>
            <span class="subtitle"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>
          </div>
        </div>
        <div class="panel-footer clearfix no-padding">
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-green" data-toggle="tooltip" data-placement="top" title="" data-original-title="More Options"><i class="fa fa-cog"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-blue" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add Content"><i class="fa fa-plus"></i></a>
          <a href="index.html#" class="col-xs-4 padding-10 text-center text-white tooltips partition-red" data-toggle="tooltip" data-placement="top" title="" data-original-title="View More"><i class="fa fa-chevron-right"></i></a>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getDemo2(d) {
    const html = `<div class="row">
    <div class="col-md-6 col-lg-4 col-sm-6">
      <div class="panel panel-blue core-box">
        <div class="e-slider owl-carousel owl-theme" style="opacity: 1; display: block;">
          <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 2160px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);"><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold">
                  Working on
                </div>
                <div class="text-white space15">
                  Navigation Illustration (<i>corporate website redesign</i>)
                </div>
                <div class="progress progress-xs transparent-black no-radius space5">
                  <div aria-valuetransitiongoal="88" class="progress-bar progress-bar-success partition-white animate-progress-bar" style="width: 88%;" aria-valuenow="88"></div>
                </div>
                <div class="text-light">
                  Leave Time
                </div>
                <div class="text-white text-extra-large pull-left">
                  2h 38m
                </div>
                <div class="text-white text-large pull-right">
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-pause"></i> Pause</a>
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-check"></i> Complete</a>
                </div>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold">
                  Working on
                </div>
                <div class="text-white space15">
                  Prepare Commercial Offer For Mobile App
                </div>
                <div class="progress progress-xs transparent-black no-radius space5">
                  <div aria-valuetransitiongoal="59" class="progress-bar progress-bar-success partition-white animate-progress-bar" style="width: 59%;" aria-valuenow="59"></div>
                </div>
                <div class="text-light">
                  Leave Time
                </div>
                <div class="text-white text-extra-large pull-left">
                  8h 56m
                </div>
                <div class="text-white text-large pull-right">
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-pause"></i> Pause</a>
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-check"></i> Complete</a>
                </div>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold">
                  Working on
                </div>
                <div class="text-white space15">
                  Release iPhone Update
                </div>
                <div class="progress progress-xs transparent-black no-radius space5">
                  <div aria-valuetransitiongoal="78" class="progress-bar progress-bar-success partition-white animate-progress-bar" style="width: 78%;" aria-valuenow="78"></div>
                </div>
                <div class="text-light">
                  Leave Time
                </div>
                <div class="text-white text-extra-large pull-left">
                  48h 32m
                </div>
                <div class="text-white text-large pull-right">
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-pause"></i> Pause</a>
                  <a href="index.html#" class="btn btn-xs btn-light-blue"><i class="fa fa-check"></i> Complete</a>
                </div>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div></div></div>
          
          
        <div class="owl-controls clickable"><div class="owl-pagination"><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 col-sm-6">
      <div class="panel panel-green">
        <div class="e-slider owl-carousel owl-theme" style="opacity: 1; display: block;">
          <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 2160px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);"><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold space15">
                  SOCIAL
                </div>
                <div class="space5">
                  <i class="fa fa-github fa-4x pull-left"></i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                  <br>
                  Ut enim ad minim veniam...
                </div>
                <span class="text-light text-small block pull-right"> <i class="fa fa-clock-o"></i> 11 min ago </span>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold space15">
                  SOCIAL
                </div>
                <div class="space5">
                  <i class="fa fa-facebook fa-4x pull-left"></i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ibh euismod tincidunt.
                </div>
                <span class="text-light text-small block pull-right"> <i class="fa fa-clock-o"></i> 27 min ago </span>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div><div class="owl-item" style="width: 360px;"><div class="item">
            <div class="panel-body">
              <div class="core-box">
                <div class="text-dark text-bold space15">
                  SOCIAL
                </div>
                <div class="space5">
                  <i class="fa fa-twitter fa-4x pull-left"></i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ibh euismod tincidunt.
                </div>
                <span class="text-light text-small block pull-right"> <i class="fa fa-clock-o"></i> 56 min ago </span>
              </div>
            </div>
            <div class="padding-10">
              <span class="bold-text">1527</span><span class="text-light"> people share this goal </span>
              <a href="index.html#" class="view-more pull-right text-dark text-bold">
                View More <i class="fa fa-angle-right text-light"></i>
              </a>
            </div>
          </div></div></div></div>
          
          
        <div class="owl-controls clickable"><div class="owl-pagination"><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></div>
      </div>
    </div>
    <div class="col-md-12 col-lg-4 col-sm-12">
      <div id="notes">
        <div class="panel panel-note">
          <div class="e-slider owl-carousel owl-theme" style="opacity: 1; display: block;">
            <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 2160px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(0px, 0px, 0px);"><div class="owl-item" style="width: 360px;"><div class="item">
              <div class="panel-heading">
                <h4 class="no-margin">This is a Note</h4>
              </div>
              <div class="panel-body space10">
                <div class="note-short-content">
                  Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                </div>
                <div class="note-content">
                  Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                  Quis aute iure reprehenderit in <strong>voluptate velit</strong> esse cillum dolore eu fugiat nulla pariatur.
                  <br>
                  Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br>
                  Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci v'elit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                  <br>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut <strong>aliquid ex ea commodi consequatur?</strong>
                  <br>
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                  <br>
                  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  <br>
                  Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.
                  <br>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </div>
              </div>
              <div class="panel-footer">
                <div class="avatar-note"><img src="assets/images/avatar-2-small.jpg" alt="">
                </div>
                <span class="author-note">Nicole</span>
                <time class="timestamp" title="2014-02-18T00:00:00-05:00">5 years ago</time>
                <div class="note-options pull-right">
                  <a href="index.html#readNote" class="read-note" data-subviews-options="{&quot;startFrom&quot;: &quot;right&quot;, &quot;onShow&quot;: &quot;readNote(subViewElement)&quot;, &quot;onHide&quot;: &quot;hideNote()&quot;}"><i class="fa fa-chevron-circle-right"></i> Read</a><a href="index.html#" class="delete-note"><i class="fa fa-times"></i> Delete</a>
                </div>
              </div>
            </div></div><div class="owl-item" style="width: 360px;"><div class="item">
              <div class="panel-heading">
                <h4 class="no-margin">This is the second Note</h4>
              </div>
              <div class="panel-body space10">
                <div class="note-short-content">
                  Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem, quia voluptas sit...
                </div>
                <div class="note-content">
                  Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br>
                  Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci v'elit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                  <br>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut <strong>aliquid ex ea commodi consequatur?</strong>
                  <br>
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
                  <br>
                  Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.
                  <br>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </div>
              </div>
              <div class="panel-footer">
                <div class="note-options pull-right">
                  <a href="index.html#readNote" class="show-subviews read-note" data-subviews-options="{&quot;startFrom&quot;: &quot;right&quot;, &quot;onShow&quot;: &quot;readNote(subViewElement)&quot;, &quot;onHide&quot;: &quot;hideNote()&quot;}"><i class="fa fa-chevron-circle-right"></i> Read</a><a href="index.html#" class="delete-note"><i class="fa fa-times"></i> Delete</a>
                </div>
                <div class="avatar-note"><img src="assets/images/avatar-3-small.jpg" alt="">
                </div>
                <span class="author-note">Steven</span>
                <time class="timestamp" title="2014-02-18T00:00:00-05:00">5 years ago</time>
              </div>
            </div></div><div class="owl-item" style="width: 360px;"><div class="item">
              <div class="panel-heading">
                <h4 class="no-margin">This is yet another Note</h4>
              </div>
              <div class="panel-body space10">
                <div class="note-short-content">
                  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores...
                </div>
                <div class="note-content">
                  At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                  <br>
                  Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  <br>
                  Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci v'elit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                  <br>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut <strong>aliquid ex ea commodi consequatur?</strong>
                </div>
              </div>
              <div class="panel-footer">
                <div class="note-options pull-right">
                  <a href="index.html#readNote" class="show-subviews read-note" data-subviews-options="{&quot;startFrom&quot;: &quot;right&quot;, &quot;onShow&quot;: &quot;readNote(subViewElement)&quot;, &quot;onHide&quot;: &quot;hideNote()&quot;}"><i class="fa fa-chevron-circle-right"></i> Read</a><a href="index.html#" class="delete-note"><i class="fa fa-times"></i> Delete</a>
                </div>
                <div class="avatar-note"><img src="assets/images/avatar-4-small.jpg" alt="">
                </div>
                <span class="author-note">Ella</span>
                <time class="timestamp" title="2014-02-18T00:00:00-05:00">5 years ago</time>
              </div>
            </div></div></div></div>
            
            
          <div class="owl-controls clickable"><div class="owl-pagination"><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getDemo3(d) {
    const html = ``;
    return html;
  }

}
