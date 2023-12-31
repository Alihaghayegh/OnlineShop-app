import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root  from "./routes/root/root";
import CafeRoot from './routes/cafe/cafeRoot.jsx'
import ProductShow from './routes/productShow/productShow'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/products",
        element: <ProductShow />
      }
    ],
  },
  {
    path: "/cafe",
    element: <CafeRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);