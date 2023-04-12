import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Men from "./routes/Men";
import Women from "./routes/Women";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import ProductDetail from "./routes/ProductDetail";
import Root from "./routes/Root";
import PageNotFound from "../../React_Router/src/routes/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "productDetail", element: <ProductDetail /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
