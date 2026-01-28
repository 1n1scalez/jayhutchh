import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "HOW DO I BOOK A SESSION?",
        answer: "You can book a session through our Availability page or by contacting me directly via the form at the bottom of any page. Once we confirm a date, a deposit is required to secure your spot."
    },
    {
        question: "WHAT IS YOUR TURNAROUND TIME?",
        answer: "For standard portrait and branding sessions, you will receive your high-res digital gallery within 7-10 business days. Wedding turnaround is typically 4-6 weeks."
    },
    {
        question: "DO YOU TRAVEL FOR SHOOTS?",
        answer: "Yes, I am based in Richmond, VA but available for travel worldwide. Travel fees apply for sessions outside of a 30-mile radius from Richmond."
    },
    {
        question: "WHAT SHOULD I WEAR?",
        answer: "I recommend neutral colors and timeless pieces that make you feel confident. Avoid busy patterns that might distract from your face. I provide a detailed style guide upon booking."
    },
    {
        question: "CAN I GET THE RAW FILES?",
        answer: "I do not provide RAW files. Part of the service I provide is the professional editing and 'look' that defines my work. You will receive high-resolution, professionally edited JPEGs."
    },
    {
        question: "WHAT IF I NEED TO RESCHEDULE?",
        answer: "I understand that things come up. You can reschedule once with at least 48 hours notice. The deposit is non-refundable but can be transferred to your new date."
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
                        href="mailto:jayhutchh@gmail.com"
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
