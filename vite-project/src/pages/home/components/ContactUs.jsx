import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {    
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 

  return (
    <section className="py-10 bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
    
<h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
       

        {/* Form + Image Row */}
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
          {/* Contact Form */}
          <div className="lg:flex-1" data-aos="fade-up">
            <div className="relative p-8 lg:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl opacity-50 -z-10" />

              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none" />
                </div>

                <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block lg:flex-1 mt-8 lg:mt-0" data-aos="fade-up" data-aos-delay={200}>
            <img src="/Serves-7.svg" alt="Contact Illustration" className="w-full max-w-lg mx-auto animate-fade" />
          </div>
        </div>
      </div>
    </section>
  );
}
