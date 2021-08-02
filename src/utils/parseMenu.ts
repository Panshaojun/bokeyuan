import Menu from '../type/Menu';
const parseMenu = (subMenu: Menu[], menu: Menu[]) => {
    for (let i of subMenu) {
        if (!i.chirld) {
            for (let j = 0; j < menu.length; j++) {
                const { name, url } = menu[j];
                let matchName = name.split("(")[0];
                if (i.name.indexOf(matchName) !== -1) {
                    i.name = name;
                    i.url = url;
                    menu.splice(j--, 1);
                }
            }
        } else {
            parseMenu(i.chirld, menu)
        }
    }
}

export default parseMenu;