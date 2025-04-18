import { industries } from "@/data/industries";
import React from "react";

const OnBoardingPage = () => {
  // Check if user is already onboarded

  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default OnBoardingPage;
