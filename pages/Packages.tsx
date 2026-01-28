import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
    {
        id: 'grads',
        name: 'GRADUATES',
        price: 'From $250',
        duration: '1 Hour',
        description: 'Capture your achievement with professional portraits in 1 or 2 locations. Includes high-res digital gallery.',
        features: ['10 Retouched Images', '1 Location', 'Unlimited Outfits', 'Online Gallery']
    },
    {
        id: 'birthday',
        name: 'BIRTHDAY',
        price: 'From $300',
        duration: '1.5 Hours',
        description: 'Celebrate another year with a vibrant and personality-filled session. Perfect for milestones.',
        features: ['15 Retouched Images', 'Studio or Location', 'Creative Direction', 'Online Gallery']
    },
    {
        id: 'branding',
        name: 'BRANDING',
        price: 'From $500',
        duration: '3 Hours',
        description: 'Elevate your personal or business brand with professional imagery that tells your story.',
        features: ['30 Retouched Images', 'Creative Consultation', 'Multiple Locations', 'Commercial Rights']
    },
    {
        id: 'weddings',
        name: 'WEDDINGS',
        price: 'Custom Quote',
        duration: 'Full Day',
        description: 'Timeless wedding photography capturing every moment of your special day.',
        features: ['Engagement Session', 'Personalized Timeline', 'Second Photographer', 'Luxury Heirloom Box']
    },
    {
        id: 'maternity',
        name: 'MATERNITY',
        price: 'From $275',
        duration: '1 Hour',
        description: 'A delicate and beautiful session celebrating the journey to motherhood.',
        features: ['8 Retouched Images', 'Studio or Outdoor', 'Styling Advice', 'Online Gallery']
    },
    {
        id: 'couples',
        name: 'COUPLES',
        price: 'From $350',
        duration: '1.5 Hours',
        description: 'Capturing the unique bond and love between two people in an authentic way.',
        features: ['12 Retouched Images', 'Natural Posing', 'Sunset Sessions', 'Online Gallery']
    }
];

const Packages = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        COLLECTIONS
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">INVESTMENT</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className="flex flex-col border border-zinc-100 dark:border-zinc-900 p-8 hover:border-rose-500/50 transition-colors duration-500 group">
                            <div className="flex justify-between items-start mb-6">
                                <h2 className="text-4xl font-condensed tracking-tight group-hover:text-rose-500 transition-colors">{pkg.name}</h2>
                                <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">{pkg.duration}</span>
                            </div>

                            <div className="mb-6">
                                <span className="text-2xl font-bold tracking-tighter">{pkg.price}</span>
                            </div>

                            <p className="text-zinc-500 mb-8 leading-relaxed font-light">
                                {pkg.description}
                            </p>

                            <ul className="space-y-3 mb-12 flex-grow">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/availability"
                                className="w-full bg-[var(--text-color)] text-[var(--bg-color)] py-4 font-condensed text-center tracking-widest uppercase hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
                            >
                                BOOK SESSION <ChevronRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 text-center">
                    <h3 className="font-condensed text-4xl mb-4">LOOKING FOR SOMETHING CUSTOM?</h3>
                    <p className="text-zinc-500 mb-8 max-w-2xl mx-auto">
                        If you have a unique vision that doesn't fit into our standard collections, let's chat. I'm always open to creative collaborations and custom projects.
                    </p>
                    <Link
                        to="/availability"
                        className="inline-block border border-[var(--text-color)] px-12 py-4 font-condensed tracking-widest uppercase hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
                    >
                        GET A CUSTOM QUOTE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Packages;
