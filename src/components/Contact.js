import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  // Fetch data from YOUR backend to avoid CORS error
  useEffect(() => {
    const fetchAndUpsertRestaurants = async () => {
      try {
        console.log("1. Starting to fetch restaurant data...");
        const res = await fetch("http://localhost:5000/api/get-restaurants");
        const json = await res.json();
        console.log("2. Raw data received from backend:", json);

        // --- NEW, MORE ROBUST LOGIC ---
        // Find the card that contains the restaurant grid, regardless of its type
        const restaurantCard = json?.data?.cards?.find(
          (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        console.log("3. Found restaurant card:", restaurantCard);

        // Extract the restaurants from that card
        let restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (item) => ({
              id: item.info.id,
              name: item.info.name,
              cuisines: item.info.cuisines,
              costForTwo: item.info.costForTwo,
              deliveryTime: item.info.sla.deliveryTime,
              rating: item.info.avgRating,
            })
          ) || [];

        console.log("4. Extracted restaurants:", restaurants);

        restaurants = restaurants.slice(0, 100);

        if (restaurants.length > 0) {
          console.log(
            "5. Found restaurants, attempting to upsert to Pinecone..."
          );
          await fetch("http://localhost:5000/api/upsert-restaurants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ restaurants }),
          });
          console.log(
            `6. Successfully requested upsert for ${restaurants.length} restaurants.`
          );
        } else {
          console.log("5. No restaurants were extracted, skipping upsert.");
        }
      } catch (err) {
        console.error("Failed to process restaurants:", err);
      }
    };
    fetchAndUpsertRestaurants();
  }, []);

  useEffect(() => {
    setTimeout(
      () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  }, [chatMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);
    const currentInput = chatInput;
    setChatInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();
      const botMessage = { sender: "bot", text: data.answer };
      setChatMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const botMessage = { sender: "bot", text: "Oops! Something went wrong." };
      setChatMessages((prev) => [...prev, botMessage]);
    }
  };

  // The rest of your JSX remains the same...
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

        {/* Right - Chatbot + Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Chatbot Section */}
          <div className="bg-white p-4 rounded-md shadow h-96 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">AI Chat Support</h2>
            <div className="flex-1 overflow-y-auto p-2 border rounded mb-2">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
                placeholder="Ask a question..."
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button
                onClick={sendChatMessage}
                className="bg-red-500 text-white px-4 py-2 rounded-md disabled:opacity-50 hover:bg-red-600 transition-all duration-300"
                disabled={!chatInput.trim()}
              >
                Send
              </button>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-6 rounded-md shadow-sm">
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
    </div>
  );
};

export default Contact;
