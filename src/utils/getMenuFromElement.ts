import Menu from '../type/Menu';
const getItemMenu: () => Menu = () => (
    {
        name: "",
        url: ""
    }
)
const getMenuFromElement = (lis: NodeListOf<HTMLAnchorElement>) => {
    var menu: Menu[] = [];
    for (let i = 0, len = lis.length; i < len; i++) {
        const item = lis[i];
        const singleMenu = getItemMenu();
        singleMenu.url = item.href;
        singleMenu.name = item.innerText;
        menu.push(singleMenu);
    }
    return menu;
}

export default getMenuFromElement;
