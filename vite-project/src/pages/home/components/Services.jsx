import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Responsive, modern websites and web applications built with cutting-edge technologies. From frontend to full-stack solutions.",
    icon: "https://private-us-east-1.manuscdn.com/sessionFile/pub5ngAlRUFArOTZMAlgYn/sandbox/HpAMj2GlwMDK8rKGgAWGU3_1770209493590_na1fn_c2VydmljZXMtaWNvbi0x.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcHViNW5nQWxSVUZBck9UWk1BbGdZbi9zYW5kYm94L0hwQU1qMkdsd01ESzhyS0dnQVdHVTNfMTc3MDIwOTQ5MzU5MF9uYTFmbl9jMlZ5ZG1salpYTXRhV052YmkweC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=No1Oco1mvW6MrxCCz2v1LD7gMlMUt5RG7Uw2Z9UCPLc0U2uhg6BlXvVSkpG9AUgEPLABAdx5s4M7dEsQA8Yk-JLQh5Q2WCM79ddHdc-jgL58UfbTet~t5gxT0GkhJrx7nZnR8vKdVb6YQxTQid1Oa0I46XolMS~4te2afm9u5pbX7u~ZLiqvkkADJJsKm7xSjcoxceTMcRt3Bukhl-x1o0u5jw6FvyJWaeLEFP3-yOdiBymJlBCOPtmPondGXBw1Cos4kDUrTpZId60x3Erk7r5lXfzV0HBUMiXGBMngMndkcQcy-UZnymEIGeXiz0FQPi-AJU0DVfLBKQ-3y3WElA__",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    icon: "https://private-us-east-1.manuscdn.com/sessionFile/pub5ngAlRUFArOTZMAlgYn/sandbox/HpAMj2GlwMDK8rKGgAWGU3_1770209493591_na1fn_c2VydmljZXMtaWNvbi0y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcHViNW5nQWxSVUZBck9UWk1BbGdZbi9zYW5kYm94L0hwQU1qMkdsd01ESzhyS0dnQVdHVTNfMTc3MDIwOTQ5MzU5MV9uYTFmbl9jMlZ5ZG1salpYTXRhV052YmkweS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=r1MzVnoSA6K03LZtfHIYDcPIqINLXpJQ15S8MHCRvvwy2-UQ3To4jRki1JtZU7F-uNUBTqVxnGx9Mjpwx7Dq7XaPoz6p7u1FVm9zM3JmUFLR7qDfFH3uieTj74yaQw5reQz2IRHGgijWVc3zvuYUFI99MHcwP~gA7H1NzAefzEA-kX02XNvoEIotFpNE0feP1kUpYoptpxIZILDEgFpfPd2QqoEyXW651Zcq6k0-6UKAFi97AtP1272P9zkMFfLR9xehK-wWYyslfBguywgp1G4xHIuYsm1aDqw8OD6xDstrldDHde9RHAkRxMwQipOyupH7qqeKl3EKcfVO-uKOiQ__",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and backend services. We build robust systems that grow with your business.",
    icon: "https://private-us-east-1.manuscdn.com/sessionFile/pub5ngAlRUFArOTZMAlgYn/sandbox/HpAMj2GlwMDK8rKGgAWGU3_1770209493592_na1fn_c2VydmljZXMtaWNvbi0z.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcHViNW5nQWxSVUZBck9UWk1BbGdZbi9zYW5kYm94L0hwQU1qMkdsd01ESzhyS0dnQVdHVTNfMTc3MDIwOTQ5MzU5Ml9uYTFmbl9jMlZ5ZG1salpYTXRhV052Ymkwei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SswXCOiFnVz6NG2q~KgYQux-hDJhb5ZEcZ6VJM49akjS2xwysEUFn5dq5AjRJ5lweKVJJaTpK8pv3Cvjn8THeq8~LrDnSktDF-Y6TYxDtDJwRD9uJbxFBQuS5nXR2HPTUqS7OJ3J0ZAVph9p8z6veBZGDuMW0bX1jvHgmWvQeG-Xr9p8Ahi~E~7CXjc3Fx9jgGoNSYKgdqLpTDrQ65ThWAHH7z3CaLMVSLVp3kw32m~7p2NTkprDUELQemnjw3T5U0lZuFQJkuNIHiYUfNnojKfFsaR5xy2OH7WtVHGB8YQJT9u9O7Mlfl1k1dHw9pcTmjAWBlh3HHNdkt06khb2Gg__",
    color: "from-blue-500 to-cyan-400",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive software development solutions tailored to your unique
            business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl h-full hover:translate-y-[-8px]">
                {/* Gradient border overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl w-0 group-hover:w-full transition-all duration-500`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
