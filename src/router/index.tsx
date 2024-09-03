// rooter.tsx
import { createBrowserRouter } from 'react-router-dom'

import ErrorPage from './error404.tsx'
import Home from '../components/Home/index.tsx';
import Gallery from '../components/Gallery/index.tsx'
import Navigate from './Navigate.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/",    element: <Home /> },
            { path: "/:model/:mood?", element: <Gallery /> },

        ],
    },
]);

export default router