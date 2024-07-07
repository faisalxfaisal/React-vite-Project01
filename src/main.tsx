import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.tsx";
import CreateRequest from "./Create Request/CreateRequest.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";
import Help from "./Help/Help.tsx";
import Admin from "./Admin/Admin.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/CreateRequest",
        element: <CreateRequest />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/Faisal",
    element: <div>Hello Faisal</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </ RouterProvider> */}
  </React.StrictMode>
);
