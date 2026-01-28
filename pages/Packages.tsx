import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
    {
        id: 'grads',
        name: 'GRADUATES',
        tiers: [
            {
                name: 'Senior Package',
                price: '$350',
                duration: '45 Minutes',
                description: 'College and high school graduation portraits.',
                features: ['6 Edited Images', '2 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/5kQ14m4Qy5j715J3pQbfO08'
            },
            {
                name: 'Graduate Package',
                price: '$475',
                duration: '60 Minutes',
                description: 'College and high school graduation portraits.',
                features: ['10 Edited Images', '3 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/4gMaEW2Iq4f36q33pQbfO01'
            },
            {
                name: 'Valedictorian Package',
                price: '$550',
                duration: '90 Minutes',
                description: 'Extended session for your big achievement.',
                features: ['20 Edited Images', 'Unlimited Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/aFa3cu4Qy8vj7u76C2bfO0d'
            }
        ]
    },
    {
        id: 'birthday',
        name: 'BIRTHDAY',
        tiers: [
            {
                name: 'Classic Package',
                price: '$350',
                duration: '45 Minutes',
                description: 'Celebrate another year with vibrant portraits.',
                features: ['6 Edited Images', '2 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/14A9ASdn43aZ15Jf8ybfO0l'
            },
            {
                name: 'Fun Package',
                price: '$500',
                duration: '60 Minutes',
                description: 'Perfect for milestone birthdays.',
                features: ['10 Edited Images', '3 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/7sY8wO6YG12Rg0DgcCbfO0n'
            },
            {
                name: 'Custom Package',
                price: '$1000',
                duration: '120 Minutes',
                description: 'Full creative production with custom setup.',
                features: ['20 Edited Images', 'Unlimited Outfits', '1 Custom Setup w/Decor & Props', 'All RAWs Included'],
                link: 'https://book.stripe.com/bJe8wOer89zn6q32lMbfO0p'
            }
        ]
    },
    {
        id: 'portrait',
        name: 'PORTRAIT',
        tiers: [
            {
                name: 'Essential Package',
                price: '$350',
                duration: '45 Minutes',
                description: 'Professional portraits at a single location.',
                features: ['6 Edited Images', '1 Location', '2 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/6oUfZgbeW8vjaGje4ubfO0f'
            },
            {
                name: 'Standard Package',
                price: '$500',
                duration: '60 Minutes',
                description: 'Multi-location portrait session.',
                features: ['10 Edited Images', '2 Locations', '3 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/00w28q0AifXL7u75xYbfO0h'
            },
            {
                name: 'Signature Package',
                price: '$750',
                duration: '120 Minutes',
                description: 'Premium portrait experience with custom setup.',
                features: ['20 Edited Images', '3 Locations', 'Unlimited Outfits', '1 Custom Setup w/Decor & Props', 'All RAWs Included'],
                link: 'https://book.stripe.com/00w14m82KdPD3dR8KabfO0j'
            }
        ]
    },
    {
        id: 'branding',
        name: 'BRANDING',
        tiers: [
            {
                name: 'Startup Package',
                price: '$425',
                duration: '60 Minutes',
                description: 'Elevate your brand with professional imagery.',
                features: ['6 Edited Images', '2 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/14A6oGaaS9zncOrbWmbfO0I'
            },
            {
                name: 'Lifestyle Package',
                price: '$550',
                duration: '90 Minutes',
                description: 'Comprehensive branding session.',
                features: ['10 Edited Images', '3 Outfits', 'All RAWs Included'],
                link: 'https://buy.stripe.com/fZu00i1Em8vjeWzaSibfO0J'
            },
            {
                name: 'Business Power Package',
                price: '$1500',
                duration: '180 Minutes',
                description: 'Complete brand storytelling package.',
                features: ['20 Edited Images', 'Unlimited Outfits', 'All RAWs Included'],
                link: 'https://buy.stripe.com/eVq00idn426V15J7G6bfO0K'
            }
        ]
    },
    {
        id: 'couples',
        name: 'COUPLES',
        tiers: [
            {
                name: 'Classy Couples Package',
                price: '$400',
                duration: '60 Minutes',
                description: 'Capture the unique bond between two people.',
                features: ['6 Edited Images', '2 Outfits', 'Online Gallery', 'All RAWs Included'],
                link: 'https://book.stripe.com/3cIeVcfvc4f36q32lMbfO0r'
            },
            {
                name: 'Elegant Couples Package',
                price: '$525',
                duration: '60 Minutes',
                description: 'Extended couples session.',
                features: ['10 Edited Images', '3 Outfits', 'Online Gallery', 'All RAWs Included'],
                link: 'https://book.stripe.com/6oU8wO6YG9znbKnd0qbfO0t'
            }
        ]
    },
    {
        id: 'family',
        name: 'FAMILY',
        tiers: [
            {
                name: 'Classic Family Package',
                price: '$450',
                duration: '45 Minutes',
                description: 'Beautiful family portraits to treasure forever.',
                features: ['6 Edited Images', '2 Outfits', 'Online Gallery', 'All RAWs Included'],
                link: 'https://book.stripe.com/dRm8wO3MubHvg0D8KabfO0v'
            },
            {
                name: 'Classy Family Package',
                price: '$575',
                duration: '60 Minutes',
                description: 'Extended family session.',
                features: ['10 Edited Images', '3 Outfits', 'Online Gallery', 'All RAWs Included'],
                link: 'https://book.stripe.com/7sY00i0Ai8vjcOrf8ybfO0x'
            }
        ]
    },
    {
        id: 'maternity',
        name: 'MATERNITY',
        tiers: [
            {
                name: 'Classic Maternity Package',
                price: '$450',
                duration: '45 Minutes',
                description: 'Celebrating the journey to motherhood.',
                features: ['6 Edited Images', '2 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/fZu6oG0Ai8vj7u75xYbfO0D'
            },
            {
                name: 'Custom Maternity Package',
                price: '$800',
                duration: '60 Minutes',
                description: 'Delicate and beautiful maternity session.',
                features: ['10 Edited Images', '3 Outfits', 'All RAWs Included'],
                link: 'https://book.stripe.com/9B64gycj06nbeWz6C2bfO0F'
            }
        ]
    },
    {
        id: 'weddings',
        name: 'WEDDINGS',
        tiers: [
            {
                name: 'Essential Wedding Package',
                price: '$2800',
                duration: 'Up to 6 Hours',
                description: 'Professional wedding coverage for your special day.',
                features: ['350+ Edited Images', '1 Lead Photographer', 'Online Gallery', 'Print Release', 'Planning Call Before Wedding'],
                link: 'https://www.jayhutchh.com/check-availability'
            },
            {
                name: 'Signature Wedding Package',
                price: '$3800',
                duration: 'Up to 8 Hours',
                description: 'Timeless wedding photography.',
                features: ['500+ Edited Images', '1 Lead Photographer', 'Online Gallery', 'Print Release', 'Sneak Peeks Within 72 Hours', 'Timeline Assistance'],
                link: 'https://www.jayhutchh.com/check-availability'
            },
            {
                name: 'Premier Wedding Package',
                price: '$5200',
                duration: 'Up to 10 Hours',
                description: 'Complete wedding photography experience.',
                features: ['700+ Edited Images', '2 Photographers', 'Online Gallery', 'Print Release', 'Sneak Peeks Within 48 Hours', 'Priority Editing', 'Full Timeline Planning + Coordination Support'],
                link: 'https://www.jayhutchh.com/check-availability'
            }
        ]
    }
];

const Packages = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        PACKAGES
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">INVESTMENT</span>
                </div>

                {packages.map((pkg) => (
                    <div key={pkg.id} className="mb-16">
                        <h2 className="text-5xl md:text-6xl font-condensed tracking-tighter mb-8 uppercase text-[var(--text-color)]">
                            {pkg.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pkg.tiers.map((tier, index) => (
                                <div key={index} className="flex flex-col border border-zinc-100 dark:border-zinc-900 p-8 hover:border-rose-500/50 transition-colors duration-500 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-2xl font-condensed tracking-tight group-hover:text-rose-500 transition-colors">{tier.name}</h3>
                                        <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">{tier.duration}</span>
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-3xl font-bold tracking-tighter">{tier.price}</span>
                                    </div>

                                    <p className="text-zinc-500 mb-8 leading-relaxed font-light">
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-3 mb-12 flex-grow">
                                        {tier.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mb-6 text-[10px] text-zinc-400 leading-tight italic">
                                        Deposits are non-refundable. Additional fees (travel{pkg.id !== 'weddings' ? ', studio' : ''}) are invoiced separately to finalize the booking.
                                    </div>

                                    <a
                                        href={tier.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[var(--text-color)] text-[var(--bg-color)] py-4 font-condensed text-center tracking-widest uppercase hover:bg-rose-600 transition-colors flex items-center justify-center gap-2"
                                    >
                                        {pkg.id === 'weddings' ? 'CHECK AVAILABILITY' : 'RESERVE WITH DEPOSIT'} <ChevronRight size={16} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="mt-32 mb-24">
                    <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                        <h2 className="text-7xl md:text-8xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                            ADD-ONS
                        </h2>
                        <span className="text-zinc-400 font-mono text-sm mb-2">CUSTOMIZE YOUR SESSION</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-mono text-xs text-rose-500 uppercase tracking-widest mb-4">Enhancements</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">Extra Edited Image</span>
                                        <span className="font-bold">$15 ea / 10 for $120</span>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">Second Location</span>
                                        <span className="font-bold">$100</span>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">Extra Outfit</span>
                                        <span className="font-bold">$50</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs text-rose-500 uppercase tracking-widest mb-4">Deliverables</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">Rush Delivery (24-48h)</span>
                                        <span className="font-bold">$150</span>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">Rush Delivery (4-5 days)</span>
                                        <span className="font-bold">$50</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="font-mono text-xs text-rose-500 uppercase tracking-widest mb-4">Extra Time</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">+15 Minutes</span>
                                        <span className="font-bold">$75</span>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">+30 Minutes</span>
                                        <span className="font-bold">$125 - $150</span>
                                    </div>
                                    <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                        <span className="text-zinc-600 dark:text-zinc-300">+60 Minutes</span>
                                        <span className="font-bold">$250 - $300</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-zinc-500 italic text-sm">
                                    Add-ons can be requested before or after your session.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 p-12 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 text-center">
                    <h3 className="font-condensed text-4xl mb-4">LOOKING FOR SOMETHING CUSTOM?</h3>
                    <p className="text-zinc-500 mb-8 max-w-2xl mx-auto">
                        If you have a unique vision that doesn't fit into our standard packages, let's chat. I'm always open to creative collaborations and custom projects.
                    </p>
                    <Link
                        to="/availability"
                        className="inline-block border border-[var(--text-color)] px-12 py-4 font-condensed tracking-widest uppercase hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all"
                    >
                        GET A CUSTOM QUOTE
                    </Link>
                </div>

                <div className="mt-8 text-center text-zinc-400 text-sm">
                    <p>Deposits are non-refundable. Additional fees (travel, studio) are invoiced separately to finalize the booking.</p>
                </div>
            </div>
        </div>
    );
};

export default Packages;
