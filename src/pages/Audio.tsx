import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headphones, Clock, Volume2 } from "lucide-react";

const Audio = () => {
  const [selectedGrade, setSelectedGrade] = useState("3");

  // Replace these with your actual Google Drive folder IDs
  const gradeFolders = {
    "3": "YOUR_GRADE_3_AUDIO_FOLDER_ID",
    "4": "1HuaN5V21oqD7J8cMHAb-JrU3ZFVDxhPp", 
    "5": "YOUR_GRADE_5_AUDIO_FOLDER_ID",
    "6": "YOUR_GRADE_6_AUDIO_FOLDER_ID",
    "7": "YOUR_GRADE_7_AUDIO_FOLDER_ID",
    "8": "YOUR_GRADE_8_AUDIO_FOLDER_ID",
    "9": "YOUR_GRADE_9_AUDIO_FOLDER_ID",
    "10": "YOUR_GRADE_10_AUDIO_FOLDER_ID",
    "11": "YOUR_GRADE_11_AUDIO_FOLDER_ID"
  };

  const audioByGrade = {
    "3": [
      { title: "ELA Reading Strategies", duration: "15 min", subject: "ELA" },
      { title: "Math Facts & Operations", duration: "12 min", subject: "Math" },
      { title: "Science Concepts Audio", duration: "18 min", subject: "Science" }
    ],
    "4": [
      { title: "Reading Comprehension Audio", duration: "20 min", subject: "ELA" },
      { title: "Multiplication Mastery", duration: "14 min", subject: "Math" },
      { title: "Earth Science Lessons", duration: "22 min", subject: "Science" }
    ],
    "5": [
      { title: "Writing Skills Audio Guide", duration: "25 min", subject: "ELA" },
      { title: "Fractions & Decimals", duration: "18 min", subject: "Math" },
      { title: "Life Science Podcast", duration: "24 min", subject: "Science" }
    ],
    "6": [
      { title: "Literary Analysis Audio", duration: "28 min", subject: "ELA" },
      { title: "Ratios & Proportions", duration: "20 min", subject: "Math" },
      { title: "Physical Science Audio", duration: "26 min", subject: "Science" }
    ],
    "7": [
      { title: "Argumentative Writing", duration: "30 min", subject: "ELA" },
      { title: "Pre-Algebra Concepts", duration: "25 min", subject: "Math" },
      { title: "Chemistry Basics Audio", duration: "28 min", subject: "Science" }
    ],
    "8": [
      { title: "Advanced ELA Skills", duration: "32 min", subject: "ELA" },
      { title: "Algebra Fundamentals", duration: "28 min", subject: "Math" },
      { title: "Physics Concepts", duration: "30 min", subject: "Science" }
    ],
    "9": [
      { title: "Literature Analysis", duration: "35 min", subject: "ELA" },
      { title: "Algebra I Mastery", duration: "30 min", subject: "Math" },
      { title: "Biology Audio Lessons", duration: "32 min", subject: "Science" }
    ],
    "10": [
      { title: "Advanced Writing", duration: "38 min", subject: "ELA" },
      { title: "Geometry Concepts", duration: "32 min", subject: "Math" },
      { title: "Chemistry Principles", duration: "35 min", subject: "Science" }
    ],
    "11": [
      { title: "College Prep ELA", duration: "40 min", subject: "ELA" },
      { title: "Advanced Mathematics", duration: "35 min", subject: "Math" },
      { title: "Advanced Science", duration: "38 min", subject: "Science" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-green-200">
              <span>Home</span>
              <span>/</span>
              <span className="text-white">Audio Resources</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Audio Resources
            </h1>
            <p className="text-lg lg:text-xl text-green-100 mb-8">
              Listen and learn with our comprehensive audio lessons, perfect for on-the-go studying
              and auditory learners. Available for all NJSLA grade levels.
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
                      Grade {grade} NJSLA Audio Library
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Stream or download audio lessons for Grade {grade} NJSLA preparation
                    </p>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://drive.google.com/embeddedfolderview?id=${gradeFolders[grade.toString()]}&view=list`}
                      className="w-full h-full border-0"
                      title={`Grade ${grade} NJSLA Audio`}
                    />
                  </div>
                </div>

                {/* Audio List Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {audioByGrade[grade.toString()]?.map((audio, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <Headphones className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                              {audio.subject}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {audio.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Volume2 className="w-4 h-4 mr-1" />
                          {audio.duration}
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

export default Audio;