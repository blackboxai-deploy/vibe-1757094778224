import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "Lead Systems Engineer",
      experience: "15+ years",
      specialty: "CCTV & Security Systems",
      image: "https://placehold.co/300x300?text=Professional+portrait+of+male+systems+engineer+in+business+attire+with+technical+background",
      imageAlt: "Professional portrait of male systems engineer in business attire with technical background"
    },
    {
      name: "Sarah Chen",
      position: "Fire Safety Specialist", 
      experience: "12+ years",
      specialty: "Fire Alarm Systems",
      image: "https://placehold.co/300x300?text=Professional+portrait+of+female+fire+safety+specialist+in+safety+equipment+and+business+attire",
      imageAlt: "Professional portrait of female fire safety specialist in safety equipment and business attire"
    },
    {
      name: "David Thompson",
      position: "Network Infrastructure Lead",
      experience: "18+ years", 
      specialty: "Data Networks & Cabling",
      image: "https://placehold.co/300x300?text=Professional+portrait+of+male+network+engineer+with+server+equipment+background",
      imageAlt: "Professional portrait of male network engineer with server equipment background"
    }
  ];

  const certifications = [
    "Licensed Electrical Contractors",
    "NICET Fire Alarm Certification",
    "BICSI Network Cabling Certification", 
    "UL Listed Equipment Installation",
    "OSHA Safety Compliance",
    "Insurance & Bonding Coverage"
  ];

  const companyValues = [
    {
      title: "Safety First",
      description: "Every installation prioritizes the safety of people and property above all else."
    },
    {
      title: "Quality Workmanship", 
      description: "We use only premium equipment and follow industry best practices for lasting results."
    },
    {
      title: "Customer Focus",
      description: "Your specific needs drive our approach, ensuring solutions that fit perfectly."
    },
    {
      title: "Continuous Innovation",
      description: "We stay current with emerging technologies to offer the most advanced solutions."
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
                About LightCurrent Pro
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                For over 15 years, we've been the trusted partner for businesses and property owners 
                seeking reliable light current solutions. Our expert team specializes in CCTV security, 
                fire alarm systems, and data network infrastructure.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">500+</div>
                  <div className="text-sm text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">15+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-1">98%</div>
                  <div className="text-sm text-blue-200">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Professional+team+of+light+current+technicians+with+safety+equipment+at+commercial+installation+site"
                alt="Professional team of light current technicians with safety equipment at commercial installation site"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Built on expertise, driven by innovation, committed to excellence.
              </p>
            </div>

            <div className="prose prose-lg mx-auto text-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded on Excellence</h3>
                  <p className="mb-6">
                    LightCurrent Pro was established in 2009 with a simple mission: to provide 
                    superior light current system installations that protect what matters most. 
                    What started as a small team of dedicated technicians has grown into a 
                    leading provider of security, safety, and networking solutions.
                  </p>
                  <p>
                    Our founders recognized the growing need for integrated technology solutions 
                    that could keep pace with rapidly evolving security and connectivity requirements. 
                    This vision led to our specialization in three critical areas: CCTV security 
                    systems, fire alarm systems, and data network infrastructure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment to Quality</h3>
                  <p className="mb-6">
                    Every project we undertake reflects our commitment to quality workmanship 
                    and customer satisfaction. We believe that proper installation is just as 
                    important as the technology itself, which is why we invest heavily in 
                    training and certification for our entire team.
                  </p>
                  <p>
                    Today, we serve hundreds of clients across commercial, industrial, educational, 
                    and residential sectors, maintaining our reputation for reliability, 
                    professionalism, and technical excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the certified professionals who bring years of experience and 
              specialized expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {member.name}
                    </CardTitle>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p><span className="font-semibold">Experience:</span> {member.experience}</p>
                      <p><span className="font-semibold">Specialty:</span> {member.specialty}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and 
              every project we complete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Our team maintains the highest industry certifications and credentials 
              to ensure professional, compliant installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-blue-100 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              "To provide superior light current system solutions that protect, connect, 
              and empower our clients through innovative technology, expert installation, 
              and unwavering commitment to safety and reliability."
            </p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means for You</h3>
              <p className="text-gray-600 leading-relaxed">
                When you choose LightCurrent Pro, you're partnering with a team that understands 
                the critical importance of reliable security, safety, and connectivity systems. 
                We don't just install equipment – we build relationships based on trust, 
                quality, and ongoing support that keeps your systems performing at their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work with the Experts?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the LightCurrent Pro difference. Contact us today to discuss 
            your light current system needs with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}