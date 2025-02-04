import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className="bg-white text-black dark:bg-black dark:text-white pb-20  transition-colors"
      id="contact"
      data-aos="fade-up"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Details */}
          <div className="flex-1" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mb-4 mt-8 flex items-center">
              <FaEnvelope className="text-green-400 mr-2" />
              <a href="mailto:youremail@example.com" className="hover:underline text-gray-600 dark:text-gray-300">
                tigran.sgevorgyan.89@gmail.com
              </a>
            </div>
            <div className="mb-4 flex items-center">
              <FaPhone className="text-green-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">+37 455664505</span>
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkedAlt className="text-green-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">Street, City, Province, Country</span>
            </div>
          </div>

          <div className="flex-1 w-full" data-aos="fade-left">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-gray-400 dark:border-gray-600 focus:border-green-400"
                  } focus:outline-none`}
                  placeholder="Enter Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={`w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border ${
                    errors.email ? "border-red-500 focus:border-red-500" : "border-gray-400 dark:border-gray-600 focus:border-green-400"
                  } focus:outline-none`}
                  placeholder="Enter Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-gray-400 dark:border-gray-600 focus:border-green-400"
                  } focus:outline-none`}
                  rows="5"
                  placeholder="Enter Your Message"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-green-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
