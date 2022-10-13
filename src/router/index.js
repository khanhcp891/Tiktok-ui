import { HeaderOnly } from '~/components/Layout';
import routerConfig from '~/config/routers';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRouter = [
    { path: routerConfig.Home, component: Home },
    { path: routerConfig.Following, component: Following },
    { path: routerConfig.Profile, component: Profile },
    { path: routerConfig.Upload, component: Upload, layout: HeaderOnly },
    { path: routerConfig.Search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
