import './index.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import AppRutes from "./app/routes";

const router = createBrowserRouter(
    createRoutesFromElements(
        AppRutes
    )
);

// @ts-expect-error expecting root
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
