import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
    leoImg, carmenImg, jaedynImg, finaImg,
    zoeImg, zoe2Img, antImg, keshaImg,
    taiImg, sadiImg, yaniImg, snowImg, valImg, ALL_IMAGES
} from '../constants';

type ContextType = {
    openLightbox: (index: number, images: string[]) => void;
};

const Home = () => {
    const { openLightbox } = useOutletContext<ContextType>();

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 pt-32">
                <div className="max-w-6xl w-full text-center">
                    {/* Mobile Specific Typo Hierarchy */}
                    <h1 className="md:hidden text-[11vw] font-condensed uppercase tracking-tighter leading-[0.85] flex flex-col items-center mb-12">
                        <span className="block font-bold">Hello, I'm Jay Hutch.</span>
                        <span className="block text-zinc-400 font-light px-4">Visual Creator & Storyteller.</span>
                        <span className="block text-zinc-400 font-light text-xl mt-2 italic">Dedicated to</span>
                        <span className="block font-bold underline decoration-rose-600 underline-offset-8">Timeless Narratives.</span>
                        <span className="block text-zinc-400 font-light mt-4 text-lg">Based in RVA — Serving Worldwide.</span>
                    </h1>

                    {/* Desktop Specific Typo Hierarchy */}
                    <h1 className="hidden md:block text-[calc(9vw-10px)] font-condensed uppercase tracking-tighter leading-[0.8] mb-8">
                        <span className="block">Hello, I'm Jay Hutch.</span>
                        <span className="block text-[var(--muted-text)]">Visual Creator &</span>
                        <span className="block text-[var(--muted-text)]">Storyteller.</span>
                        <span className="block">
                            <span className="text-[var(--muted-text)]">Dedicated to </span>
                            <span className="underline decoration-rose-600 underline-offset-[12px]">Timeless Narratives.</span>
                        </span>
                        <span className="block">
                            <span className="text-[var(--muted-text)]">Based in RVA — Serving Worldwide.</span>
                        </span>
                    </h1>

                    <div className="flex flex-row gap-4 justify-center mt-8 md:mt-16 w-full md:w-auto">
                        <Link
                            to="/portfolio"
                            className="btn-outline flex-1 md:flex-none py-4 px-2 text-sm text-center"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            to="/packages"
                            className="btn-outline flex-1 md:flex-none py-4 px-2 text-sm text-center"
                        >
                            View Collections
                        </Link>
                    </div>
                </div>

                {/* Recent Work Grid Section */}
                <div className="mt-24 md:mt-48 w-full max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-condensed uppercase tracking-tighter mb-4 opacity-80">Recent Work</h2>
                        <div className="w-px h-16 bg-[var(--text-color)] mx-auto opacity-20"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-8">
                            <div
                                className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(0, ALL_IMAGES)}
                            >
                                <img
                                    src={leoImg}
                                    alt="Recent Work - Leo"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(1, ALL_IMAGES)}
                            >
                                <img
                                    src={carmenImg}
                                    alt="Recent Work - Carmen"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(2, ALL_IMAGES)}
                            >
                                <img
                                    src={jaedynImg}
                                    alt="Recent Work - Jaedyn"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(3, ALL_IMAGES)}
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
                                onClick={() => openLightbox(4, ALL_IMAGES)}
                            >
                                <img
                                    src={zoeImg}
                                    alt="Recent Work - Zoe"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(5, ALL_IMAGES)}
                            >
                                <img
                                    src={zoe2Img}
                                    alt="Recent Work - Zoe 2"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(6, ALL_IMAGES)}
                            >
                                <img
                                    src={antImg}
                                    alt="Recent Work - Ant"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(7, ALL_IMAGES)}
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
                                onClick={() => openLightbox(8, ALL_IMAGES)}
                            >
                                <img
                                    src={taiImg}
                                    alt="Recent Work - Tai"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(9, ALL_IMAGES)}
                            >
                                <img
                                    src={sadiImg}
                                    alt="Recent Work - Sadi"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(10, ALL_IMAGES)}
                            >
                                <img
                                    src={yaniImg}
                                    alt="Recent Work - Yani"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div
                                className="rounded-2xl overflow-hidden aspect-[2/3] bg-zinc-900 group cursor-pointer"
                                onClick={() => openLightbox(11, ALL_IMAGES)}
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

                {/* Spacing before Valentines */}
                <div className="w-full py-12"></div>
            </div>

            {/* Valentines Day Mini Shoot Section */}
            <section className="w-full bg-black border-t border-zinc-900 overflow-hidden">
                <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
                    {/* Media - Top on mobile, Left/Right on desktop */}
                    <div className="flex-1 relative aspect-[4/5] lg:aspect-auto bg-zinc-900 group cursor-pointer overflow-hidden order-1 lg:order-2">
                        <img
                            src={valImg}
                            alt="Valentines Shoot"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center items-start gap-6 lg:gap-8 order-2 lg:order-1 text-white">
                        <h2 className="font-condensed text-[15vw] lg:text-8xl leading-[0.8] tracking-tighter uppercase">
                            VALENTINE'S<br />SELF-LOVE<br />MINI SESSIONS
                        </h2>
                        <p className="text-zinc-400 max-w-md text-lg lg:text-xl leading-relaxed font-light">
                            A confidence-boosting studio session made just for you. Exclusive to Virginia, these limited sessions are designed to capture your authentic self.
                        </p>
                        <div className="flex gap-4 w-full md:w-auto">
                            <a
                                href="https://book.stripe.com/eVqaEW3MuaDr15J9OebfO0L"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-rose-600 text-white px-8 py-4 font-condensed text-xl tracking-wide uppercase hover:bg-rose-700 transition-colors text-center flex-1 md:flex-none shadow-lg"
                            >
                                RESERVE MY SPOT
                            </a>
                        </div>
                        <div className="w-full">
                            <p className="text-[10px] md:text-xs tracking-widest uppercase text-rose-400 font-bold bg-rose-950/40 border border-rose-900/30 px-4 py-2 rounded-sm inline-block">
                                ONLY 30 SESSIONS AVAILABLE • FEB 8–14 ONLY
                            </p>
                        </div>
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
        </>
    );
};

export default Home;
