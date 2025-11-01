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
      setMessage(
        "Error: Missing API Key. Please check your environment variables."
      );
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
          Accept: "application/json",
        },
        body: JSON.stringify(data),
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
    <div className="w-full min-h-[100vh] bg-gray-50 flex items-center justify-center p-8 max-sm:p-4 pt-[80px] max-sm:pt-[60px]">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl max-sm:text-2xl font-bold mb-10 max-sm:mb-6 font-orbitron tracking-[5px] max-sm:tracking-[2px] text-center text-gray-800">
          Contact Me
        </h1>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-6 p-8 max-sm:p-6 bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          method="POST"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-700 resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer transition-all bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-800 hover:bg-gray-700 hover:shadow-lg active:bg-gray-900 text-base font-medium font-orbitron tracking-[2px] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {message && (
            <p
              className={`text-center text-sm font-medium ${
                message.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
