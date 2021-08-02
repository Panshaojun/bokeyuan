import Menu from '../type/Menu';
const getItemMenu: () => Menu = () => (
    {
        id: 0,
        pid: 0,
        order: 0,
        name: "",
        type: "item",
        url: "",
        chirld:[]
    }
)
const getMenuFromElement = (lis: NodeListOf<HTMLAnchorElement>) => {
    var menu: Menu[] = [];
    for (let j = 0, len = lis.length; j < len; j++) {
        const i = lis[j];
        const item = getItemMenu();
        item.url = i.href;
        // 格式：[pid]$[order]$[name]
        const info = i.innerText.split("$");
        if (info.length !== 3) {
            console.log("格式错误:", i.innerText);
            item.name = i.innerText;
        } else {
            const pid = new Number(info[0]);
            const order = new Number(info[1]);
            if (global.isNaN(pid.valueOf()) || global.isNaN(order.valueOf())) {
                console.log("参数非数字:", i.innerText);
                item.name = i.innerText;
            } else {
                item.pid = pid.valueOf();
                item.order = order.valueOf();
                item.name = info[2];
            }
        }
        menu.push(item);
    }
    console.log([...menu])
    return menu;
}

export default getMenuFromElement;
