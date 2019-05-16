import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent() {
    const html = `<div class="row">
      <div class="col-md-12">
        <!-- start: TIMELINE PANEL -->
        <div class="panel panel-white">
          <div class="panel-heading">
            <h4 class="panel-title">Timeline</h4>
          </div>
          <div class="panel-body">
            <ul class="timeline-scrubber inner-element" style="z-index: 1; position: absolute; top: 60px;">
              <li class="selected">
                <a href="pages_timeline.html#november" data-separator="#november">
                  November</a>
              </li>
              <li class="clearfix">
                <a href="pages_timeline.html#october" data-separator="#october">
                  October</a>
              </li>
              <li class="clearfix">
                <a href="pages_timeline.html#september" data-separator="#september">
                  September</a>
              </li>
              <li class="clearfix">
                <a href="pages_timeline.html#august" data-separator="#august">
                  August</a>
              </li>
            </ul>
            <div id="timeline" class="demo1">
              <div class="timeline">
                <div class="spine"></div>
                <div class="date_separator" id="november" data-appear-top-offset="-400">
                  <span>NOVEMBER 2014</span>
                </div>
                <ul class="columns">
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">02</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-check fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-green">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-red">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">12</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-check-circle-o fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Test Solution</h4>
                      </div>
                      <div class="timeline_content"></div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-transparent-white">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="date_separator" id="october" data-appear-top-offset="-400">
                  <span>OCTOBER 2014</span>
                </div>
                <ul class="columns">
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-purple">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-transparent-white">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-green">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="date_separator" id="september" data-appear-top-offset="-400">
                  <span>September 2014</span>
                </div>
                <ul class="columns">
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-orange">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-transparent-white">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-blue">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="date_separator" id="august" data-appear-top-offset="-400">
                  <span>August 2014</span>
                </div>
                <ul class="columns">
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-orange">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_title">
                        <i class="fa fa-map-marker fa-2x pull-left fa-border"></i>
                        <h4 class="light-text no-margin padding-5">Appointment</h4>
                      </div>
                      <div class="timeline_content">
                        <div class="row">
                          <div class="col-md-3 col-xs-4"><img src="assets/images/photodune-4043508-3d-modern-office-room-l.jpg" alt="offce" class="img-responsive">
                          </div>
                          <div class="col-md-9 col-xs-8">
                            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </div>
                        </div>
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-transparent-white">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-azure">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline_element partition-white">
                      <div class="timeline_date">
                        <div>
                          <div class="inline-block">
                            <span class="day text-bold">05</span>
                          </div>
                          <div class="inline-block">
                            <span class="block week-day text-extra-large">Wensdey</span>
                            <span class="block month text-large text-light">november 2014</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline_content">
                        <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                      </div>
                      <div class="readmore">
                        <a href="pages_timeline.html#" class="btn btn-light-blue">
                          Read More <i class="fa fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end: TIMELINE PANEL -->
      </div>
    </div>`;
    return html;
  }

}
