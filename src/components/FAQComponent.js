import React, { useState } from 'react';
import './FAQComponent.css'; // Ensure you import the CSS file

export const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "You can upgrade or downgrade your plan anytime based on your needs."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel anytime. No strings attached."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information such as a purchase order number."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options."
    },
    {
      question: "How do I change my account email?",
      answer: "Go to your account settings and click 'Change email'."
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleClick(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};
