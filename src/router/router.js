import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Following from '~/pages/Following';
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Login from '~/pages/Login';

const publicRouter = [
    { path: config.routers.Home, component: Home },
    { path: config.routers.Following, component: Following },
    { path: config.routers.Profile, component: Profile },
    { path: config.routers.Live, component: Live },
    { path: config.routers.Login, component: Login, layout: null },
    { path: config.routers.Logout, component: Live },
    { path: config.routers.Upload, component: Upload, layout: HeaderOnly },
    { path: config.routers.Search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
