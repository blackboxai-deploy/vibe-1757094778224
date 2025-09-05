import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "CCTV Systems", href: "/services/cctv" },
    { name: "Fire Alarm Systems", href: "/services/fire-alarm" },
    { name: "Data Networks", href: "/services/data-network" },
    { name: "Maintenance", href: "/services" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">LC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">LightCurrent</span>
                <span className="text-blue-400 font-semibold"> Pro</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional light current systems installation and maintenance. 
              Securing your property with cutting-edge CCTV, fire alarm, and data network solutions.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-semibold text-white">24/7 Emergency:</span>
                <Link href="tel:+1234567890" className="ml-2 text-blue-400 hover:text-blue-300">
                  (123) 456-7890
                </Link>
              </p>
              <p className="flex items-center">
                <span className="font-semibold text-white">Email:</span>
                <Link href="mailto:info@lightcurrentpro.com" className="ml-2 text-blue-400 hover:text-blue-300">
                  info@lightcurrentpro.com
                </Link>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
              <p><span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM</p>
              <p><span className="font-medium">Sunday:</span> Emergency Only</p>
              <p className="mt-4 text-blue-400 font-medium">Emergency Services Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} LightCurrent Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;