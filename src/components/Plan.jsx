


import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Plan = () => {
  return (
    <section className="w-full py-24 bg-white">
      
      {/* Heading & description */}
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-slate-700 text-[42px] md:text-[48px] font-semibold">
          Choose Your Plan
        </h2>

        <p className="text-gray-500 max-w-lg mx-auto mt-4 text-base md:text-lg leading-relaxed">
          Start for free and scale up as you grow. Find the perfect plan for your
          content creation needs.
        </p>
      </div>

      {/* Pricing Table (CENTERED, NOT FULL WIDTH) */}
      <div className="mt-14 px-4">
        <div className="max-w-2xl mx-auto">
          <PricingTable
            appearance={{
              layout: {
                layout: "horizontal",
              },
              elements: {
                root: "flex justify-center",
                plans: "flex !flex-row justify-center gap-10",
                plan: "min-w-[380px] max-w-[380px]",
              },
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default Plan;
