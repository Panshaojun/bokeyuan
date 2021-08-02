import Menu from '../type/Menu';
const parseMenu = (subMenu:Menu[],menu: Menu[]) => {
    for(let i of subMenu){
        if(!i.chirld){
            for(let j=0;j<menu.length;j++){
                if(i.name.indexOf(menu[j].name)!==-1){
                    i.chirld.push(menu[j]);
                    menu.splice(j--,1);
                }
            }
            parseMenu(i.chirld,menu)
        }
    }
}

export default parseMenu;