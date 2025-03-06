import Link from "next/link";
import React from "react";
import { Button } from "./ui/button"; // Ensure Button is imported correctly

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div>
        <div>
          <h1>
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p>
            Advance your career with personalized guidance, interview prep and
            AI-powered tools for job success.
          </p>
        </div>
        <div>
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://youtu.be/UbXpRv5ApKA?si=n3Q-1ZC2AGU4MXfl">
            <Button size="lg" className="px-8" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
