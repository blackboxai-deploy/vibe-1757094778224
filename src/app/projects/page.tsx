import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Corporate Office Complex - Downtown",
      category: "CCTV & Data Network",
      description: "Complete security and networking infrastructure for 15-story office building including 80 IP cameras, fiber backbone, and wireless coverage throughout.",
      image: "https://placehold.co/600x400?text=Modern+corporate+office+building+with+professional+CCTV+security+cameras+and+network+infrastructure",
      imageAlt: "Modern corporate office building with professional CCTV security cameras and network infrastructure",
      details: [
        "80 HD IP Cameras with night vision",
        "Fiber optic backbone network",
        "Enterprise Wi-Fi coverage",
        "Central monitoring station",
        "2-year maintenance contract"
      ],
      completion: "2023"
    },
    {
      title: "Manufacturing Facility Fire Safety",
      category: "Fire Alarm System", 
      description: "Comprehensive fire alarm system installation for 50,000 sq ft manufacturing facility with specialized heat detection for industrial processes.",
      image: "https://placehold.co/600x400?text=Industrial+manufacturing+facility+with+comprehensive+fire+alarm+system+and+safety+equipment",
      imageAlt: "Industrial manufacturing facility with comprehensive fire alarm system and safety equipment",
      details: [
        "Heat & smoke detection zones",
        "Voice evacuation system",
        "Emergency lighting throughout",
        "Central control panel",
        "Code compliance certification"
      ],
      completion: "2023"
    },
    {
      title: "Medical Center Campus Network",
      category: "Data Network Infrastructure",
      description: "Hospital-grade network infrastructure supporting critical medical systems across 3-building healthcare campus with redundant connectivity.",
      image: "https://placehold.co/600x400?text=Medical+center+campus+with+secure+network+infrastructure+and+data+cabling+for+healthcare+systems",
      imageAlt: "Medical center campus with secure network infrastructure and data cabling for healthcare systems",
      details: [
        "HIPAA-compliant network design",
        "Redundant fiber connections",
        "Medical-grade Wi-Fi",
        "24/7 monitoring capability",
        "Emergency backup systems"
      ],
      completion: "2023"
    }
  ];

  const projectCategories = [
    {
      title: "Commercial Security",
      count: 150,
      description: "CCTV and access control systems for business facilities"
    },
    {
      title: "Fire Safety Systems",
      count: 85,
      description: "Fire alarm and emergency notification installations"
    },
    {
      title: "Network Infrastructure", 
      count: 120,
      description: "Data cabling and wireless network implementations"
    },
    {
      title: "Residential Projects",
      count: 95,
      description: "Home security and automation systems"
    }
  ];

  const clientTestimonials = [
    {
      project: "Office Complex Security",
      client: "Jennifer Martinez, Property Manager",
      text: "The CCTV system has dramatically improved our building security. The mobile app access lets me monitor the property remotely, and the image quality is outstanding.",
      rating: 5
    },
    {
      project: "Factory Fire Alarm",
      client: "Robert Chen, Safety Director", 
      text: "Professional installation that exceeded all safety requirements. The team worked around our production schedule and completed everything on time.",
      rating: 5
    },
    {
      project: "Hospital Network Upgrade",
      client: "Dr. Sarah Williams, IT Director",
      text: "Critical infrastructure upgrade completed with zero downtime. The new network supports all our medical systems flawlessly.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our successful installations across various industries. From small businesses 
              to large commercial facilities, see how we've helped clients achieve their security, 
              safety, and connectivity goals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">500+</div>
                <div className="text-sm text-blue-200">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
                <div className="text-sm text-blue-200">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighting some of our recent successful installations that demonstrate 
              our expertise across different industries and project scales.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="h-64 lg:h-full">
                      <img 
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm">Completed {project.completion}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Project Highlights:</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="text-blue-500 font-bold mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans multiple industries and project types, 
              showcasing our versatility and expertise across all light current systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{category.count}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our clients about their project experiences and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.client}</p>
                    <p className="text-sm text-blue-600">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, each with unique requirements 
              and regulatory considerations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              "Healthcare",
              "Education", 
              "Manufacturing",
              "Retail",
              "Hospitality",
              "Government",
              "Financial",
              "Technology",
              "Transportation",
              "Real Estate",
              "Non-Profit",
              "Residential"
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {industry.charAt(0)}
                  </span>
                </div>
                <h3 className="text-blue-100 font-medium">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let us help you design and implement 
            the perfect light current solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}