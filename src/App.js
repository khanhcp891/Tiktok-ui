import { Fragment } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/router';
import { DefaultLayout } from '~/layouts';
import Error404 from './404';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    {publicRouter.map((route, index) => {
                        // const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
