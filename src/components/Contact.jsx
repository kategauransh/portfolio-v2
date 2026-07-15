import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ submitting: true, success: false, error: null });

    fetch("https://formsubmit.co/ajax/gauranshkate.it@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    })
      .then(response => {
        if (response.ok) {
          setStatus({
            submitting: false,
            success: true,
            error: null,
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          throw new Error("Failed to send message. Please try again.");
        }
      })
      .catch(error => {
        setStatus({
          submitting: false,
          success: false,
          error: error.message || "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-bg w-[400px] h-[400px] top-[20%] left-[-15%] opacity-20 bg-indigo-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's Make Something <span className="text-gradient-primary">Great Together</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Have a project in mind, looking for a developer, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Fill out the contact form or send an email directly. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-white/5">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email & Phone</p>
                  <a href="mailto:gauranshkate.it@gmail.com" className="block text-sm md:text-base font-bold text-white hover:text-primary transition-colors">
                    gauranshkate.it@gmail.com
                  </a>
                  <a href="tel:+918815383700" className="block text-xs text-gray-400 hover:text-primary transition-colors mt-0.5">
                    +91 8815383700
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-white/5">
                <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Based In</p>
                  <p className="text-sm md:text-base font-bold text-white">Pune, Maharashtra, India</p>
                </div>
              </div>

              {/* Chat Card */}
              <div className="glass-card p-6 rounded-2xl flex items-center space-x-4 border border-white/5">
                <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                  <MessageSquare className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Social Channels</p>
                  <div className="flex space-x-3 mt-1">
                    <a href="https://github.com/kategauransh" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors underline">GitHub</a>
                    <span className="text-gray-600">•</span>
                    <a href="https://www.linkedin.com/in/gauranshkate26" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors underline">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative">
              
              {status.success && (
                <div className="absolute inset-0 bg-[#121826]/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-6 z-10 space-y-4 animate-[fadeIn_0.2s_ease-out]">
                  <div className="bg-emerald-500/10 p-4 rounded-full border border-emerald-500/30">
                    <CheckCircle className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out, Gauransh. I will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ ...status, success: false })}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-primary rounded-xl hover:bg-primary-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {status.error && (
                <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm animate-[fadeIn_0.2s_ease-out]">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-all ${
                        errors.name ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> {errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-all ${
                        errors.email ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> {errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-all ${
                      errors.subject ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                  {errors.subject && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> {errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white text-sm focus:outline-none focus:border-primary focus:bg-white/10 transition-all ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    placeholder="Hi Gauransh, I would love to talk about..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400 flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> {errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
