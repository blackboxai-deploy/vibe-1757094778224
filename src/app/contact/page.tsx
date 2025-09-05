import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Office Address",
      details: [
        "123 Technology Drive",
        "Suite 200",
        "Business District, ST 12345"
      ]
    },
    {
      title: "Phone Numbers",
      details: [
        "Main Office: (123) 456-7890",
        "Emergency: (123) 456-7890",
        "Fax: (123) 456-7891"
      ]
    },
    {
      title: "Email Addresses",
      details: [
        "info@lightcurrentpro.com",
        "support@lightcurrentpro.com",
        "emergency@lightcurrentpro.com"
      ]
    }
  ];

  const serviceAreas = [
    "Downtown Business District",
    "Industrial Park Zone", 
    "Medical Center Complex",
    "Educational District",
    "Residential Communities",
    "Surrounding Metropolitan Areas"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Service Only" },
    { day: "Emergency Service", hours: "Available 24/7" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact LightCurrent Pro
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to discuss your light current system needs? Get in touch with our expert team 
              for a free consultation and detailed quote tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="tel:+1234567890">Call (123) 456-7890</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="mailto:info@lightcurrentpro.com">Email Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-red-800">
                    24/7 Emergency Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">
                    System failure or security emergency? We provide 24/7 emergency response 
                    for critical system failures and urgent repairs.
                  </p>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="tel:+1234567890">Emergency: (123) 456-7890</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium text-center">
                      Emergency services available 24 hours a day, 7 days a week
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    We proudly serve the following areas with professional light current 
                    system installations and maintenance services:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>Special Service Areas:</strong> We also provide services to 
                      surrounding areas. Contact us to confirm service availability in your location.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Stop by our office to discuss your project in person or schedule an on-site consultation.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Office Location</h3>
              <p className="mb-4">
                123 Technology Drive, Suite 200<br />
                Business District, ST 12345
              </p>
              <p className="text-sm">
                Interactive map integration would be implemented here<br />
                showing our office location and service areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust LightCurrent Pro 
            for their security, safety, and networking needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-blue-100">24-hour response time for all inquiries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Expert Installation</h3>
              <p className="text-blue-100">Certified technicians with 15+ years experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-blue-100">2-year warranty on all installations</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8">
              <Link href="#contact-form">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}