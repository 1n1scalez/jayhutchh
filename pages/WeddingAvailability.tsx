import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Heart } from 'lucide-react';

const WeddingAvailability = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        // GHL Tracking (vbt)
        const win = window as any;
        win.vbt = win.vbt || [];
        win.vbt.push(['track', 'form_submission', {
            email: data.email as string,
            phone: data.phone as string,
            form_id: 'wedding_inquiry_form'
        }]);

        // GHL Webhook
        try {
            await fetch('https://services.leadconnectorhq.com/hooks/x0Gx7R899sDdLs2uM3wc/webhook-trigger/b4a4f969-6a30-474d-a340-42a03fb48824', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    source: 'Wedding Availability Inquiry Form',
                    date_submitted: new Date().toISOString(),
                    tag: 'wedding-lead',
                    form_id: 'wedding_inquiry_form',
                    page_url: window.location.href
                })
            });
        } catch (error) {
            console.error('Webhook error:', error);
        }

        alert('Thank you for your wedding inquiry! I will get back to you soon.');
        setEmail('');
        setPhone('');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        WEDDING
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">AVAILABILITY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Info Section */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-condensed tracking-tight uppercase">Check Wedding Availability</h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                                If you're planning your wedding and feel drawn to a <span className="text-[var(--text-color)] font-medium">cinematic, editorial style</span>, I'd love to hear from you. Share a few details below and I'll be in touch to confirm availability and next steps.
                            </p>
                        </div>

                        {/* Wedding Info Card */}
                        <div className="bg-gradient-to-br from-rose-600 to-pink-600 p-8 text-white space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Heart size={120} />
                            </div>
                            <h3 className="text-3xl font-condensed tracking-tighter uppercase relative z-10">WEDDING PHOTOGRAPHY</h3>
                            <div className="space-y-3 relative z-10 font-mono text-xs uppercase tracking-widest">
                                <div className="flex items-center gap-3">
                                    <Calendar size={14} /> NOW BOOKING 2026-2027
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={14} /> WORLDWIDE AVAILABILITY
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={14} /> FULL DAY COVERAGE
                                </div>
                            </div>
                            <p className="text-rose-100 font-light relative z-10">
                                Cinematic storytelling for couples who want their wedding day captured with artistry and intention.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-condensed text-2xl tracking-tighter">WHAT TO EXPECT</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start border-b border-zinc-100 dark:border-zinc-900 pb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 min-w-[80px]">STEP 1</span>
                                    <span className="font-light text-zinc-600 dark:text-zinc-400">Submit inquiry form with your wedding details</span>
                                </li>
                                <li className="flex gap-4 items-start border-b border-zinc-100 dark:border-zinc-900 pb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 min-w-[80px]">STEP 2</span>
                                    <span className="font-light text-zinc-600 dark:text-zinc-400">Receive availability confirmation within 24-48 hours</span>
                                </li>
                                <li className="flex gap-4 items-start border-b border-zinc-100 dark:border-zinc-900 pb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 min-w-[80px]">STEP 3</span>
                                    <span className="font-light text-zinc-600 dark:text-zinc-400">Schedule consultation call to discuss your vision</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 min-w-[80px]">STEP 4</span>
                                    <span className="font-light text-zinc-600 dark:text-zinc-400">Receive custom proposal and secure your date</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Wedding Booking Form */}
                    <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-950/50 p-8 md:p-12 border border-zinc-100 dark:border-zinc-900">
                        <h2 className="text-4xl font-condensed tracking-tight uppercase mb-8">WEDDING INQUIRY FORM</h2>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">YOUR NAME*</label>
                                    <input
                                        type="text"
                                        name="bride_name"
                                        id="bride-name"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">PARTNER'S NAME*</label>
                                    <input
                                        type="text"
                                        name="groom_name"
                                        id="groom-name"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter partner's name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">EMAIL ADDRESS*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">PHONE NUMBER*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter your phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">WEDDING DATE*</label>
                                    <input
                                        type="date"
                                        name="wedding_date"
                                        id="wedding-date"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">WEDDING VENUE/LOCATION*</label>
                                    <input
                                        type="text"
                                        name="venue"
                                        id="venue"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="City, State or Venue Name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">ESTIMATED GUEST COUNT</label>
                                    <input
                                        type="number"
                                        name="guest_count"
                                        id="guest-count"
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Approximate number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">BUDGET RANGE</label>
                                    <select
                                        name="budget_range"
                                        id="budget-range"
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors appearance-none"
                                    >
                                        <option value="">SELECT RANGE</option>
                                        <option value="under-3000">UNDER $3,000</option>
                                        <option value="3000-5000">$3,000 - $5,000</option>
                                        <option value="5000-8000">$5,000 - $8,000</option>
                                        <option value="8000-plus">$8,000+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">HOW DID YOU HEAR ABOUT US?</label>
                                <select
                                    name="referral_source"
                                    id="referral-source"
                                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors appearance-none"
                                >
                                    <option value="">SELECT SOURCE</option>
                                    <option value="instagram">INSTAGRAM</option>
                                    <option value="google">GOOGLE SEARCH</option>
                                    <option value="referral">FRIEND/FAMILY REFERRAL</option>
                                    <option value="vendor">WEDDING VENDOR</option>
                                    <option value="other">OTHER</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">TELL US ABOUT YOUR WEDDING VISION</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors resize-none"
                                    placeholder="Share your story, wedding style, what drew you to my work, and any specific requests..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--text-color)] text-[var(--bg-color)] py-6 font-condensed text-2xl tracking-widest uppercase hover:bg-rose-600 transition-colors shadow-xl"
                            >
                                SUBMIT WEDDING INQUIRY
                            </button>
                            <p className="text-center text-xs text-zinc-500 font-mono tracking-tighter">
                                I TYPICALLY RESPOND WITHIN 24-48 HOURS.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingAvailability;
