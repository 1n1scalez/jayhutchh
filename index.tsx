import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Maximize,
  LayoutGrid,
  Instagram,
  Twitter as TwitterIcon,
  Moon,
  Sun,
  Mail,
  Music
} from 'lucide-react';

// Import images from LandingPage
import antImg from './LandingPage/ant.jpg';
import carmenImg from './LandingPage/carmen.jpg';
import edriImg from './LandingPage/edri.jpg';
import finaImg from './LandingPage/fina.jpg';
import jaedynImg from './LandingPage/jaedyn.jpg';
import kamisImg from './LandingPage/kamis.jpg';
import leoImg from './LandingPage/leo.jpg';
import snowImg from './LandingPage/snow.jpg';
import taiImg from './LandingPage/tai.jpeg';
import yaniImg from './LandingPage/yani.jpeg';
import zoeImg from './LandingPage/zoe.jpeg';
import keshaImg from './LandingPage/kesha.jpeg';
import sadiImg from './LandingPage/sadi.jpg';

type Page = 'HOME' | 'PORTFOLIO' | 'PACKAGES' | 'AVAILABILITY' | 'ABOUT' | 'FAQ';

const Footer = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const phrases = ['LACK OF GREEN', 'VIBE', 'STORY', 'VISION', 'MOMENTS', 'ART'];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = phrases[currentPhraseIndex];

      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(100);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentFullText) {
        // Wait at the end of typing
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed]);

  const galleryImages = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <>
      <div className="gallery-row">
        {galleryImages.map((src, i) => (
          <div key={i} className="gallery-image-container">
            <img src={src} alt={`Work ${i + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      <footer className="site-footer">
        <div className="footer-grid">
          {/* Left Column: Heading */}
          <div className="flex flex-col justify-between">
            <h2 className="footer-heading">
              COME FOR THE PHOTOS,<br />
              STAY FOR THE <span className="red transition-all duration-500 min-h-[1em] inline-block">{displayText}<span className="animate-pulse">|</span></span>
            </h2>

            <div className="mt-12">
              <div className="footer-logo">JH</div>
              <p className="text-[10px] uppercase tracking-widest opacity-40">
                © 2026. Copyright JayHutchh.
              </p>
            </div>
          </div>

          {/* Center Column: Socials */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative w-24 h-24 mb-4">
              <div className="w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden bg-zinc-900">
                <span className="text-2xl font-condensed">JH</span>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-condensed tracking-tighter uppercase mb-1">@jayhutchh</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-60 max-w-[200px] mx-auto">
                Photographer & Visual Creator Serving Worldwide
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#" className="social-icon"><TwitterIcon size={16} /></a>
              <a href="#" className="social-icon"><Instagram size={16} /></a>
              <a href="#" className="social-icon"><Music size={16} /></a>
            </div>
          </div>

          {/* Right Column: Subscribe */}
          <div className="flex flex-col justify-start">
            <h3 className="text-lg font-condensed tracking-tighter uppercase mb-2">Subscribe:</h3>
            <p className="text-xs opacity-60 mb-6">I'll send you cool stuff from time to time.</p>

            <div className="subscription-field">
              <input
                type="email"
                placeholder="email address"
                className="subscription-input"
              />
              <div className="subscription-icon">
                <Mail size={16} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

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

  const navItems: Page[] = ['HOME', 'PORTFOLIO', 'PACKAGES', 'AVAILABILITY', 'ABOUT', 'FAQ'];

  return (
    <div className="relative min-h-screen z-10 flex flex-col">
      {/* Background Grid Lines */}
      <div className="grid-lines hidden md:flex">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Mobile Split Line */}
      <div className="mobile-split-line md:hidden"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full h-24 border-b border-[var(--border-color)] bg-[var(--bg-color)] flex items-center justify-between z-50">
        {/* Mobile Header Layout (3-tab grid) */}
        <div className="flex md:hidden w-full h-full">
          <div className="flex-1 border-r border-[var(--border-color)] bg-black flex items-center justify-center">
            <div className="relative w-10 h-10 flex flex-col justify-center items-center font-black tracking-tighter leading-none text-white">
              <span className="text-2xl border-2 border-white p-1">JH</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center border-r border-[var(--border-color)] bg-[var(--bg-color)]">
            <button onClick={toggleTheme} className="text-[var(--text-color)]">
              {isDarkMode ? <Sun size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <div className="flex-1 bg-black flex items-center justify-center">
            <button className="text-white">
              <div className="flex flex-col gap-1.5 p-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Header Layout (Original) */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          {/* Logo */}
          <div className="w-24 h-full border-r border-[var(--border-color)] flex items-center justify-center">
            <div className="relative w-10 h-10 flex flex-col justify-center items-center font-black tracking-tighter leading-none">
              <span className="text-2xl border-2 border-[var(--text-color)] p-1">JH</span>
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
        </div>
      </header>

      {/* Left Sidebar - Theme Toggle */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-12 z-40">
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
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-12 z-40 px-4">
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
      <main className="pt-24 min-h-screen flex flex-col items-center justify-center px-6 relative z-10 flex-grow">
        <div className="max-w-6xl w-full text-center">
          {/* Mobile Specific Typo Hierarchy */}
          <h1 className="md:hidden text-[11vw] font-condensed uppercase tracking-tighter leading-[0.85] flex flex-col items-center">
            <span className="block font-bold">Hello, I'm Jay Hutch,</span>
            <span className="block text-zinc-400 font-light px-4">Photographer & Visual Creator</span>
            <span className="block font-bold">Based in Michigan, USA.</span>
          </h1>

          {/* Desktop Specific Typo Hierarchy */}
          <h1 className="hidden md:block text-[calc(9vw-10px)] font-condensed uppercase tracking-tighter leading-[0.8]">
            <span className="block">Hello, I'm Jay Hutch,</span>
            <span className="block text-[var(--muted-text)]">Photographer &</span>
            <span className="block text-[var(--muted-text)]">Visual Creator</span>
            <span className="block">
              <span className="text-[var(--muted-text)]">Dedicated to </span>
              <span>Timeless Visuals</span>
            </span>
            <span className="block">
              <span className="text-[var(--muted-text)]">Serving Worldwide.</span>
            </span>
          </h1>

          <div className="flex flex-row gap-4 justify-center mt-12 w-full md:w-auto">
            <button className="btn-outline flex-1 md:flex-none py-4 px-2 text-sm">View Portfolio</button>
            <button className="btn-outline flex-1 md:flex-none py-4 px-2 text-sm">View Collections</button>
          </div>
        </div>

        {/* Recent Work Grid Section */}
        <div className="mt-32 w-full max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-condensed uppercase tracking-tighter mb-4 opacity-80">Recent Work</h2>
            <div className="w-px h-16 bg-[var(--text-color)] mx-auto opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group">
                <img
                  src={leoImg}
                  alt="Recent Work - Leo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={carmenImg}
                  alt="Recent Work - Carmen"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={jaedynImg}
                  alt="Recent Work - Jaedyn"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={finaImg}
                  alt="Recent Work - Fina"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={sadiImg}
                  alt="Recent Work - Sadi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={zoeImg}
                  alt="Recent Work - Zoe"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group">
                <img
                  src={kamisImg}
                  alt="Recent Work - Kamis"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={antImg}
                  alt="Recent Work - Ant"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={keshaImg}
                  alt="Recent Work - Kesha"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group">
                <img
                  src={taiImg}
                  alt="Recent Work - Tai"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={edriImg}
                  alt="Recent Work - Edri"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={yaniImg}
                  alt="Recent Work - Yani"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group">
                <img
                  src={snowImg}
                  alt="Recent Work - Snow"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator or extra content area */}
      <section className="h-screen w-full flex items-center justify-center bg-[var(--bg-color)]">
        <p className="text-[var(--muted-text)] font-bold tracking-widest text-xs uppercase">More content coming soon...</p>
      </section>

      {/* New Footer */}
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);