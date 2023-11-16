import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import ContactUs from "./components/pages/ContactUs"
import Home from "./components/pages/Home";
import AllProducts from "./components/pages/AllProducts";
import MenCategory from "./components/pages/MenCategory";
import WomenCategory from "./components/pages/WomenCategory";
import Electronics from "./components/pages/Electronics";
import Jewelery from "./components/pages/Jewelery";

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
                            path:"All",
                            index:true,
                            element: <AllProducts/>,
                        },
                        {
                            path:"Men",
                            element: <MenCategory/>,
                        },
                        {
                            path:"Women",
                            element: <WomenCategory/>,
                        },
                        {
                            path:"Electronics",
                            element: <Electronics/>,
                        },
                        {
                            path:"jewelery",
                            element: <Jewelery/>,
                        },
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