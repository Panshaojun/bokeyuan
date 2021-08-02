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
    if (menu.length) {
        const ul = globalThis.document.createElement("ul");
        for (let i of menu) {
            const li = globalThis.document.createElement("li");
            if (i.type === "sub") {
                const span = globalThis.document.createElement("span");
                span.onclick = function (e) {
                    (this as any).parentNode.classList.toggle("catListPostCategoryLi");
                    e.stopPropagation();
                }
                span.innerText = i.name;
                li.appendChild(span);
                if (i.chirld.length) {
                    li.appendChild(structureElement(i.chirld));
                }
            } else {
                const a = globalThis.document.createElement("a");
                a.innerText = i.name;
                a.href = i.url;
                li.appendChild(a);
            }
            ul.appendChild(li);
        }
        return ul;
    }
}

export default renderMenu;