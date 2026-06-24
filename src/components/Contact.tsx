"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Your name is required";
    if (!form.email.trim()) {
      newErrors.email = "Your email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message content cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
      
      // Clear success notification after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6 space-y-10 border-t border-border-card/40">
      
      {/* Title */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg-app">Get In Touch</h2>
        <div className="w-12 h-1 bg-brand-primary rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-sm">
            Have an interesting project or a developer position open? Feel free to contact me directly using the form or reach out through my socials!
          </p>

          <div className="space-y-4 text-xs font-semibold">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Mail size={15} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted uppercase">Email</span>
                <a href="mailto:gauranshkate.it@gmail.com" className="text-fg-app hover:text-brand-primary transition-colors mt-0.5">
                  gauranshkate.it@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <MapPin size={15} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted uppercase">Location</span>
                <span className="text-fg-app mt-0.5">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-4 border-t border-border-card/40 max-w-xs">
            <a href="https://github.com/kategauransh" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-bg-card border border-border-card text-text-muted hover:text-fg-app hover:border-brand-primary/20 transition-all">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/gauranshkate26" target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-bg-card border border-border-card text-text-muted hover:text-fg-app hover:border-brand-primary/20 transition-all">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-bg-card border border-border-card relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 bg-bg-card/95 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 space-y-3 z-10 animate-fade-in">
              <CheckCircle2 size={36} className="text-brand-secondary stroke-[2.5px]" />
              <h4 className="font-extrabold text-sm text-fg-app">Message Sent Successfully!</h4>
              <p className="text-xs text-text-muted max-w-xs">
                Thank you for reaching out. I have received your message and will get back to you shortly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-text-muted">Full Name</label>
                <input 
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="px-3 py-2 rounded-lg text-xs bg-bg-app border border-border-card text-fg-app focus:outline-none focus:border-brand-primary/45 transition-colors"
                />
                {errors.name && <span className="text-[9px] font-semibold text-rose-500">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold text-text-muted">Email Address</label>
                <input 
                  type="text"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="johndoe@example.com"
                  className="px-3 py-2 rounded-lg text-xs bg-bg-app border border-border-card text-fg-app focus:outline-none focus:border-brand-primary/45 transition-colors"
                />
                {errors.email && <span className="text-[9px] font-semibold text-rose-500">{errors.email}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold text-text-muted">Message</label>
              <textarea 
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                className="px-3 py-2 rounded-lg text-xs bg-bg-app border border-border-card text-fg-app focus:outline-none focus:border-brand-primary/45 transition-colors resize-none"
              />
              {errors.message && <span className="text-[9px] font-semibold text-rose-500">{errors.message}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-md shadow-brand-primary/10 hover:bg-brand-primary/95 transition-all disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={12} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
