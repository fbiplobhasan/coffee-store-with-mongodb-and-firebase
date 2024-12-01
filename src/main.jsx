import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import CoffeeCard from './components/CoffeeCard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Header from './components/Header.jsx';
import Coffee from './components/Coffee.jsx';
import Providers from './Providers.jsx';
import Users from './components/Users.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
  },
  {
    path: "/addcoffee",
    element:<AddCoffee></AddCoffee>,
  },
  {
    path: "/updatecoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/coffeecard",
    element:<CoffeeCard></CoffeeCard>,
  },
  {
    path: "/signin",
    element:<Login></Login>,
  },
  {
    path: "/signup",
    element:<Signup></Signup>,
  },
  {
    path: "/coffee",
    element:<Coffee></Coffee>,
  },
  {
    path: "/users",
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Providers>
     <RouterProvider router={router} />
     </Providers>
  </StrictMode>,
)
