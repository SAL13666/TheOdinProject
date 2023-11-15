import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import ContactUs from "./components/pages/ContactUs"
import Home from "./components/pages/Home";
import MenCategory from "./components/pages/MenCategory";

function Router() {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path:"Shop",
                    element: <Shop/>,
                    children: [
                        {
                            index:true,
                            path:"men",
                            element:<MenCategory/>
                        }
                    ]
                },
                {
                    path:"About",
                    element: <About />,
                },
                {
                    path:"Contact",
                    element: <ContactUs />,
                },
            ]
        },

    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Router;