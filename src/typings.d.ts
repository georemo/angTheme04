
interface Window {
    $: any;
}

declare var jquery: any;

interface jquery {
    tooltip(options?: any): any;
    blockUI: any;

}

interface JQuery<TElement> {
    appear: any;
    velocity: any;
    swipe: any;
    tooltip: any;
    popover: any;
    tab: any;
    perfectScrollbar: any;
    scrollTo: any;
    iCheck: any;
    removeCookie: any;
    progressbar: any;
    selectpicker: any;
    colorPalette: any;
    block: any;
    unblock: any;
    owlCarousel: any;
    resized: any;
    resized2: any;
    validate: any;
    name: any;
}



interface JQueryStatic {
    blockUI: any;
    cookie: any;
    removeCookie: any;
    validator: any;
}

declare var module: NodeModule;
interface NodeModule {
    id: string;
}
declare var mQuery: any;
