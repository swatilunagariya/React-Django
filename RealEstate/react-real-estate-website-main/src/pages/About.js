import React from 'react';
import TeamMember1 from '../assets/img/team-member1.jpg'; // Replace with your images
import TeamMember2 from '../assets/img/team-member2.jpg'; // Replace with your images
import TeamMember3 from '../assets/img/team-member3.jpg'; 
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-center text-lg max-w-3xl mx-auto">
            We are a leading real estate company committed to helping you find your dream home. Our mission is to make the home buying process simple, transparent, and stress-free.
          </p>
        </div>
      </section>

       {/* Team Section */}
       <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Team Member 3 */}
             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={TeamMember3} alt="Team Member 3" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Swati Lunagariya</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
            </div>
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={TeamMember1} alt="Team Member 1" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Hiral Patel</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={TeamMember2} alt="Team Member 2" className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Janki Parmar</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
            </div>

            
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-violet-700">Our Mission, Vision & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p>
                To simplify the real estate process by offering user-friendly tools, personalized service, and expert advice.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p>
                To be the most trusted real estate platform that empowers people to achieve their homeownership dreams.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p>
                Transparency, integrity, and customer satisfaction are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Call to Action Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your dream home?</h2>
          <p className="mb-8">Our team is here to help you every step of the way.</p>
          <a
            href="/contact"
            className="bg-white text-violet-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
