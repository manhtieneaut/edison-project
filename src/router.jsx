import {
    createBrowserRouter,
    RouterProvider,
}
    from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Cart from './components/CartAPI';

const routerContext = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/Home',
        element: <HomePage></HomePage>
    },
    {
        path: '/Login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/Register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: "/Product",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/About",
        element: <AboutUsPage></AboutUsPage>
    },
    {
        path: "/Cart",
        element: <Cart></Cart>
    }
])

const router = () => {
    return (
        <RouterProvider router={routerContext}></RouterProvider>
    )
}
export default router;