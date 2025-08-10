import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          What's Inside This Course
        </h2>
        
        <div 
          className="text-lg leading-relaxed space-y-6 max-w-3xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            color: '#2B3A55' 
          }}
        >
          <p>
            We've combined psychology, cultural food freedom, and proven habit systems to help you finally get lasting results:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-2xl mb-2">💖</div>
              <h3 className="font-bold mb-2">Lifetime Access</h3>
              <p className="text-sm">Go at your own pace and revisit anytime.</p>
            </div>
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-2xl mb-2">💬</div>
              <h3 className="font-bold mb-2">Expert Support</h3>
              <p className="text-sm">You're never alone — we guide you at every step.</p>
            </div>
            <div className="text-center p-6 rounded-2xl" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-2xl mb-2">✅</div>
              <h3 className="font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm">Heal or get your money back.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;