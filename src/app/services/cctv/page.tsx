import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CCTVServicesPage() {
  const cctvFeatures = [
    {
      title: "HD IP Camera Systems",
      description: "High-definition IP cameras with crystal clear 1080p, 4K resolution options"
    },
    {
      title: "Remote Monitoring",
      description: "Access your security system from anywhere via mobile apps and web interface"
    },
    {
      title: "Night Vision Technology", 
      description: "Advanced infrared and low-light cameras for 24/7 surveillance capability"
    },
    {
      title: "Motion Detection",
      description: "Smart motion detection with customizable zones and instant alert notifications"
    },
    {
      title: "Cloud & Local Storage",
      description: "Flexible storage options with cloud backup and local NVR/DVR recording"
    },
    {
      title: "Professional Installation",
      description: "Expert installation with optimal camera placement and cable management"
    }
  ];

  const systemTypes = [
    {
      title: "Analog CCTV Systems",
      description: "Traditional analog systems with HD-over-coax technology for cost-effective security solutions.",
      features: ["HD-TVI/AHD cameras up to 4K", "DVR recording systems", "Coaxial cable infrastructure", "Budget-friendly options"]
    },
    {
      title: "IP Camera Systems", 
      description: "Advanced network-based systems with superior image quality and smart analytics features.",
      features: ["4K IP cameras with smart analytics", "NVR recording systems", "Power over Ethernet (PoE)", "Advanced remote access"]
    },
    {
      title: "Wireless Systems",
      description: "Flexible wireless camera solutions ideal for locations where cabling is challenging.",
      features: ["Battery-powered options", "Wi-Fi connectivity", "Solar power capability", "Easy installation & relocation"]
    }
  ];

  const applications = [
    {
      title: "Commercial Properties",
      description: "Protect your business with comprehensive surveillance coverage",
      image: "https://placehold.co/300x200?text=CCTV+cameras+installed+on+commercial+office+building+exterior+with+professional+security+monitoring",
      imageAlt: "CCTV cameras installed on commercial office building exterior with professional security monitoring"
    },
    {
      title: "Retail Stores", 
      description: "Monitor customer areas and prevent theft with strategic camera placement",
      image: "https://placehold.co/300x200?text=Security+cameras+in+modern+retail+store+monitoring+customer+areas+and+checkout+zones",
      imageAlt: "Security cameras in modern retail store monitoring customer areas and checkout zones"
    },
    {
      title: "Warehouses",
      description: "Secure large spaces with wide-angle cameras and perimeter monitoring",
      image: "https://placehold.co/300x200?text=Industrial+warehouse+security+cameras+monitoring+storage+areas+and+loading+docks",
      imageAlt: "Industrial warehouse security cameras monitoring storage areas and loading docks"
    },
    {
      title: "Residential Properties",
      description: "Home security systems with mobile monitoring and smart alerts",
      image: "https://placehold.co/300x200?text=Home+security+cameras+installed+around+residential+property+entrance+and+driveway",
      imageAlt: "Home security cameras installed around residential property entrance and driveway"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional CCTV Security Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive surveillance solutions designed to protect your property 24/7. 
                From high-definition cameras to intelligent monitoring systems, we provide 
                complete CCTV installations tailored to your security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Link href="tel:+1234567890">Call (123) 456-7890</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Professional+technician+installing+modern+HD+CCTV+security+camera+system+on+commercial+building"
                alt="Professional technician installing modern HD CCTV security camera system on commercial building"
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
              Advanced CCTV Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CCTV systems include cutting-edge technology and features 
              designed to provide comprehensive security coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvFeatures.map((feature, index) => (
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

      {/* System Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CCTV System Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from various CCTV system types to match your specific 
              security requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {system.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{system.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-blue-500 font-bold mt-0.5">•</span>
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
              CCTV Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our CCTV systems are suitable for various applications, 
              from small businesses to large commercial facilities.
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

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Professional CCTV Installation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Crime Deterrent</h3>
              <p className="text-blue-100">Visible security cameras deter criminal activity and protect your property</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Remote Monitoring</h3>
              <p className="text-blue-100">Monitor your property from anywhere using mobile apps and web access</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Insurance Benefits</h3>
              <p className="text-blue-100">Reduce insurance premiums with professional security system documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your CCTV system. 
            Our experts will design the perfect security solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Link href="/contact">Get Free CCTV Quote</Link>
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