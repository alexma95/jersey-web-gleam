import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Exclusive Bonus Content
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Your
            <span className="text-orange-400 block">TCAP Success Portal</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Access exclusive multimedia content, interactive games, and downloadable resources 
            designed to help Tennessee students excel on their TCAP assessments.
          </p>
          
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="font-medium">
              🎉 This exclusive resource is available to all readers of our TCAP Study Guide book
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/videos">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Start Learning
              </Button>
            </Link>
            <Link to="/games">
              <Button variant="outline" className="border-white hover:bg-white px-8 py-3 text-lg text-slate-950">
                Play Games
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;