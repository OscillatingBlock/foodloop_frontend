
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Stakeholders from "@/components/Stakeholders";
import CallToAction from "@/components/CallToAction";
import ApiExample from "@/components/ApiExample";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Stakeholders />
      
      {/* Backend Integration Example */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center text-gray-800">
            Backend <span className="text-leaf">Integration</span> Demo
          </h2>
          <ApiExample />
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
