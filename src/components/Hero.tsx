import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 lg:py-28">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Professional Light Current Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure Your Property with 
              <span className="text-blue-300"> Expert</span>
              <br />
              System Installation
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Professional CCTV, fire alarm, and data network installations. 
              Protecting what matters most with cutting-edge technology and expert craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 text-white hover:bg-blue-700 px-8">
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">500+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">24/7</div>
                <div className="text-sm text-blue-200">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://placehold.co/600x500?text=Professional+technician+installing+modern+CCTV+security+system+in+modern+office+environment"
                  alt="Professional technician installing modern CCTV security system in modern office environment"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold">Certified Installers</div>
                    <div className="text-sm text-gray-600">Licensed & Insured</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Year</div>
                  <div className="text-sm">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;