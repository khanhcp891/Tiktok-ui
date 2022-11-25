import { HeaderOnly } from '~/layouts';
import config from '~/config';

import Following from '~/pages/Following';
import Home from '~/pages/Home/Home';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Login from '~/pages/Login';
import Logout from '~/pages/Logout';
import Register from '~/pages/Register';
import ViewProfile from '~/pages/ViewProfile';

const publicRouter = [
    { path: config.routers.Home, component: Home },
    { path: config.routers.Following, component: Following },
    { path: config.routers.Live, component: Live },
    { path: config.routers.Login, component: Login, layout: null },
    { path: config.routers.Logout, component: Logout },
    { path: config.routers.Register, component: Register, layout: null },
    { path: config.routers.Upload, component: Upload, layout: HeaderOnly },
    { path: config.routers.Search, component: Search, layout: null },
    { path: config.routers.ViewProfile, component: ViewProfile },
];

const privateRouter = [];

export { publicRouter, privateRouter };
