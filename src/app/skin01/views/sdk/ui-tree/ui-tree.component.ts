import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-tree',
  templateUrl: './ui-tree.component.html',
  styleUrls: ['./ui-tree.component.css']
})
export class UiTreeComponent implements OnInit {

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
    <div class="col-md-6">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Basic <span class="text-bold">Tree</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_treeview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_treeview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_treeview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_treeview.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_treeview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div id="tree" class="tree-demo jstree jstree-1 jstree-default" role="tree" aria-activedescendant="j1_6"><ul class="jstree-container-ul jstree-children"><li role="treeitem" aria-expanded="true" id="j1_1" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-yellow fa-lg jstree-themeicon-custom"></i>
                Root node 1
                </a><ul role="group" class="jstree-children"><li role="treeitem" data-jstree="{ &quot;selected&quot; : true }" id="j1_2" class="jstree-node  jstree-leaf" aria-selected="false"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-clicked" href="ui_treeview.html#"><i class="jstree-icon jstree-themeicon fa fa-folder text-yellow fa-lg jstree-themeicon-custom"></i>
                      Initially selected
                    </a></li><li role="treeitem" data-jstree="{ &quot;icon&quot; : &quot;fa fa-briefcase text-green &quot; }" id="j1_3" class="jstree-node  jstree-leaf" aria-selected="false"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-briefcase text-green  jstree-themeicon-custom"></i>
                    custom icon URL
                  </a></li><li role="treeitem" data-jstree="{ &quot;opened&quot; : true }" aria-expanded="true" id="j1_4" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-yellow fa-lg jstree-themeicon-custom"></i>
                    initially open
                    </a><ul role="group" class="jstree-children"><li role="treeitem" data-jstree="{ &quot;disabled&quot; : true }" id="j1_5" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-disabled" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-yellow fa-lg jstree-themeicon-custom"></i>
                        Disabled Node
                      </a></li><li role="treeitem" data-jstree="{ &quot;type&quot; : &quot;file&quot; }" id="j1_6" class="jstree-node  jstree-leaf jstree-last" aria-selected="false"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-file text-azure fa-lg jstree-themeicon-custom"></i>
                        Another node
                      </a></li></ul></li><li role="treeitem" data-jstree="{ &quot;icon&quot; : &quot;fa fa-warning text-red&quot; }" id="j1_7" class="jstree-node  jstree-leaf jstree-last" aria-selected="false"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-warning text-red jstree-themeicon-custom"></i>
                    Custom icon class (bootstrap)
                  </a></li></ul></li><li role="treeitem" data-jstree="{ &quot;type&quot; : &quot;file&quot; }" id="j1_8" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="http://www.jstree.com"><i class="jstree-icon jstree-themeicon fa fa-file text-azure fa-lg jstree-themeicon-custom"></i>
                  Clickanle link node
                </a></li></ul></div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title">Checkable <span class="text-bold">Tree</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_treeview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_treeview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_treeview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_treeview.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_treeview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div id="tree_2" class="tree-demo jstree jstree-2 jstree-default" role="tree" aria-activedescendant="j2_7"><ul class="jstree-container-ul jstree-children jstree-wholerow-ul jstree-no-dots"><li role="treeitem" aria-expanded="true" id="j2_1" class="jstree-node  jstree-open"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox jstree-undetermined"></i><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Same but with checkboxes</a><ul role="group" class="jstree-children"><li role="treeitem" id="j2_2" class="jstree-node  jstree-leaf"><div unselectable="on" class="jstree-wholerow jstree-wholerow-clicked" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-clicked" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>initially selected</a></li><li role="treeitem" id="j2_3" class="jstree-node  jstree-leaf"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-warning text-red jstree-themeicon-custom"></i>custom icon</a></li><li role="treeitem" aria-expanded="true" id="j2_4" class="jstree-node  jstree-open"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-folder text-red jstree-themeicon-custom"></i>initially open</a><ul role="group" class="jstree-children"><li role="treeitem" id="j2_5" class="jstree-node  jstree-leaf jstree-last"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Another node</a></li></ul></li><li role="treeitem" id="j2_6" class="jstree-node  jstree-leaf"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-warning text-red jstree-themeicon-custom"></i>custom icon</a></li><li role="treeitem" id="j2_7" class="jstree-node  jstree-leaf jstree-last" aria-selected="false"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-disabled" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-check text-green jstree-themeicon-custom"></i>disabled node</a></li></ul></li><li role="treeitem" id="j2_8" class="jstree-node  jstree-leaf jstree-last"><div unselectable="on" class="jstree-wholerow" style="height: 24px;">&nbsp;</div><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-checkbox"></i><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>And wholerow selection</a></li></ul></div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

