import Config from '../type/Config';
const baseMenu: Config[] = [
    {
        id: 1,
        name: "web开发",
        chirld: [
            {
                id: 11,
                name: "基础技术"
            },
            {
                id: 12,
                name: "框架"
            },
            {
                id: 13,
                name: "工程"
            },
        ]
    },
    {
        id: 2,
        name: "算法"
    }
]

export default baseMenu;