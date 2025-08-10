import React from 'react';
import { ArrowRight } from 'lucide-react';

const OfferStack = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            color: '#2B3A55' 
          }}
        >
          TODAY'S EXCLUSIVE OFFER
        </h2>
        
        <div 
          className="text-center p-8 rounded-2xl mb-12"
          style={{ backgroundColor: '#FFDDD2' }}
        >
          <p 
            className="text-xl md:text-2xl font-bold mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              color: '#2B3A55' 
            }}
          >
            One-Time Payment: ₹4,999 (Save ₹4,000 – Normally ₹8,999)
          </p>
          
          <div className="space-y-3 mb-6">
            <p className="text-lg font-semibold" style={{ color: '#2B3A55' }}>
              🎁 BONUS 1 – Binge Emergency Toolkit (₹1,499 value)
            </p>
            <p className="text-lg font-semibold" style={{ color: '#2B3A55' }}>
              🎁 BONUS 2 – Weekly Emotional Check-In Worksheets (₹999 value)
            </p>
            <p className="text-lg font-semibold" style={{ color: '#2B3A55' }}>
              🎁 BONUS 3 – 30-Minute Masterclass: How to Stop Weekend Overeating (₹2,499 value)
            </p>
          </div>
          
          <div className="border-t-2 pt-4" style={{ borderColor: '#9EB384' }}>
            <p className="text-lg mb-2" style={{ color: '#2B3A55' }}>
              Total Value: ₹13,996
            </p>
            <p 
              className="text-2xl md:text-3xl font-bold"
              style={{ color: '#9EB384' }}
            >
              You Pay Today: ₹4,999
            </p>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p 
            className="text-base mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              color: '#2B3A55' 
            }}
          >
            💳 Instant access on payment. Works on mobile, tablet, and desktop.
          </p>
        </div>
        
        <div className="text-center">
          <button 
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl font-bold text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4"
            style={{ 
              backgroundColor: '#9EB384',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            ✅ YES! I'm Ready to Heal – Enroll Now Before the Offer Ends
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <p 
            className="text-sm font-semibold"
            style={{ color: '#2B3A55', fontFamily: 'Montserrat, sans-serif' }}
          >
            ⏳ Limited-Time Offer: Special Price Ends in 48 Hours!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;