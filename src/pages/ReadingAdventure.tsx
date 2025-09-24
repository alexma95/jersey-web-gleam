
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Book, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { readingAdventureStories, ReadingAdventureChapter } from "@/data/readingAdventureStories";

interface GameState {
  currentChapter: string;
  score: number;
  questionsAnswered: number;
  hintsUsed: number;
  storyProgress: string[];
  gameComplete: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
  hintText: string;
}

const ReadingAdventure = () => {
  const [selectedStory, setSelectedStory] = useState<string>("");
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    currentChapter: "chapter1",
    score: 0,
    questionsAnswered: 0,
    hintsUsed: 0,
    storyProgress: [],
    gameComplete: false,
    selectedAnswer: null,
    showResult: false,
    hintText: ""
  });
  const stories = readingAdventureStories;
  const HINT_LIMIT = 2;

  const getCurrentChapter = (): ReadingAdventureChapter | null => {
    if (!selectedStory || !gameStarted) return null;
    const story = stories[selectedStory as keyof typeof stories];
    if (!story) return null;
    return story.chapters[gameState.currentChapter as keyof typeof story.chapters] ?? null;
  };

  const startStory = (storyKey: string) => {
    if (!stories[storyKey as keyof typeof stories]) return;
    setSelectedStory(storyKey);
    setGameState({
      currentChapter: "chapter1",
      score: 0,
      questionsAnswered: 0,
      hintsUsed: 0,
      storyProgress: [],
      gameComplete: false,
      selectedAnswer: null,
      showResult: false,
      hintText: ""
    });
    setGameStarted(true);
  };

  const resolveNextChapter = (chapter: ReadingAdventureChapter, isCorrect: boolean) => {
    const { next } = chapter.question;
    if (isCorrect && next.correct) return next.correct;
    if (!isCorrect && next.incorrect) return next.incorrect;
    return next.default ?? "end";
  };

  const handleAnswer = (answerIndex: number) => {
    if (gameState.showResult || gameState.gameComplete) return;
    const chapter = getCurrentChapter();
    if (!chapter) return;

    const isCorrect = answerIndex === chapter.question.correct;
    const nextChapterId = resolveNextChapter(chapter, isCorrect);
    const isComplete = nextChapterId === "end";

    setGameState(prev => ({ ...prev, selectedAnswer: answerIndex, showResult: true }));

    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 100 : prev.score,
        questionsAnswered: prev.questionsAnswered + 1,
        currentChapter: nextChapterId,
        storyProgress: [...prev.storyProgress, chapter.id],
        gameComplete: isComplete,
        selectedAnswer: null,
        showResult: false,
        hintText: ""
      }));
    }, 3000);
  };

  const useHint = () => {
    if (gameState.hintsUsed >= HINT_LIMIT || gameState.showResult) return;
    const chapter = getCurrentChapter();
    if (!chapter) return;
    const hintMessage = `Re-read the part of the story that answers "${chapter.question.text}".`;
    setGameState(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1,
      hintText: hintMessage
    }));
  };

  const resetGame = () => {
    setGameStarted(false);
    setSelectedStory("");
    setGameState({
      currentChapter: "chapter1",
      score: 0,
      questionsAnswered: 0,
      hintsUsed: 0,
      storyProgress: [],
      gameComplete: false,
      selectedAnswer: null,
      showResult: false,
      hintText: ""
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">📖</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Reading Adventure Quest</h1>
            <p className="text-xl text-gray-600 mb-8">
              Interactive story-based game that improves reading comprehension!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(stories).map(([key, story]) => (
                <div key={key} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{story.character}</div>
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <Button 
                    onClick={() => startStory(key)}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Start Adventure
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentChapter = getCurrentChapter();
  const currentStory = selectedStory ? stories[selectedStory as keyof typeof stories] : undefined;

  if (gameState.gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Adventure Complete!</h1>
            <p className="text-gray-600 mb-6">You've successfully completed "{currentStory?.title ?? "this adventure"}"!</p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Final Score: <span className="font-bold text-purple-600">{gameState.score}</span></div>
                <div>Questions Answered: <span className="font-bold">{gameState.questionsAnswered}</span></div>
                <div>Chapters Read: <span className="font-bold">{gameState.storyProgress.length}</span></div>
                <div>Hints Used: <span className="font-bold">{gameState.hintsUsed}</span></div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={resetGame} className="flex-1">
                Try Another Story
              </Button>
              <Link to="/games" className="flex-1">
                <Button variant="outline" className="w-full">
                  Back to Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentChapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Chapter not found</h1>
            <Button onClick={resetGame}>Return to Stories</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Book className="text-purple-600" />
              {currentStory?.title ?? "Reading Adventure"}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div>Score: <span className="font-bold text-purple-600">{gameState.score}</span></div>
              <div>Chapter: <span className="font-bold">{gameState.storyProgress.length + 1}</span></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Story Content */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{currentChapter.character}</div>
                <h2 className="text-xl font-bold">{currentChapter.title}</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-6">
                <p className="text-gray-800 leading-relaxed text-lg">{currentChapter.text}</p>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-bold mb-4">Comprehension Question:</h3>
                <p className="text-gray-700 mb-4 font-medium">{currentChapter.question.text}</p>
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentChapter.question.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                      disabled={gameState.showResult}
                      className={`p-4 text-left justify-start h-auto ${
                        gameState.showResult && index === currentChapter.question.correct
                          ? 'bg-green-500 hover:bg-green-600'
                          : gameState.showResult && index === gameState.selectedAnswer && index !== currentChapter.question.correct
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-purple-600 hover:bg-purple-700'
                      }`}
                    >
                      <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                      {option}
                  </Button>
                ))}
              </div>

              {!gameState.showResult && gameState.hintText && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-700">
                  {gameState.hintText}
                </div>
              )}

              {gameState.showResult && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-800">{currentChapter.question.explanation}</p>
                </div>
              )}
              </div>
            </div>
            
            {/* Side Panel */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  Progress
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Chapters Read:</span>
                    <span className="font-bold">{gameState.storyProgress.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Score:</span>
                    <span className="font-bold text-purple-600">{gameState.score}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Questions:</span>
                    <span className="font-bold">{gameState.questionsAnswered}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Hints Used:</span>
                    <span className="font-bold">{gameState.hintsUsed}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <Button
                  onClick={useHint}
                  variant="outline"
                  className="w-full mb-3"
                  disabled={gameState.hintsUsed >= HINT_LIMIT || gameState.showResult}
                >
                  Use Hint ({Math.max(0, HINT_LIMIT - gameState.hintsUsed)} left)
                </Button>
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="w-full"
                >
                  Choose New Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingAdventure;
