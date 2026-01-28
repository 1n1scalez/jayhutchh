import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import CategoryPage from './pages/CategoryPage';

import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:category" element={<CategoryPage />} />
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