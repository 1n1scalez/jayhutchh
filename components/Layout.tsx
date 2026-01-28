import React, { useState, useEffect } from 'react';
import {
    Maximize,
    LayoutGrid,
    Instagram,
    Moon,
    Sun,
    Facebook,
    Mail,
    Search,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Outlet, Link, useLocation, ScrollRestoration } from 'react-router-dom';
import { ALL_IMAGES, PROFILE_IMAGES } from '../constants'; // Adjust import if Layout is in components/

// Footer Component (Internal to Layout for now)
const ContactSection = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const win = window as any;
        win.vbt = win.vbt || [];
        win.vbt.push(['track', 'form_submission', {
            email: email,
            form_id: 'contact_us_form'
        }]);
        alert('Message sent! Thank you for reaching out.');
    };

    return (
        <section className="w-full bg-[var(--bg-color)] py-24 border-t border-[var(--border-color)] transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Info */}
                    <div className="flex flex-col">
                        <h2 className="font-condensed text-6xl lg:text-8xl mb-6 tracking-tighter leading-[0.8] uppercase">CONTACT ME</h2>
                        <p className="text-zinc-500 font-medium mb-16 text-lg">Got an idea for a project? Let's make it happen!</p>

                        <div className="space-y-10">
                            <div>
                                <h3 className="font-condensed text-2xl uppercase tracking-tighter mb-2">E-MAIL</h3>
                                <p className="text-zinc-500 text-lg">jayhutchh@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="font-condensed text-2xl uppercase tracking-tighter mb-2">LOCATION</h3>
                                <p className="text-zinc-500 text-lg">Richmond, VA</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name*"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email*"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                placeholder="Your message"
                                rows={2}
                                className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="bg-[#bcbcbc] dark:bg-zinc-600 text-white font-condensed px-12 py-4 text-xl tracking-wide uppercase hover:bg-zinc-400 dark:hover:bg-zinc-500 transition-all shadow-sm active:scale-95"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [profileIndex, setProfileIndex] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const phrases = ['LACK OF GREEN', 'VIBE', 'STORY', 'VISION', 'MOMENTS', 'ART'];

    const handleSubscribeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const win = window as any;
        win.vbt = win.vbt || [];
        win.vbt.push(['track', 'form_submission', {
            email: subscribeEmail,
            form_id: 'subscribe_form'
        }]);
        alert('Thank you for subscribing!');
        setSubscribeEmail('');
    };

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

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isCountingDown) {
            // Wait 3 seconds before starting again
            interval = setTimeout(() => {
                setIsCountingDown(false);
                setProfileIndex(0);
            }, 3000);
        } else {
            // Cycle through images every 0.5 seconds
            interval = setInterval(() => {
                setProfileIndex((prev) => {
                    if (prev === PROFILE_IMAGES.length - 1) {
                        setIsCountingDown(true);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 100);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(interval);
        };
    }, [isCountingDown]);

    return (
        <footer className="relative bg-black text-white overflow-hidden border-t border-zinc-900">
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "url('/footer_pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <div className="lg:col-span-5 flex flex-col gap-8 order-3 lg:order-1">
                        <h2 className="font-condensed text-4xl lg:text-6xl leading-[0.85] tracking-tighter">
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

                    <div className="lg:col-span-3 flex flex-col items-center text-center gap-6 order-2 lg:order-2">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-900 ring-2 ring-zinc-800 shadow-2xl">
                            <img src={PROFILE_IMAGES[profileIndex]} alt="Jay Hutch" className="w-full h-full object-cover transition-all duration-300" />
                        </div>
                        <div>
                            <h3 className="font-condensed text-4xl tracking-tighter">@JAYHUTCHH</h3>
                            <p className="font-condensed text-zinc-500 text-lg uppercase tracking-tighter mt-1">
                                Photographer & Visual Storyteller
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

                    <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-8 order-1 lg:order-3">
                        <div>
                            <h3 className="font-condensed text-4xl tracking-tighter mb-2">SUBSCRIBE:</h3>
                            <p className="font-condensed text-zinc-500 text-xl leading-none uppercase tracking-tighter">
                                Be the first to know about special promotions<br />and session availability.
                            </p>
                        </div>
                        <form className="relative group" onSubmit={handleSubscribeSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL ADDRESS"
                                required
                                value={subscribeEmail}
                                onChange={(e) => setSubscribeEmail(e.target.value)}
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

const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Replace simple index with full state
    const [lightboxState, setLightboxState] = useState<{ index: number; images: string[] } | null>(null);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const openLightbox = (index: number, images: string[]) => {
        setLightboxState({ index, images });
    };

    const closeLightbox = () => setLightboxState(null);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxState) {
            setLightboxState(prev => ({
                ...prev!,
                index: (prev!.index + 1) % prev!.images.length
            }));
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (lightboxState) {
            setLightboxState(prev => ({
                ...prev!,
                index: (prev!.index - 1 + prev!.images.length) % prev!.images.length
            }));
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxState) return;
            if (e.key === 'ArrowRight') setLightboxState(prev => ({ ...prev!, index: (prev!.index + 1) % prev!.images.length }));
            else if (e.key === 'ArrowLeft') setLightboxState(prev => ({ ...prev!, index: (prev!.index - 1 + prev!.images.length) % prev!.images.length }));
            else if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxState]);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'PORTFOLIO', path: '/portfolio' },
        { name: 'PACKAGES', path: '/packages' },
        { name: 'AVAILABILITY', path: '/availability' },
        { name: 'ABOUT', path: '/about' },
        { name: 'FAQ', path: '/faq' }
    ];

    // Helper to determine active state roughly based on path
    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="relative min-h-screen z-10 flex flex-col">
            <ScrollRestoration />
            <div className="grid-lines hidden md:flex">
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
            </div>

            <div className="mobile-split-line md:hidden"></div>

            <header className="fixed top-0 left-0 w-full h-24 border-b border-[var(--border-color)] bg-[var(--bg-color)] flex items-center justify-between z-50 transition-colors duration-300">
                <div className="flex md:hidden w-full h-full">
                    <div className="header-logo-block">JH</div>
                    <div className="flex-1 flex items-center justify-center border-r border-[var(--border-color)] bg-[var(--bg-color)]">
                        <button onClick={toggleTheme} className="text-[var(--text-color)]">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                    <div className={`flex-1 flex items-center justify-center transition-colors duration-300 ${mobileMenuOpen ? 'bg-white text-black' : 'bg-black text-white'}`}>
                        <button
                            className="w-full h-full flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <div className="flex flex-col gap-1.5 p-1">
                                    <div className="w-6 h-0.5 bg-current"></div>
                                    <div className="w-6 h-0.5 bg-current"></div>
                                    <div className="w-6 h-0.5 bg-current"></div>
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex w-full h-full items-center justify-between">
                    <div className="header-logo-block">JH</div>
                    <nav className="flex-grow flex justify-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`nav-link ${isActive(item.path) ? 'active' : 'opacity-60 hover:opacity-100'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex h-full">
                        <div
                            className="w-16 h-full border-l border-[var(--border-color)] flex items-center justify-center cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors"
                            onClick={() => {
                                if (!document.fullscreenElement) document.documentElement.requestFullscreen();
                                else if (document.exitFullscreen) document.exitFullscreen();
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

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-zinc-950 text-white pt-24 px-6 md:hidden transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col gap-6 mt-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-4xl font-condensed tracking-tight hover:text-rose-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="absolute bottom-12 left-6 right-6 flex flex-row gap-4">
                    <Link to="/portfolio" className="btn-outline flex-1 py-4 text-center text-white border-white hover:bg-white hover:text-black">
                        VIEW PORTFOLIO
                    </Link>
                    <Link to="/packages" className="btn-outline flex-1 py-4 text-center text-white border-white hover:bg-white hover:text-black">
                        VIEW PACKAGES
                    </Link>
                </div>
            </div>

            <aside className="fixed left-8 top-1/2 -translate-y-1/2 hidden md:block z-40">
                <div className="theme-toggle-pill">
                    <button onClick={() => setIsDarkMode(true)} className={`theme-toggle-btn ${isDarkMode ? 'active' : ''}`}>
                        <span className="toggle-text">DARK</span>
                        <Moon size={14} />
                    </button>
                    <button onClick={() => setIsDarkMode(false)} className={`theme-toggle-btn ${!isDarkMode ? 'active' : ''}`}>
                        <Sun size={14} />
                        <span className="toggle-text">LIGHT</span>
                    </button>
                </div>
            </aside>

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

            <main className="pt-24 min-h-screen flex flex-col relative z-10 flex-grow">
                {/* Pass openLightbox instead of setSelectedIndex */}
                <Outlet context={{ openLightbox }} />
            </main>

            {location.pathname === '/' && <ContactSection />}

            <section className="w-full grid grid-cols-4 lg:grid-cols-8">
                {ALL_IMAGES.slice(0, 8).map((img, index) => (
                    <div key={index} className="aspect-square relative group overflow-hidden border-r last:border-r-0 border-zinc-900">
                        <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                ))}
            </section>
            <Footer />

            {lightboxState && (
                <div className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center p-0 md:p-12 animate-in fade-in duration-500 overflow-hidden" onClick={closeLightbox}>
                    <div className="absolute top-0 left-0 w-full flex justify-between z-[130]">
                        <div className="flex">
                            <div className="header-logo-block !w-[100px] !h-[100px] hidden md:flex">JH</div>
                            <div className="lightbox-counter">{lightboxState.index + 1} / {lightboxState.images.length}</div>
                        </div>
                        <div className="flex bg-black md:bg-transparent">
                            <button className="lightbox-control-btn border-l border-white/10"><Search size={24} /></button>
                            <button className="lightbox-control-btn border-l border-white/10"><Maximize size={24} /></button>
                            <button className="lightbox-control-btn border-l border-white/10"><LayoutGrid size={24} /></button>
                            <button className="lightbox-control-btn lightbox-close-btn border-l border-white/10" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}><X size={32} /></button>
                        </div>
                    </div>
                    <button className="lightbox-nav-btn lightbox-nav-prev" onClick={handlePrev}><ChevronLeft size={48} /></button>
                    <button className="lightbox-nav-btn lightbox-nav-next" onClick={handleNext}><ChevronRight size={48} /></button>
                    <div className="relative w-full h-full flex items-center justify-center p-4 pt-32 pb-32 md:p-0 pointer-events-none">
                        <img
                            key={`${lightboxState.index}-${lightboxState.images[lightboxState.index]}`} // Ensure re-render
                            src={lightboxState.images[lightboxState.index]}
                            alt="Lightbox"
                            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div className="lightbox-brand-pill">jayhutchh.com</div>
                </div>
            )}
        </div>
    );
};

export default Layout;
