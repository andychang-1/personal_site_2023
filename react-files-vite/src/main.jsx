// @flow
import * as React from "react";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/index.css";
import Root from "root";
import ErrorPage from "error-page";

import Constants from "./constants";

const allMappings = Constants.PHOTO_SECTION_MAPPING.concat(
  Constants.FURNITURE_SECTION_MAPPING
).concat(Constants.CLOTHES_SECTION_MAPPING);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: allMappings.map((obj) => {
      return { path: obj.path, element: obj.comp };
    }),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
