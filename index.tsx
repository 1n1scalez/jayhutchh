import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Maximize,
  LayoutGrid,
  Instagram,
  Moon,
  Sun,
  Mail,
  Music,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Play,
  Download,
  Facebook
} from 'lucide-react';

// Import images from LandingPage
import antImg from './LandingPage/ant.jpg';
import carmenImg from './LandingPage/carmen.jpg';
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
import zoe2Img from './LandingPage/zoe2.jpeg';
import valImg from './LandingPage/val.png';

const ALL_IMAGES = [
  leoImg, carmenImg, jaedynImg, finaImg,
  zoeImg, zoe2Img, antImg, keshaImg,
  taiImg, sadiImg, yaniImg, snowImg
];

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
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/footer_pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left: Headline */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="font-condensed text-5xl lg:text-7xl leading-[0.85] tracking-tighter">
              COME FOR THE PHOTOS,<br />
              STAY FOR THE <span className="text-rose-600 inline-block min-w-[10ch]">{displayText}<span className="animate-pulse">|</span></span>
            </h2>
            <div className="flex items-center gap-6 mt-4">
              <div className="w-24 h-24 bg-white text-black flex items-center justify-center font-condensed text-4xl border border-white tracking-tighter">
                JH
              </div>
              <p className="font-condensed text-zinc-500 text-xl tracking-tighter uppercase">
                © {new Date().getFullYear()}. Made by Jay Hutch.
              </p>
            </div>
          </div>

          {/* Center: Profile */}
          <div className="lg:col-span-3 flex flex-col items-center text-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-900 ring-2 ring-zinc-800 shadow-2xl">
              <img src={leoImg} alt="Jay Hutch" className="w-full h-full object-cover transition-all duration-500" />
            </div>
            <div>
              <h3 className="font-condensed text-4xl tracking-tighter">@JAYHUTCHH</h3>
              <p className="font-condensed text-zinc-500 text-lg uppercase tracking-tighter mt-1">
                Photographer & Visual Creator
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com/jayhutchh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/jayhutchh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* Right: Subscribe */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-8">
            <div>
              <h3 className="font-condensed text-4xl tracking-tighter mb-2">SUBSCRIBE:</h3>
              <p className="font-condensed text-zinc-500 text-xl leading-none uppercase tracking-tighter">
                I'll send you cool stuff from time to time.<br />No spam, just vibes.
              </p>
            </div>
            <form className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-zinc-900/50 border border-zinc-800 py-4 px-6 pr-12 rounded text-white text-xl font-condensed tracking-tighter placeholder:text-zinc-700 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-rose-500 transition-colors"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState<Page>('HOME');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % ALL_IMAGES.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev! + 1) % ALL_IMAGES.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev! - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

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
          <div className="header-logo-block">
            JH
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
          <div className="header-logo-block">
            JH
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
            <div
              className="w-16 h-full border-l border-[var(--border-color)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors"
              onClick={() => {
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen();
                } else {
                  if (document.exitFullscreen) {
                    document.exitFullscreen();
                  }
                }
              }}
            >
              <Maximize size={18} />
            </div>
            <div className="w-16 h-full border-l border-[var(--border-color)] flex items-center justify-center cursor-pointer bg-zinc-950 text-white">
              <LayoutGrid size={18} />
            </div>
          </div>
        </div>
      </header>

      {/* Left Sidebar - Theme Toggle */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden md:block z-40">
        <div className="theme-toggle-pill">
          <button
            onClick={() => setIsDarkMode(true)}
            className={`theme-toggle-btn ${isDarkMode ? 'active' : ''}`}
          >
            <span className="toggle-text">DARK</span>
            <Moon size={14} />
          </button>
          <button
            onClick={() => setIsDarkMode(false)}
            className={`theme-toggle-btn ${!isDarkMode ? 'active' : ''}`}
          >
            <Sun size={14} />
            <span className="toggle-text">LIGHT</span>
          </button>
        </div>
      </aside>

      {/* Right Sidebar - Socials */}
      <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:block z-40">
        <div className="vertical-socials">
          <a href="https://instagram.com/jayhutchh" target="_blank" rel="noopener noreferrer" className="social-link-vertical">
            <span>INSTAGRAM</span>
            <Instagram size={18} />
          </a>
          <a href="https://facebook.com/jayhutchh" target="_blank" rel="noopener noreferrer" className="social-link-vertical">
            <span>FACEBOOK</span>
            <Facebook size={18} className="transform -rotate-90" />
          </a>
        </div>
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
              <div
                className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(0)}
              >
                <img
                  src={leoImg}
                  alt="Recent Work - Leo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(1)}
              >
                <img
                  src={carmenImg}
                  alt="Recent Work - Carmen"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(2)}
              >
                <img
                  src={jaedynImg}
                  alt="Recent Work - Jaedyn"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(3)}
              >
                <img
                  src={finaImg}
                  alt="Recent Work - Fina"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8">
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(4)}
              >
                <img
                  src={zoeImg}
                  alt="Recent Work - Zoe"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(5)}
              >
                <img
                  src={zoe2Img}
                  alt="Recent Work - Zoe 2"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(6)}
              >
                <img
                  src={antImg}
                  alt="Recent Work - Ant"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(7)}
              >
                <img
                  src={keshaImg}
                  alt="Recent Work - Kesha"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <div
                className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(8)}
              >
                <img
                  src={taiImg}
                  alt="Recent Work - Tai"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(9)}
              >
                <img
                  src={sadiImg}
                  alt="Recent Work - Sadi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(10)}
              >
                <img
                  src={yaniImg}
                  alt="Recent Work - Yani"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedIndex(11)}
              >
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

      {/* Spacing */}
      <section className="w-full bg-[var(--bg-color)] py-24" />

      {/* Valentines Day Mini Shoot Section */}
      <section className="width-full bg-rose-50 dark:bg-zinc-950 border-t border-rose-200 dark:border-zinc-800 overflow-hidden transition-colors duration-500">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
          {/* Left Content */}
          <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center items-start gap-8 order-2 lg:order-1">
            <h2 className="font-[Bebas_Neue] text-6xl lg:text-8xl leading-[0.85] tracking-tight text-rose-950 dark:text-rose-50">
              VALENTINE'S<br />SELF-LOVE<br />MINI SESSIONS
            </h2>
            <p className="text-rose-800/80 dark:text-rose-200/70 max-w-md text-lg leading-relaxed font-medium">
              A confidence-boosting studio session made just for you. Exclusive to Virginia, these limited sessions are designed to capture your authentic self.
            </p>
            <div className="flex gap-4">
              <a
                href="https://book.stripe.com/eVqaEW3MuaDr15J9OebfO0L"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 dark:bg-rose-700 text-white px-8 py-4 font-condensed text-xl tracking-wide uppercase hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors text-center flex items-center justify-center shadow-lg hover:shadow-rose-500/20"
              >
                RESERVE MY SPOT
              </a>
            </div>
            <p className="text-xs tracking-widest uppercase text-rose-600 dark:text-rose-400 font-bold bg-rose-100 dark:bg-rose-900/30 px-3 py-1 rounded-sm">
              ONLY 30 SESSIONS AVAILABLE • FEB 8–14 ONLY
            </p>
          </div>

          {/* Right Media */}
          <div className="flex-1 relative order-1 lg:order-2 bg-rose-200 dark:bg-zinc-900 group cursor-pointer overflow-hidden">
            <img
              src={valImg}
              alt="Valentines Shoot"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-black/95 text-white py-16 border-t border-white/10 relative overflow-hidden">
          {/* Background Topo Pattern Opacity */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/topo_background.png')", backgroundSize: 'cover' }}></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="font-[Bebas_Neue] text-5xl md:text-6xl">30</span>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">MINUTES</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-[Bebas_Neue] text-5xl md:text-6xl">6</span>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">PHOTOS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-[Bebas_Neue] text-5xl md:text-6xl">1</span>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">OUTFIT</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="font-[Bebas_Neue] text-5xl md:text-6xl">$225</span>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-400">PRICE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="w-full bg-[var(--bg-color)] py-24" />

      {/* New Footer */}
      {/* Photo Strip */}
      <section className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {ALL_IMAGES.slice(0, 8).map((img, index) => (
          <div
            key={index}
            className="aspect-square relative group overflow-hidden"
          >
            <img
              src={img}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </section>
      <Footer />


      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center p-0 md:p-12 animate-in fade-in duration-500 overflow-hidden"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-0 left-0 w-full flex justify-between z-[130]">
            <div className="flex">
              <div className="header-logo-block !w-[100px] !h-[100px] hidden md:flex">
                JH
              </div>
              <div className="lightbox-counter">
                {selectedIndex + 1} / {ALL_IMAGES.length}
              </div>
            </div>

            <div className="flex bg-black md:bg-transparent">
              <button className="lightbox-control-btn border-l border-white/10">
                <Search size={24} />
              </button>
              <button className="lightbox-control-btn border-l border-white/10">
                <Maximize size={24} />
              </button>
              <button className="lightbox-control-btn border-l border-white/10">
                <LayoutGrid size={24} />
              </button>
              <button
                className="lightbox-control-btn lightbox-close-btn border-l border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                <X size={32} />
              </button>
            </div>
          </div>

          {/* Nav Arrows */}
          <button className="lightbox-nav-btn lightbox-nav-prev" onClick={handlePrev}>
            <ChevronLeft size={48} />
          </button>
          <button className="lightbox-nav-btn lightbox-nav-next" onClick={handleNext}>
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4 pt-32 pb-32 md:p-0 pointer-events-none">
            <img
              key={selectedIndex}
              src={ALL_IMAGES[selectedIndex]}
              alt="Lightbox"
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Pill */}
          <div className="lightbox-brand-pill">
            jayhutchh.com
          </div>
        </div>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);