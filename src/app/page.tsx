import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "CCTV Security Systems",
      description: "Comprehensive surveillance solutions with HD cameras, remote monitoring, and intelligent analytics to protect your property 24/7.",
      features: [
        "HD IP Cameras & DVR Systems",
        "Remote Mobile App Monitoring", 
        "Night Vision & Motion Detection",
        "Cloud Storage & Backup",
        "Professional Installation & Setup"
      ],
      image: "https://placehold.co/400x300?text=Modern+CCTV+security+cameras+installation+on+building+exterior+with+professional+mounting",
      imageAlt: "Modern CCTV security cameras installation on building exterior with professional mounting",
      href: "/services/cctv",
      accentColor: "blue"
    },
    {
      title: "Fire Alarm Systems", 
      description: "Advanced fire detection and alarm systems ensuring rapid response and compliance with safety regulations for maximum protection.",
      features: [
        "Smoke & Heat Detection Systems",
        "Emergency Evacuation Lighting",
        "Central Monitoring Panels",
        "Compliance Testing & Certification",
        "24/7 Emergency Response"
      ],
      image: "https://placehold.co/400x300?text=Professional+fire+alarm+control+panel+installation+in+commercial+building+with+safety+equipment",
      imageAlt: "Professional fire alarm control panel installation in commercial building with safety equipment",
      href: "/services/fire-alarm",
      accentColor: "red"
    },
    {
      title: "Data Network Solutions",
      description: "Robust networking infrastructure with structured cabling, Wi-Fi setup, and server room configurations for reliable connectivity.",
      features: [
        "Cat6 & Fiber Optic Cabling",
        "Wireless Network Configuration", 
        "Server Room Setup & Management",
        "Network Security Implementation",
        "Performance Optimization & Testing"
      ],
      image: "https://placehold.co/400x300?text=Organized+data+network+server+room+with+professional+cable+management+and+networking+equipment",
      imageAlt: "Organized data network server room with professional cable management and networking equipment",
      href: "/services/data-network",
      accentColor: "green"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson & Associates Law Firm",
      text: "LightCurrent Pro transformed our office security. The CCTV system they installed gives us complete peace of mind, and their team was incredibly professional throughout the process.",
      rating: 5
    },
    {
      name: "Mike Thompson", 
      company: "Thompson Manufacturing",
      text: "Outstanding fire alarm system installation. They handled all the compliance requirements and testing. Our facility is now fully compliant and safer than ever.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Tech Innovations Inc",
      text: "The data network infrastructure they built for our new office is flawless. Fast, reliable, and professionally managed. Highly recommend their services.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "15+ Years Experience",
      description: "Extensive expertise in light current systems with hundreds of successful installations."
    },
    {
      title: "Certified Technicians", 
      description: "Licensed and insured professionals with ongoing training on latest technologies."
    },
    {
      title: "24/7 Emergency Support",
      description: "Round-the-clock emergency response for critical system failures and maintenance."
    },
    {
      title: "2-Year Warranty",
      description: "Comprehensive warranty on all installations with ongoing maintenance support."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Light Current Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in the design, installation, and maintenance of critical building systems 
              that keep your property secure, safe, and connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LightCurrent Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with exceptional customer service to deliver 
              reliable solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your light current system needs. 
            Our experts are ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              <Link href="tel:+1234567890">Call (123) 456-7890</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}