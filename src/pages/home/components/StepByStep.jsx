import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your vision, goals, and requirements. Our team conducts thorough research and creates a detailed project roadmap.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create stunning mockups and interactive prototypes. We iterate based on your feedback to ensure perfect alignment.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Our expert developers build your solution using cutting-edge technologies. Rigorous testing ensures quality and reliability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "We deploy your solution to production and provide ongoing support. Your success is our success.",
    icon: Rocket,
  },
];


export default function StepByStep() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20  bg-linear-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600">
            A structured approach to delivering exceptional software solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className={`flex group ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="w-1/2 px-8">
                    <div
                      className={`${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center circle */}
                  <div className="w-0 flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
