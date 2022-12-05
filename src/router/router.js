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
import EditProfile from '~/pages/EditProfile';

const publicRouter = [
    { path: config.routers.Home, component: Home, idRoute: 1 },
    { path: config.routers.Following, component: Following, idRoute: 2 },
    { path: config.routers.Live, component: Live, idRoute: 3 },
    { path: config.routers.Login, component: Login, layout: null, idRoute: 4 },
    { path: config.routers.Logout, component: Logout, idRoute: 5 },
    { path: config.routers.Register, component: Register, layout: null, idRoute: 6 },
    { path: config.routers.Upload, component: Upload, layout: HeaderOnly, idRoute: 7 },
    { path: config.routers.Search, component: Search, layout: null, idRoute: 8 },
    { path: config.routers.ViewProfile, component: ViewProfile, idRoute: 9 },
    { path: config.routers.EditProfile, component: EditProfile, layout: null, idRoute: 10 },
];

const privateRouter = [];

export { publicRouter, privateRouter };
