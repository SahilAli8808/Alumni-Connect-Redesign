import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import store from "./store/store";
import Register from "./pages/Register.jsx";
import Layout from "./Layout.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Event from "./Components/Event.jsx";
import Jobs from "./Components/Jobs.jsx";
import Newsletter from "./Components/NewsLetter.jsx";
import SendMail from "./Components/SendMail.jsx";
import BulkUpload from "./Components/BulkUpload.jsx";
import SearchPeople from "./Components/SearchPeople.jsx";
import Meeting from "./Components/Meeting.jsx";
import Feedback from "./Components/Feedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "events",
        element: <Event />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/send-mail",
        element: <SendMail />,
      },
      {
        path: "/bulk-upload",
        element: <BulkUpload />,
      },
      {
        path: "/search-people",
        element: <SearchPeople />,
      },
      {
        path: "/meeting",
        element: <Meeting />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
