import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/hero";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      {/* Hero Section */}
      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border border-gray-700 bg-gray-900/40 backdrop-blur-lg shadow-lg 
                           transform hover:scale-105 transition-transform duration-300 
                           hover:border-white"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="text-primary text-4xl mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <CardDescription className="text-gray-400 text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="relative w-full py-16 md:py-24 bg-black">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>

        <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-1 
          bg-gray-800/60 p-5 rounded-lg border border-gray-700 shadow-md 
          transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative w-full py-16 md:py-24 bg-black">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 bg-grid-small opacity-10"></div>

        {/* Content Container */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
            <p className="text-gray-400 text-lg">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center shadow-lg border border-gray-700">
                  {item.icon}
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What our users say */}
      <section className="relative w-full py-16 md:py-24 bg-black">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-60"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900/80 border border-gray-700 shadow-lg transition-transform transform hover:scale-105 hover:border-white"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/50"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-gray-300 italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-black/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-6 mt-5 animate-bounce bg-black text-white hover:bg-gray-800 transition-all duration-400"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
