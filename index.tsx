import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Maximize, 
  LayoutGrid, 
  Instagram, 
  Twitter as TwitterIcon, 
  Moon, 
  Sun
} from 'lucide-react';

type Page = 'HOME' | 'PRINTS' | 'JOURNAL' | 'COLLECTIONS' | 'PORTFOLIO' | 'GEAR' | 'ABOUT';

const App = () => {
  const [activePage, setActivePage] = useState<Page>('HOME');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navItems: Page[] = ['HOME', 'PRINTS', 'JOURNAL', 'COLLECTIONS', 'PORTFOLIO', 'GEAR', 'ABOUT'];

  return (
    <div className="relative min-h-screen z-10">
      {/* Background Grid Lines */}
      <div className="grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-24 border-b border-[var(--border-color)] bg-[var(--bg-color)] flex items-center justify-between z-50">
        {/* Logo */}
        <div className="w-24 h-full border-r border-[var(--border-color)] flex items-center justify-center">
          <div className="relative w-10 h-10 flex flex-col justify-center items-center font-black tracking-tighter leading-none">
            <span className="text-2xl border-2 border-[var(--text-color)] p-1">BM</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow flex justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`nav-link ${activePage === item ? 'active' : 'opacity-60 hover:opacity-100'}`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex h-full">
           <div className="w-16 h-full border-l border-[var(--border-color)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors">
            <Maximize size={18} />
          </div>
          <div className="w-16 h-full border-l border-[var(--border-color)] flex items-center justify-center cursor-pointer bg-zinc-950 text-white">
            <LayoutGrid size={18} />
          </div>
        </div>
      </header>

      {/* Left Sidebar - Theme Toggle */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-40">
        <div className="flex flex-col items-center gap-2">
            <button 
                onClick={() => setIsDarkMode(false)} 
                className={`flex flex-col items-center gap-2 group ${!isDarkMode ? 'text-[var(--text-color)]' : 'text-[var(--muted-text)]'}`}
            >
                <div className="vertical-text">LIGHT</div>
                <Sun size={14} className={!isDarkMode ? 'opacity-100' : 'opacity-40'} />
            </button>
            <div className="w-px h-8 bg-[var(--border-color)] my-2"></div>
            <button 
                onClick={() => setIsDarkMode(true)} 
                className={`flex flex-col items-center gap-2 group ${isDarkMode ? 'text-[var(--text-color)]' : 'text-[var(--muted-text)]'}`}
            >
                <Moon size={14} className={isDarkMode ? 'opacity-100' : 'opacity-40'} />
                <div className="vertical-text transform rotate-180">DARK</div>
            </button>
        </div>
      </aside>

      {/* Right Sidebar - Socials */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-40 px-4">
        <a href="#" className="flex items-center gap-4 text-[var(--text-color)] opacity-60 hover:opacity-100 transition-opacity">
            <div className="vertical-text">INSTAGRAM</div>
            <Instagram size={14} />
        </a>
        <a href="#" className="flex items-center gap-4 text-[var(--text-color)] opacity-60 hover:opacity-100 transition-opacity">
            <div className="vertical-text">TWITTER</div>
            <TwitterIcon size={14} />
        </a>
      </aside>

      {/* Main Content */}
      <main className="pt-24 min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-[12vw] md:text-[9vw] font-condensed uppercase tracking-tighter leading-[0.8]">
            <span className="block">Hello, I'm Bryan Minear,</span>
            <span className="block text-[var(--muted-text)]">Fujifilm Ambassador,</span>
            <span className="block text-[var(--muted-text)]">Creative Director &</span>
            <span className="block">
                <span className="text-[var(--muted-text)]">Graphic Designer </span>
                <span>Based in</span>
            </span>
            <span className="block">
                <span className="text-[var(--muted-text)]">Michigan, USA.</span>
            </span>
          </h1>

          <div className="flex gap-4 justify-center mt-12">
            <button className="btn-outline">View Portfolio</button>
            <button className="btn-outline">View Collections</button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-32 w-full text-center">
            <h2 className="text-4xl font-condensed uppercase tracking-tighter mb-4 opacity-80">Recent Work</h2>
            <div className="w-px h-16 bg-[var(--text-color)] mx-auto opacity-20"></div>
        </div>
      </main>

      {/* Scroll Indicator or extra content area */}
      <section className="h-screen w-full flex items-center justify-center bg-[var(--bg-color)]">
          <p className="text-[var(--muted-text)] font-bold tracking-widest text-xs uppercase">More content coming soon...</p>
      </section>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);