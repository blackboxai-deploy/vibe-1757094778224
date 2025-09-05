import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "CCTV Security Systems",
      description: "Complete surveillance solutions with high-definition cameras, advanced recording systems, and intelligent monitoring capabilities. Our CCTV installations provide 24/7 security monitoring with remote access via mobile apps and web platforms.",
      features: [
        "HD IP Cameras & Advanced DVR/NVR Systems",
        "Remote Monitoring via Mobile Apps", 
        "Night Vision & Infrared Technology",
        "Motion Detection & Smart Alerts",
        "Cloud Storage & Local Backup Solutions",
        "Professional Installation & Configuration"
      ],
      image: "https://placehold.co/400x300?text=Professional+CCTV+security+camera+system+with+multiple+cameras+and+monitoring+equipment+installation",
      imageAlt: "Professional CCTV security camera system with multiple cameras and monitoring equipment installation",
      href: "/services/cctv",
      accentColor: "blue"
    },
    {
      title: "Fire Alarm Systems", 
      description: "Comprehensive fire detection and alarm systems designed to protect lives and property. Our installations include smoke detection, heat sensors, emergency lighting, and central monitoring panels with full compliance certification.",
      features: [
        "Smoke & Heat Detection Systems",
        "Emergency Evacuation Lighting",
        "Central Fire Control Panels",
        "Voice Evacuation Systems",
        "Compliance Testing & Certification",
        "24/7 Emergency Monitoring Service"
      ],
      image: "https://placehold.co/400x300?text=Advanced+fire+alarm+control+panel+with+smoke+detectors+and+emergency+lighting+system+in+commercial+building",
      imageAlt: "Advanced fire alarm control panel with smoke detectors and emergency lighting system in commercial building",
      href: "/services/fire-alarm",
      accentColor: "red"
    },
    {
      title: "Data Network Infrastructure",
      description: "Robust networking solutions including structured cabling, wireless networks, and server room installations. We design and implement reliable data networks that support your business operations with optimal performance and security.",
      features: [
        "Cat6 & Fiber Optic Structured Cabling",
        "Wireless Network Design & Installation", 
        "Server Room Setup & Cable Management",
        "Network Security Configuration",
        "Performance Testing & Optimization",
        "Ongoing Maintenance & Support"
      ],
      image: "https://placehold.co/400x300?text=Professional+data+network+server+room+with+organized+cable+management+racks+and+networking+switches",
      imageAlt: "Professional data network server room with organized cable management racks and networking switches",
      href: "/services/data-network",
      accentColor: "green"
    }
  ];

  const additionalServices = [
    {
      title: "System Maintenance",
      description: "Regular maintenance and support services to ensure optimal performance"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency response for critical system failures and urgent repairs"
    },
    {
      title: "System Upgrades",
      description: "Technology upgrades and system expansions to meet evolving needs"
    },
    {
      title: "Compliance Testing",
      description: "Regular testing and certification to meet industry standards and regulations"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Light Current Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive installation, maintenance, and support services for CCTV security systems, 
              fire alarm systems, and data network infrastructure. Protecting and connecting your property 
              with cutting-edge technology and expert craftsmanship.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide complete solutions for all your light current system needs, 
              from initial consultation through installation and ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond installation, we provide comprehensive ongoing support to ensure 
              your systems operate at peak performance year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure every project is completed 
              to the highest standards with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free on-site assessment and system design consultation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Detailed project planning and equipment specification</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Professional installation by certified technicians</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Testing, training, and ongoing maintenance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Expert Light Current Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote. 
            Our team is ready to help you design the perfect system for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              <Link href="tel:+1234567890">Emergency: (123) 456-7890</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}