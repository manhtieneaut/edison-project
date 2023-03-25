import {
    createBrowserRouter,
    RouterProvider,
}
    from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import Cart from './components/CartAPI';

const routerContext = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/Login',
        element: <Login></Login>
    },
    {
        path: '/SignUp',
        element: <SignUp></SignUp>
    },
    {
        path: "/Product",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/AboutUs",
        element: <AboutUsPage></AboutUsPage>
    },
    {
        path: "/Cart/:userId",
        element: <Cart></Cart>
      
    }

])

function router() {
    return (
        <RouterProvider router={routerContext}>
        </RouterProvider>
    )
}
export default router;