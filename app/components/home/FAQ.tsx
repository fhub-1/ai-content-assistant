"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

function FAQAccordionItem({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-zinc-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-zinc-400">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your input and content goals, then generates tailored scripts, descriptions, and titles using advanced language models. It learns from successful content patterns to create engaging material that resonates with your audience while maintaining your unique voice.",
    },
    {
      question: "Can I customize the AI-generated content?",
      answer: "Absolutely! All AI-generated content serves as a strong foundation that you can edit, refine, and customize to match your style and brand voice. You have full control over the final output.",
    },
    {
      question: "Is there a limit to how much content I can generate?",
      answer: "Free users can generate up to 10 pieces of content per month. Pro users get unlimited generations, while Team plans include additional collaborative features and custom training options.",
    },
    {
      question: "What types of content can I create?",
      answer: "You can create various types of content including video scripts, podcast outlines, show notes, video descriptions, engaging titles, and social media posts. Our AI is trained to understand and generate content for different platforms and formats.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, simply contact our support team within the first 14 days for a full refund.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to know about our AI content assistant
          </p>
        </div>

        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={index === openIndex}
              onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
