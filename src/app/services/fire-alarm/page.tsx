import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FireAlarmServicesPage() {
  const fireAlarmFeatures = [
    {
      title: "Smoke Detection Systems",
      description: "Advanced photoelectric and ionization smoke detectors for early fire detection"
    },
    {
      title: "Heat Detection Sensors",
      description: "Temperature-sensitive detectors for areas where smoke detectors aren't suitable"
    },
    {
      title: "Central Control Panels", 
      description: "Intelligent fire alarm control panels with zone identification and diagnostics"
    },
    {
      title: "Emergency Lighting",
      description: "Battery-backed emergency lighting systems for safe evacuation routes"
    },
    {
      title: "Voice Evacuation",
      description: "Clear voice announcement systems for efficient emergency communication"
    },
    {
      title: "Compliance Testing",
      description: "Regular testing and certification to meet fire safety regulations and codes"
    }
  ];

  const systemComponents = [
    {
      title: "Fire Detection Devices",
      description: "Comprehensive range of detection devices for various environments and applications.",
      features: ["Photoelectric smoke detectors", "Ionization smoke detectors", "Heat detectors (fixed & rate-of-rise)", "Multi-sensor detectors"]
    },
    {
      title: "Alarm Notification", 
      description: "Audible and visual notification devices to alert occupants of fire emergencies.",
      features: ["Horn/strobe combinations", "Voice evacuation speakers", "Visual strobe lights", "Vibrating notification devices"]
    },
    {
      title: "Control & Monitoring",
      description: "Central control panels and monitoring systems for comprehensive fire alarm management.",
      features: ["Addressable control panels", "Zone identification displays", "Remote monitoring capability", "Integration with building systems"]
    }
  ];

  const applications = [
    {
      title: "Commercial Buildings",
      description: "Comprehensive fire protection for offices and business facilities",
      image: "https://placehold.co/300x200?text=Fire+alarm+control+panel+installed+in+commercial+office+building+lobby+with+emergency+lighting",
      imageAlt: "Fire alarm control panel installed in commercial office building lobby with emergency lighting"
    },
    {
      title: "Industrial Facilities", 
      description: "Specialized fire detection systems for manufacturing and industrial environments",
      image: "https://placehold.co/300x200?text=Industrial+fire+detection+system+with+heat+sensors+in+manufacturing+facility+warehouse",
      imageAlt: "Industrial fire detection system with heat sensors in manufacturing facility warehouse"
    },
    {
      title: "Healthcare Facilities",
      description: "Code-compliant fire alarm systems for hospitals and medical centers",
      image: "https://placehold.co/300x200?text=Hospital+fire+alarm+system+with+smoke+detectors+and+emergency+evacuation+lighting+in+corridor",
      imageAlt: "Hospital fire alarm system with smoke detectors and emergency evacuation lighting in corridor"
    },
    {
      title: "Educational Buildings",
      description: "Safe evacuation systems for schools and educational institutions",
      image: "https://placehold.co/300x200?text=School+fire+alarm+system+with+voice+evacuation+speakers+and+emergency+exit+lighting",
      imageAlt: "School fire alarm system with voice evacuation speakers and emergency exit lighting"
    }
  ];

  const complianceStandards = [
    "NFPA 72 - National Fire Alarm and Signaling Code",
    "International Fire Code (IFC)",
    "Local Fire Marshal Requirements", 
    "ADA Compliance for Notification Devices",
    "UL Listed Equipment and Installation",
    "Regular Inspection and Testing Schedules"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Fire Alarm Systems
              </h1>
              <p className="text-xl text-red-100 mb-8">
                Advanced fire detection and alarm systems designed to protect lives and property. 
                Our comprehensive installations include smoke detection, emergency lighting, 
                and voice evacuation systems with full compliance certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-red-900 hover:bg-gray-100">
                  <Link href="/contact">Get Fire Safety Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-900">
                  <Link href="tel:+1234567890">Emergency: (123) 456-7890</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Professional+fire+alarm+control+panel+installation+with+smoke+detectors+and+emergency+systems"
                alt="Professional fire alarm control panel installation with smoke detectors and emergency systems"
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
              Advanced Fire Alarm Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fire alarm systems include state-of-the-art detection technology 
              and safety features designed to provide maximum protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fireAlarmFeatures.map((feature, index) => (
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

      {/* System Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fire Alarm System Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete fire alarm solutions with integrated detection, notification, 
              and control systems tailored to your facility's requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {systemComponents.map((component, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {component.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{component.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Components Include:</h4>
                    <ul className="space-y-1">
                      {component.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
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
              Fire Alarm Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional fire alarm installations for various building types 
              and occupancy classifications.
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

      {/* Compliance Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Code Compliance & Standards
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-12">
              All our fire alarm installations meet or exceed applicable codes and standards 
              to ensure maximum safety and legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-red-800 p-6 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-900 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-red-100">{standard}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Professional Fire Alarm Installation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Early Detection</h3>
              <p className="text-gray-600">Advanced sensors provide early warning for rapid response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Code Compliance</h3>
              <p className="text-gray-600">Meet all local and national fire safety requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Life Safety</h3>
              <p className="text-gray-600">Protect occupants with reliable evacuation systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Savings</h3>
              <p className="text-gray-600">Reduce premiums with compliant fire safety systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Protect Your Property with Professional Fire Alarms
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free fire safety assessment and detailed quote for your fire alarm system. 
            Ensure compliance and protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 px-8">
              <Link href="/contact">Get Fire Safety Quote</Link>
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