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
import Singleproduct from "./routes/Singleproduct";
import Root from "./routes/Root";
import PostList, { postListLoader } from "./routes/PostList";
import PostDetail, { postDetailLoader } from "./routes/PostDetail";
import PageNotFound from "./routes/PageNotFound";
import Todo, { todoActions } from "./routes/Todo";
import { todoLoader } from "./routes/Todo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "home", element: <Home /> },
      { path: "men", element: <Men /> },
      { path: "women", element: <Women /> },
      // { path: "blog", element: <Blog /> },
      { path: "blog", element: <PostList />, loader: postListLoader },
      {
        path: "blog/:postId",
        element: <PostDetail />,
        loader: postDetailLoader,
      },
      { path: "contact", element: <Contact /> },
      {
        path: "todo",
        element: <Todo />,
        loader: todoLoader,
        action: todoActions,
      },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "singleproduct", element: <Singleproduct /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
