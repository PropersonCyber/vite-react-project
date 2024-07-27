import React from "react";
import ReactDOM from "react-dom/client";
//引入路由
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import Root, { loader as rootLoader, action as rootAction } from "./routes/index.tsx";
import ErrorPage from "./components/error-page.jsx";

import "./index.css";
import Contact, { loader as contactLoader, action as contactAction } from "./routes/contact.jsx";
import EditContact, { action as editAction } from "./routes/edit.jsx";
import { action as destroyAction } from "./routes/destroy.jsx";
import Index from "./routes/indexFunc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops!! there was an error.</div>,
          },
        ],
      },
    ],
  },
]);

const appRoot = ReactDOM.createRoot(document.getElementById("root")!);
appRoot.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
