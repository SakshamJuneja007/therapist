'use client';
import { useState } from 'react';
import './faq.css'; // Adjust path if needed

const faqData = [
  {
    question: 'What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?',
    answer: 'CBT-I typically involves a structured program that helps you identify and replace thoughts and behaviors that cause or worsen sleep problems.',
  },
  {
    question: 'Do you treat children or adolescents?',
    answer: 'Yes, we provide services tailored to children and teens depending on their needs.',
  },
  {
    question: 'Which geographic regions do you serve?',
    answer: 'We serve clients across the country via virtual sessions.',
  },
  {
    question: 'Do you offer in-person sessions?',
    answer: 'Currently, we are only offering virtual sessions.',
  },
  {
    question: 'What technology do we use for virtual sessions?',
    answer: 'All sessions are hosted securely on Zoom.',
  },
  {
    question: 'What are your hours?',
    answer: 'Our office hours are Monday to Friday, 9 AM to 5 PM.',
  },
  {
    question: 'Do you take insurance?',
    answer: 'No, but we provide superbills for client reimbursement.',
  },
  {
    question: 'What is the cost of therapy?',
    answer: 'Our session rates vary by provider. Contact us for details.',
  },
  {
    question: 'What are the benefits of private pay therapy?',
    answer: 'It offers privacy, flexibility, and personalized care without insurance restrictions.',
  },
];

export default function FancyFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="bg-[#f4f8fb] py-32 px-6 md:px-16 font-serif text-[#2e3a59] text-center text-2xl">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-light mb-16 leading-tight">
          Frequently Asked <br className="hidden md:block" />
          <span className="text-[#537188] font-semibold">Questions</span>
        </h2>
        <h3 className="text-3xl font-normal mb-12 text-[#6d7a8c]">Therapy</h3>

        <div className="space-y-6 text-left">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#d8e2ed] rounded-xl shadow-sm bg-white transition hover:shadow-lg p-6"
            >
              <button
                className="w-full flex items-center justify-between"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`chevron-icon-circle ${
                      activeIndex === index ? 'rotate' : ''
                    }`}
                  >
                    ›
                  </span>
                  <span className="text-2xl md:text-3xl font-medium hover:underline transition">
                    {item.question}
                  </span>
                </div>
              </button>
              <div className={`answer-box mt-4 ${activeIndex === index ? 'open' : ''}`}>
                <p className="text-2xl text-[#556070]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
