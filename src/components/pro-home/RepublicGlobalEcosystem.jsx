import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const RepublicGlobalEcosystem = () => {
  return (
    <div className="bg-secondary section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="text-white section-title">
              Republics Global Ecosystem
            </h2>
            <p className="text-white text-base font-normal mt-10">
              we build services for investor and companies of all sizes and
              experience levels. From first-time investors and early stage
              founders, to institutional VCS and complex enterprises - we are
              building with you in mind. Our ecosystem operates across the USA,
              UK, and Asia.
            </p>
          </div>
          <div>
            <div className="border-t border-border py-5">
              <div className="flex items-center justify-between">
                <h2 className="lg:text-xl md:text-lg text-base font-semibold text-white">
                  Investing Platform
                </h2>
                <Link href="#">
                  <FaArrowRightLong size={28} color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepublicGlobalEcosystem;
