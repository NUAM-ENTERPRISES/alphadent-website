import React, { useState, useEffect,useRef } from "react";
import './Faq.css';

const faqData = {
  "Dental Health Review": [
    {
      question: "WHAT IS A DENTAL HEALTH REVIEW?",
      answer:
        "A dental health review is a comprehensive assessment of your oral health. It includes a thorough examination of your teeth, gums, and jaw, as well as a discussion of your dental history and any concerns you may have."
    },
    {
      question: "HOW OFTEN SHOULD I HAVE A DENTAL HEALTH REVIEW?",
      answer: "It is recommended to have a dental health review every 6 to 12 months."
    }
  ],
  Booking: [
    {
      question: "HOW DO I BOOK AN APPOINTMENT?",
      answer: "You can book online through our website or call us directly."
    },
    {
      question: "CAN I RESCHEDULE MY BOOKING?",
      answer: "Yes, please contact us 24 hours before to reschedule your booking."
    }
  ],
  "General Dentistry": [
    {
      question: "WHAT IS GENERAL DENTISTRY?",
      answer: "It covers routine dental exams, cleanings, fillings, and more."
    },
    {
      question: "DO YOU ACCEPT INSURANCE?",
      answer: "Yes, we accept most major insurance plans."
    }
  ],
  "Teeth whitening": [
    {
      question: "IS TEETH WHITENING SAFE?",
      answer: "Yes, when performed by professionals, it's safe and effective."
    },
    {
      question: "HOW LONG DOES IT LAST?",
      answer: "Results can last from several months up to a year with proper care."
    }
  ],
  "Cosmetic and Smile makeover": [
    {
      question: "WHAT IS A SMILE MAKEOVER?",
      answer: "A complete transformation of your smile using various cosmetic treatments."
    },
    {
      question: "HOW LONG DOES A COSMETIC PROCEDURE TAKE?",
      answer: "Depends on treatment, from 1 hour (whitening) to several weeks (veneers)."
    }
  ],
  "Aligners (Invisalign provider)": [
    {
      question: "WHAT ARE INVISALIGN ALIGNERS?",
      answer: "Clear removable trays that straighten your teeth over time."
    },
    {
      question: "ARE THEY BETTER THAN BRACES?",
      answer: "They're more discreet and comfortable, but suitability depends on your case."
    }
  ]
};

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState("Dental Health Review");
  const [openIndex, setOpenIndex] = useState(null);

  const faqRef = useRef(null); // ✅ Reference to FAQ content section

  useEffect(() => {
    // Scroll to top of the page when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setOpenIndex(null);

    // ✅ Scroll to FAQ content area (not window top)
    setTimeout(() => {
      faqRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // delay helps if content takes time to render
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = faqData[activeSection];

  return (
    <div className="faq-container">
      <aside className="sidebar">
        {Object.keys(faqData).map((section, i) => (
          <div
            key={i}
            className={`sidebar-item ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
            <span className="arrow-right">➤</span>
          </div>
        ))}
      </aside>

      <main className="faq-content" ref={faqRef}> {/* ✅ attach ref here */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>▼</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
