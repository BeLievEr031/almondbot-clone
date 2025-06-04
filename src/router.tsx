import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MachineTending from "./pages/MachineTending";

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
            }
        ]
    }
])

export default router;