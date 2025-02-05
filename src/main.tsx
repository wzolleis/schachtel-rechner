import './index.css'
import App from './App'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {calculateBox} from "./features/box-calc/box-calc-form-action";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"
               element={<App />}
               action={calculateBox}
        >

        </Route>
    )
);

// @ts-expect-error expecting root
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
