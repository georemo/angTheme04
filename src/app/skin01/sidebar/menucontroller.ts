/*
------------------------------------------------------------------------------
capture click events
$("#" + menu_guid).click(function (e) {
                    e.preventDefault();
                    console.log("you clicked menu_id='" + menu_guid + "'");
                    load_desktop(action, active_theme);
                });

------------------------------------------------------------------------------
Menu action format: <a href=[href="#" onclick="load_desktop(menu_action);"]>
menu_html += '<a href="#" onclick=\'wc.1.load_desktop(' + menu_action + ',"' + theme_id + '" );\'>';
------------------------------------------------------------------------------
*/
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuModel } from './menumodel';

export class MenuController {
    menumodel;
    menudata;
    constructor() {
        this.menumodel = new MenuModel();
        this.menudata = this.menumodel.menuitems;
        this.setMenu();
    }
    setMenu() {

        $(document).ready(() => {
            console.log('starting setMenu(data)');
            let html = '';
            $.each(this.menudata, async (i) => {
                html = await this.process_menu_item(this.menudata[i]);
            });
        });
    }

    async process_menu_item(menuItem) {
        console.log('starting process_menu_item(menuItem)');
        const title = menuItem.title;
        const icon = menuItem.icon;
        const children = menuItem.children;
        const id = menuItem.id;
        const html = `<li id="${id}">
                        <a href="#"><i class="${icon}"></i>
                            <span class="title"> ${title} </span>
                            <i class="icon-arrow"></i>
                        </a></li>`;
        // $('.main-navigation-menu').prepend(html);
        this.setChildren(children, id);
        return html;
    }

    setChildren(childrenItems, id) {
        console.log('starting setChild(menuItem)');
        let html = '';
        if (childrenItems.length > 0) {
            let ul = `<ul id="ul${id}" class="sub-menu"></ul>`;
            $(`#${id}`).append(ul);
            $.each(childrenItems, (i) => {
                const title = childrenItems[i].title;
                const icon = childrenItems[i].icon;
                const childId = childrenItems[i].id;
                const children = childrenItems[i].children;

                html += `<li id="${childId}" onclick="sayHello()">
                        <a href ="#"><i class="${ icon}"></i>
                        <span class="title"> ${ title} </span>
                        <i class="icon-arrow"></i>
                        </a>
                    </li>`;
            });
            // $(`#ul${id}`).append(html);
        }
    }

    menuAction(module, controller, action) {

    }
}



