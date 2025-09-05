import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DataNetworkServicesPage() {
  const networkFeatures = [
    {
      title: "Structured Cabling",
      description: "Professional Cat6, Cat6a, and fiber optic cabling infrastructure installation"
    },
    {
      title: "Wireless Networks",
      description: "Enterprise-grade Wi-Fi design and installation for seamless connectivity"
    },
    {
      title: "Server Room Setup", 
      description: "Complete server room configuration with proper cable management and cooling"
    },
    {
      title: "Network Security",
      description: "Implementation of firewalls, VPNs, and security protocols for data protection"
    },
    {
      title: "Performance Testing",
      description: "Comprehensive testing and optimization for maximum network performance"
    },
    {
      title: "Ongoing Support",
      description: "24/7 monitoring, maintenance, and technical support services"
    }
  ];

  const networkSolutions = [
    {
      title: "Structured Cabling Systems",
      description: "Professional cable infrastructure that forms the backbone of your network communications.",
      features: ["Cat6/Cat6a Ethernet cabling", "Fiber optic backbone installation", "Patch panels and cable management", "Cable testing and certification"]
    },
    {
      title: "Wireless Network Infrastructure", 
      description: "Enterprise wireless solutions providing reliable coverage throughout your facility.",
      features: ["Wi-Fi 6 access point installation", "Site survey and heat mapping", "Controller-based management", "Guest network configuration"]
    },
    {
      title: "Network Equipment & Configuration",
      description: "Professional installation and configuration of network hardware and systems.",
      features: ["Managed switches and routers", "Network security appliances", "UPS and power management", "Remote management setup"]
    }
  ];

  const applications = [
    {
      title: "Corporate Offices",
      description: "Comprehensive network infrastructure for business operations",
      image: "https://placehold.co/300x200?text=Modern+corporate+office+network+server+room+with+organized+cable+management+and+networking+equipment",
      imageAlt: "Modern corporate office network server room with organized cable management and networking equipment"
    },
    {
      title: "Data Centers", 
      description: "High-density cabling and network solutions for data center environments",
      image: "https://placehold.co/300x200?text=Professional+data+center+with+fiber+optic+cables+and+network+switches+in+server+racks",
      imageAlt: "Professional data center with fiber optic cables and network switches in server racks"
    },
    {
      title: "Educational Facilities",
      description: "Network infrastructure supporting modern educational technology",
      image: "https://placehold.co/300x200?text=School+computer+lab+with+ethernet+cabling+and+wireless+access+points+for+student+connectivity",
      imageAlt: "School computer lab with ethernet cabling and wireless access points for student connectivity"
    },
    {
      title: "Healthcare Networks",
      description: "HIPAA-compliant network solutions for medical facilities",
      image: "https://placehold.co/300x200?text=Hospital+network+infrastructure+with+secure+cabling+and+wireless+systems+for+medical+equipment",
      imageAlt: "Hospital network infrastructure with secure cabling and wireless systems for medical equipment"
    }
  ];

  const networkServices = [
    {
      title: "Network Design & Planning",
      description: "Comprehensive network assessment and design services"
    },
    {
      title: "Cable Installation",
      description: "Professional installation of all types of network cabling"
    },
    {
      title: "Equipment Configuration", 
      description: "Setup and configuration of network hardware and software"
    },
    {
      title: "Performance Optimization",
      description: "Network tuning and optimization for peak performance"
    },
    {
      title: "Security Implementation",
      description: "Network security setup and ongoing monitoring"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Data Network Solutions
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Complete networking infrastructure solutions including structured cabling, 
                wireless networks, and server room installations. Building reliable 
                connectivity that powers your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                  <Link href="/contact">Get Network Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">
                  <Link href="tel:+1234567890">Call (123) 456-7890</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Professional+network+technician+installing+structured+cabling+system+in+modern+server+room"
                alt="Professional network technician installing structured cabling system in modern server room"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Network Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data network solutions include cutting-edge technology and 
              professional installation for reliable, high-performance connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Network Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete network infrastructure solutions tailored to your specific 
              connectivity requirements and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {networkSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{solution.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-green-500 font-bold mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Network Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional network installations for various industries and 
              facility types with customized solutions for each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={app.image}
                    alt={app.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Network Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial planning through ongoing support, we provide comprehensive 
              network services to keep your connectivity running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {networkServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Professional Network Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">High Performance</h3>
              <p className="text-green-100">Optimized network design for maximum speed and reliability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
              <p className="text-green-100">Robust security measures to protect your data and systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scalability</h3>
              <p className="text-green-100">Future-proof infrastructure that grows with your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-green-100">Professional maintenance and 24/7 technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Upgrade Your Network Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free network assessment and detailed quote for your data network needs. 
            Let us design the perfect connectivity solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 px-8">
              <Link href="/contact">Get Network Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}