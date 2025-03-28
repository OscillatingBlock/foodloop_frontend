
import React, { useEffect } from "react";
import { LineChart, BarChart, PieChart, Sparkles, ListChecks, Users } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Features: React.FC = () => {
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

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-leaf" />,
      title: "AI-Powered Forecasting",
      description:
        "Our advanced AI algorithms analyze historical data, seasonal trends, and market conditions to predict demand with precision."
    },
    {
      icon: <LineChart className="h-8 w-8 text-leaf" />,
      title: "Real-time Tracking",
      description:
        "Monitor surplus food inventory in real-time across the entire distribution network to make informed decisions."
    },
    {
      icon: <ListChecks className="h-8 w-8 text-leaf" />,
      title: "Automated Matching",
      description:
        "Automatically connect surplus food with the organizations that need it most based on location, quantity, and type."
    },
    {
      icon: <Users className="h-8 w-8 text-leaf" />,
      title: "Collaborative Platform",
      description:
        "Bring farmers, retailers, and NGOs together in a single ecosystem to streamline communication and coordination."
    },
    {
      icon: <BarChart className="h-8 w-8 text-leaf" />,
      title: "Impact Analytics",
      description:
        "Track and measure your contribution to reducing food waste with comprehensive analytics and reports."
    },
    {
      icon: <PieChart className="h-8 w-8 text-leaf" />,
      title: "Resource Optimization",
      description:
        "Optimize resource allocation and reduce operational costs while maximizing social impact."
    }
  ];

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-800 animate-on-scroll">
            Powerful Features to <span className="text-leaf">Reduce Food Waste</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Our intelligent platform helps you predict demand, track surplus,
            and connect with partners to minimize food waste effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-leaf-light/10 rounded-full p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-r from-leaf/5 to-leaf-light/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <AnimatedCounter end={40} suffix="%" />
              <p className="mt-2 text-gray-600">Food Waste Reduced</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <AnimatedCounter end={250} suffix="+" />
              <p className="mt-2 text-gray-600">Partner Organizations</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <AnimatedCounter end={1000} suffix="k" />
              <p className="mt-2 text-gray-600">Tons of Food Saved</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: "0.6s" }}>
              <AnimatedCounter end={95} suffix="%" />
              <p className="mt-2 text-gray-600">Forecasting Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
