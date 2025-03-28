
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  useEffect(() => {
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
    <section className="py-16 bg-gradient-to-br from-leaf/90 to-leaf-dark overflow-hidden relative">
      <div className="absolute inset-0 bg-opacity-10">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -left-24 -bottom-24 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-on-scroll">
            Ready to Reduce Food Waste and Make a Difference?
          </h2>
          <p className="text-white/90 text-lg mb-8 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Join our growing network of farmers, retailers, and NGOs committed to creating a
            more sustainable food ecosystem with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-white text-leaf-dark hover:bg-yellow-50">
              Sign Up Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
