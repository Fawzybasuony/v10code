import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs/FAQs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StepByStep from "./components/StepByStep";
import WhyChooseUs from "./components/WhyChooseUs";

 

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Add padding to account for fixed header */}
      <div className=" ">
        <section id="hero">
          <Hero />
        </section>

      <section id="services">
          <Services />
        </section>  
 
        <section id="why-us">
          <WhyChooseUs />
        </section> 

        <section id="process">
          <StepByStep />
        </section>

        
        <section id="faq">
          <FAQs />
        </section>


        <section id="contact">
          <ContactUs />
        </section>
      </div>

      <Footer />
    </div>
  );
}
