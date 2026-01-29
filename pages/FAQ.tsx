import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "HOW DO I BOOK A SESSION?",
        answer: "Choose your package and reserve with a deposit. After payment, you'll submit your preferred dates and receive next steps to confirm availability and prepare for your shoot."
    },
    {
        question: "WHEN IS MY DATE OFFICIALLY CONFIRMED?",
        answer: "Your date is confirmed once the deposit is paid and all required details are approved. For weddings, a signed contract is also required."
    },
    {
        question: "IS THE DEPOSIT REFUNDABLE?",
        answer: "No. Deposits are non-refundable and reserve availability for your session date. They may be transferable to a new date if rescheduled within the allowed window."
    },
    {
        question: "WHAT HAPPENS IF I DON'T COMPLETE ADDITIONAL REQUIRED PAYMENTS?",
        answer: "Additional fees such as travel or studio rental are invoiced separately once details are confirmed. If required invoices are not paid, the booking may be canceled and the deposit will not be refunded."
    },
    {
        question: "DO YOU TRAVEL?",
        answer: "Yes. I'm based in Richmond and available for travel worldwide. Travel fees may apply depending on location and distance."
    },
    {
        question: "ARE TRAVEL & STUDIO FEES INCLUDED IN THE PACKAGE PRICE?",
        answer: "No. Travel & Studio fees are invoiced separately once the session location and logistics are confirmed."
    },
    {
        question: "WHAT HAPPENS AFTER I PAY THE DEPOSIT?",
        answer: "After your deposit is received, you'll: Submit preferred dates, complete a short intake form, and receive a prep guide with everything you need to know before your session. Availability is confirmed within 24 hours."
    },
    {
        question: "WHAT IS YOUR RESCHEDULING POLICY?",
        answer: "Reschedules must be requested at least 48 hours in advance. Same-day cancellations or no-shows forfeit the deposit."
    },
    {
        question: "WHEN WILL I RECEIVE MY PHOTOS?",
        answer: "Standard turnaround times: Portrait, grad, maternity, and lifestyle sessions: 7–10 days. Weddings: timeline outlined in your contract. Rush delivery is available for an additional fee."
    },
    {
        question: "CAN I ADD EXTRAS TO MY SESSION?",
        answer: "Yes. Add-ons such as extra time, outfits, locations, rush delivery, and additional edited images are available and can be added before or after your session."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-[1920px] mx-auto pt-32 px-6 pb-24">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-end gap-6 mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <h1 className="text-7xl md:text-9xl font-condensed tracking-tighter text-[var(--text-color)] leading-[0.8] uppercase">
                        FAQ
                    </h1>
                    <span className="text-zinc-400 font-mono text-sm mb-2">QUESTIONS</span>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
                        >
                            <button
                                className="w-full flex items-center justify-between p-8 text-left group"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className={`font-condensed text-2xl tracking-tighter transition-colors duration-300 ${openIndex === index ? 'text-rose-600' : ''}`}>
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus size={20} className="text-rose-600" />
                                ) : (
                                    <Plus size={20} className="text-zinc-300 group-hover:text-[var(--text-color)] transition-colors" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-8 pt-0 text-zinc-500 font-light leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-black text-white text-center">
                    <h2 className="font-condensed text-4xl mb-4 tracking-tighter">STILL HAVE QUESTIONS?</h2>
                    <p className="text-zinc-400 mb-8 font-light">
                        I'm here to help you feel prepared and excited for your session.
                    </p>
                    <a
                        href="mailto:bookings@jayhutchh.com"
                        className="inline-block bg-white text-black px-12 py-4 font-condensed tracking-widest uppercase hover:bg-rose-600 hover:text-white transition-colors"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
