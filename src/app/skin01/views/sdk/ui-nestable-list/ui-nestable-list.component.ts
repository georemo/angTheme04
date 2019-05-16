import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-nestable-list',
  templateUrl: './ui-nestable-list.component.html',
  styleUrls: ['./ui-nestable-list.component.css']
})
export class UiNestableListComponent implements OnInit {

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
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Nestable <span class="text-bold">List</span></h4>
          <div class="panel-tools">										
            <div class="dropdown">
            <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
              <i class="fa fa-cog"></i>
            </a>
            <ul class="dropdown-menu dropdown-light pull-right" role="menu">
              <li>
                <a class="panel-collapse collapses" href="ui_nestable.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
              </li>
              <li>
                <a class="panel-refresh" href="ui_nestable.html#"> <i class="fa fa-refresh"></i> <span>Refresh</span> </a>
              </li>
              <li>
                <a class="panel-config" href="ui_nestable.html#panel-config" data-toggle="modal"> <i class="fa fa-wrench"></i> <span>Configurations</span></a>
              </li>
              <li>
                <a class="panel-expand" href="ui_nestable.html#"> <i class="fa fa-expand"></i> <span>Fullscreen</span></a>
              </li>										
            </ul>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <p>
            You can drag and drop to rearrange the order. It even works well on touch-screens.
          </p>
          <h5>Serialised Output (per list)</h5>
          <textarea id="nestable-output"></textarea>
          <textarea id="nestable2-output"></textarea>
          <div id="nestable-menu">
            <button type="button" data-action="expand-all" class="btn btn-blue">
              Expand All
            </button>
            <button type="button" data-action="collapse-all" class="btn btn-green">
              Collapse All
            </button>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5> Draggable Handles 1 </h5>
              <!-- start: DRAGGABLE HANDLES 1 -->
              <div class="dd" id="nestable">
                <ol class="dd-list">
                  <li class="dd-item" data-id="1">
                    <div class="dd-handle">
                      Item 1
                    </div>
                  </li>
                  <li class="dd-item" data-id="2"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button>
                    <div class="dd-handle">
                      Item 2
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="3">
                        <div class="dd-handle">
                          Item 3
                        </div>
                      </li>
                      <li class="dd-item" data-id="4">
                        <div class="dd-handle">
                          Item 4
                        </div>
                      </li>
                      <li class="dd-item" data-id="5"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button>
                        <div class="dd-handle">
                          Item 5
                        </div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="6">
                            <div class="dd-handle">
                              Item 6
                            </div>
                          </li>
                          <li class="dd-item" data-id="7">
                            <div class="dd-handle">
                              Item 7
                            </div>
                          </li>
                          <li class="dd-item" data-id="8">
                            <div class="dd-handle">
                              Item 8
                            </div>
                          </li>
                        </ol>
                      </li>
                      <li class="dd-item" data-id="9">
                        <div class="dd-handle">
                          Item 9
                        </div>
                      </li>
                      <li class="dd-item" data-id="10">
                        <div class="dd-handle">
                          Item 10
                        </div>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="11">
                    <div class="dd-handle">
                      Item 11
                    </div>
                  </li>
                  <li class="dd-item" data-id="12">
                    <div class="dd-handle">
                      Item 12
                    </div>
                  </li>
                </ol>
              </div>
              <!-- end: DRAGGABLE HANDLES 1 -->
            </div>
            <div class="col-md-6">
              <h5> Draggable Handles 2 </h5>
              <!-- start: DRAGGABLE HANDLES 2 -->
              <div class="dd" id="nestable2">
                <ol class="dd-list">
                  <li class="dd-item" data-id="13">
                    <div class="dd-handle">
                      Item 13
                    </div>
                  </li>
                  <li class="dd-item" data-id="14">
                    <div class="dd-handle">
                      Item 14
                    </div>
                  </li>
                  <li class="dd-item" data-id="15"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button>
                    <div class="dd-handle">
                      Item 15
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="16">
                        <div class="dd-handle">
                          Item 16
                        </div>
                      </li>
                      <li class="dd-item" data-id="17">
                        <div class="dd-handle">
                          Item 17
                        </div>
                      </li>
                      <li class="dd-item" data-id="18">
                        <div class="dd-handle">
                          Item 18
                        </div>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <!-- end: DRAGGABLE HANDLES 2 -->
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h5> Draggable Handles 3 </h5>
              <!-- start: DRAGGABLE HANDLES 3 -->
              <div class="dd" id="nestable3">
                <ol class="dd-list">
                  <li class="dd-item dd3-item" data-id="13">
                    <div class="dd-handle dd3-handle"></div>
                    <div class="dd3-content">
                      Item 13
                    </div>
                  </li>
                  <li class="dd-item dd3-item" data-id="14">
                    <div class="dd-handle dd3-handle"></div>
                    <div class="dd3-content">
                      Item 14
                    </div>
                  </li>
                  <li class="dd-item dd3-item" data-id="15"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style="display: none;">Expand</button>
                    <div class="dd-handle dd3-handle"></div>
                    <div class="dd3-content">
                      Item 15
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item dd3-item" data-id="16">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">
                          Item 16
                        </div>
                      </li>
                      <li class="dd-item dd3-item" data-id="17">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">
                          Item 17
                        </div>
                      </li>
                      <li class="dd-item dd3-item" data-id="18">
                        <div class="dd-handle dd3-handle"></div>
                        <div class="dd3-content">
                          Item 18
                        </div>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
              <!-- end: DRAGGABLE HANDLES 3 PANEL -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getDemo2(d) {
    const html = ``;
    return html;
  }

}
