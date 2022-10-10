import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/router';
import { DefaultLayout } from '~/components/Layout';

function App() {
    // const renderLayout = (ChildrenComponent) => {
    //     return <DefaultLayout Comp={ChildrenComponent} /   >;
    // };
    // const renderPage = (Component) => {
    //     return <Component />;
    // };

    return (
        // <DefaultLayout>
        //     <h1>adasdasdasda</h1>
        // </DefaultLayout>
        <Router>
            <div className="App">
                <Routes>
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
            </div>
        </Router>
    );
}

export default App;
