import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About SimpleApp
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're passionate about creating tools that empower developers and businesses 
                to build amazing digital experiences. Our platform combines cutting-edge 
                technology with intuitive design to make web development accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded by a team of experienced developers and designers, SimpleApp has grown 
                to serve thousands of users worldwide. We believe in the power of simplicity 
                and the importance of great user experience.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="border-0 shadow-sm bg-blue-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-blue-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-blue-800">
                    To democratize web development by providing powerful, easy-to-use tools 
                    that help anyone bring their ideas to life.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm bg-purple-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-purple-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-purple-800">
                    A world where creating beautiful, functional web applications is as simple 
                    as having an idea and the passion to build it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing applications 
            with SimpleApp. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}