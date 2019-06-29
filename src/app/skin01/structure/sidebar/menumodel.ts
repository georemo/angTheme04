
export class MenuItem {
    menu_lable;
    href;
    icon;
    lable;
    menu_id;
    childID;
    constructor(menu_lable, href, icon, lable, menu_id, childID) {
        this.menu_lable = menu_lable;
        this.href = href;
        this.icon = icon;
        this.lable = lable;
        this.menu_id = menu_id;
        this.childID = childID;
    }

    getChild(childID) {
        return false;
    }
}

export class MenuModel {
    menuitems;
    constructor() {
        this.menuitems = [{
            menu_lable: 'Home', // menu_lable
            href: '#',
            icon: 'fa fa-home', // icon
            menu_id: 'm0', // menu_id
            module: 'user', controller: 'user', action: 'action1',
            d: {
                title: 'Home',
                subTitle: 'user setting',
                breadcrumb: ['Home'],
                component: 'dashboard',
                docType: 'Demo1'
            },
            children: []
        },
        {

            menu_lable: 'MyDesk',
            href: '#',
            icon: 'fa fa-home',
            menu_id: 'm1',
            module: 'user', controller: 'user', action: 'action1',
            d: {
                title: 'MyDesk',
                subTitle: 'user setting',
                breadcrumb: ['MyDesk'],
                component: 'calendar',
                docType: ''
            },
            children: [{
                menu_lable: 'Profile',
                href: '#',
                icon: 'fa fa-desktop',
                menu_id: 'm2',
                module: 'user', controller: 'userprofile', action: 'getprofile',
                d: {
                    title: 'MyProfile',
                    subTitle: 'our new sub title',
                    breadcrumb: ['MyDesk', 'Profile'],
                    component: 'userprofile',
                    docType: ''
                },
                children: []
            }, {
                menu_lable: 'Messages',
                href: '#',
                icon: 'fa fa-desktop',
                menu_id: 'm3',
                module: 'user', controller: 'user', action: 'action4',
                d: {
                    title: 'Messages',
                    subTitle: 'our new sub title',
                    breadcrumb: ['MyDesk', 'Messages'],
                    component: 'messages',
                    docType: ''
                },
                children: []
            }]
        },
        {
            menu_lable: 'Admin',
            href: '#',
            icon: 'fa fa-desktop',
            menu_id: 'm4',
            module: 'user', controller: 'user', action: 'action3',
            d: {
                title: 'Admin',
                subTitle: 'our new sub title',
                breadcrumb: ['Admin'],
                component: 'chart',
                docType: 'CumulativeLine',
            },
            children: [{
                menu_lable: 'Admin Dashboard',
                href: '#',
                icon: '',
                menu_id: 'm5',
                module: 'moduleman', controller: 'sysset', action: 'getsettings',
                d: {
                    title: 'Admin Dashboard',
                    subTitle: 'our new sub title',
                    breadcrumb: ['Admin', 'Dashboard'],
                    component: 'chart',
                    docType: 'ScatterBubble'
                },
                children: []
            }]
        }

        ];
    }
    setMenuItems(menuitems) {
        this.menuitems = menuitems;
    }
    getMenuItems() {
        return this.menuitems;
    }
}

