import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getImagesForCategory } from '../constants';

type ContextType = {
    openLightbox: (index: number, images: string[]) => void;
};

const CategoryPage = () => {
    const { category } = useParams();
    const { openLightbox } = useOutletContext<ContextType>();

    // Normalize category string for display and logic
    const categoryName = category ? category.toUpperCase() : '';
    const images = getImagesForCategory(categoryName);

    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-20">
            <div className="max-w-7xl mx-auto">
                {/* Header with Back Button */}
                <div className="flex flex-col gap-8 mb-12">
                    <Link
                        to="/portfolio"
                        state={{ preventScroll: true }}
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-[var(--text-color)] transition-colors w-fit"
                    >
                        <ChevronLeft size={16} /> Back to Portfolio
                    </Link>

                    <div className="flex items-end gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                        <h1 className="text-6xl md:text-8xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8]">
                            {categoryName}
                        </h1>
                        <span className="text-zinc-400 font-mono text-sm mb-2">FULL GALLERY</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="aspect-[4/5] bg-zinc-900 overflow-hidden group relative cursor-pointer"
                            onClick={() => openLightbox(i, images)}
                        >
                            <img
                                src={img}
                                alt={`${categoryName} ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
