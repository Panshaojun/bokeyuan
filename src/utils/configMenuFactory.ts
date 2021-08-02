import Menu from '../type/Menu';
import Config from '../type/Config';

const configMenuFactory: (config: Config[]) => Menu[] = (config) => config.map<Menu>((val, i) => {
    const ans: Menu = {
        id: val.id,
        pid: 0,
        order: i + 1,
        name: val.name,
        type: "sub",
        url: "",
        chirld: []
    };
    if (val.chirld) {
        ans.chirld = configMenuFactory(val.chirld);
    }
    return ans;
})

export default configMenuFactory;