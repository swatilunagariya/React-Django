import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/img/logou.jpg'; // Adjust as necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form submitted successfully:', response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      alert('Error sending message. Please try again.');
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div 
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-lg w-full mx-4 sm:mx-auto">
        <div className="bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-violet-700">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-lg transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
