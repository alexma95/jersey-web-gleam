
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, AlertCircle } from "lucide-react";

const AssessmentSchedule = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Assessment Schedule</h2>
          <p className="text-xl text-gray-600">Important dates and testing windows for the 2024-2025 school year</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                Spring Testing Window
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-lg">English Language Arts</h4>
                <p className="text-gray-600">April 15 - May 31, 2025</p>
                <p className="text-sm text-gray-500">Grades 3-11</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-lg">Mathematics</h4>
                <p className="text-gray-600">April 15 - May 31, 2025</p>
                <p className="text-sm text-gray-500">Grades 3-11</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                Testing Time Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Grades 3-5</span>
                  <span className="text-gray-600">90 minutes per session</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Grades 6-8</span>
                  <span className="text-gray-600">90 minutes per session</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Grades 9-11</span>
                  <span className="text-gray-600">90 minutes per session</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-8 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Important Notes</h4>
                <ul className="space-y-1 text-amber-700">
                  <li>• Students with disabilities may receive extended time accommodations</li>
                  <li>• Make-up testing available throughout the testing window</li>
                  <li>• Contact your school's test coordinator for specific scheduling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentSchedule;
