import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import AppRutes from "./app/routes";

console.log('base url = ', import.meta.env.BASE_URL)

const router = createBrowserRouter(
    createRoutesFromElements(
        AppRutes
    ), {
        basename: import.meta.env.BASE_URL
    }
);

// @ts-expect-error expecting root
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
