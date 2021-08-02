import Menu from '../type/Menu';
import Config from '../type/Config';

const configMenuFactory: (config: Config[]) => Menu[] = (config) => config.map(val => {
    const ans: Menu = {
        name: val.name,
        url: "",
        chirld: []
    };
    if (val.chirld) {
        ans.chirld = configMenuFactory(val.chirld);
    }
    return ans;
})

export default configMenuFactory;