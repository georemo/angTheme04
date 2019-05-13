
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
        this.menuitems = [
            {
                title: 'Menu1-L0',
                href: '#',
                icon: 'fa fa-home',
                id: 'm0',
                module: 'user', controller: 'user', action: 'action1',
                children: [{
                    title: 'Menu2-L1',
                    href: '#',
                    icon: '',
                    id: 'm1',
                    module: 'user', controller: 'user', action: 'action2',
                    children: []
                }]
            },
            {
                title: 'Menu3-L0',
                href: '#',
                icon: 'fa fa-desktop',
                id: 'm2',
                module: 'user', controller: 'user', action: 'action3',
                children: []
            },
            {
                title: 'Menu4-L0',
                href: '#',
                icon: 'fa fa-desktop', 
                id: 'm3',
                module: 'user', controller: 'user', action: 'action4',
                children: []
            },
        ];
    }
    setMenuItems(menuitems) {
        this.menuitems = menuitems;
    }
    getMenuItems() {
        return this.menuitems;
    }
}

