import React, { useState } from "react";

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!process.env.NEXT_PUBLIC_ACCESS_KEY) {
      console.error("Missing API Key: NEXT_PUBLIC_ACCESS_KEY");
      setMessage("Error: Missing API Key. Please check your environment variables.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      
      // Add API key directly to JSON body
      data.access_key = process.env.NEXT_PUBLIC_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const res = await response.json();

      if (res.success) {
        console.log("Success", res);
        setMessage("Message sent successfully!");
        event.target.reset(); // Reset the form
      } else {
        console.error("API Error:", res);
        setMessage(res.message || "Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Request Failed:", error);
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form 
        onSubmit={onSubmit} 
        className="flex flex-col items-center justify-center space-y-4 p-4 md:w-[50%] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white backdrop-blur-[12px]"
        method="POST"
      >
        <div className="w-full max-w-md">
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your name" />
        </div>
        
        <div className="w-full max-w-md">
          <label htmlFor="email" className="block text-sm font-medium">Email:</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your email" />
        </div>
        
        <div className="w-full max-w-md">
          <label htmlFor="message" className="block text-sm font-medium">Message:</label>
          <textarea id="message" name="message" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter the message"></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full max-w-md px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {message && <p className="text-center mt-2 text-sm">{message}</p>}
      </form>
    </div>
  );
}

export default ContactPage;