  getDemo2(d) {
    const html = `<div class="row">
    <div class="col-md-6">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title"> Drag &amp; Drop <span class="text-bold">Tree</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_treeview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_treeview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_treeview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_treeview.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_treeview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <div id="tree_3" class="tree-demo jstree jstree-3 jstree-default" role="tree"><ul class="jstree-container-ul jstree-children"><li role="treeitem" aria-expanded="true" id="j3_1" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Parent Node</a><ul role="group" class="jstree-children"><li role="treeitem" id="j3_2" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-clicked" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Initially selected</a></li><li role="treeitem" id="j3_3" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-warning text-orange jstree-themeicon-custom"></i>Custom Icon</a></li><li role="treeitem" aria-expanded="true" id="j3_4" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-green jstree-themeicon-custom"></i>Initially open</a><ul role="group" class="jstree-children"><li role="treeitem" id="j3_5" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-file text-red jstree-themeicon-custom"></i>Another node</a></li></ul></li><li role="treeitem" id="j3_6" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-warning text-red jstree-themeicon-custom"></i>Another Custom Icon</a></li><li role="treeitem" id="j3_7" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-disabled" href="#"><i class="jstree-icon jstree-themeicon fa fa-check text-green jstree-themeicon-custom"></i>Disabled Node</a></li><li role="treeitem" aria-expanded="false" id="j3_8" class="jstree-node  jstree-closed jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-orange jstree-themeicon-custom"></i>Sub Nodes</a></li></ul></li><li role="treeitem" id="j3_14" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Another Node</a></li></ul></div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel panel-white">
        <div class="panel-heading">
          <h4 class="panel-title"> Search <span class="text-bold">Tree</span></h4>
          <div class="panel-tools">
            <div class="dropdown">
              <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                <i class="fa fa-cog"></i>
              </a>
              <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                <li>
                  <a class="panel-collapse collapses" href="ui_treeview.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                </li>
                <li>
                  <a class="panel-refresh" href="ui_treeview.html#">
                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                  </a>
                </li>
                <li>
                  <a class="panel-config" href="ui_treeview.html#panel-config" data-toggle="modal">
                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                  </a>
                </li>
                <li>
                  <a class="panel-expand" href="ui_treeview.html#">
                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                  </a>
                </li>
              </ul>
            </div>
            <a class="btn btn-xs btn-link panel-close" href="ui_treeview.html#">
              <i class="fa fa-times"></i>
            </a>
          </div>
        </div>
        <div class="panel-body">
          <input type="text" class="form-control margin-bottom-10" value="" id="tree_4_search" placeholder="Search">
          <div id="tree_4" class="tree-demo jstree jstree-4 jstree-default" role="tree"><ul class="jstree-container-ul jstree-children"><li role="treeitem" aria-expanded="true" id="j4_1" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Parent Node</a><ul role="group" class="jstree-children"><li role="treeitem" id="j4_2" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-clicked" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Initially selected</a></li><li role="treeitem" id="j4_3" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-warning text-orange jstree-themeicon-custom"></i>Custom Icon</a></li><li role="treeitem" aria-expanded="true" id="j4_4" class="jstree-node  jstree-open"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-green jstree-themeicon-custom"></i>Initially open</a><ul role="group" class="jstree-children"><li role="treeitem" id="j4_5" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-file text-red jstree-themeicon-custom"></i>Another node</a></li></ul></li><li role="treeitem" id="j4_6" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-warning text-red jstree-themeicon-custom"></i>Another Custom Icon</a></li><li role="treeitem" id="j4_7" class="jstree-node  jstree-leaf"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor  jstree-disabled" href="#"><i class="jstree-icon jstree-themeicon fa fa-check text-green jstree-themeicon-custom"></i>Disabled Node</a></li><li role="treeitem" aria-expanded="false" id="j4_8" class="jstree-node  jstree-closed jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-orange jstree-themeicon-custom"></i>Sub Nodes</a></li></ul></li><li role="treeitem" id="j4_14" class="jstree-node  jstree-leaf jstree-last"><i class="jstree-icon jstree-ocl"></i><a class="jstree-anchor" href="#"><i class="jstree-icon jstree-themeicon fa fa-folder text-red fa-lg jstree-themeicon-custom"></i>Another Node</a></li></ul></div>
        </div>
      </div>
    </div>
  </div>`;
    return html;
  }

}
