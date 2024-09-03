import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Menu from './pages/Menu.jsx';
import Dolci from './pages/Dolci.jsx';
import Bevande from './pages/Bevande.jsx';
import Form from './pages/Form.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "menù",
    element: <Menu/>,
  },
  {
    path: "dolci",
    element: <Dolci/>,
  },
  {
    path: "bevande",
    element: <Bevande/>,
  },
  {
    path: "prenota",
    element: <Form/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
