import getMenuFromElement from './utils/getMenuFromElement';
import parseMenu from './utils/parseMenu';
import configMenuFactory from './utils/configMenuFactory';
import renderMenu from './utils/renderMenu';
import baseMenu from './config/baseMenu';

//设置最大检测次数
let maxTimes = 25;
const handleLoad = () => {
    const liElements: NodeListOf<HTMLAnchorElement> = globalThis.document.querySelectorAll("#sidebar_categories>.catListPostCategory>ul a");
    if (liElements.length) {
        // const menu = configMenuFactory(baseMenu);
        // 将baseMenu挂载全局，就可以在博客园中设置，而不用重新打包项目了
        const menu = configMenuFactory((globalThis as any).baseMenu);
        const lisMenu = getMenuFromElement(liElements);
        parseMenu(menu, lisMenu);
        if (lisMenu.length) {
            console.info("检测到博客园中的某些分类未匹配，详情为：", lisMenu);
        }
        renderMenu(menu);
    } else if (maxTimes--) {
        //注意此处，博客园是异步渲染侧边栏的，未检测到数组存在时，将会根据设置反复检测
        globalThis.setTimeout(handleLoad, 200);
    }
}
handleLoad();