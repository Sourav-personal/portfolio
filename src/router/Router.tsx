import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Unauthorize, Home } from '../pages'
import MainLayout from './MainLayout'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<MainLayout />}>
                <Route path='*' element={<Unauthorize />} />
                <Route path='' element={<Home />} />
                {/* <Route path='about-us' element={<AboutUs />} /> */}
            </Route>
        </>
    )
)

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router