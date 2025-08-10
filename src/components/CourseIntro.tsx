import React from 'react';

const CourseIntro = () => {
  return (
    <section 
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: 'white' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              color: '#2B3A55' 
            }}
          >
            PROVEN RESULTS
          </h2>
          
          <p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              color: '#2B3A55' 
            }}
          >
            We've helped hundreds of women end emotional eating, feel confident in their skin, and finally maintain a healthy lifestyle.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#9EB384' }}>85%</div>
              <p className="font-semibold">of students report less binge eating in 4 weeks</p>
            </div>
            <div className="text-center p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#9EB384' }}>92%</div>
              <p className="font-semibold">feel more in control of food choices</p>
            </div>
            <div className="text-center p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#FFDDD2' }}>
              <div className="text-4xl font-bold mb-2" style={{ color: '#9EB384' }}>100%</div>
              <p className="font-semibold">say they'd recommend this program to a friend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;