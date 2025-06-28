import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Clock, BookOpen } from "lucide-react";

const Videos = () => {
  const [selectedGrade, setSelectedGrade] = useState("3");

  // Replace these with your actual Google Drive folder IDs
  const gradeFolders = {
    "3": "YOUR_GRADE_3_FOLDER_ID",
    "4": "1JJroQZ8V0gVaH8cbvIYzkYyNBhp7I60d", 
    "5": "YOUR_GRADE_5_FOLDER_ID",
    "6": "YOUR_GRADE_6_FOLDER_ID",
    "7": "YOUR_GRADE_7_FOLDER_ID",
    "8": "YOUR_GRADE_8_FOLDER_ID",
    "9": "YOUR_GRADE_9_FOLDER_ID",
    "10": "YOUR_GRADE_10_FOLDER_ID",
    "11": "YOUR_GRADE_11_FOLDER_ID"
  };

  const videosByGrade = {
    "3": [
      { title: "ELA Fundamentals - Reading & Writing", duration: "18 min", subject: "ELA" },
      { title: "Math Basics - Operations & Fractions", duration: "15 min", subject: "Math" },
      { title: "Science - Matter & Energy", duration: "20 min", subject: "Science" }
    ],
    "4": [
      { title: "Reading Comprehension Strategies", duration: "22 min", subject: "ELA" },
      { title: "Multiplication & Division Mastery", duration: "16 min", subject: "Math" },
      { title: "Earth Systems & Weather", duration: "18 min", subject: "Science" }
    ],
    "5": [
      { title: "Literary Analysis & Writing", duration: "25 min", subject: "ELA" },
      { title: "Decimals, Fractions & Geometry", duration: "24 min", subject: "Math" },
      { title: "Life Science & Ecosystems", duration: "22 min", subject: "Science" }
    ],
    "6": [
      { title: "Advanced Reading & Research", duration: "28 min", subject: "ELA" },
      { title: "Ratios, Proportions & Statistics", duration: "26 min", subject: "Math" },
      { title: "Physical Science Foundations", duration: "24 min", subject: "Science" }
    ],
    "7": [
      { title: "Argumentative Writing & Analysis", duration: "30 min", subject: "ELA" },
      { title: "Pre-Algebra Concepts", duration: "28 min", subject: "Math" },
      { title: "Chemistry & Physics Basics", duration: "26 min", subject: "Science" }
    ],
    "8": [
      { title: "Complex Text Analysis", duration: "32 min", subject: "ELA" },
      { title: "Algebra Fundamentals", duration: "30 min", subject: "Math" },
      { title: "Advanced Physical Science", duration: "28 min", subject: "Science" }
    ],
    "9": [
      { title: "Literature & Composition", duration: "35 min", subject: "ELA" },
      { title: "Algebra I Mastery", duration: "32 min", subject: "Math" },
      { title: "Biology Foundations", duration: "30 min", subject: "Science" }
    ],
    "10": [
      { title: "Advanced Literary Analysis", duration: "38 min", subject: "ELA" },
      { title: "Geometry Concepts", duration: "35 min", subject: "Math" },
      { title: "Chemistry Principles", duration: "32 min", subject: "Science" }
    ],
    "11": [
      { title: "College-Level Writing", duration: "40 min", subject: "ELA" },
      { title: "Algebra II & Trigonometry", duration: "38 min", subject: "Math" },
      { title: "Advanced Biology & Physics", duration: "35 min", subject: "Science" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-primary-200">
              <span>Home</span>
              <span>/</span>
              <span className="text-white">Video Lessons</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Video Lessons
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 mb-8">
              Expert-led video tutorials covering all NJSLA subjects organized by grade level.
              Each lesson provides clear explanations and practical examples for New Jersey students.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedGrade} onValueChange={setSelectedGrade} className="w-full">
            <TabsList className="grid w-full grid-cols-9 mb-8 overflow-x-auto">
              {[3, 4, 5, 6, 7, 8, 9, 10, 11].map((grade) => (
                <TabsTrigger key={grade} value={grade.toString()} className="text-sm font-medium whitespace-nowrap">
                  Grade {grade}
                </TabsTrigger>
              ))}
            </TabsList>

            {[3, 4, 5, 6, 7, 8, 9, 10, 11].map((grade) => (
              <TabsContent key={grade} value={grade.toString()} className="space-y-8">
                {/* Google Drive Embed */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                      Grade {grade} NJSLA Video Library
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Access all video lessons for Grade {grade} NJSLA preparation
                    </p>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://drive.google.com/embeddedfolderview?id=${gradeFolders[grade.toString()]}&view=list`}
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      title={`Grade ${grade} NJSLA Videos`}
                    />
                  </div>
                </div>

                {/* Video List Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videosByGrade[grade.toString()]?.map((video, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                            <Play className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                              {video.subject}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {video.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {video.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;