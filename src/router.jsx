import {
    createBrowserRouter,
    RouterProvider,
}
    from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';

const routerContext = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: "/Product",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/AboutUs",
        element: <AboutUsPage></AboutUsPage>
    }
])

function router() {
    return (
        <RouterProvider router={routerContext}>
        </RouterProvider>
    )
}
export default router;