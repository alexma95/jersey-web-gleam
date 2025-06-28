
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            NJSLA
            <span className="block text-amber-400">New Jersey Student Learning Assessments</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Supporting student success through comprehensive assessment and meaningful feedback
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <BookOpen className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Students</h3>
            <p className="text-blue-100">Practice tests, study guides, and test-taking strategies</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Parents</h3>
            <p className="text-blue-100">Understanding results and supporting your child</p>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <GraduationCap className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">For Educators</h3>
            <p className="text-blue-100">Assessment tools and professional resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
