import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Error404Page from './pages/404';
import ProductsPage from './pages/products';

const router = createBrowserRouter([
  {
    path:"/",
    element: <h1>Hello Peps</h1>,
    errorElement: <Error404Page />
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <RegisterPage />
  },
  {
    path:"/products",
    element: <ProductsPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
