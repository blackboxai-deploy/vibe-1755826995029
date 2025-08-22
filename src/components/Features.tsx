"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built for speed with modern technologies and optimized performance out of the box.",
      badge: "Performance"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for both beginners and experts. Get started in minutes.",
      badge: "User-Friendly"
    },
    {
      title: "Fully Responsive",
      description: "Works perfectly on all devices - desktop, tablet, and mobile. Beautiful everywhere.",
      badge: "Responsive"
    },
    {
      title: "Secure by Default",
      description: "Industry-standard security measures built in. Your data is safe and protected.",
      badge: "Security"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is here to help you succeed, anytime you need assistance.",
      badge: "Support"
    },
    {
      title: "Scalable Solution",
      description: "Grows with your business. From startup to enterprise, we've got you covered.",
      badge: "Scalability"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build, deploy, and scale your applications effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-0 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}