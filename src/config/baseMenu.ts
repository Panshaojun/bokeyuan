import Config from '../type/Config';
const baseMenu: Config[] = [
    {
        name: "web开发",
        chirld: [
            {
                name: "基础技术",
                chirld: [
                    {
                        name: "CSS & HTML"
                    },
                    {
                        name: "ECMAScript"
                    }
                ]
            },
            {
                name: "框架",
                chirld: [
                    {
                        name: "React"
                    },
                    {
                        name: "Vue"
                    },
                ]
            },
            {
                name: "工程",
                chirld:[
                    {
                        name:"Webpack"
                    },
                    {
                        name:"TypeScript"
                    }
                ]
            },
        ]
    },
]

export default baseMenu;