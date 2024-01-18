import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store/store';
import Register from './pages/Register.jsx';
import Layout from './Layout.jsx';
import Login from './pages/Login.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Home />,
      },
    ],
    
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
           <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
