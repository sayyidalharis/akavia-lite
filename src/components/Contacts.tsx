import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contacts: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "auliarahmanzulfi@gmail.com",
      link: "mailto:auliarahmanzulfi@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+62 822-9830-3678",
      link: "https://wa.me/6282298303678?text=Hi!%20bisa%20inquiry%20perihal%20service%20Akavia%20labs%3F",
      // make it open WhatsApp chat in another tab instead of the same tab
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      value: "Harapan Mulya, Kec. Kemayoran, Kota Jakarta Pusat, DKI Jakarta, Indonesia",
      link: "#"
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-[#363A3D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#FFFFFF] mb-6">
            Let's <span className="font-semibold">Connect</span>
          </h2>
          <p className="text-lg text-[#FFFFFF]/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-6">Get in Touch</h3>
              <p className="text-[#FFFFFF]/70 leading-relaxed mb-8">
                Whether you have a question, want to start a project, or simply want to connect, 
                we're always ready to chat. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  target={info.target || '_self'}
                  rel={info.rel || ''}
                  className="group flex items-start space-x-4 p-4 bg-[#FFFFFF]/5 rounded-xl hover:bg-[#FFFFFF]/10 transition-all duration-300"
                >
                  <div className="text-[#FFFFFF] group-hover:scale-110 transform transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FFFFFF] mb-1">{info.title}</h4>
                    <p className="text-[#FFFFFF]/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#FFFFFF] p-8 rounded-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-[#363A3D] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-[#363A3D] mb-2">Thank You!</h3>
                <p className="text-[#363A3D]/70">Your message has been sent. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#363A3D] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#363A3D]/20 rounded-xl focus:ring-2 focus:ring-[#363A3D]/20 focus:border-[#363A3D] outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#363A3D] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#363A3D]/20 rounded-xl focus:ring-2 focus:ring-[#363A3D]/20 focus:border-[#363A3D] outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#363A3D] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#363A3D]/20 rounded-xl focus:ring-2 focus:ring-[#363A3D]/20 focus:border-[#363A3D] outline-none transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#363A3D] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#363A3D]/20 rounded-xl focus:ring-2 focus:ring-[#363A3D]/20 focus:border-[#363A3D] outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#363A3D] text-[#FFFFFF] px-6 py-4 rounded-xl font-medium hover:bg-[#363A3D]/90 transition-all duration-300 flex items-center justify-center space-x-2 hover:transform hover:scale-[1.02]"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;