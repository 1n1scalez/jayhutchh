import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Availability = () => {
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
            form_id: 'inquiry_form'
        }]);

        // GHL Webhook
        try {
            await fetch('https://services.leadconnectorhq.com/hooks/x0Gx7R899sDdLs2uM3wc/webhook-trigger/26930763-dc8f-4aca-b6d2-418591a3f111', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    source: 'Availability Inquiry Form',
                    date_submitted: new Date().toISOString(),
                    tag: 'website-lead',
                    form_id: 'inquiry_form',
                    page_url: window.location.href
                })
            });
        } catch (error) {
            console.error('Webhook error:', error);
        }

        alert('Thank you for your inquiry! I will get back to you soon.');
        setEmail('');
        setPhone('');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        AVAILABILITY
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">BOOKING</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Info and Featured Mini Session */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-condensed tracking-tight uppercase">CURRENT STATUS</h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-light">
                                Now booking for Spring 2026. Limited weekend slots available in March and April. Currently based in <span className="text-[var(--text-color)] font-medium">Richmond, VA</span>.
                            </p>
                        </div>

                        {/* Featured Mini Session Card */}
                        <div className="bg-rose-600 p-8 text-white space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Calendar size={120} />
                            </div>
                            <h3 className="text-3xl font-condensed tracking-tighter uppercase relative z-10">VALENTINE'S MINI SESSION</h3>
                            <div className="space-y-3 relative z-10 font-mono text-xs uppercase tracking-widest">
                                <div className="flex items-center gap-3">
                                    <Calendar size={14} /> FEB 8 – FEB 14
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={14} /> 30 MINS • 6 PHOTOS
                                </div>
                            </div>
                            <p className="text-rose-100 font-light relative z-10">
                                Only 4 spots remaining for our signature confidence-boosting studio sessions.
                            </p>
                            <a
                                href="https://book.stripe.com/eVqaEW3MuaDr15J9OebfO0L"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-rose-600 px-8 py-3 font-condensed tracking-widest uppercase hover:bg-black hover:text-white transition-all relative z-10"
                            >
                                SECURE SPOT
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-condensed text-2xl tracking-tighter">TRAVEL DATES</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-2">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">SEPTEMBER 2026</span>
                                    <span className="font-condensed text-xl tracking-tight">NEW YORK CITY</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-2 text-zinc-400">
                                    <span className="font-mono text-xs uppercase tracking-widest">JULY 2026</span>
                                    <span className="font-condensed text-xl tracking-tight italic">TBD</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-950/50 p-8 md:p-12 border border-zinc-100 dark:border-zinc-900">
                        <h2 className="text-4xl font-condensed tracking-tight uppercase mb-8">INQUIRY FORM</h2>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">FULL NAME*</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full-name"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter your name"
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
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                        placeholder="Enter your phone"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">SESSION TYPE*</label>
                                    <select
                                        name="shoot_type"
                                        id="shoot-type"
                                        required
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors appearance-none"
                                    >
                                        <option value="">SELECT A CATEGORY</option>
                                        <option value="grads">GRADUATES</option>
                                        <option value="birthday">BIRTHDAY</option>
                                        <option value="branding">BRANDING</option>
                                        <option value="maternity">MATERNITY</option>
                                        <option value="couples">COUPLES</option>
                                        <option value="custom">CUSTOM PROJECT</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">PREFERRED DATE</label>
                                    <input
                                        type="date"
                                        name="preferred_date"
                                        id="preferred-date"
                                        className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-condensed text-sm tracking-widest text-zinc-400 uppercase">TELL ME ABOUT YOUR VISION</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-lg focus:outline-none focus:border-rose-500 transition-colors resize-none"
                                    placeholder="Describe what you're looking for..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--text-color)] text-[var(--bg-color)] py-6 font-condensed text-2xl tracking-widest uppercase hover:bg-rose-600 transition-colors shadow-xl"
                            >
                                SUBMIT INQUIRY
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

export default Availability;
