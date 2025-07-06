'use client';
import Head from 'next/head';
import Image from 'next/image'; // We will use Image now
import './contact.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Dr. Norman</title>
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <form className="contact-card">
            <h2 className="contact-title text-center text-xl sm:text-2xl md:text-3xl">
              Get In Touch
            </h2>
            <p className="contact-subtitle text-center text-sm md:text-base">
              Simply fill out the brief fields below and Dr. Norman will be in touch with you soon,
              usually within one business day. This form is safe, private, and completely free.
            </p>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" placeholder="Name" className="contact-input" />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="you@example.com" className="contact-input" />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" placeholder="(555) 234–5678" className="contact-input" />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="How can I help you?"
                className="contact-textarea"
                rows={4}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Preferred Contact Time</label>
              <input
                type="text"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                className="contact-input"
              />
              <small className="text-sm text-gray-500">
                Let us know when you&apos;re typically available for a call or consultation
              </small>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Preferred Contact Method</label>
              <select className="contact-select">
                <option>Select preferred method</option>
                <option>Phone</option>
                <option>Email</option>
                <option>Text</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" required />
                <span>I&apos;m not a robot</span>
              </label>
              <div className="mt-2">
                <Image
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                  alt="reCAPTCHA"
                  width={48}
                  height={48}
                  className="h-6"
                />
              </div>
            </div>

            <button type="submit" className="contact-button mt-2">
              Submit
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              ℹ️ By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
