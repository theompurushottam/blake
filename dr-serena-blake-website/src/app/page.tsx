'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-semibold text-green-800">Dr. Serena Blake</h1>
              <p className="text-sm text-gray-600">Clinical Psychologist, PsyD</p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-700 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-green-700 transition-colors">Services</a>
              <a href="#fees" className="text-gray-700 hover:text-green-700 transition-colors">Fees</a>
              <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-green-700 transition-colors" 
                   onClick={() => setIsMobileMenuOpen(false)}>About</a>
                <a href="#services" className="text-gray-700 hover:text-green-700 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#fees" className="text-gray-700 hover:text-green-700 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>Fees</a>
                <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-amber-50 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Compassionate Care for Your Mental Health Journey
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Licensed clinical psychologist offering personalized therapy for anxiety, relationship challenges, and trauma recovery in Los Angeles and virtually.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Book a Free Consult
                </a>
                <a href="#contact" className="btn-secondary text-center">
                  Get in Touch
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-700">8 Years</div>
                  <div className="text-gray-600">Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">500+</div>
                  <div className="text-gray-600">Sessions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <Image
                  src="https://postimage.me/images/2025/07/05/Screenshot-107.png"
                  alt="Dr. Serena Blake, Clinical Psychologist"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Dr. Serena Blake</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">In-Person Sessions</h3>
                <p className="text-gray-700 mb-4">Tuesday & Thursday</p>
                <p className="text-gray-700 mb-4">10 AM – 6 PM</p>
                <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Virtual Sessions</h3>
                <p className="text-gray-700 mb-4">Monday, Wednesday & Friday</p>
                <p className="text-gray-700 mb-4">1 PM – 5 PM</p>
                <p className="text-gray-600">Secure Zoom meetings<br />From the comfort of your home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive mental health services tailored to your unique needs and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Anxiety & Stress Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn effective coping strategies and mindfulness techniques to manage anxiety, reduce stress, and regain control over your daily life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relationship Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen communication, resolve conflicts, and build deeper connections in your relationships, whether romantic, family, or friendships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl card-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trauma Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Process and heal from traumatic experiences using evidence-based approaches in a safe, supportive therapeutic environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Fees Section */}
      <section id="fees" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Session Fees</h2>
            <p className="text-lg text-gray-600 mb-12">
              Transparent, competitive pricing for quality mental health care.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Individual Sessions</h3>
                <div className="text-4xl font-bold text-green-700 mb-4">$200</div>
                <p className="text-gray-600">
                  50-minute sessions focused on your personal goals and mental health needs.
                </p>
              </div>
              <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
                <h3 className="text-2xl font-semibold text-amber-800 mb-4">Couples Sessions</h3>
                <div className="text-4xl font-bold text-amber-700 mb-4">$240</div>
                <p className="text-gray-600">
                  Relationship counseling sessions to strengthen your partnership and communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl card-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you accept insurance?</h3>
                <p className="text-gray-600 leading-relaxed">
                  No, but a superbill is provided for self-submission to your insurance company for potential reimbursement.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl card-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Are online sessions available?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes—all virtual sessions are conducted via secure Zoom meetings. Available Monday, Wednesday & Friday from 1 PM–5 PM.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl card-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is your cancellation policy?</h3>
                <p className="text-gray-600 leading-relaxed">
                  24-hour notice is required for cancellations. Sessions cancelled with less than 24 hours notice may be subject to the full session fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to begin your journey? Reach out to schedule your appointment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(323) 555-0192</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">serena@blakepsychology.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Office Address</p>
                      <p className="text-gray-600">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <select
                      id="contact-time"
                      name="contact-time"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Please describe how I can help you..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-400 mb-6">Clinical Psychologist | Licensed in California</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <p>© 2025 Dr. Serena Blake Psychology</p>
              <span>|</span>
              <p>Los Angeles, CA 90026</p>
              <span>|</span>
              <p>(323) 555-0192</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
