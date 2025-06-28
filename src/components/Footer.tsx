
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NJSLA</h3>
            <p className="text-gray-300 mb-4">
              New Jersey Student Learning Assessments - Supporting student success through comprehensive assessment.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Practice Tests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Test Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">For Students</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Parents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Educators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(609) 292-4469</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>assessment@doe.nj.gov</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Trenton, NJ</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <a href="#" className="hover:text-white transition-colors">NJ DOE Website</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 New Jersey Department of Education. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors mr-4">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
