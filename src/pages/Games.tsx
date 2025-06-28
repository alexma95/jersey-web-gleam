import { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GameCard from "@/components/games/GameCard";
import { Button } from "@/components/ui/button";
import { Filter, Search, Grid, List } from "lucide-react";

const Games = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);

  const games = [
    {
      title: "Vocabulary Match Masters",
      description: "Master vocabulary through engaging matching games with New Jersey-specific terms and concepts.",
      icon: "📚",
      path: "/games/vocabulary-match",
      difficulty: "Easy" as const,
      subjects: ["ELA", "Language"],
      estimatedTime: "15-20 min",
      players: "Single Player",
      featured: true
    },
    {
      title: "Math Racing Challenge",
      description: "Race against time solving math problems with increasing difficulty levels and instant feedback.",
      icon: "🏎️",
      path: "/games/math-racing",
      difficulty: "Medium" as const,
      subjects: ["Math"],
      estimatedTime: "10-15 min",
      players: "Single Player",
      featured: true
    },
    {
      title: "Science Lab Explorer",
      description: "Conduct virtual experiments and discover scientific principles through interactive simulations.",
      icon: "🧪",
      path: "/games/science-lab",
      difficulty: "Medium" as const,
      subjects: ["Science"],
      estimatedTime: "20-25 min",
      players: "Single Player"
    },
    {
      title: "Reading Adventure Quest",
      description: "Embark on reading comprehension adventures with story-based challenges and critical thinking.",
      icon: "📖",
      path: "/games/reading-adventure",
      difficulty: "Easy" as const,
      subjects: ["ELA"],
      estimatedTime: "25-30 min",
      players: "Single Player"
    },
    {
      title: "Math Facts Speedway",
      description: "Practice fundamental math facts with engaging racing themes and progressive difficulty.",
      icon: "🏁",
      path: "/games/math-facts-speedway",
      difficulty: "Easy" as const,
      subjects: ["Math"],
      estimatedTime: "10-15 min",
      players: "Single Player",
      featured: true
    },
    {
      title: "Sentence Builder Pro",
      description: "Construct proper sentences while learning grammar, punctuation, and writing mechanics.",
      icon: "✏️",
      path: "/games/sentence-builder",
      difficulty: "Medium" as const,
      subjects: ["ELA", "Language"],
      estimatedTime: "15-20 min",
      players: "Single Player"
    },
    {
      title: "Reading Detective",
      description: "Solve mysteries using reading comprehension skills, context clues, and analytical thinking.",
      icon: "🔍",
      path: "/games/reading-detective",
      difficulty: "Hard" as const,
      subjects: ["ELA"],
      estimatedTime: "20-30 min",
      players: "Single Player",
      featured: true
    }
  ];

  const filterCategories = [
    { id: "all", name: "All Games", count: games.length },
    { id: "math", name: "Math", count: games.filter(g => g.subjects.some(s => s.toLowerCase().includes('math'))).length },
    { id: "ela", name: "ELA", count: games.filter(g => g.subjects.some(s => s.toLowerCase().includes('ela'))).length },
    { id: "science", name: "Science", count: games.filter(g => g.subjects.some(s => s.toLowerCase().includes('science'))).length },
    { id: "language", name: "Language", count: games.filter(g => g.subjects.some(s => s.toLowerCase().includes('language'))).length },
  ];

  const filteredGames = games.filter(game => {
    const matchesFilter = filter === "all" || 
      game.subjects.some(subject => subject.toLowerCase().includes(filter));
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-primary-200">
              <span>Home</span>
              <span>/</span>
              <span className="text-white">Study Games</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              Interactive Study Games
            </h1>
            <p className="text-lg lg:text-xl text-primary-100 mb-8">
              Engage with our collection of educational games designed to make NJSLA preparation 
              both effective and enjoyable. Each game targets specific skills and provides 
              immediate feedback to accelerate your learning.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{games.length} Games Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>All NJSLA Subjects Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Instant Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category.id)}
                  className={`transition-all duration-200 ${
                    filter === category.id 
                      ? "bg-primary-600 hover:bg-primary-700" 
                      : "hover:bg-primary-50 hover:text-primary-700 hover:border-primary-300"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-black/10 px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-3 bg-gray-200 rounded mb-4 w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div className="text-lg text-gray-600">
                  {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''} found
                </div>
                <div className="text-sm text-gray-500">
                  {filter !== 'all' && `Filtered by: ${filterCategories.find(c => c.id === filter)?.name}`}
                </div>
              </div>

              <div className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}>
                {filteredGames.map((game, index) => (
                  <div
                    key={game.title}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <GameCard game={game} />
                  </div>
                ))}
              </div>

              {filteredGames.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🎮</div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    No games found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria.
                  </p>
                  <Button onClick={() => { setFilter("all"); setSearchTerm(""); }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;