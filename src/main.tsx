import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import AppRoutes from "./app/routes";
import {Toaster} from "@/components/ui/sonner";

console.log('base url = ', import.meta.env.BASE_URL)

const router = createBrowserRouter(
    createRoutesFromElements(
        AppRoutes
    ), {
        basename: import.meta.env.BASE_URL
    }
);

// @ts-expect-error expecting root
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Toaster/>
        <RouterProvider router={router} />
    </StrictMode>
);
