import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from './pages/MainPages/HomePage.tsx';
import About from './pages/MainPages/About.tsx';
import Blog from './pages/MainPages/Blog.tsx';
import Challenge1 from './pages/HiddenPages/Challenge1Page.tsx';
import Challenge2 from './pages/HiddenPages/Challenge2Page.tsx';
import Challenge3 from './pages/HiddenPages/Challenge3Page.tsx';
import NotFoundPage from './pages/NotFoundPages.tsx';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: < About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/Ch4ll3nG3g4M3",
      element: <Challenge1 />,
    },
    {
      path: "/Ch4ll3nG3R3v3rs3",
      element: <Challenge2 />,
    },
    {
      path: "/Ch4LL3nG3R3ncr1pt",
      element: <Challenge3 />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    }




  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />


  </React.StrictMode>
)
