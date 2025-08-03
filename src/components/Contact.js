import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="bg-red-500 text-white text-center py-8 rounded-t-xl shadow">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">We'd love to hear from you</p>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 p-6 md:p-10 rounded-b-xl shadow-md flex flex-col md:flex-row gap-10">
        {/* Left - Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              📍 <span className="font-semibold">Address:</span>
              <br />
              567 FoodExpress Street, FoodExpress City, 2613051
            </li>
            <li>
              📞 <span className="font-semibold">Phone:</span>
              <br />
              +91 9876543210
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span>
              <br />
              support@foodexpress.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
