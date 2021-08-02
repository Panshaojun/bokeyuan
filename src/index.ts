import getMenuFromElement from './utils/getMenuFromElement';
import parseMenu from './utils/parseMenu';
import configMenuFactory from './utils/configMenuFactory';
import baseMenu from './config/baseMenu';

const handleLoad = () => {
    const lis: NodeListOf<HTMLAnchorElement> = globalThis.document.querySelectorAll(
        "#sidebar_categories>.catListPostCategory>ul a");
    if (lis.length) {
        const menu = configMenuFactory(baseMenu);
        const lisMenu=getMenuFromElement(lis);
        parseMenu(menu, lisMenu);
        console.log(menu);
    } else {
        globalThis.setTimeout(handleLoad, 300);
    }
}
handleLoad();