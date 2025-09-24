
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Lightbulb, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { readingDetectivePassages, ReadingDetectivePassage } from "@/data/readingDetectivePassages";

interface GameState {
  grade: string;
  currentPassage: ReadingDetectivePassage | null;
  currentQuestion: number;
  score: number;
  selectedAnswer: number | null;
  showResult: boolean;
  hintsUsed: number;
  completed: boolean;
  nextPassageIndex: number;
}

const ReadingDetective = () => {
  const [gameState, setGameState] = useState<GameState>({
    grade: "grade2",
    currentPassage: null,
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    showResult: false,
    hintsUsed: 0,
    completed: false,
    nextPassageIndex: 0
  });
  const passages = readingDetectivePassages;

  const startReading = () => {
    const gradePassages = passages[gameState.grade as keyof typeof passages];
    if (!gradePassages || gradePassages.length === 0) return;

    const nextIndex = gameState.nextPassageIndex % gradePassages.length;
    const nextPassage = gradePassages[nextIndex];

    setGameState(prev => ({
      ...prev,
      currentPassage: nextPassage,
      currentQuestion: 0,
      score: 0,
      selectedAnswer: null,
      showResult: false,
      hintsUsed: 0,
      completed: false,
      nextPassageIndex: (nextIndex + 1) % gradePassages.length
    }));
  };

  const selectAnswer = (answerIndex: number) => {
    if (gameState.showResult || !gameState.currentPassage) return;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showResult: true
    }));

    setTimeout(() => {
      setGameState(prev => {
        if (!prev.currentPassage) return prev;

        const questionData = prev.currentPassage.questions[prev.currentQuestion];
        const isCorrect = answerIndex === questionData.correct;
        const earnedPoints = isCorrect ? Math.max(50, 100 - prev.hintsUsed * 10) : 0;
        const newScore = prev.score + earnedPoints;

        if (prev.currentQuestion < prev.currentPassage.questions.length - 1) {
          return {
            ...prev,
            currentQuestion: prev.currentQuestion + 1,
            score: newScore,
            selectedAnswer: null,
            showResult: false,
            hintsUsed: 0
          };
        }

        return {
          ...prev,
          score: newScore,
          completed: true
        };
      });
    }, 2000);
  };

  const useHint = () => {
    if (gameState.hintsUsed < 2) {
      setGameState(prev => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
    }
  };

  const getHintText = () => {
    if (!gameState.currentPassage) return "";
    
    const question = gameState.currentPassage.questions[gameState.currentQuestion];
    if (gameState.hintsUsed === 1) {
      return "Look for key words in the passage that match the question.";
    } else if (gameState.hintsUsed === 2) {
      return `This is a ${question.type} question. Focus on ${question.type === 'detail' ? 'specific facts' : question.type === 'main idea' ? 'the main point' : 'what you can figure out from clues'}.`;
    }
    return "";
  };

  if (!gameState.currentPassage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🕵️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Reading Passage Detective</h1>
            <p className="text-xl text-gray-600 mb-8">
              Use your detective skills to find clues and answer questions about reading passages!
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Grade</h2>
              <Select value={gameState.grade} onValueChange={(value) => setGameState(prev => ({ ...prev, grade: value, nextPassageIndex: 0 }))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select grade level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade2">Grade 2 (Simple Stories)</SelectItem>
                  <SelectItem value="grade3">Grade 3 (Short Adventures)</SelectItem>
                  <SelectItem value="grade4">Grade 4 (Science & History)</SelectItem>
                  <SelectItem value="grade5">Grade 5 (Complex Stories)</SelectItem>
                  <SelectItem value="grade6">Grade 6 (Advanced Topics)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={startReading} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
              Start Detective Work!
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Games
        </Link>
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Reading Detective</h1>
              <div className="flex items-center gap-4 text-sm">
                <div>Score: <span className="font-bold text-indigo-600">{gameState.score}</span></div>
                <div>Question: <span className="font-bold">{gameState.currentQuestion + 1}/{gameState.currentPassage.questions.length}</span></div>
              </div>
            </div>
          </div>

          {/* Reading Passage */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-indigo-600" size={24} />
              <h2 className="text-xl font-bold">{gameState.currentPassage.title}</h2>
            </div>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {gameState.currentPassage.text}
            </div>
          </div>

          {/* Question Section */}
          {!gameState.completed && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Detective Question</h3>
                <Button 
                  onClick={useHint} 
                  disabled={gameState.hintsUsed >= 2 || gameState.showResult}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <Lightbulb size={16} />
                  Hint ({2 - gameState.hintsUsed} left)
                </Button>
              </div>
              
              <div className="text-lg mb-6 p-4 bg-gray-50 rounded-lg">
                {gameState.currentPassage.questions[gameState.currentQuestion].question}
              </div>
              
              {gameState.hintsUsed > 0 && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                  <div className="flex items-center gap-1 text-yellow-700">
                    <Lightbulb size={16} />
                    <span className="font-medium">Detective Hint:</span>
                  </div>
                  <p className="text-yellow-700 mt-1">{getHintText()}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {gameState.currentPassage.questions[gameState.currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    disabled={gameState.showResult}
                    variant="outline"
                    className={`p-4 text-left h-auto ${
                      gameState.showResult && index === gameState.currentPassage!.questions[gameState.currentQuestion].correct
                        ? 'border-green-500 bg-green-50'
                        : gameState.showResult && index === gameState.selectedAnswer && index !== gameState.currentPassage!.questions[gameState.currentQuestion].correct
                        ? 'border-red-500 bg-red-50'
                        : ''
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              
              {gameState.showResult && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium mb-2">
                    {gameState.selectedAnswer === gameState.currentPassage.questions[gameState.currentQuestion].correct 
                      ? '🎉 Correct!' 
                      : '❌ Incorrect'}
                  </p>
                  <p className="text-gray-700">
                    {gameState.currentPassage.questions[gameState.currentQuestion].explanation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Completion Modal */}
          {gameState.completed && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Solved!</h2>
                <p className="text-gray-600 mb-6">Great detective work on the reading passage!</p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Final Score</div>
                  <div className="text-3xl font-bold text-indigo-600">{gameState.score}</div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={startReading} className="flex-1">
                    New Case
                  </Button>
                  <Link to="/games" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Other Games
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingDetective;
