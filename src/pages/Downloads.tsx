import { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BONUS_FOLDER_URL =
  "https://drive.google.com/drive/folders/1qS84B_WDmhsHKsDer4iD6Ko7tUuzZRpk?usp=drive_link";

const Downloads = () => {
  const [selectedGrade, setSelectedGrade] = useState("3");
  const grades = [3, 4, 5];

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
              Available for Grades 3 through 5.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedGrade} onValueChange={setSelectedGrade} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {grades.map((grade) => (
                <TabsTrigger key={grade} value={grade.toString()} className="text-sm font-medium">
                  Grade {grade}
                </TabsTrigger>
              ))}
            </TabsList>

            {grades.map((grade) => (
              <TabsContent key={grade} value={grade.toString()} className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                        Grade {grade} NJSLA Bonus Folder
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Access all printable materials and study guides for Grade {grade} NJSLA preparation.
                      </p>
                    </div>
                    <Button asChild size="lg">
                      <a href={BONUS_FOLDER_URL} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Bonus Folder
                      </a>
                    </Button>
                  </div>
                  <div className="p-6">
                    <a
                      href={BONUS_FOLDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold py-12 rounded-xl transition-colors"
                    >
                      Click here to access the Grade {grade} Bonus Folder on Google Drive →
                    </a>
                  </div>
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
