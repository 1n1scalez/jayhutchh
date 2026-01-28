import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CategoryPage from './pages/CategoryPage';
import Packages from './pages/Packages';
import Availability from './pages/Availability';
import About from './pages/About';
import FAQ from './pages/FAQ';

import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'portfolio/:category', element: <CategoryPage /> },
      { path: 'packages', element: <Packages /> },
      { path: 'availability', element: <Availability /> },
      { path: 'about', element: <About /> },
      { path: 'faq', element: <FAQ /> },
      {
        path: '*',
        element: (
          <div className="min-h-[50vh] flex items-center justify-center">
            <h1 className="text-4xl font-condensed text-[var(--text-color)]">COMING SOON</h1>
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);