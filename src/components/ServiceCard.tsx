import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  href: string;
  accentColor?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  image, 
  imageAlt, 
  href, 
  accentColor = "blue" 
}: ServiceCardProps) => {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    red: "border-red-500 bg-red-50",
    green: "border-green-500 bg-green-50",
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border-2 text-white ${colorClasses[accentColor as keyof typeof colorClasses]}`}>
            Professional Installation
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href={href}>Learn More & Get Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;