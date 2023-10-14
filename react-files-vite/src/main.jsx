// @flow
import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Viscera from "./routes/photography/viscera";
import Ttc1 from "./routes/photography/ttc1";
import Ttc2 from "./routes/photography/ttc2";
import Ttc3 from "./routes/photography/ttc3";
import TwinksVsDolls from "./routes/photography/twinksVsDolls";
import Photobook from "./routes/photography/photobook";
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
      {
        path: "photo/ttc2",
        element: <Ttc2 />,
      },
      {
        path: "photo/ttc3",
        element: <Ttc3 />,
      },
      {
        path: "photo/twinks_vs_dolls_2",
        element: <TwinksVsDolls />,
      },
      {
        path: "photo/kates_show",
        element: null,
      },
      {
        path: "photo/book2021",
        element: <Photobook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
