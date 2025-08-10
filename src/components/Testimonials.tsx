import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarti S., 33", 
      emoji: "🧕🏽",
      text: "I used to eat every time I felt stressed. Now, I feel in control and lighter — not just in my body, but in my mind."
    },
    {
      name: "Sneha R., 27", 
      emoji: "🧘🏽‍♀️",
      text: "This isn't another diet. It healed my relationship with food and myself."
    },
    {
      name: "Priya M., 29",
      emoji: "💗",
      text: "Finally, a program that understands Indian women and our unique challenges with food and family expectations."
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          WHAT OUR STUDENTS SAY
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#F5EFE7' }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#9EB384' }} />
                ))}
              </div>
              
              <div className="text-4xl text-center mb-4">
                {testimonial.emoji}
              </div>
              
              <p 
                className="text-lg leading-relaxed mb-6 text-center"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#2B3A55' 
                }}
              >
                "{testimonial.text}"
              </p>
              
              <p 
                className="text-center font-semibold"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#9EB384' 
                }}
              >
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;