import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MachineTending from "./pages/MachineTending";
import PickAndPlace from "./pages/PickAndPlace";
import Inspection from "./pages/Inspection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: "machine-tending",
                element: <MachineTending />
            },
            {
                path: "pick-and-place",
                element: <PickAndPlace />
            },
            {
                path: "inspection",
                element: <Inspection />
            },
        ]
    }
])

export default router;