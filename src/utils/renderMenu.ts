import Menu from '../type/Menu';

const renderMenu = (menu: Menu[]) => {
    const catListPostCategory = globalThis.document.querySelector("#sidebar_categories>.catListPostCategory");
    const ul = globalThis.document.querySelector("#sidebar_categories>.catListPostCategory>ul");
    if (catListPostCategory && ul) {
        catListPostCategory.removeChild(ul);
        catListPostCategory.appendChild(structureElement(menu));
    }
}
const structureElement: (menu: Menu[]) => HTMLUListElement = (menu) => {
    const ul = globalThis.document.createElement("ul");
    for (let i of menu) {
        const li = globalThis.document.createElement("li");
        if (i.chirld) {
            const span = globalThis.document.createElement("span");
            span.onclick = function (e) {
                (this as any).parentNode.classList.toggle("catListPostCategoryOpen");
                (this as any).parentNode.classList.toggle("catListPostCategoryClose");
                e.stopPropagation();
            }
            span.innerText = i.name;
            li.classList.add("catListPostCategoryOpen");
            li.appendChild(span);
            if (i.chirld.length) {
                li.appendChild(structureElement(i.chirld));
            }
        } else if (i.url) {
            const a = globalThis.document.createElement("a");
            a.innerText = i.name;
            a.href = i.url;
            li.appendChild(a);
        } else {
            console.info(`检测到配置菜单未匹配，其名称为${i.name}`)
        }
        ul.appendChild(li);
    }
    return ul;
}

export default renderMenu;