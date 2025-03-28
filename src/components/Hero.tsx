
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  useEffect(() => {
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-r from-leaf/80 to-leaf-dark/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-on-scroll">
              Reducing Food Waste, <br />
              <span className="text-yellow-300">Connecting Communities</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              FoodLoop connects farmers, retailers, and NGOs through an AI-powered 
              platform that tracks surplus food, forecasts demand, and minimizes waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-white text-leaf-dark hover:bg-yellow-100 hover:text-leaf-dark font-medium">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-pulse-subtle"></div>
              <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 z-10 animate-float">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-leaf-light/10 rounded-lg">
                    <img src="https://place-hold.it/80x80?text=Farmers" alt="Farmers" className="w-16 h-16 mb-2" />
                    <h3 className="font-medium text-leaf-dark">Farmers</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-sky-light/10 rounded-lg">
                    <img src="https://place-hold.it/80x80?text=Retailers" alt="Retailers" className="w-16 h-16 mb-2" />
                    <h3 className="font-medium text-sky-dark">Retailers</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-soil-light/10 rounded-lg">
                    <img src="https://place-hold.it/80x80?text=NGOs" alt="NGOs" className="w-16 h-16 mb-2" />
                    <h3 className="font-medium text-soil-dark">NGOs</h3>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-accent/10 rounded-lg">
                    <img src="https://place-hold.it/80x80?text=AI" alt="AI" className="w-16 h-16 mb-2" />
                    <h3 className="font-medium text-accent">AI Forecasting</h3>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="px-4 py-2 bg-leaf text-white rounded-full text-sm font-medium">
                    Connected Ecosystem
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
