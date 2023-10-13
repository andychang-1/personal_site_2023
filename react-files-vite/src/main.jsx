import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/index.css";
import Root from "routes/_root";
import ErrorPage from "./error-page";
import Photography from "routes/photography/photography";
import Viscera from "routes/photography/viscera";
import Ttc1 from "routes/photography/ttc1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "photo/viscera",
        element: <Viscera />,
      },
      {
        path: "photo/ttc1",
        element: <Ttc1 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
