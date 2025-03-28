
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Stakeholders: React.FC = () => {
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

  const stakeholders = [
    {
      title: "Farmers",
      description:
        "Connect directly with retailers and organizations to sell surplus produce at fair prices instead of letting it go to waste.",
      benefits: [
        "Reduce post-harvest losses",
        "New revenue streams",
        "Simplified logistics",
        "Demand forecasting insights"
      ],
      color: "bg-leaf-light/10",
      textColor: "text-leaf-dark",
      borderColor: "border-leaf/20"
    },
    {
      title: "Retailers",
      description:
        "Optimize inventory management with AI-powered forecasting to reduce overstocking and minimize waste.",
      benefits: [
        "Improve inventory turnover",
        "Reduce waste disposal costs",
        "Enhance sustainability metrics",
        "Data-driven ordering"
      ],
      color: "bg-sky-200/10",
      textColor: "text-sky-700",
      borderColor: "border-sky-500/20"
    },
    {
      title: "NGOs & Food Banks",
      description:
        "Get reliable access to surplus food from multiple sources through a streamlined platform that matches your needs.",
      benefits: [
        "Consistent food supply",
        "Diverse food options",
        "Simplified logistics",
        "Better resource planning"
      ],
      color: "bg-accent/10",
      textColor: "text-accent-foreground",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="stakeholders">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gray-800 animate-on-scroll">
            <span className="text-leaf">Connecting</span> Everyone in the Food Chain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            Our platform brings together key stakeholders in the food supply chain to create
            a more efficient and sustainable ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className={`${stakeholder.color} border ${stakeholder.borderColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <h3 className={`text-2xl font-bold mb-4 ${stakeholder.textColor}`}>
                {stakeholder.title}
              </h3>
              <p className="text-gray-600 mb-6">{stakeholder.description}</p>
              <h4 className="font-semibold text-gray-700 mb-3">Benefits:</h4>
              <ul className="space-y-2">
                {stakeholder.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`${stakeholder.textColor} mr-2`}>✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
