import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor() { }

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
            case 'Multiple1':
                html = this.getMultiple1(d);
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
        const html = `<div class="row">
    <div class="col-lg-8 col-md-7">
      <div class="panel panel-white">
        <div class="panel-heading border-light">
          <h4 class="panel-title">Earnings</h4>
          <ul class="panel-heading-tabs border-light">
            <li>
              <div id="reportrange" class="pull-right">
                <span>This Week </span><i class="fa fa-angle-down"></i>
              </div>
            </li>
            <li>
              <div class="rate">
                <i class="fa fa-caret-up text-green"></i><span class="value">15</span><span class="percentage">%</span>
              </div>
            </li>
            <li class="panel-tools">
              <div class="dropdown">
                <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                  <i class="fa fa-cog"></i>
                </a>
                <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                  <li>
                    <a class="panel-collapse collapses" href="index.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                  </li>
                  <li>
                    <a class="panel-refresh" href="index.html#">
                      <i class="fa fa-refresh"></i> <span>Refresh</span>
                    </a>
                  </li>
                  <li>
                    <a class="panel-config" href="index.html#panel-config" data-toggle="modal">
                      <i class="fa fa-wrench"></i> <span>Configurations</span>
                    </a>
                  </li>
                  <li>
                    <a class="panel-expand" href="index.html#">
                      <i class="fa fa-expand"></i> <span>Fullscreen</span>
                    </a>
                  </li>
                </ul>
              </div>
              <a class="btn btn-xs btn-link panel-close" href="index.html#">
                <i class="fa fa-times"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="panel-body no-padding partition-green">
          <div class="col-md-3 col-lg-2 no-padding">
            <div class="partition-body padding-15">
              <ul class="mini-stats">
                <li class="col-md-12 col-sm-4 col-xs-4 no-padding">
                  <div class="sparkline-bar sparkline-1">
                    <span><canvas style="display: inline-block; width: 41px; height: 24px; vertical-align: top;" width="41" height="24"></canvas></span>
                  </div>
                  <div class="values">
                    <strong>18304</strong>
                    Sales
                  </div>
                </li>
                <li class="col-md-12 col-sm-4 col-xs-4 no-padding">
                  <div class="sparkline-bar sparkline-2">
                    <span><canvas style="display: inline-block; width: 41px; height: 24px; vertical-align: top;" width="41" height="24"></canvas></span>
                  </div>
                  <div class="values">
                    <strong>$3,833</strong>
                    Earnings
                  </div>
                </li>
                <li class="col-md-12 col-sm-4 col-xs-4 no-padding">
                  <div class="sparkline-bar sparkline-3">
                    <span><canvas style="display: inline-block; width: 41px; height: 24px; vertical-align: top;" width="41" height="24"></canvas></span>
                  </div>
                  <div class="values">
                    <strong>$848</strong>
                    Referrals
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9 col-lg-10 no-padding partition-white">
            <div class="partition">
              <div class="partition-body padding-15">
                <div class="height-300">
                  <div id="chart1" class="with-3d-shadow with-transitions">
                    <svg><g class="nvd3 nv-wrap nv-linePlusBar" transform="translate(60,50)"><g><g class="nv-x nv-axis" transform="translate(0,235)"><g class="nvd3 nv-wrap nv-axis"><g><g class="tick major" style="opacity: 1;" transform="translate(17.359375,0)"><line y2="-235" x2="0"></line></g><g class="tick major" style="opacity: 1;" transform="translate(174.11979166666666,0)"><line y2="-235" x2="0"></line><text y="7" dy=".71em" style="text-anchor: middle;" x="0">05/07/2019</text></g><g class="tick major" style="opacity: 1;" transform="translate(330.8802083333333,0)"><line y2="-235" x2="0"></line><text y="7" dy=".71em" style="text-anchor: middle;" x="0">05/12/2019</text></g><path class="domain" d="M17.359375,0V0H487.640625V0"></path><text class="nv-axislabel" text-anchor="middle" y="36" x="243.8203125"></text></g><g class="nv-axisMaxMin" transform="translate(17.359375,0)"><text dy=".71em" y="7" transform="rotate(0 0,0)" style="text-anchor: middle;">05/02/2019</text></g><g class="nv-axisMaxMin" transform="translate(487.640625,0)"><text dy=".71em" y="7" transform="rotate(0 0,0)" style="text-anchor: middle;">05/17/2019</text></g></g></g><g class="nv-y1 nv-axis"><g class="nvd3 nv-wrap nv-axis"><g><g class="tick major" style="opacity: 1;" transform="translate(0,235)"><line x2="505" y2="0"></line><text x="-3" dy=".32em" style="text-anchor: end;" opacity="0" y="0">0</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,176.25)"><line x2="505" y2="0"></line><text x="-3" dy=".32em" style="text-anchor: end;" opacity="1" y="0">500,000</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,117.5)"><line x2="505" y2="0"></line><text x="-3" dy=".32em" style="text-anchor: end;" opacity="1" y="0">1,000,000</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,58.75)"><line x2="505" y2="0"></line><text x="-3" dy=".32em" style="text-anchor: end;" opacity="1" y="0">1,500,000</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,0)" opacity="0"><line x2="505" y2="0"></line><text x="-3" dy=".32em" style="text-anchor: end;" opacity="0" y="0">2,000,000</text></g><path class="domain" d="M0,0H0V235H0"></path><text class="nv-axislabel" style="text-anchor: middle;" transform="rotate(-90)" y="-63" x="-117.5"></text></g><g class="nv-axisMaxMin" transform="translate(0,235)"><text style="opacity: 1;" dy=".32em" y="0" x="-3" text-anchor="end">0</text></g><g class="nv-axisMaxMin" transform="translate(0,0)"><text style="opacity: 1;" dy=".32em" y="0" x="-3" text-anchor="end">2,000,000</text></g></g></g><g class="nv-y2 nv-axis" style="opacity: 1;" transform="translate(505,0)"><g class="nvd3 nv-wrap nv-axis"><g><g class="tick major" style="opacity: 1;" transform="translate(0,235)"><line x2="0" y2="0"></line><text x="3" dy=".32em" style="text-anchor: start;" opacity="0" y="0">$0</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,182.77777777777777)"><line x2="0" y2="0"></line><text x="3" dy=".32em" style="text-anchor: start;" opacity="1" y="0">$200</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,130.55555555555554)"><line x2="0" y2="0"></line><text x="3" dy=".32em" style="text-anchor: start;" opacity="1" y="0">$400</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,78.33333333333334)"><line x2="0" y2="0"></line><text x="3" dy=".32em" style="text-anchor: start;" opacity="1" y="0">$600</text></g><g class="tick major" style="opacity: 1;" transform="translate(0,26.111111111111114)"><line x2="0" y2="0"></line><text x="3" dy=".32em" style="text-anchor: start;" opacity="1" y="0">$800</text></g><path class="domain" d="M0,0H0V235H0"></path><text class="nv-axislabel" style="text-anchor: middle;" transform="rotate(90)" y="-63" x="117.5"></text></g><g class="nv-axisMaxMin" transform="translate(0,235)"><text style="opacity: 1; text-anchor: start;" dy=".32em" y="0" x="3">$0</text></g><g class="nv-axisMaxMin" transform="translate(0,0)"><text style="opacity: 1; text-anchor: start;" dy=".32em" y="0" x="3">$900</text></g></g></g><g class="nv-barsWrap"><g class="nvd3 nv-wrap nv-historicalBar-3642" transform="translate(0,0)"><defs><clipPath id="nv-chart-clip-path-3642"><rect width="505" height="235"></rect></clipPath></defs><g clip-path="url(#nv-chart-clip-path-3642)"><g class="nv-bars"><rect x="0" y="122.6492025" height="112.3507975" transform="translate(1.578125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-0" width="28.40625"></rect><rect x="0" y="179.7469175" height="55.253082500000005" transform="translate(33.140625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-1" width="28.40625"></rect><rect x="0" y="97.47036250000002" height="137.52963749999998" transform="translate(64.703125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-2" width="28.40625"></rect><rect x="0" y="96.24295749999999" height="138.7570425" transform="translate(96.265625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-3" width="28.40625"></rect><rect x="0" y="78.59093250000001" height="156.4090675" transform="translate(127.828125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-4" width="28.40625"></rect><rect x="0" y="128.647225" height="106.35277500000001" transform="translate(159.390625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-5" width="28.40625"></rect><rect x="0" y="73.08652750000002" height="161.91347249999998" transform="translate(190.953125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-6" width="28.40625"></rect><rect x="0" y="85.7871025" height="149.2128975" transform="translate(222.515625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-7" width="28.40625"></rect><rect x="0" y="97.92250250000001" height="137.0774975" transform="translate(254.078125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-8" width="28.40625"></rect><rect x="0" y="103.37650000000002" height="131.62349999999998" transform="translate(285.640625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-9" width="28.40625"></rect><rect x="0" y="129.108765" height="105.891235" transform="translate(317.203125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-10" width="28.40625"></rect><rect x="0" y="99.4119325" height="135.5880675" transform="translate(348.765625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-11" width="28.40625"></rect><rect x="0" y="153.97916750000002" height="81.02083249999998" transform="translate(380.328125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-12" width="28.40625"></rect><rect x="0" y="128.97176000000002" height="106.02823999999998" transform="translate(411.890625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-13" width="28.40625"></rect><rect x="0" y="133.11175500000002" height="101.88824499999998" transform="translate(443.453125,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-14" width="28.40625"></rect><rect x="0" y="68.84219250000001" height="166.1578075" transform="translate(475.015625,0)" fill="#DFDFDD" class="nv-bar positive nv-bar-0-15" width="28.40625"></rect></g></g></g></g><g class="nv-linesWrap"><g class="nvd3 nv-wrap nv-line" transform="translate(0,0)"><defs><clipPath id="nv-edge-clip-16456"><rect width="505" height="235"></rect></clipPath></defs><g clip-path=""><g class="nv-groups"><g style="stroke-opacity: 1; fill-opacity: 0.5; fill: rgb(230, 111, 111); stroke: rgb(230, 111, 111);" class="nv-group nv-series-0"><path class="nv-line" d="M17.359375,166.29800455489456L48.71145833333333,193.03689901638643L80.06354166666667,180.90242829855964L111.415625,145.0934116469657L142.76770833333333,207.5971147854756L174.11979166666666,138.5437683795546L205.471875,152.5271583169521L236.82395833333334,196.33570596793118L268.17604166666666,152.1502867278395L299.528125,140.13355119652408L330.8802083333333,194.88157831330824L362.23229166666664,209.03690591619528L393.584375,148.04198001073587L424.93645833333335,173.69750947010186L456.2885416666667,211.8761926184366L487.640625,149.06078718912948"></path></g></g><g class="nv-scatterWrap" clip-path=""><g class="nvd3 nv-wrap nv-scatter nv-chart-16456" transform="translate(0,0)"><defs><clipPath id="nv-edge-clip-16456"><rect width="505" height="235"></rect></clipPath><clipPath class="nv-point-clips" id="nv-points-clip-16456"><circle r="25" cx="17.35937502047046" cy="166.29800465286493"></circle><circle r="25" cx="48.711458421018385" cy="193.03689901661375"></circle><circle r="25" cx="80.06354174077498" cy="180.90242839217802"></circle><circle r="25" cx="111.4156250061127" cy="145.09341173948522"></circle><circle r="25" cx="142.76770842118026" cy="207.59711483089427"></circle><circle r="25" cx="174.11979173196895" cy="138.54376842439942"></circle><circle r="25" cx="205.471875088522" cy="152.5271583485813"></circle><circle r="25" cx="236.82395842396153" cy="196.3357060631065"></circle><circle r="25" cx="268.17604170833897" cy="152.1502867738143"></circle><circle r="25" cx="299.5281250242975" cy="140.1335512599714"></circle><circle r="25" cx="330.88020838964997" cy="194.88157832190677"></circle><circle r="25" cx="362.2322916735116" cy="209.03690598010243"></circle><circle r="25" cx="393.5843750764336" cy="148.0419800636498"></circle><circle r="25" cx="424.936458429485" cy="173.69750954694086"></circle><circle r="25" cx="456.28854167630993" cy="211.8761926652832"></circle><circle r="25" cx="487.6406250024719" cy="149.06078726685192"></circle></clipPath></defs><g clip-path=""><g class="nv-groups"><g style="stroke-opacity: 1; fill-opacity: 0.5; stroke: rgb(230, 111, 111); fill: rgb(230, 111, 111);" class="nv-group nv-series-0"><circle cx="17.359375" cy="166.29800455489456" r="2.256758334191025" class="nv-point nv-point-0"></circle><circle cx="48.71145833333333" cy="193.03689901638643" r="2.256758334191025" class="nv-point nv-point-1"></circle><circle cx="80.06354166666667" cy="180.90242829855964" r="2.256758334191025" class="nv-point nv-point-2"></circle><circle cx="111.415625" cy="145.0934116469657" r="2.256758334191025" class="nv-point nv-point-3"></circle><circle cx="142.76770833333333" cy="207.5971147854756" r="2.256758334191025" class="nv-point nv-point-4"></circle><circle cx="174.11979166666666" cy="138.5437683795546" r="2.256758334191025" class="nv-point nv-point-5"></circle><circle cx="205.471875" cy="152.5271583169521" r="2.256758334191025" class="nv-point nv-point-6"></circle><circle cx="236.82395833333334" cy="196.33570596793118" r="2.256758334191025" class="nv-point nv-point-7"></circle><circle cx="268.17604166666666" cy="152.1502867278395" r="2.256758334191025" class="nv-point nv-point-8"></circle><circle cx="299.528125" cy="140.13355119652408" r="2.256758334191025" class="nv-point nv-point-9"></circle><circle cx="330.8802083333333" cy="194.88157831330824" r="2.256758334191025" class="nv-point nv-point-10"></circle><circle cx="362.23229166666664" cy="209.03690591619528" r="2.256758334191025" class="nv-point nv-point-11"></circle><circle cx="393.584375" cy="148.04198001073587" r="2.256758334191025" class="nv-point nv-point-12"></circle><circle cx="424.93645833333335" cy="173.69750947010186" r="2.256758334191025" class="nv-point nv-point-13"></circle><circle cx="456.2885416666667" cy="211.8761926184366" r="2.256758334191025" class="nv-point nv-point-14"></circle><circle cx="487.640625" cy="149.06078718912948" r="2.256758334191025" class="nv-point nv-point-15"></circle></g></g><g class="nv-point-paths" clip-path="url(#nv-points-clip-16456)"><path class="nv-path-0" d="M27.03208726474604,-10.000000000000028L-9.999999999999993,-10.000000000000027L-10,183.52018762211782L19.43899419669511,195.60962831833413L52.65680897794109,156.66083390529673L58.72823184162503,130.593149327705Z"></path><path class="nv-path-1" d="M19.43899419669512,195.60962831833413L36.286114184497706,235L48.35244077837156,245L86.84748795230557,245L52.656808977941104,156.66083390529673Z"></path><path class="nv-path-2" d="M58.72823184162503,130.593149327705L52.656808977941104,156.66083390529673L86.84748795230558,245L89.81002045779017,245L116.85121301992785,181.48191187613912Z"></path><path class="nv-path-3" d="M126.9097891021555,-10L27.032087264745996,-10L58.728231841625025,130.593149327705L116.85121301992785,181.48191187613912L145.41413740734657,167.15464575139484Z"></path><path class="nv-path-4" d="M116.85121301992785,181.48191187613912L89.8100204577902,245L194.94826978578115,245L189.23367561642215,197.27122032945667L174.30333109235872,180.2711195260651L145.4141374073466,167.1546457513948Z"></path><path class="nv-path-5" d="M126.90978910215549,-10.000000000000057L145.41413740734657,167.15464575139484L174.30333109235872,180.2711195260651L236.1583025624976,41.58642060371389L238.24610261222605,27.154319875581468L238.71710241307554,-9.999999999999996Z"></path><path class="nv-path-6" d="M174.3033310923587,180.27111952606506L189.23367561642215,197.27122032945667L236.88903444828185,163.16612304997406L236.15830256249762,41.58642060371389Z"></path><path class="nv-path-7" d="M189.23367561642215,197.27122032945667L194.94826978578115,245L284.615683312071,245L283.8658463317267,196.49885910395136L236.88903444828188,163.1661230499741Z"></path><path class="nv-path-8" d="M238.24610261222605,27.154319875581468L236.15830256249762,41.58642060371389L236.88903444828185,163.16612304997406L283.86584633172663,196.49885910395133L296.2101997721425,178.38467702195877Z"></path><path class="nv-path-9" d="M349.67102714368724,-10L238.71710241307554,-10L238.24610261222605,27.154319875581468L296.2101997721425,178.38467702195877L346.0734384699181,149.82992353740713L358.5054012133054,1.9745371568654089L357.3655938457675,0Z"></path><path class="nv-path-10" d="M296.21019977214263,178.38467702195877L283.86584633172663,196.49885910395133L284.6156833120709,245L327.1235372356436,245L361.04396525048844,169.87096661941874L346.0734384699181,149.82992353740713Z"></path><path class="nv-path-11" d="M361.04396525048844,169.87096661941874L327.1235372356436,245L408.2176496119526,245L409.0104152801367,218.7382750852382L389.7995726467969,184.6516748151403Z"></path><path class="nv-path-12" d="M358.5054012133054,1.9745371568654089L346.073438469918,149.8299235374071L361.04396525048844,169.87096661941874L389.7995726467968,184.65167481514027L440.8978538228968,122.207531080975L441.4003718584617,75.81508136440368Z"></path><path class="nv-path-13" d="M389.79957264679683,184.6516748151403L409.0104152801367,218.73827508523817L461.7944082632582,175.39240752409174L440.8978538228968,122.207531080975Z"></path><path class="nv-path-14" d="M409.0104152801367,218.73827508523817L408.2176496119526,245L515,244.9999999999678L515,201.94809294817765L461.79440826325816,175.3924075240917Z"></path><path class="nv-path-15" d="M515,87.22050197140373L441.4003718584617,75.81508136440371L440.8978538228968,122.207531080975L461.79440826325816,175.39240752409174L515,201.9480929481922Z"></path><path class="nv-path-16" d="M-10.000000000000004,183.52018762211907L-10,235L36.286114184497706,235L19.43899419669511,195.60962831833413Z"></path><path class="nv-path-17" d="M515,0L357.3655938457675,0L358.5054012133052,1.9745371568654089L441.4003718584617,75.81508136440368L515,87.22050197140244Z"></path><path class="nv-path-18" d="M-10,235L-9.999999999999998,245L48.35244077837155,245L36.286114184497706,235Z"></path><path class="nv-path-19" d="M515,-10L349.67102714368724,-10L357.3655938457675,0L515,0Z"></path></g></g></g></g></g></g></g><g class="nv-legendWrap" transform="translate(252.5,-50)"><g class="nvd3 nv-legend" transform="translate(0,5)"><g transform="translate(114.5,5)"><g class="nv-series" transform="translate(0,5)"><circle style="stroke-width: 2; fill: rgb(223, 223, 221); stroke: rgb(223, 223, 221);" class="nv-legend-symbol" r="5"></circle><text text-anchor="start" class="nv-legend-text" dy=".32em" dx="8">Quantity (left axis)</text></g><g class="nv-series" transform="translate(0,25)"><circle style="stroke-width: 2; fill: rgb(230, 111, 111); stroke: rgb(230, 111, 111);" class="nv-legend-symbol" r="5"></circle><text text-anchor="start" class="nv-legend-text" dy=".32em" dx="8">Price (right axis)</text></g></g></g></g></g></g></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-5">
      <div class="panel panel-red panel-calendar">
        <div class="panel-heading border-light">
          <h4 class="panel-title">Appointments</h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-white">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="index.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="index.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="index.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="index.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="index.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div class="height-300">
            <div class="row">
              <div class="col-xs-6">
                <div class="actual-date">
                  <span class="actual-day">17</span>
                  <span class="actual-month">May</span>
                </div>
              </div>
              <div class="col-xs-6">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="clock-wrapper">
                      <div class="clock">
                        <div class="circle">
                          <div class="face">
                            <div id="hour" style="transform: rotate(387.55deg);"></div>
                            <div id="minute" style="transform: rotate(330.6deg);"></div>
                            <div id="second" style="transform: rotate(36deg);"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12">
                    <div class="weather text-light">
                      <i class="wi-day-sunny"></i>
                      25°
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="appointments border-top border-bottom border-light space15">
                    <a class="btn btn-sm owl-prev text-light">
                      <i class="fa fa-chevron-left"></i>
                    </a>
                    <div class="e-slider owl-carousel owl-theme" data-plugin-options="{&quot;transitionStyle&quot;: &quot;goDown&quot;, &quot;pagination&quot;: false}" style="opacity: 1; display: block;">
                      <div class="owl-wrapper-outer"><div class="owl-wrapper owl-origin" style="width: 1920px; left: 0px; display: block; transition: all 0ms ease 0s; transform: translate3d(-640px, 0px, 0px); transform-origin: 800px center 0px; perspective-origin: 800px center;"><div class="owl-item" style="width: 320px;"><div class="item">
                        <div class="inline-block padding-10 border-right border-light">
                          <span class="bold-text text-small"><i class="fa fa-clock-o"></i> 17:00</span>
                          <span class="text-light text-extra-small">1 hour</span>
                        </div>
                        <div class="inline-block padding-10">
                          <span class="bold-text text-small">NETWORKING</span>
                          <span class="text-light text-small">Out to design conference</span>
                        </div>
                      </div></div><div class="owl-item owl-goDown-out" style="width: 320px; position: relative; left: 320px;"><div class="item">
                        <div class="inline-block padding-10 border-right border-light">
                          <span class="bold-text text-small"><i class="fa fa-clock-o"></i> 18:30</span>
                          <span class="text-light text-extra-small">30 mins</span>
                        </div>
                        <div class="inline-block padding-10">
                          <span class="bold-text text-small">BOOTSTRAP SEMINAR</span>
                          <span class="text-light text-small">Problem Solving</span>
                        </div>
                      </div></div><div class="owl-item owl-goDown-in" style="width: 320px;"><div class="item">
                        <div class="inline-block padding-10 border-right border-light">
                          <span class="bold-text text-small"><i class="fa fa-clock-o"></i> 20:00</span>
                          <span class="text-light text-extra-small">2 hour</span>
                        </div>
                        <div class="inline-block padding-10">
                          <span class="bold-text text-small">Lunch with Nicole</span>
                          <span class="text-light text-small">Next on Tuesday</span>
                        </div>
                      </div></div></div></div>
                      
                      
                    </div>
                    <a class="btn btn-sm owl-next text-light"><i class="fa fa-chevron-right"></i> </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="pull-right">
                  <a href="index.html#newEvent" class="btn btn-sm btn-transparent-white new-event"><i class="fa fa-plus"></i> New Event </a>
                  <a href="index.html#showCalendar" class="btn btn-sm btn-transparent-white show-calendar"><i class="fa fa-calendar-o"></i> Calendar </a>
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

    getMultiple1(d) {
        const html = `${this.getDemo1(d) + this.getDemo3(d)}`;
        return html;
    }
}
