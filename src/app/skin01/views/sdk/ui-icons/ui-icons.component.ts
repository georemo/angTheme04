import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui-icons',
    templateUrl: './ui-icons.component.html',
    styleUrls: ['./ui-icons.component.css']
})
export class UiIconsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    getContent(d) {
        let html = '';
        switch (d.docType) {
            case 'Basic':
                html = this.getBasic(d);
                break;
            case 'BorderedPulled':
                html = this.getBorderedPulled(d);
                break;
            case 'FixedWidth':
                html = this.getFixedWidth(d);
                break;
            case 'Larger':
                html = this.getLarger(d);
                break;
            case 'List':
                html = this.getList(d);
                break;
            case 'New':
                html = this.getNew(d);
                break;
            case 'RotatedFlipped':
                html = this.getRotatedFlipped(d);
                break;
            case 'Spinning':
                html = this.getSpinning(d);
                break;
            case 'Stacked':
                html = this.getStacked(d);
                break;
            default:
                html = this.getBasic(d);
        }
        return html;
    }

    getBasic(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Basic <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <div class="dropdown">
                        <a data-toggle="dropdown" class="btn btn-xs dropdown-toggle btn-transparent-grey">
                            <i class="fa fa-cog"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-light pull-right" role="menu">
                            <li>
                                <a class="panel-collapse collapses" href="ui_icons.html#"><i class="fa fa-angle-up"></i> <span>Collapse</span> </a>
                            </li>
                            <li>
                                <a class="panel-refresh" href="ui_icons.html#">
                                    <i class="fa fa-refresh"></i> <span>Refresh</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                                    <i class="fa fa-wrench"></i> <span>Configurations</span>
                                </a>
                            </li>
                            <li>
                                <a class="panel-expand" href="ui_icons.html#">
                                    <i class="fa fa-expand"></i> <span>Fullscreen</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <p>
                        <i class="fa fa-camera-retro"></i> fa-camera-retro
                    </p>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        You can place Font Awesome icons just about anywhere using the CSS Prefix <code> fa </code>
                        and the icon's
                        name. Font Awesome is designed to be used with inline elements (we like the <code> &lt;i&gt; </code>
                        tag for
                        brevity, but using a <code> &lt;span&gt; </code>
                        is more semantically correct).
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-camera-retro
</code></pre>
                    </div>
                    <div class="alert alert-success">
                        <ul class="fa-ul">
                            <li>
                                <i class="fa fa-info-circle fa-lg fa-li"></i>
                                If you change the font-size of the icon's container, the icon gets bigger. Same things goes for color,
                                drop shadow, and anything else that gets inherited using CSS.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getLarger(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Larger <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <p>
                        <i class="fa fa-camera-retro fa-lg"></i> fa-lg
                    </p>
                    <p>
                        <i class="fa fa-camera-retro fa-2x"></i> fa-2x
                    </p>
                    <p>
                        <i class="fa fa-camera-retro fa-3x"></i> fa-3x
                    </p>
                    <p>
                        <i class="fa fa-camera-retro fa-4x"></i> fa-4x
                    </p>
                    <p>
                        <i class="fa fa-camera-retro fa-5x"></i> fa-5x
                    </p>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        To increase icon sizes relative to their container, use the <code> fa-lg </code>
                        (33% increase), <code> fa-2x </code>
                        , <code> fa-3x </code>
                        , <code> fa-4x </code>
                        , or <code> fa-5x </code>
                        classes.
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro fa-lg"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-lg
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro fa-2x"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-2x
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro fa-3x"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-3x
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro fa-4x"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-4x
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera-retro fa-5x"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-5x
</code></pre>
                    </div>
                    <div class="alert alert-success">
                        <ul class="fa-ul">
                            <li>
                                <i class="fa fa-exclamation-triangle fa-li fa-lg"></i>
                                If your icons are getting chopped off on top and bottom, make sure you have
                                sufficient line-height.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getFixedWidth(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Fixed Width <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <div class="list-group">
                        <a href="ui_icons.html#" class="list-group-item"><i class="fa fa-home fa-fw"></i>&nbsp; Home</a>
                        <a href="ui_icons.html#" class="list-group-item"><i class="fa fa-book fa-fw"></i>&nbsp; Library</a>
                        <a href="ui_icons.html#" class="list-group-item"><i class="fa fa-pencil fa-fw"></i>&nbsp; Applications</a>
                        <a href="ui_icons.html#" class="list-group-item"><i class="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
                    </div>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        Use <code> fa-fw </code> to set icons at a fixed width. Great to use when different icon widths throw off alignment.
                        Especially useful in things like nav lists &amp; list groups.
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"list-group"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"list-group-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-home fa-fw"</span><span class="nt">&gt;&lt;/i&gt;</span><span class="ni">&amp;nbsp;</span> Home<span class="nt">&lt;/a&gt;</span>
                        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"list-group-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-book fa-fw"</span><span class="nt">&gt;&lt;/i&gt;</span><span class="ni">&amp;nbsp;</span> Library<span class="nt">&lt;/a&gt;</span>
                        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"list-group-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-pencil fa-fw"</span><span class="nt">&gt;&lt;/i&gt;</span><span class="ni">&amp;nbsp;</span> Applications<span class="nt">&lt;/a&gt;</span>
                        <span class="nt">&lt;a</span> <span class="na">class=</span><span class="s">"list-group-item"</span> <span class="na">href=</span><span class="s">"#"</span><span class="nt">&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-cog fa-fw"</span><span class="nt">&gt;&lt;/i&gt;</span><span class="ni">&amp;nbsp;</span> Settings<span class="nt">&lt;/a&gt;</span>
<span class="nt">&lt;/div&gt;</span>
</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getList(d) {
        const html = `<div class="row">
      <div class="col-md-12">
          <div class="panel panel-white">
              <div class="panel-heading">
                  <h4 class="panel-title">List <span class="text-bold">Icons</span></h4>
                  <div class="panel-tools">
                      <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                      </a>
                      <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                          <i class="fa fa-wrench"></i>
                      </a>
                      <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                          <i class="fa fa-refresh"></i>
                      </a>
                      <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                          <i class="fa fa-resize-full"></i>
                      </a>
                      <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                          <i class="fa fa-times"></i>
                      </a>
                  </div>
              </div>
              <div class="panel-body">
                  <div class="col-md-3 col-sm-4">
                      <ul class="fa-ul">
                          <li>
                              <i class="fa-li fa fa-check-square"></i>List icons
                          </li>
                          <li>
                              <i class="fa-li fa fa-check-square"></i>can be used
                          </li>
                          <li>
                              <i class="fa-li fa fa-spinner fa-spin"></i>as bullets
                          </li>
                          <li>
                              <i class="fa-li fa fa-square"></i>in lists
                          </li>
                      </ul>
                  </div>
                  <div class="col-md-9 col-sm-8">
                      <p>
                          Use <code> fa-ul </code>
                          and <code> fa-li </code>
                          to easily replace default bullets in unordered lists.
                      </p>
                      <div class="highlight">
                          <pre><code class="html"><span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"fa-ul"</span><span class="nt">&gt;</span>
                          <span class="nt">&lt;li&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa-li fa fa-check-square"</span><span class="nt">&gt;&lt;/i&gt;</span>List icons<span class="nt">&lt;/li&gt;</span>
                          <span class="nt">&lt;li&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa-li fa fa-check-square"</span><span class="nt">&gt;&lt;/i&gt;</span>can be used<span class="nt">&lt;/li&gt;</span>
                          <span class="nt">&lt;li&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa-li fa fa-spinner fa-spin"</span><span class="nt">&gt;&lt;/i&gt;</span>as bullets<span class="nt">&lt;/li&gt;</span>
                          <span class="nt">&lt;li&gt;&lt;i</span> <span class="na">class=</span><span class="s">"fa-li fa fa-square"</span><span class="nt">&gt;&lt;/i&gt;</span>in lists<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>
</code></pre>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
        return html;
    }

    getBorderedPulled(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Bordered &amp; Pulled <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <p>
                        <i class="fa fa-quote-left fa-3x pull-left fa-border"></i>
                        …tomorrow we will run faster, stretch out our arms farther… And then one fine morning—
                        So we beat on, boats against the current, borne back ceaselessly into the past.
                    </p>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        Use <code> fa-border </code>
                        and <code> pull-right </code>
                        or <code> pull-left </code> for easy pull quotes or
                        article icons.
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-quote-left fa-3x pull-left fa-border"</span><span class="nt">&gt;&lt;/i&gt;</span>
...tomorrow we will run faster, stretch out our arms farther...
And then one fine morning— So we beat on, boats against the
current, borne back ceaselessly into the past.
</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getSpinning(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Spinning <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <p>
                        <button class="btn btn-default btn-lg">
                            <i class="fa fa-spinner fa-spin"></i>
                        </button>
                        <button class="btn btn-default btn-lg">
                            <i class="fa fa-circle-o-notch fa-spin"></i>
                        </button>
                        <button class="btn btn-default btn-lg">
                            <i class="fa fa-refresh fa-spin"></i>
                        </button>
                        <button class="btn btn-default btn-lg">
                            <i class="fa fa-cog fa-spin"></i>
                        </button>
                    </p>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        Use the <code> fa-spin </code>
                        class to get any icon to rotate. Works well with <code> fa-spinner </code>
                        , <code> fa-refresh </code>
                        , and <code> fa-cog </code>
                        .
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-spinner fa-spin"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-circle-o-notch fa-spin"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-refresh fa-spin"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-cog fa-spin"</span><span class="nt">&gt;&lt;/i&gt;</span>
</code></pre>
                    </div>
                    <p class="alert alert-success">
                        <i class="fa fa-info-circle"></i> CSS3 animations aren't supported in IE8 - IE9.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getRotatedFlipped(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Rotated &amp; <span class="text-bold">Flipped</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <p class="text-extra-large">
                        <i class="fa fa-shield"></i>&nbsp; normal
                        <br>
                        <i class="fa fa-shield fa-rotate-90"></i>&nbsp; fa-rotate-90
                        <br>
                        <i class="fa fa-shield fa-rotate-180"></i>&nbsp; fa-rotate-180
                        <br>
                        <i class="fa fa-shield fa-rotate-270"></i>&nbsp; fa-rotate-270
                        <br>
                        <i class="fa fa-shield fa-flip-horizontal"></i>&nbsp; fa-flip-horizontal
                        <br>
                        <i class="fa fa-shield fa-flip-vertical"></i>&nbsp; fa-flip-vertical
                    </p>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        To arbitrarily rotate and flip icons, use the <code> fa-rotate-* </code>
                        and <code> fa-flip-* </code>
                        classes.
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield"</span><span class="nt">&gt;&lt;/i&gt;</span> normal<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield fa-rotate-90"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-rotate-90<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield fa-rotate-180"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-rotate-180<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield fa-rotate-270"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-rotate-270<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield fa-flip-horizontal"</span><span class="nt">&gt;&lt;/i&gt;</span> fa-flip-horizontal<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-shield fa-flip-vertical"</span><span class="nt">&gt;&lt;/i&gt;</span> icon-flip-vertical
</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getStacked(d) {
        const html = `<div class="row">
    <div class="col-md-12">
        <div class="panel panel-white">
            <div class="panel-heading">
                <h4 class="panel-title">Stacked <span class="text-bold">Icons</span></h4>
                <div class="panel-tools">
                    <a class="btn btn-xs btn-link panel-collapse collapses" href="ui_icons.html#">
                    </a>
                    <a class="btn btn-xs btn-link panel-config" href="ui_icons.html#panel-config" data-toggle="modal">
                        <i class="fa fa-wrench"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-refresh" href="ui_icons.html#">
                        <i class="fa fa-refresh"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-expand" href="ui_icons.html#">
                        <i class="fa fa-resize-full"></i>
                    </a>
                    <a class="btn btn-xs btn-link panel-close" href="ui_icons.html#">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
            </div>
            <div class="panel-body">
                <div class="col-md-3 col-sm-4">
                    <div class="margin-bottom">
                        <span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-twitter fa-stack-1x"></i> </span>
                        fa-twitter on fa-square-o
                        <br>
                        <span class="fa-stack fa-lg"> <i class="fa fa-circle fa-stack-2x"></i> <i class="fa fa-flag fa-stack-1x fa-inverse"></i> </span>
                        fa-flag on fa-circle
                        <br>
                        <span class="fa-stack fa-lg"> <i class="fa fa-square fa-stack-2x"></i> <i class="fa fa-terminal fa-stack-1x fa-inverse"></i> </span>
                        fa-terminal on fa-square
                        <br>
                        <span class="fa-stack fa-lg"> <i class="fa fa-camera fa-stack-1x"></i> <i class="fa fa-ban fa-stack-2x text-danger"></i> </span>
                        fa-ban on fa-camera
                    </div>
                </div>
                <div class="col-md-9 col-sm-8">
                    <p>
                        To stack multiple icons, use the <code> fa-stack </code>
                        class on the parent, the <code> fa-stack-1x </code>
                        for the regularly sized icon, and <code> fa-stack-2x </code>
                        for the larger icon. <code> fa-inverse </code>
                        can be used as an alternative icon color. You can even throw
                        <a href="ui_icons.html#larger">
                            larger icon
                        </a>
                        classes on the parent
                        to get further control of sizing.
                    </p>
                    <div class="highlight">
                        <pre><code class="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"fa-stack fa-lg"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-square-o fa-stack-2x"</span><span class="nt">&gt;&lt;/i&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-twitter fa-stack-1x"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/span&gt;</span>
fa-twitter on fa-square-o<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"fa-stack fa-lg"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-circle fa-stack-2x"</span><span class="nt">&gt;&lt;/i&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-flag fa-stack-1x fa-inverse"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/span&gt;</span>
fa-flag on fa-circle<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"fa-stack fa-lg"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-square fa-stack-2x"</span><span class="nt">&gt;&lt;/i&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-terminal fa-stack-1x fa-inverse"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/span&gt;</span>
fa-terminal on fa-square<span class="nt">&lt;br&gt;</span>
<span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"fa-stack fa-lg"</span><span class="nt">&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-camera fa-stack-1x"</span><span class="nt">&gt;&lt;/i&gt;</span>
                        <span class="nt">&lt;i</span> <span class="na">class=</span><span class="s">"fa fa-ban fa-stack-2x text-danger"</span><span class="nt">&gt;&lt;/i&gt;</span>
<span class="nt">&lt;/span&gt;</span>
fa-ban on fa-camera
</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
        return html;
    }

    getNew(d) {
        const html = `<div class="col-md-12">
    <div class="panel panel-white">
        <div class="panel-body">
            <p>
                The complete icons set in
                <a target="_blank" href="http://fontawesome.io/icons/">
                    Font Awesome 4.3.0
                </a>
            </p>
            <br>
            <h5 class="subtitle">40 New Icons in 4.3</h5>



            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-bed"></i> bed</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-buysellads"></i> buysellads</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cart-arrow-down"></i> cart-arrow-down</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-cart-plus"></i> cart-plus</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-connectdevelop"></i> connectdevelop</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-dashcube"></i> dashcube</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-diamond"></i> diamond</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-facebook-official"></i> facebook-official</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-forumbee"></i> forumbee</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-heartbeat"></i> heartbeat</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-hotel"></i> hotel <span class="text-muted">(alias)</span></li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-leanpub"></i> leanpub</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars"></i> mars</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-double"></i> mars-double</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke"></i> mars-stroke</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke-h"></i> mars-stroke-h</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mars-stroke-v"></i> mars-stroke-v</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-medium"></i> medium</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-mercury"></i> mercury</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-motorcycle"></i> motorcycle</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-neuter"></i> neuter</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-pinterest-p"></i> pinterest-p</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-sellsy"></i> sellsy</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-server"></i> server</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-ship"></i> ship</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-shirtsinbulk"></i> shirtsinbulk</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-simplybuilt"></i> simplybuilt</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-skyatlas"></i> skyatlas</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-street-view"></i> street-view</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-subway"></i> subway</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-train"></i> train</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-transgender"></i> transgender</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-transgender-alt"></i> transgender-alt</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-plus"></i> user-plus</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-secret"></i> user-secret</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-user-times"></i> user-times</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus"></i> venus</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus-double"></i> venus-double</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-venus-mars"></i> venus-mars</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-viacoin"></i> viacoin</li>

                <li class="fa-hover col-md-3 col-sm-4"><i class="fa fa-whatsapp"></i> whatsapp</li>
            </ul>

            <br>
            <h5 class="subtitle">Web Application Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-adjust"></i> fa-adjust
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-anchor"></i> fa-anchor
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-archive"></i> fa-archive
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows"></i> fa-arrows
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-h"></i> fa-arrows-h
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-v"></i> fa-arrows-v
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-asterisk"></i> fa-asterisk
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ban"></i> fa-ban
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bar-chart-o"></i> fa-bar-chart-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-barcode"></i> fa-barcode
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bars"></i> fa-bars
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-beer"></i> fa-beer
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bell"></i> fa-bell
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bell-o"></i> fa-bell-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bolt"></i> fa-bolt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-book"></i> fa-book
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bookmark"></i> fa-bookmark
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bookmark-o"></i> fa-bookmark-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-briefcase"></i> fa-briefcase
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bug"></i> fa-bug
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-building-o"></i> fa-building-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bullhorn"></i> fa-bullhorn
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bullseye"></i> fa-bullseye
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-calendar"></i> fa-calendar
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-calendar-o"></i> fa-calendar-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-camera"></i> fa-camera
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-camera-retro"></i> fa-camera-retro
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-down"></i> fa-caret-square-o-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-left"></i> fa-caret-square-o-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-right"></i> fa-caret-square-o-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-up"></i> fa-caret-square-o-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-certificate"></i> fa-certificate
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check"></i> fa-check
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-circle"></i> fa-check-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-circle-o"></i> fa-check-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-square"></i> fa-check-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-square-o"></i> fa-check-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-circle"></i> fa-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-circle-o"></i> fa-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-clock-o"></i> fa-clock-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cloud"></i> fa-cloud
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cloud-download"></i> fa-cloud-download
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cloud-upload"></i> fa-cloud-upload
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-code"></i> fa-code
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-code-fork"></i> fa-code-fork
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-coffee"></i> fa-coffee
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cog"></i> fa-cog
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cogs"></i> fa-cogs
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-comment"></i> fa-comment
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-comment-o"></i> fa-comment-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-comments"></i> fa-comments
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-comments-o"></i> fa-comments-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-compass"></i> fa-compass
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-credit-card"></i> fa-credit-card
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-crop"></i> fa-crop
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-crosshairs"></i> fa-crosshairs
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cutlery"></i> fa-cutlery
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dashboard"></i> fa-dashboard
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-desktop"></i> fa-desktop
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dot-circle-o"></i> fa-dot-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-download"></i> fa-download
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-edit"></i> fa-edit
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ellipsis-h"></i> fa-ellipsis-h
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ellipsis-v"></i> fa-ellipsis-v
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-envelope"></i> fa-envelope
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-envelope-o"></i> fa-envelope-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eraser"></i> fa-eraser
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-exchange"></i> fa-exchange
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-exclamation"></i> fa-exclamation
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-exclamation-circle"></i> fa-exclamation-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-exclamation-triangle"></i> fa-exclamation-triangle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-external-link"></i> fa-external-link
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-external-link-square"></i> fa-external-link-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eye"></i> fa-eye
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eye-slash"></i> fa-eye-slash
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-female"></i> fa-female
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-fighter-jet"></i> fa-fighter-jet
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-film"></i> fa-film
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-filter"></i> fa-filter
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-fire"></i> fa-fire
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-fire-extinguisher"></i> fa-fire-extinguisher
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flag"></i> fa-flag
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flag-checkered"></i> fa-flag-checkered
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flag-o"></i> fa-flag-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flash"></i> fa-flash
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flask"></i> fa-flask
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-folder"></i> fa-folder
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-folder-o"></i> fa-folder-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-folder-open"></i> fa-folder-open
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-folder-open-o"></i> fa-folder-open-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-frown-o"></i> fa-frown-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gamepad"></i> fa-gamepad
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gavel"></i> fa-gavel
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gear"></i> fa-gear
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gears"></i> fa-gears
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gift"></i> fa-gift
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-glass"></i> fa-glass
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-globe"></i> fa-globe
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-group"></i> fa-group
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hdd-o"></i> fa-hdd-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-headphones"></i> fa-headphones
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-heart"></i> fa-heart
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-heart-o"></i> fa-heart-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-home"></i> fa-home
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-inbox"></i> fa-inbox
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-info"></i> fa-info
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-info-circle"></i> fa-info-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-key"></i> fa-key
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-keyboard-o"></i> fa-keyboard-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-laptop"></i> fa-laptop
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-leaf"></i> fa-leaf
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-legal"></i> fa-legal
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-lemon-o"></i> fa-lemon-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-level-down"></i> fa-level-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-level-up"></i> fa-level-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-lightbulb-o"></i> fa-lightbulb-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-location-arrow"></i> fa-location-arrow
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-lock"></i> fa-lock
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-magic"></i> fa-magic
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-magnet"></i> fa-magnet
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-mail-forward"></i> fa-mail-forward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-mail-reply"></i> fa-mail-reply
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-mail-reply-all"></i> fa-mail-reply-all
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-male"></i> fa-male
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-map-marker"></i> fa-map-marker
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-meh-o"></i> fa-meh-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-microphone"></i> fa-microphone
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-microphone-slash"></i> fa-microphone-slash
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus"></i> fa-minus
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus-circle"></i> fa-minus-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus-square"></i> fa-minus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus-square-o"></i> fa-minus-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-mobile"></i> fa-mobile
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-mobile-phone"></i> fa-mobile-phone
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-money"></i> fa-money
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-moon-o"></i> fa-moon-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-music"></i> fa-music
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pencil"></i> fa-pencil
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pencil-square"></i> fa-pencil-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pencil-square-o"></i> fa-pencil-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-phone"></i> fa-phone
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-phone-square"></i> fa-phone-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-picture-o"></i> fa-picture-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plane"></i> fa-plane
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus"></i> fa-plus
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-circle"></i> fa-plus-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-square"></i> fa-plus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-square-o"></i> fa-plus-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-power-off"></i> fa-power-off
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-print"></i> fa-print
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-puzzle-piece"></i> fa-puzzle-piece
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-qrcode"></i> fa-qrcode
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-question"></i> fa-question
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-question-circle"></i> fa-question-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-quote-left"></i> fa-quote-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-quote-right"></i> fa-quote-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-random"></i> fa-random
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-refresh"></i> fa-refresh
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-reply"></i> fa-reply
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-reply-all"></i> fa-reply-all
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-retweet"></i> fa-retweet
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-road"></i> fa-road
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rocket"></i> fa-rocket
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rss"></i> fa-rss
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rss-square"></i> fa-rss-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-search"></i> fa-search
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-search-minus"></i> fa-search-minus
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-search-plus"></i> fa-search-plus
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-share"></i> fa-share
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-share-square"></i> fa-share-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-share-square-o"></i> fa-share-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-shield"></i> fa-shield
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-shopping-cart"></i> fa-shopping-cart
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sign-in"></i> fa-sign-in
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sign-out"></i> fa-sign-out
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-signal"></i> fa-signal
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sitemap"></i> fa-sitemap
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-smile-o"></i> fa-smile-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort"></i> fa-sort
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-alpha-asc"></i> fa-sort-alpha-asc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-alpha-desc"></i> fa-sort-alpha-desc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-amount-asc"></i> fa-sort-amount-asc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-amount-desc"></i> fa-sort-amount-desc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-asc"></i> fa-sort-asc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-desc"></i> fa-sort-desc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-down"></i> fa-sort-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-numeric-asc"></i> fa-sort-numeric-asc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-numeric-desc"></i> fa-sort-numeric-desc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sort-up"></i> fa-sort-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-spinner"></i> fa-spinner
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-square"></i> fa-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-square-o"></i> fa-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star"></i> fa-star
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star-half"></i> fa-star-half
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star-half-empty"></i> fa-star-half-empty
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star-half-full"></i> fa-star-half-full
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star-half-o"></i> fa-star-half-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-star-o"></i> fa-star-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-subscript"></i> fa-subscript
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-suitcase"></i> fa-suitcase
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-sun-o"></i> fa-sun-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-superscript"></i> fa-superscript
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tablet"></i> fa-tablet
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tachometer"></i> fa-tachometer
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tag"></i> fa-tag
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tags"></i> fa-tags
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tasks"></i> fa-tasks
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-terminal"></i> fa-terminal
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-thumb-tack"></i> fa-thumb-tack
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-thumbs-down"></i> fa-thumbs-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-thumbs-o-down"></i> fa-thumbs-o-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-thumbs-o-up"></i> fa-thumbs-o-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-thumbs-up"></i> fa-thumbs-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ticket"></i> fa-ticket
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-times"></i> fa-times
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-times-circle"></i> fa-times-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-times-circle-o"></i> fa-times-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tint"></i> fa-tint
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-down"></i> fa-toggle-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-left"></i> fa-toggle-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-right"></i> fa-toggle-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-up"></i> fa-toggle-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-trash-o"></i> fa-trash-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-trophy"></i> fa-trophy
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-truck"></i> fa-truck
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-umbrella"></i> fa-umbrella
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-unlock"></i> fa-unlock
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-unlock-alt"></i> fa-unlock-alt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-unsorted"></i> fa-unsorted
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-upload"></i> fa-upload
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-user"></i> fa-user
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-users"></i> fa-users
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-video-camera"></i> fa-video-camera
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-volume-down"></i> fa-volume-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-volume-off"></i> fa-volume-off
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-volume-up"></i> fa-volume-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-warning"></i> fa-warning
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-wheelchair"></i> fa-wheelchair
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-wrench"></i> fa-wrench
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Form Control Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-square"></i> fa-check-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-check-square-o"></i> fa-check-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-circle"></i> fa-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-circle-o"></i> fa-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dot-circle-o"></i> fa-dot-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus-square"></i> fa-minus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-minus-square-o"></i> fa-minus-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-square"></i> fa-plus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-square-o"></i> fa-plus-square-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-square"></i> fa-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-square-o"></i> fa-square-o
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Currency Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bitcoin"></i> fa-bitcoin
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-btc"></i> fa-btc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cny"></i> fa-cny
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dollar"></i> fa-dollar
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eur"></i> fa-eur
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-euro"></i> fa-euro
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gbp"></i> fa-gbp
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-inr"></i> fa-inr
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-jpy"></i> fa-jpy
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-krw"></i> fa-krw
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-money"></i> fa-money
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rmb"></i> fa-rmb
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rouble"></i> fa-rouble
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rub"></i> fa-rub
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ruble"></i> fa-ruble
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rupee"></i> fa-rupee
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-try"></i> fa-try
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-turkish-lira"></i> fa-turkish-lira
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-usd"></i> fa-usd
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-won"></i> fa-won
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-yen"></i> fa-yen
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Text Editor Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-align-center"></i> fa-align-center
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-align-justify"></i> fa-align-justify
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-align-left"></i> fa-align-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-align-right"></i> fa-align-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bold"></i> fa-bold
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chain"></i> fa-chain
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chain-broken"></i> fa-chain-broken
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-clipboard"></i> fa-clipboard
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-columns"></i> fa-columns
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-copy"></i> fa-copy
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-cut"></i> fa-cut
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dedent"></i> fa-dedent
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eraser"></i> fa-eraser
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-file"></i> fa-file
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-file-o"></i> fa-file-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-file-text"></i> fa-file-text
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-file-text-o"></i> fa-file-text-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-files-o"></i> fa-files-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-floppy-o"></i> fa-floppy-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-font"></i> fa-font
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-indent"></i> fa-indent
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-italic"></i> fa-italic
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-link"></i> fa-link
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-list"></i> fa-list
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-list-alt"></i> fa-list-alt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-list-ol"></i> fa-list-ol
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-list-ul"></i> fa-list-ul
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-outdent"></i> fa-outdent
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-paperclip"></i> fa-paperclip
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-paste"></i> fa-paste
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-repeat"></i> fa-repeat
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rotate-left"></i> fa-rotate-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-rotate-right"></i> fa-rotate-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-save"></i> fa-save
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-scissors"></i> fa-scissors
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-strikethrough"></i> fa-strikethrough
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-table"></i> fa-table
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-text-height"></i> fa-text-height
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-text-width"></i> fa-text-width
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-th"></i> fa-th
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-th-large"></i> fa-th-large
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-th-list"></i> fa-th-list
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-underline"></i> fa-underline
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-undo"></i> fa-undo
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-unlink"></i> fa-unlink
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Directional Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-double-down"></i> fa-angle-double-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-double-left"></i> fa-angle-double-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-double-right"></i> fa-angle-double-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-double-up"></i> fa-angle-double-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-down"></i> fa-angle-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-left"></i> fa-angle-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-right"></i> fa-angle-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-angle-up"></i> fa-angle-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-down"></i> fa-arrow-circle-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-left"></i> fa-arrow-circle-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-right"></i> fa-arrow-circle-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-circle-up"></i> fa-arrow-circle-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-down"></i> fa-arrow-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-left"></i> fa-arrow-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-right"></i> fa-arrow-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrow-up"></i> fa-arrow-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows"></i> fa-arrows
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-alt"></i> fa-arrows-alt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-h"></i> fa-arrows-h
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-v"></i> fa-arrows-v
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-down"></i> fa-caret-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-left"></i> fa-caret-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-right"></i> fa-caret-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-down"></i> fa-caret-square-o-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-left"></i> fa-caret-square-o-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-right"></i> fa-caret-square-o-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-square-o-up"></i> fa-caret-square-o-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-caret-up"></i> fa-caret-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-circle-down"></i> fa-chevron-circle-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-circle-left"></i> fa-chevron-circle-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-circle-right"></i> fa-chevron-circle-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-circle-up"></i> fa-chevron-circle-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-down"></i> fa-chevron-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-left"></i> fa-chevron-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-right"></i> fa-chevron-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-chevron-up"></i> fa-chevron-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hand-o-down"></i> fa-hand-o-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hand-o-left"></i> fa-hand-o-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hand-o-right"></i> fa-hand-o-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hand-o-up"></i> fa-hand-o-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-long-arrow-down"></i> fa-long-arrow-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-long-arrow-left"></i> fa-long-arrow-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-long-arrow-right"></i> fa-long-arrow-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-long-arrow-up"></i> fa-long-arrow-up
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-down"></i> fa-toggle-down
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-left"></i> fa-toggle-left
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-right"></i> fa-toggle-right
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-toggle-up"></i> fa-toggle-up
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Video Player Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-arrows-alt"></i> fa-arrows-alt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-backward"></i> fa-backward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-compress"></i> fa-compress
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-eject"></i> fa-eject
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-expand"></i> fa-expand
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-fast-backward"></i> fa-fast-backward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-fast-forward"></i> fa-fast-forward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-forward"></i> fa-forward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pause"></i> fa-pause
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-play"></i> fa-play
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-play-circle"></i> fa-play-circle
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-play-circle-o"></i> fa-play-circle-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-step-backward"></i> fa-step-backward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-step-forward"></i> fa-step-forward
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-stop"></i> fa-stop
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-youtube-play"></i> fa-youtube-play
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Brand Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-adn"></i> fa-adn
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-android"></i> fa-android
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-apple"></i> fa-apple
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bitbucket"></i> fa-bitbucket
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bitbucket-square"></i> fa-bitbucket-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-bitcoin"></i> fa-bitcoin
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-btc"></i> fa-btc
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-css3"></i> fa-css3
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dribbble"></i> fa-dribbble
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-dropbox"></i> fa-dropbox
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-facebook"></i> fa-facebook
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-facebook-square"></i> fa-facebook-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-flickr"></i> fa-flickr
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-foursquare"></i> fa-foursquare
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-github"></i> fa-github
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-github-alt"></i> fa-github-alt
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-github-square"></i> fa-github-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-gittip"></i> fa-gittip
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-google-plus"></i> fa-google-plus
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-google-plus-square"></i> fa-google-plus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-html5"></i> fa-html5
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-instagram"></i> fa-instagram
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-linkedin"></i> fa-linkedin
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-linkedin-square"></i> fa-linkedin-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-linux"></i> fa-linux
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-maxcdn"></i> fa-maxcdn
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pagelines"></i> fa-pagelines
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pinterest"></i> fa-pinterest
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-pinterest-square"></i> fa-pinterest-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-renren"></i> fa-renren
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-skype"></i> fa-skype
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-stack-exchange"></i> fa-stack-exchange
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-stack-overflow"></i> fa-stack-overflow
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-trello"></i> fa-trello
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tumblr"></i> fa-tumblr
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-tumblr-square"></i> fa-tumblr-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-twitter"></i> fa-twitter
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-twitter-square"></i> fa-twitter-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-vimeo-square"></i> fa-vimeo-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-vk"></i> fa-vk
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-weibo"></i> fa-weibo
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-windows"></i> fa-windows
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-xing"></i> fa-xing
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-xing-square"></i> fa-xing-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-youtube"></i> fa-youtube
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-youtube-play"></i> fa-youtube-play
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-youtube-square"></i> fa-youtube-square
                </li>
            </ul>
            <br>
            <h5 class="subtitle">Medical Icons</h5>
            <ul class="row the-icons">
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-ambulance"></i> fa-ambulance
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-h-square"></i> fa-h-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-hospital-o"></i> fa-hospital-o
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-medkit"></i> fa-medkit
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-plus-square"></i> fa-plus-square
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-stethoscope"></i> fa-stethoscope
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-user-md"></i> fa-user-md
                </li>
                <li class="fa-hover col-md-3 col-sm-4">
                    <i class="fa fa-wheelchair"></i> fa-wheelchair
                </li>
            </ul>
        </div>
    </div>
</div>`;
        return html;
    }

}
