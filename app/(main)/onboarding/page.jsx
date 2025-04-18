import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import React from "react";

const OnBoardingPage = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    // Redirect to dashboard or home page
    redirect("/dashboard");
  }
  return (
    <main>
      <OnBoardingForm industries={industries} />
    </main>
  );
};

export default OnBoardingPage;
