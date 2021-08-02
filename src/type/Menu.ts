 type Menu = {
    id: number,
    pid: number,    //父id
    order: number,  //权重
    name: string,   //
    type: "sub"|"item",
    url: string
    chirld: Menu[]
}
export default Menu;