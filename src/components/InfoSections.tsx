
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BarChart, CheckCircle, FileText } from "lucide-react";

const InfoSections = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About NJSLA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The New Jersey Student Learning Assessments measure student progress toward college and career readiness
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Purpose</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Measure student achievement and growth in English Language Arts and Mathematics</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Grades Tested</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Grades 3-11 in English Language Arts and Mathematics</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Aligned with New Jersey Student Learning Standards</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-lg">Format</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Computer-based assessments with various question types</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
