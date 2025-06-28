import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, BookOpen, Calculator } from "lucide-react";

const Downloads = () => {
  const [selectedGrade, setSelectedGrade] = useState("3");

  // Replace these with your actual Google Drive folder IDs
  const gradeFolders = {
    "3": "YOUR_GRADE_3_DOWNLOADS_FOLDER_ID",
    "4": "1HOFR9lP4HuJfR5Yw61gZpDBKc0FeIr8A", 
    "5": "YOUR_GRADE_5_DOWNLOADS_FOLDER_ID",
    "6": "YOUR_GRADE_6_DOWNLOADS_FOLDER_ID",
    "7": "YOUR_GRADE_7_DOWNLOADS_FOLDER_ID",
    "8": "YOUR_GRADE_8_DOWNLOADS_FOLDER_ID",
    "9": "YOUR_GRADE_9_DOWNLOADS_FOLDER_ID",
    "10": "YOUR_GRADE_10_DOWNLOADS_FOLDER_ID",
    "11": "YOUR_GRADE_11_DOWNLOADS_FOLDER_ID"
  };

  const downloadsByGrade = {
    "3": [
      { title: "ELA Practice Worksheets", type: "PDF", subject: "ELA", size: "2.1 MB" },
      { title: "Math Operations Practice", type: "PDF", subject: "Math", size: "1.9 MB" },
      { title: "Science Study Guide", type: "PDF", subject: "Science", size: "2.8 MB" }
    ],
    "4": [
      { title: "Reading Comprehension Pack", type: "PDF", subject: "ELA", size: "2.5 MB" },
      { title: "Multiplication & Division Sheets", type: "PDF", subject: "Math", size: "2.2 MB" },
      { title: "Earth Science Reference", type: "PDF", subject: "Science", size: "3.1 MB" }
    ],
    "5": [
      { title: "Writing Skills Workbook", type: "PDF", subject: "ELA", size: "3.2 MB" },
      { title: "Fractions & Decimals Practice", type: "PDF", subject: "Math", size: "2.8 MB" },
      { title: "Life Science Materials", type: "PDF", subject: "Science", size: "3.5 MB" }
    ],
    "6": [
      { title: "Literary Analysis Guide", type: "PDF", subject: "ELA", size: "3.8 MB" },
      { title: "Ratios & Statistics Workbook", type: "PDF", subject: "Math", size: "3.2 MB" },
      { title: "Physical Science Labs", type: "PDF", subject: "Science", size: "4.1 MB" }
    ],
    "7": [
      { title: "Argumentative Writing Guide", type: "PDF", subject: "ELA", size: "4.2 MB" },
      { title: "Pre-Algebra Problem Sets", type: "PDF", subject: "Math", size: "3.8 MB" },
      { title: "Chemistry Study Materials", type: "PDF", subject: "Science", size: "4.5 MB" }
    ],
    "8": [
      { title: "Advanced ELA Practice", type: "PDF", subject: "ELA", size: "4.8 MB" },
      { title: "Algebra Fundamentals", type: "PDF", subject: "Math", size: "4.2 MB" },
      { title: "Physics Reference Guide", type: "PDF", subject: "Science", size: "5.1 MB" }
    ],
    "9": [
      { title: "Literature Analysis Workbook", type: "PDF", subject: "ELA", size: "5.2 MB" },
      { title: "Algebra I Practice Tests", type: "PDF", subject: "Math", size: "4.8 MB" },
      { title: "Biology Study Guide", type: "PDF", subject: "Science", size: "5.5 MB" }
    ],
    "10": [
      { title: "Advanced Writing Handbook", type: "PDF", subject: "ELA", size: "5.8 MB" },
      { title: "Geometry Problem Sets", type: "PDF", subject: "Math", size: "5.2 MB" },
      { title: "Chemistry Practice Materials", type: "PDF", subject: "Science", size: "6.1 MB" }
    ],
    "11": [
      { title: "College Prep ELA Guide", type: "PDF", subject: "ELA", size: "6.2 MB" },
      { title: "Advanced Math Solutions", type: "PDF", subject: "Math", size: "5.8 MB" },
      { title: "Advanced Science Materials", type: "PDF", subject: "Science", size: "6.8 MB" }
    ]
  };

  const getIcon = (subject: string) => {
    switch (subject) {
      case "Math": return <Calculator className="w-6 h-6" />;
      case "ELA": return <BookOpen className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-purple-200">
              <span>Home</span>
              <span>/</span>
              <span className="text-white">Downloads</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Study Downloads
            </h1>
            <p className="text-lg lg:text-xl text-purple-100 mb-8">
              Printable worksheets, study guides, and reference materials for offline NJSLA practice.
              Download and print materials for each grade level.
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
                      Grade {grade} NJSLA Downloads
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Download printable materials and study guides for Grade {grade} NJSLA preparation
                    </p>
                  </div>
                  <div className="aspect-video">
                    <iframe
                      src={`https://drive.google.com/embeddedfolderview?id=${gradeFolders[grade.toString()]}&view=list`}
                      className="w-full h-full border-0"
                      title={`Grade ${grade} NJSLA Downloads`}
                    />
                  </div>
                </div>

                {/* Downloads List Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {downloadsByGrade[grade.toString()]?.map((download, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                            {getIcon(download.subject)}
                          </div>
                          <div>
                            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded-full">
                              {download.subject}
                            </span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {download.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>{download.type}</span>
                          <span>{download.size}</span>
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

export default Downloads;