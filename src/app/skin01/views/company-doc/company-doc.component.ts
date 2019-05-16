import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-doc',
  templateUrl: './company-doc.component.html',
  styleUrls: ['./company-doc.component.css']
})
export class CompanyDocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getContent(d) {
    let html = '';
    switch (d.docType) {
      case 'letterHead':
        html = this.getLetterhead(d);
        break;
      case 'Invoice':
        html = this.getInvoice(d);
        break;
      default:
        html = this.getLetterhead(d);
    }
    return html;
  }

  getInvoice(d) {
    const html = `<div class="row">
        <div class="col-sm-12">
          <!-- start: FULL CALENDAR PANEL -->
          <div class="panel panel-white">
            <div class="panel-heading">
              <i class="fa fa-calendar"></i>
              Full Calendar
              <div class="panel-tools">
                <div class="dropdown">
                  <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                    <i class="fa fa-cog"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                    <li>
                      <a class="panel-collapse collapses" href="pages_calendar.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                    </li>
                    <li>
                      <a class="panel-refresh" href="pages_calendar.html#">
                        <i class="fa fa-refresh"></i> <span>Refresh</span>
                      </a>
                    </li>
                    <li>
                      <a class="panel-config" href="pages_calendar.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i> <span>Configurations</span>
                      </a>
                    </li>
                    <li>
                      <a class="panel-expand" href="pages_calendar.html#">
                        <i class="fa fa-expand"></i> <span>Fullscreen</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <a class="btn btn-xs btn-link panel-close" href="pages_calendar.html#">
                  <i class="fa fa-times"></i>
                </a>
              </div>
            </div>
            <div class="panel-body">
              <div class="col-sm-12 space20">
                <a href="pages_calendar.html#newFullEvent" class="btn btn-green add-event"><i class="fa fa-plus"></i> Add New Event</a>
              </div>
              <div class="col-sm-9">
                <div id="full-calendar" class="fc fc-ltr fc-unthemed"><div class="fc-toolbar"><div class="fc-left"><div class="fc-button-group"><button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left"><span class="fc-icon fc-icon-fa fa-chevron-left"></span></button><button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span class="fc-icon fc-icon-fa fa-chevron-right"></span></button></div><button type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" disabled="disabled">today</button></div><div class="fc-right"><div class="fc-button-group"><button type="button" class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">month</button><button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button><button type="button" class="fc-agendaDay-button fc-button fc-state-default fc-corner-right">day</button></div></div><div class="fc-center"><h2>May 2019</h2></div><div class="fc-clear"></div></div><div class="fc-view-container" style=""><div class="fc-view fc-month-view fc-basic-view" style=""><table><thead><tr><td class="fc-widget-header"><div class="fc-row fc-widget-header"><table><thead><tr><th class="fc-day-header fc-widget-header fc-sun">Sun</th><th class="fc-day-header fc-widget-header fc-mon">Mon</th><th class="fc-day-header fc-widget-header fc-tue">Tue</th><th class="fc-day-header fc-widget-header fc-wed">Wed</th><th class="fc-day-header fc-widget-header fc-thu">Thu</th><th class="fc-day-header fc-widget-header fc-fri">Fri</th><th class="fc-day-header fc-widget-header fc-sat">Sat</th></tr></thead></table></div></td></tr></thead><tbody><tr><td class="fc-widget-content"><div class="fc-day-grid-container" style=""><div class="fc-day-grid"><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 95px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2019-04-28"></td><td class="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2019-04-29"></td><td class="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2019-04-30"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2019-05-01"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2019-05-02"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2019-05-03"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2019-05-04"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-other-month fc-past" data-date="2019-04-28">28</td><td class="fc-day-number fc-mon fc-other-month fc-past" data-date="2019-04-29">29</td><td class="fc-day-number fc-tue fc-other-month fc-past" data-date="2019-04-30">30</td><td class="fc-day-number fc-wed fc-past" data-date="2019-05-01">1</td><td class="fc-day-number fc-thu fc-past" data-date="2019-05-02">2</td><td class="fc-day-number fc-fri fc-past" data-date="2019-05-03">3</td><td class="fc-day-number fc-sat fc-past" data-date="2019-05-04">4</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 95px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2019-05-05"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2019-05-06"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2019-05-07"></td><td class="fc-day fc-widget-content fc-wed fc-past" data-date="2019-05-08"></td><td class="fc-day fc-widget-content fc-thu fc-past" data-date="2019-05-09"></td><td class="fc-day fc-widget-content fc-fri fc-past" data-date="2019-05-10"></td><td class="fc-day fc-widget-content fc-sat fc-past" data-date="2019-05-11"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2019-05-05">5</td><td class="fc-day-number fc-mon fc-past" data-date="2019-05-06">6</td><td class="fc-day-number fc-tue fc-past" data-date="2019-05-07">7</td><td class="fc-day-number fc-wed fc-past" data-date="2019-05-08">8</td><td class="fc-day-number fc-thu fc-past" data-date="2019-05-09">9</td><td class="fc-day-number fc-fri fc-past" data-date="2019-05-10">10</td><td class="fc-day-number fc-sat fc-past" data-date="2019-05-11">11</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td class="fc-event-container" colspan="2"><a class="fc-day-grid-event fc-event fc-start fc-not-end event-offsite fc-draggable"><div class="fc-content"> <span class="fc-title">Bootstrap Seminar</span></div></a></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 95px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-past" data-date="2019-05-12"></td><td class="fc-day fc-widget-content fc-mon fc-past" data-date="2019-05-13"></td><td class="fc-day fc-widget-content fc-tue fc-past" data-date="2019-05-14"></td><td class="fc-day fc-widget-content fc-wed fc-today fc-state-highlight" data-date="2019-05-15"></td><td class="fc-day fc-widget-content fc-thu fc-future" data-date="2019-05-16"></td><td class="fc-day fc-widget-content fc-fri fc-future" data-date="2019-05-17"></td><td class="fc-day fc-widget-content fc-sat fc-future" data-date="2019-05-18"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-past" data-date="2019-05-12">12</td><td class="fc-day-number fc-mon fc-past" data-date="2019-05-13">13</td><td class="fc-day-number fc-tue fc-past" data-date="2019-05-14">14</td><td class="fc-day-number fc-wed fc-today fc-state-highlight" data-date="2019-05-15">15</td><td class="fc-day-number fc-thu fc-future" data-date="2019-05-16">16</td><td class="fc-day-number fc-fri fc-future" data-date="2019-05-17">17</td><td class="fc-day-number fc-sat fc-future" data-date="2019-05-18">18</td></tr></thead><tbody><tr><td class="fc-event-container"><a class="fc-day-grid-event fc-event fc-not-start fc-end event-offsite fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">Bootstrap Seminar</span></div><div class="fc-resizer"></div></a></td><td rowspan="2"></td><td rowspan="2"></td><td class="fc-event-container" rowspan="2"><a class="fc-day-grid-event fc-event fc-start fc-end event-job fc-draggable"><div class="fc-content"><span class="fc-time">8p</span> <span class="fc-title">Networking</span></div></a></td><td rowspan="2"></td><td rowspan="2"></td><td rowspan="2"></td></tr><tr><td class="fc-event-container"><a class="fc-day-grid-event fc-event fc-start fc-end event-generic fc-draggable"><div class="fc-content"><span class="fc-time">12p</span> <span class="fc-title">Lunch with Nicole</span></div></a></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 95px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-future" data-date="2019-05-19"></td><td class="fc-day fc-widget-content fc-mon fc-future" data-date="2019-05-20"></td><td class="fc-day fc-widget-content fc-tue fc-future" data-date="2019-05-21"></td><td class="fc-day fc-widget-content fc-wed fc-future" data-date="2019-05-22"></td><td class="fc-day fc-widget-content fc-thu fc-future" data-date="2019-05-23"></td><td class="fc-day fc-widget-content fc-fri fc-future" data-date="2019-05-24"></td><td class="fc-day fc-widget-content fc-sat fc-future" data-date="2019-05-25"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-future" data-date="2019-05-19">19</td><td class="fc-day-number fc-mon fc-future" data-date="2019-05-20">20</td><td class="fc-day-number fc-tue fc-future" data-date="2019-05-21">21</td><td class="fc-day-number fc-wed fc-future" data-date="2019-05-22">22</td><td class="fc-day-number fc-thu fc-future" data-date="2019-05-23">23</td><td class="fc-day-number fc-fri fc-future" data-date="2019-05-24">24</td><td class="fc-day-number fc-sat fc-future" data-date="2019-05-25">25</td></tr></thead><tbody><tr><td></td><td class="fc-event-container" colspan="5"><a class="fc-day-grid-event fc-event fc-start fc-end event-todo fc-draggable fc-resizable"><div class="fc-content"> <span class="fc-title">Corporate Website Redesign</span></div><div class="fc-resizer"></div></a></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 95px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-future" data-date="2019-05-26"></td><td class="fc-day fc-widget-content fc-mon fc-future" data-date="2019-05-27"></td><td class="fc-day fc-widget-content fc-tue fc-future" data-date="2019-05-28"></td><td class="fc-day fc-widget-content fc-wed fc-future" data-date="2019-05-29"></td><td class="fc-day fc-widget-content fc-thu fc-future" data-date="2019-05-30"></td><td class="fc-day fc-widget-content fc-fri fc-future" data-date="2019-05-31"></td><td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2019-06-01"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-future" data-date="2019-05-26">26</td><td class="fc-day-number fc-mon fc-future" data-date="2019-05-27">27</td><td class="fc-day-number fc-tue fc-future" data-date="2019-05-28">28</td><td class="fc-day-number fc-wed fc-future" data-date="2019-05-29">29</td><td class="fc-day-number fc-thu fc-future" data-date="2019-05-30">30</td><td class="fc-day-number fc-fri fc-future" data-date="2019-05-31">31</td><td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2019-06-01">1</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div><div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 98px;"><div class="fc-bg"><table><tbody><tr><td class="fc-day fc-widget-content fc-sun fc-other-month fc-future" data-date="2019-06-02"></td><td class="fc-day fc-widget-content fc-mon fc-other-month fc-future" data-date="2019-06-03"></td><td class="fc-day fc-widget-content fc-tue fc-other-month fc-future" data-date="2019-06-04"></td><td class="fc-day fc-widget-content fc-wed fc-other-month fc-future" data-date="2019-06-05"></td><td class="fc-day fc-widget-content fc-thu fc-other-month fc-future" data-date="2019-06-06"></td><td class="fc-day fc-widget-content fc-fri fc-other-month fc-future" data-date="2019-06-07"></td><td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2019-06-08"></td></tr></tbody></table></div><div class="fc-content-skeleton"><table><thead><tr><td class="fc-day-number fc-sun fc-other-month fc-future" data-date="2019-06-02">2</td><td class="fc-day-number fc-mon fc-other-month fc-future" data-date="2019-06-03">3</td><td class="fc-day-number fc-tue fc-other-month fc-future" data-date="2019-06-04">4</td><td class="fc-day-number fc-wed fc-other-month fc-future" data-date="2019-06-05">5</td><td class="fc-day-number fc-thu fc-other-month fc-future" data-date="2019-06-06">6</td><td class="fc-day-number fc-fri fc-other-month fc-future" data-date="2019-06-07">7</td><td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2019-06-08">8</td></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div></div></div></div></td></tr></tbody></table></div></div></div>
              </div>
              <div class="col-sm-3">
                <h4 class="space20">Draggable categories</h4>
                <div id="event-categories">
                  <div class="event-category event-generic ui-draggable" data-class="event-generic" style="position: relative;">
                    Generic
                  </div>
                  <div class="event-category event-home ui-draggable" data-class="event-home" style="position: relative;">
                    Home
                  </div>
                  <div class="event-category event-overtime ui-draggable" data-class="event-overtime" style="position: relative;">
                    Overtime
                  </div>
                  <div class="event-category event-job ui-draggable" data-class="event-job" style="position: relative;">
                    Job
                  </div>
                  <div class="event-category event-offsite ui-draggable" data-class="event-offsite" style="position: relative;">
                    Off-site work
                  </div>
                  <div class="event-category event-todo ui-draggable" data-class="event-todo" style="position: relative;">
                    To Do
                  </div>
                  <div class="event-category event-cancelled ui-draggable" data-class="event-cancelled" style="position: relative;">
                    Cancelled
                  </div>
                  <div class="checkbox">
                    <label>
                      <div class="icheckbox_minimal-grey" style="position: relative;"><input type="checkbox" class="grey" id="drop-remove" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: -10%; left: -10%; display: block; width: 120%; height: 120%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins></div>
                      Remove after drop
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end: FULL CALENDAR PANEL -->
        </div>
      </div>`;
    return html;
  }

  getLetterhead(d) {
    const html = ``;
    return html;
  }

}
