
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesGrid = () => {
  const features = [
    {
      title: "Video Lessons",
      description: "Expert-led video tutorials covering all TCAP subjects with clear explanations and examples.",
      icon: "🎥",
      link: "/videos",
      color: "border-blue-200 hover:border-blue-400"
    },
    {
      title: "Audio Resources",
      description: "Listen and learn with our comprehensive audio lessons, perfect for on-the-go studying.",
      icon: "🎧",
      link: "/audio",
      color: "border-green-200 hover:border-green-400"
    },
    {
      title: "Interactive Games",
      description: "Engaging educational games that make learning fun while reinforcing key concepts.",
      icon: "🎮",
      link: "/games",
      color: "border-orange-200 hover:border-orange-400"
    },
    {
      title: "Study Downloads",
      description: "Printable worksheets, study guides, and reference materials for offline practice.",
      icon: "📚",
      link: "/downloads",
      color: "border-purple-200 hover:border-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of learning resources designed specifically for TCAP preparation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="block group">
              <Card className={`h-full transition-all duration-300 ${feature.color} group-hover:shadow-lg transform group-hover:-translate-y-1`}>
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
