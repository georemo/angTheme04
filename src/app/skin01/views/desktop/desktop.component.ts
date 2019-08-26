import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { String, StringBuilder } from 'typescript-string-operations';
import { UserProfileComponent } from 'src/app/skin01/views/user-profile/user-profile.component';
import { CalendarComponent } from 'src/app/skin01/views/calendar/calendar.component';
import { ChartComponent } from 'src/app/skin01/views/chart/chart.component';
import { MessagesComponent } from 'src/app/skin01/views/messages/messages.component';
import { Dashboard1Component } from 'src/app/skin01/views/dashboard1/dashboard1.component';
import { MessagesService } from '../../views/messages/messages.service';

@Component({
    selector: 'app-desktop',
    templateUrl: './desktop.component.html',
    styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
    userprofile;
    calendar;
    chart;
    messages;
    dashboard;
    constructor(
        private svMesseges: MessagesService
    ) {
        this.userprofile = new UserProfileComponent();
        this.calendar = new CalendarComponent();
        this.chart = new ChartComponent();
        this.messages = new MessagesComponent();
        this.dashboard = new Dashboard1Component();
    }

    ngOnInit() {
    }

    load(menuData) {
        console.log('starting DesktopComponent::load(menuData)');
        console.log('menuData>>');
        console.log(menuData);
        const d = menuData.d;
        const htmlString = this.getPage(d);
        $('#main-content').html(htmlString);

        this.svMesseges.isReady();

    }


    getPage(d) {
        const html = `
            <!-- start: PAGE -->
            <div class="main-content" style="min-height: 406px;">
                ${this.getConfigurationModalPanel(d)}
                <div class="container">
                    ${this.getPageHeader(d)}
                    ${this.getBreadcrumb(d)}
                    ${this.getContents(d)}
                </div>
                ${this.getSubviews(d)}
            </div>
            <!-- end: PAGE -->
        `;
        return html;
    }

    getPageHeader(d) {
        const html = `<!-- start: PAGE HEADER -->
    <!-- start: TOOLBAR -->
    <div class="toolbar row">
        <div class="col-sm-6 hidden-xs">
            <div class="page-header">
                <h1>${d.title} <small>${d.subTitle}</small></h1>
            </div>
        </div>
        <div class="col-sm-6 col-xs-12">
            <a href="pages_blank_page.html#" class="back-subviews">
                <i class="fa fa-chevron-left"></i> BACK
            </a>
            <a href="pages_blank_page.html#" class="close-subviews">
                <i class="fa fa-times"></i> CLOSE
            </a>
            <div class="toolbar-tools pull-right">
                ${this.getTopNavigationMenu(d)}
            </div>
        </div>
    </div>
    <!-- end: TOOLBAR -->
    <!-- end: PAGE HEADER -->`;
        return html;
    }

    getTopNavigationMenu(d) {
        const html = `<!-- start: TOP NAVIGATION MENU -->
        <ul class="nav navbar-right">
            <!-- start: TO-DO DROPDOWN -->
            <li class="dropdown">
                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="pages_blank_page.html#">
                    <i class="fa fa-plus"></i> SUBVIEW
                    <div class="tooltip-notification fadeIn hide" style="opacity: 0;">
                        <div class="tooltip-notification-arrow"></div>
                        <div class="tooltip-notification-inner">
                            <div>
                                <div class="semi-bold">
                                    HI THERE!
                                </div>
                                <div class="message">
                                    Try the Subview Live Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <ul class="dropdown-menu dropdown-light dropdown-subview">
                    <li class="dropdown-header">
                        Notes
                    </li>
                    <li>
                        <a href="pages_blank_page.html#newNote" class="new-note"><span class="fa-stack"> <i class="fa fa-file-text-o fa-stack-1x fa-lg"></i> <i class="fa fa-plus fa-stack-1x stack-right-bottom text-danger"></i> </span> Add new note</a>
                    </li>
                    <li>
                        <a href="pages_blank_page.html#readNote" class="read-all-notes"><span class="fa-stack"> <i class="fa fa-file-text-o fa-stack-1x fa-lg"></i> <i class="fa fa-share fa-stack-1x stack-right-bottom text-danger"></i> </span> Read all notes</a>
                    </li>
                    <li class="dropdown-header">
                        Calendar
                    </li>
                    <li>
                        <a href="pages_blank_page.html#newEvent" class="new-event"><span class="fa-stack"> <i class="fa fa-calendar-o fa-stack-1x fa-lg"></i> <i class="fa fa-plus fa-stack-1x stack-right-bottom text-danger"></i> </span> Add new event</a>
                    </li>
                    <li>
                        <a href="pages_blank_page.html#showCalendar" class="show-calendar"><span class="fa-stack"> <i class="fa fa-calendar-o fa-stack-1x fa-lg"></i> <i class="fa fa-share fa-stack-1x stack-right-bottom text-danger"></i> </span> Show calendar</a>
                    </li>
                    <li class="dropdown-header">
                        Contributors
                    </li>
                    <li>
                        <a href="pages_blank_page.html#newContributor" class="new-contributor"><span class="fa-stack"> <i class="fa fa-user fa-stack-1x fa-lg"></i> <i class="fa fa-plus fa-stack-1x stack-right-bottom text-danger"></i> </span> Add new contributor</a>
                    </li>
                    <li>
                        <a href="pages_blank_page.html#showContributors" class="show-contributors"><span class="fa-stack"> <i class="fa fa-user fa-stack-1x fa-lg"></i> <i class="fa fa-share fa-stack-1x stack-right-bottom text-danger"></i> </span> Show all contributor</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="pages_blank_page.html#">
                    <span class="messages-count badge badge-default hide">3</span> <i class="fa fa-envelope"></i> MESSAGES
                </a>
                <ul class="dropdown-menu dropdown-light dropdown-messages">
                    <li>
                        <span class="dropdown-header"> You have 9 messages</span>
                    </li>
                    <li>
                        <div class="drop-down-wrapper ps-container">
                            <ul>
                                <li class="unread">
                                    <a href="javascript:;" class="unread">
                                        <div class="clearfix">
                                            <div class="thread-image">
                                                <img src="assets/images/avatar-2.jpg" alt="">
                                            </div>
                                            <div class="thread-content">
                                                <span class="author">Nicole Bell</span>
                                                <span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula...</span>
                                                <span class="time"> Just Now</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" class="unread">
                                        <div class="clearfix">
                                            <div class="thread-image">
                                                <img src="assets/images/avatar-3.jpg" alt="">
                                            </div>
                                            <div class="thread-content">
                                                <span class="author">Steven Thompson</span>
                                                <span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula...</span>
                                                <span class="time">8 hrs</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <div class="clearfix">
                                            <div class="thread-image">
                                                <img src="assets/images/avatar-5.jpg" alt="">
                                            </div>
                                            <div class="thread-content">
                                                <span class="author">Kenneth Ross</span>
                                                <span class="preview">Duis mollis, est non commodo luctus, nisi erat porttitor ligula...</span>
                                                <span class="time">14 hrs</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="view-all">
                        <a href="pages_messages.html">
                            See All
                        </a>
                    </li>
                </ul>
            </li>
            <li class="menu-search">
                <a href="pages_blank_page.html#">
                    <i class="fa fa-search"></i> SEARCH
                </a>
                <!-- start: SEARCH POPOVER -->
                <div class="popover bottom search-box transition-all">
                    <div class="arrow"></div>
                    <div class="popover-content">
                        <!-- start: SEARCH FORM -->
                        <form class="" id="searchform" action="pages_blank_page.html#">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search">
                                <span class="input-group-btn">
                                    <button class="btn btn-main-color btn-squared" type="button">
                                        <i class="fa fa-search"></i>
                                    </button> </span>
                            </div>
                        </form>
                        <!-- end: SEARCH FORM -->
                    </div>
                </div>
                <!-- end: SEARCH POPOVER -->
            </li>
        </ul>
        <!-- end: TOP NAVIGATION MENU -->`;
        return html;
    }

    getConfigurationModalPanel(d) {
        const html = `<!-- start: PANEL CONFIGURATION MODAL FORM -->
    <div class="modal fade" id="panel-config" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        ×
                    </button>
                    <h4 class="modal-title">Panel Configuration</h4>
                </div>
                <div class="modal-body">
                    Here will be a configuration form
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- end: SPANEL CONFIGURATION MODAL FORM -->`;
        return html;
    }

    getBreadcrumb(d) {
        let list = '';
        $.each(d.breadcrumb, (k, v) => {
            if (k === (d.breadcrumb.length - 1)) {
                list += `<li class="active">
                            ${v}
                        </li>`;
            } else {
                list += `<li>
                            <a href="#">
                                ${v}
                            </a>
                        </li>`;
            }
        });
        const html = `<!-- start: BREADCRUMB -->
            <div class="row">
                <div class="col-md-12">
                    <ol class="breadcrumb">
                        ${list}
                    </ol>
                </div>
            </div>
            <!-- end: BREADCRUMB -->`;
        return html;
    }

    getContents(d) {
        const component = d.component;
        const contents = this[`${component}`].getContent(d);
        const html = `<!-- start: PAGE CONTENT -->
             ${contents}
        <!-- end: PAGE CONTENT-->`;
        return html;
    }

    getSubviews(d) {
        const html = `<div class="subviews">
        <div class="subviews-container"></div>
    </div>`;
        return html;
    }

}
