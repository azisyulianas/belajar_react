import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <div>Ayam</div>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
