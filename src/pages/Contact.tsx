import { useEffect, useState, FormEvent } from 'react';
import anime from 'animejs';
import { Mail, MapPin, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    anime({
      targets: '.contact-item',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission - replace with your actual form handling
    try {
      // For now, we'll just create a mailto link
      const mailtoLink = `mailto:contact@codejitsu.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <SEO
        title="Let's Talk"
        description="Get in touch with Codejitsu Development Studio. Send us a message or email us to discuss your project."
        path="/contact"
      />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your project to life? Reach out and let's discuss how we can help
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="contact-item opacity-0 text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <Mail size={40} className="text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:contact@codejitsu.ca"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                contact@codejitsu.ca
              </a>
            </div>

            <div className="contact-item opacity-0 text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <MapPin size={40} className="text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Langley, BC<br />Canada
              </p>
            </div>

            <div className="contact-item opacity-0 text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
              <Send size={40} className="text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-400">
                Fill out the form below
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item opacity-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-400">
                Fill out the form and we'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-500/50 disabled:shadow-none"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center">
                  Thank you! Your message has been sent.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
