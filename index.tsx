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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:category" element={<CategoryPage />} />
            <Route path="packages" element={<Packages />} />
            <Route path="availability" element={<Availability />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={
              <div className="min-h-[50vh] flex items-center justify-center">
                <h1 className="text-4xl font-condensed text-[var(--text-color)]">COMING SOON</h1>
              </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);