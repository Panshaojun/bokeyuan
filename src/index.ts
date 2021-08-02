import getMenuFromElement from './utils/getMenuFromElement';
import parseMenu from './utils/parseMenu';
import configMenuFactory from './utils/configMenuFactory';
import renderMenu from './utils/renderMenu';
import baseMenu from './config/baseMenu';

const handleLoad = () => {
    const liElements: NodeListOf<HTMLAnchorElement> = globalThis.document.querySelectorAll("#sidebar_categories>.catListPostCategory>ul a");
    if (liElements.length) {
        const menu = configMenuFactory(baseMenu);
        const lisMenu = getMenuFromElement(liElements);
        parseMenu(menu, lisMenu);
        renderMenu(menu);
    } else {
        //注意此处，博客园是异步渲染侧边栏的，未检测到数组存在时，将会
        globalThis.setTimeout(handleLoad, 300);
    }
}
handleLoad();