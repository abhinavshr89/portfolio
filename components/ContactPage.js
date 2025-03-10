import React from "react";

function ContactPage() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className=" w-full h-[100vh] flex items-center justify-center">
    <form onSubmit={onSubmit} className=" flex flex-col items-center justify-center space-y-4 p-4   md:w-[50%] border-2 border-[rgba(75,30,133,0.5)]  rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white backdrop-blur-[12px]">
      <div className="w-full max-w-md">
        <label htmlFor="name" className="block text-sm font-medium ">Name:</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your name" />
      </div>
      <div className="w-full max-w-md">
        <label htmlFor="email" className="block text-sm font-medium ">Email:</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your email"/>
      </div>
      <div className="w-full max-w-md">
        <label htmlFor="message" className="block text-sm font-medium ">Message:</label>
        <textarea id="message" name="message" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm " placeholder="Enter the message"></textarea>
      </div>
      <button type="submit" className="w-full max-w-md px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
    </div>
  );
}

export default ContactPage;