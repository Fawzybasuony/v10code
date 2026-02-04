import { ArrowRight, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function Hero() {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:border-blue-300 transition-colors">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                Software Solutions
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Ideas Into
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {" "}
                  Digital Reality
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We deliver comprehensive software development services that turn
                your vision into powerful, scalable solutions.
              </p>
            </div>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 hover:border-blue-600 text-gray-900 rounded-xl font-semibold text-lg transition-all hover:bg-blue-50">
                View Our Work
              </button>
            </div>
          </div>


          <img
            className="hidden lg:block mx-auto"
            src="/contact gif.gif"
            alt="Developer Animation"
          />
        </div>


        <div
          ref={ref}
          className="w-full mt-16 bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 py-12 px-4 border border-blue-100 text-center shadow-sm"
          data-aos="fade-up"
        >
          {/* 1 */}
          <div className="hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-blue-600">
              {inView ? <CountUp end={50} duration={4} /> : 0}+
            </div>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>

          {/* 2 */}
          <div className="hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-blue-600">
              {inView ? <CountUp end={30} duration={4} /> : 0}+
            </div>
            <p className="text-gray-600 mt-2">Team Members</p>
          </div>

          {/* 3 */}
          <div className="hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-blue-600">
              {inView ? <CountUp end={10} duration={4} /> : 0}+
            </div>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce"> 
      <div className="flex flex-col items-center gap-2"> 
        <span className="text-sm text-gray-500">Scroll to explore</span> 
        <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg> 
        </div>
        </div>
    </section>
  );
}
