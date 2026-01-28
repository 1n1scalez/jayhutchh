import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getImagesForCategory } from '../constants';

type ContextType = {
    openLightbox: (index: number, images: string[]) => void;
};

const Portfolio = () => {
    const { openLightbox } = useOutletContext<ContextType>();

    return (
        <div className="w-full max-w-[1920px] mx-auto">
            {['GRADS', 'BIRTHDAY', 'MATERNITY', 'COUPLES', 'WEDDINGS', 'PORTFOLIO', 'BRANDING'].map((category, catIndex) => (
                <section key={category} className="mb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                            <h2 className="text-6xl md:text-8xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8]">
                                {category}
                            </h2>
                            <span className="text-zinc-400 font-mono text-sm mb-2">0{catIndex + 1}</span>
                        </div>

                        <div className={`grid grid-cols-1 ${category === 'GRADS' ? 'md:grid-cols-3' : 'md:grid-cols-3'} gap-4 md:gap-8`}>
                            {/* Display specific images for categories if available, else fallback */}
                            {(() => {
                                const sourceImages = getImagesForCategory(category);
                                const isSpecialCategory = category === 'GRADS' || category === 'BIRTHDAY' || category === 'PORTFOLIO' || category === 'COUPLES' || category === 'BRANDING' || category === 'MATERNITY';
                                const imagesToShow = isSpecialCategory
                                    ? sourceImages.slice(0, 3)
                                    : sourceImages.slice(catIndex % 4, (catIndex % 4) + 3);

                                return imagesToShow.map((img, i) => (
                                    <div
                                        key={i}
                                        className="aspect-[4/5] bg-zinc-900 overflow-hidden group relative cursor-pointer"
                                        onClick={() => openLightbox(
                                            isSpecialCategory ? i : (catIndex % 4) + i,
                                            isSpecialCategory ? sourceImages : sourceImages // Pass full source for navigation context
                                        )}
                                    >
                                        <img
                                            src={img}
                                            alt={`${category} ${i}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ));
                            })()}
                        </div>

                        <div className="mt-8 flex justify-end gap-8">
                            <Link
                                to="/packages"
                                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rose-500 transition-colors"
                            >
                                View Packages <ChevronRight size={16} />
                            </Link>
                            <Link
                                to={`/portfolio/${category.toLowerCase()}`}
                                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-rose-500 transition-colors"
                            >
                                View All {category} <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Portfolio;
