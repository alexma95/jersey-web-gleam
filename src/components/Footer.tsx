
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white">TCAP</div>
              <div className="text-xl font-medium text-orange-500 ml-2">Success Portal</div>
            </div>
            <p className="text-gray-300">
              Empowering Tennessee students to achieve their best on TCAP assessments through 
              comprehensive study resources and interactive learning experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/videos" className="text-gray-300 hover:text-white transition-colors">Video Lessons</a></li>
              <li><a href="/audio" className="text-gray-300 hover:text-white transition-colors">Audio Resources</a></li>
              <li><a href="/games" className="text-gray-300 hover:text-white transition-colors">Study Games</a></li>
              <li><a href="/downloads" className="text-gray-300 hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="text-gray-300 mb-2">
              Need help? Contact us for technical support or content questions.
            </p>
            <p className="text-orange-400 font-medium">
              support@tcapstudyguides.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 TCAP Study Guides. All rights reserved. | Tennessee Assessment Success Portal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
