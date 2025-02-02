import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Formspree
    const response = await fetch("https://formspree.io/f/mzzdgaya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear inputs
      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3s
    } else {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className=" flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            CONTACT US
          </h1>
        </div>
      </header>
      <main className=" max-w-7xl   px-4 lg:px-8 mx-auto">
        <div>
          {/* Your content */}
          {/* {children} */}
          {submitted && (
            <p className="text-green-600 bg-green-100 p-2 mb-4 text-center rounded">
              ✅ Message sent successfully!
            </p>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  px-4 py-8">
            <form
              onSubmit={handleSubmit}
              action=""
              // method="POST"
              className="border border-gray-400 rounded-lg p-8  items-center justify-center"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-950"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-950"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-2"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-950"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-2"
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  // onClick={handleSubmit}
                  className=" px-4 py-2  border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* PART 2 */}
            <div className=" items-center justify-center text-center text-slate-950 text-xl space-y-12 ">
              <h2 className=" text-2xl font-bold">Contact us at:</h2>

              <p>
                <span className="text-gray-600">Email:</span>{" "}
                jaitehm20@gmail.com
              </p>

              <p>
                <span className="text-gray-600">Phone:</span> +220 3609991
              </p>
              <a
                href="https://mustik-portfolio.netlify.app/"
                className="inline-block relative text-xs font-bold tracking-wider "
              >
                <span className="text-gray-600">My portfolio: </span>{" "}
                mustik-portfolio.netlify.app
              </a>
              <br />
              <div className="relative z-10 flex gap-x-4 items-center justify-center h-9 p-1 rounded-md mt-4 mb-10 ">
                <a
                  href="https://github.com/mustapha-jaiteh"
                  className="text-gray-700 text-3xl hover:text-gray-800"
                >
                  <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 " />
                </a>
                <a
                  href="https://www.linkedin.com/in/mustapha-jaiteh-a61513278/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 text-3xl hover:text-blue-900"
                >
                  <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
                </a>

                <a
                  href="https://wa.me/2203609991?text=Hi%20Mustik,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 text-3x hover:text-green-800 "
                >
                  <FaWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 " />
                </a>
              </div>
            </div>
            {/* <div className="-bottom-1 h-px left-0 right-0 bg-gray-200 mt-8"></div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
