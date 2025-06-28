
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, BookOpen, Video } from "lucide-react";

const Resources = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-xl text-gray-600">Everything you need to prepare for and understand NJSLA</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Practice Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Interactive practice tests for all grade levels in ELA and Mathematics</p>
              <Button className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Access Practice Tests
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-6 h-6 text-green-600" />
                Study Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Comprehensive study guides and test preparation materials</p>
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Guides
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-6 h-6 text-purple-600" />
                Video Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Step-by-step video guides for students, parents, and educators</p>
              <Button variant="outline" className="w-full">
                <Video className="w-4 h-4 mr-2" />
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>For Parents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Understanding your child's score report</li>
                <li>• How to support your child at home</li>
                <li>• Frequently asked questions</li>
                <li>• Parent guide to NJSLA</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>For Educators</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Test administration procedures</li>
                <li>• Accommodations and accessibility</li>
                <li>• Professional development resources</li>
                <li>• Data analysis and reporting tools</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
