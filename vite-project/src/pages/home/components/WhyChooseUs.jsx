import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle2,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance and lightning-quick load times" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and 99.9% uptime guarantee" },
  { icon: Users, title: "Expert Team", description: "Experienced developers with proven track records" },
  { icon: TrendingUp, title: "Scalable Solutions", description: "Grow your business without worrying about infrastructure" },
  { icon: Award, title: "Award Winning", description: "Recognized for excellence in software development" },
  { icon: CheckCircle2, title: "Quality Assured", description: "Rigorous testing and quality assurance processes" },
];

const stats = [
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 500, suffix: "+", label: "Happy Clients" },
  { number: 24, suffix: "/7", label: "Support Available" },
  { number: 15, suffix: "ms", label: "Avg Response Time" },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Hook للكشف عن ظهور الـ stats
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20  bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Features */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}v10code?
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                We combine technical expertise with a client-first approach to deliver exceptional results
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} data-aos="fade-up" data-aos-delay={index * 50} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Statistics */}
          <div data-aos="fade-left" className="relative" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl" />

            <div className="relative p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-12">
                Our Track Record
              </h3>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="text-center">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                      {inView ? (
                        <CountUp start={0} end={stat.number} duration={2 + index * 0.5} />
                      ) : 0}
                      {stat.suffix}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-12 pt-8 border-t border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  We have been delivering cutting-edge software solutions for over a decade. Our commitment to excellence and innovation has made us a trusted partner for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
