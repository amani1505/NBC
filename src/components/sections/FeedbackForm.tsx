import { useState } from "react";
import Button from "../ui/button";

function FeedbackForm() {
 const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = () => {
      console.log('Form submitted:', formData);
      // Handle form submission logic here
      alert('Form submitted successfully!');
    };
  
    return (
      <div className="space-y-4">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 focus:border-nbc-dark-800 transition-all duration-300 hover:border-nbc-dark-950"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 focus:border-nbc-dark-800 transition-all duration-300 hover:border-nbc-dark-950"
            />
          </div>
        </div>
  
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex">
            <select className="px-3 py-2.5 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 transition-all duration-300">
              <option>TZ (+255)</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              className="flex-1 px-3 py-2.5 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 focus:border-nbc-dark-800 transition-all duration-300 hover:border-nbc-dark-950"
            />
          </div>
        </div>
  
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 focus:border-nbc-dark-800 transition-all duration-300 hover:border-nbc-dark-950"
          />
        </div>
  
        {/* Subject/Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Subject/Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type your message here"
            rows={4}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nbc-dark-800 focus:border-nbc-dark-800 resize-none transition-all duration-300 hover:border-nbc-dark-950"
          />
        </div>
  
        {/* Submit Button */}

        <Button className="w-full bg-nbc-dark-800 hover:bg-nbc-dark-700" onClick={handleSubmit} >
        Submit Request
        </Button>
        {/* <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl  focus:outline-none focus:ring-2  focus:ring-offset-2 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
       
        </button> */}
      </div>
    );
}

export default FeedbackForm
