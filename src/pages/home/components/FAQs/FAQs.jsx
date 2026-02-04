import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AllFAQs = [
  {
    name: "What is v10code?",
    dec: "v10code is a full-service software development company that provides cutting-edge solutions for businesses of all sizes.",
  },
  {
    name: "How long does a project take?",
    dec: "Project duration depends on complexity. Simple projects can take a few weeks, while larger projects may take several months.",
  },
  {
    name: "Do you offer support after delivery?",
    dec: "Yes! We provide 24/7 support and maintenance plans to ensure your software runs smoothly after launch.",
  },
  {
    name: "What technologies do you use?",
    dec: "We specialize in modern technologies like React, Next.js, Node.js, Tailwind CSS, and more to build scalable and efficient applications.",
  },
];

export default function FAQs() {
  const [showText, setShowText] = useState(null);

  return (
    <>
      <div
        id="FAQs"
        className="h-auto w-full py-6  text-primary tracking-wide px-4 lg:px-26"
      >
        <div className="flex flex-col lg:items-center mb-8">
          <h2 className="text-[25px] lg:text-[32px] font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
      
        </div>

        {AllFAQs.map((item, index) => (
          <div key={index} className="mx-auto w-full my-4">
            <div className="rounded-tl-xl rounded-br-xl border border-t-[1.5px] border-cyan-400">
              {/* Accordion Item */}
              <div className="relative transition-all duration-700 text-black">
                <div
                  className="w-full px-4 py-3 text-left cursor-pointer"
                  onClick={() => setShowText(showText === index ? null : index)}
                >
                  {/* Text Item */}
                  <div className="flex items-center justify-between h-auto font-semibold">
                    <span className="tracking-wide text-[16px] md:text-[20px]">
                      {item.name}
                    </span>

                    <ChevronDown
                      className={`w-6 h-6 text-cyan-500 transition-all duration-700 ${
                        showText === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`text-gray-600 transition-all duration-1000 ease-in-out px-4 text-[14px] md:text-[16px] font-normal ${
                    showText === index ? "max-h-screen" : "max-h-0"
                  } overflow-hidden`}
                >
                  {item.dec}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     </>
  );
}
