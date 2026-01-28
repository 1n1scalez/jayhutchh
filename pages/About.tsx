import React from 'react';
import { leoImg, carmenImg, taiImg } from '../constants';

const About = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        ABOUT ME
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">THE CREATOR</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Section */}
                    <div className="relative group">
                        <div className="aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                            <img
                                src={leoImg}
                                alt="Jay Hutch"
                                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-rose-600 hidden md:flex items-center justify-center p-8 text-white">
                            <p className="font-condensed text-2xl leading-tight tracking-tighter">
                                CAPTURING MOMENTS, TELLING STORIES.
                            </p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-condensed tracking-tight uppercase">JAY HUTCH</h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                                Based in Richmond, Virginia, I am a photographer and visual creator dedicated to capturing timeless visuals. My work is defined by a stark black and white aesthetic, focused on raw emotion and authentic storytelling.
                            </p>
                            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                                Whether it's the raw energy of a graduation, the intimate bond of a maternity session, or the professional edge of a branding shoot, my goal is to create images that resonate and stand the test of time.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <h3 className="font-condensed text-xl tracking-widest uppercase mb-4 border-b border-rose-500 w-fit">VISION</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                    To strip away the noise and focus on the essence of the subject, creating visual art that feels both modern and classic.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-condensed text-xl tracking-widest uppercase mb-4 border-b border-rose-500 w-fit">APPROACH</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed font-light">
                                    I believe in a collaborative process, working closely with my clients to ensure their personality and vision shine through every frame.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <h3 className="font-condensed text-2xl tracking-tighter">SELECT CLIENTS & RECOGNITION</h3>
                            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">
                                <span>VOGUE</span> • <span>RICHMOND TIMES-DISPATCH</span> • <span>ART BASEL</span> • <span>LOCAL CREATIVES</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Images */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
                        <img
                            src={taiImg}
                            alt="Work in Progress"
                            className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>
                    <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
                        <img
                            src={carmenImg}
                            alt="On Set"
                            className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
