
export class MenuItem {
    title;
    href;
    icon;
    lable;
    id;
    childID;
    constructor(title, href, icon, lable, id, childID) {
        this.title = title;
        this.href = href;
        this.icon = icon;
        this.lable = lable;
        this.id = id;
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
            title: 'Home',
            href: '#',
            icon: 'fa fa-home',
            id: 'm0',
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

            title: 'MyDesk',
            href: '#',
            icon: 'fa fa-home',
            id: 'm0',
            module: 'user', controller: 'user', action: 'action1',
            d: {
                title: 'MyDesk',
                subTitle: 'user setting',
                breadcrumb: ['MyDesk'],
                component: 'calendar',
                docType: ''
            },
            children: [{
                title: 'Profile',
                href: '#',
                icon: 'fa fa-desktop',
                id: 'm1',
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
                title: 'Messages',
                href: '#',
                icon: 'fa fa-desktop',
                id: 'm3',
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
            title: 'Admin',
            href: '#',
            icon: 'fa fa-desktop',
            id: 'm2',
            module: 'user', controller: 'user', action: 'action3',
            d: {
                title: 'Admin',
                subTitle: 'our new sub title',
                breadcrumb: ['Admin'],
                component: 'chart',
                docType: 'CumulativeLine',
            },
            children: [{
                title: 'Admin Dashboard',
                href: '#',
                icon: '',
                id: 'm1',
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

