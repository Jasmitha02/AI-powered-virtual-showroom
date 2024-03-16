import React from 'react';

function Faq() {
    const faqs = [
        {
          question: 'How can I browse cars on your website?',
          answer: 'You can browse cars by selecting the "Inventory" section from the main menu. You can filter and search for cars by make, model, price range, and other criteria.',
        },
        {
          question: 'How do I purchase a car on your website?',
          answer: 'To purchase a car, first, create an account or log in if you already have one. Once logged in, you can add cars to your cart and proceed to the checkout process. We offer secure online payment options.',
        },
        {
          question: 'Can I schedule a test drive?',
          answer: 'Yes, you can schedule a test drive for a specific car by visiting the car\'s detail page and clicking the "Schedule a Test Drive" button. Follow the instructions to choose a convenient time and location.',
        },
        {
          question: 'Do you offer financing options?',
          answer: 'Yes, we offer financing options. You can find more information on our financing services in the "Financing" section of our website.',
        },
        {
          question: 'How do I filter cars by specific features or options?',
          answer: 'You can use the filters provided on the car listing page to narrow down your search. Filters include options like brand, model, price range, year, and more.',
        },
        {
          question: 'What type of warranty do you offer for the cars you sell?',
          answer: 'We offer a standard limited warranty for most of our vehicles. Please check the individual car listings for warranty details and coverage.',
        },
        {
          question: 'Is it possible to trade in my current vehicle when purchasing a car from your showroom?',
          answer: 'Yes, we offer a trade-in option. You can provide details about your current vehicle, and we will assess its value as part of your purchase.',
        },
        {
          question: 'Can I request a vehicle inspection before making a purchase?',
          answer: 'Certainly, you can request a vehicle inspection. Contact our customer support, and we\'ll arrange for an inspection to ensure you\'re making an informed decision.',
        },
        {
          question: 'How can I get in touch with your customer support team for further assistance?',
          answer: 'You can contact our customer support team via phone, email, or through the contact form on our website. Visit the "Contact Us" page for our contact details.',
        },
      ];      

  return (
    <div className="container mt-4">
      <h1 className="text-center yellow">Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed" // Initially collapsed with the arrow pointing down
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;