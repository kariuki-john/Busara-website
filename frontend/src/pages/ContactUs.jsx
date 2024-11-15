import React, { useState } from 'react';
import axios from 'axios'


export const ContactUs = (e) => {
  const [name,setName]= useState('')
  const [email, setEmail]= useState('')
  const [message, setMessage]= useState('')
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const getMessages = async (e)=>{
    e.preventDefault()

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    try {
    
      await axios.post("http://localhost:5000/api/getFeedback",{
        name,email,message
      });
      setSuccess(true); 
      setError('');     
      setName('');      
      setEmail('');     
      setMessage('');

    } catch (error) {
      setError('Error while comunicating to server, kindly retry');
      
    }
  }

  return (
    <div className="min-h-screen bg-backgroundcolor flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xlg w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex justify-center">Contact Us</h2>
        <form action="POST" className="space-y-4">
        {error && <div className="text-red-600">{error}</div>}
        {success && <div className="text-green-600">Thank you for your message!</div>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
            onChange={(e) => {setName(e.target.value)}}
            placeholder='Enter Full Names'
              type="text"
              id="name"
              name="name"
              required
              autoComplete='false'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder='Enter email'
              type="email"
              id="email"
              name="email"
              required
              autoComplete='false'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
            onChange={(e) => {setMessage(e.target.value)}}
            placeholder='Leave a Message for Us'
              id="message"
              name="message"
              rows="4"
              required
              autoComplete='false'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              name="submit"
              onClick={getMessages}
              className="w-96 bg-buttoncolor text-black font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


