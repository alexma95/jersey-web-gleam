import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { mathQuestionBanks, MathQuestion } from "@/data/mathQuestionBanks";

interface GameState {
  grade: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  currentProblem: MathQuestion;
  score: number;
  problemsCorrect: number;
  problemsTotal: number;
  timeLeft: number;
  gameStarted: boolean;
  gameComplete: boolean;
  userAnswer: string;
  showResult: boolean;
  carPosition: number;
  streak: number;
  questionQueue: MathQuestion[];
  targetQuestions: number;
}

const gradeSettings = {
  grade3: { problemCount: 20, timeLimit: 120 },
  grade4: { problemCount: 25, timeLimit: 150 },
  grade5: { problemCount: 30, timeLimit: 180 },
  grade6: { problemCount: 35, timeLimit: 210 },
  grade7: { problemCount: 40, timeLimit: 240 },
  grade8: { problemCount: 45, timeLimit: 270 }
};

const defaultProblem: MathQuestion = { question: '2 + 2', answer: 4, operation: 'addition', difficulty: 'easy' };

const buildQuestionQueue = (
  grade: string,
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed',
  maxCount: number
): MathQuestion[] => {
  const gradeBank = mathQuestionBanks[grade as keyof typeof mathQuestionBanks];
  if (!gradeBank) {
    return [defaultProblem];
  }

  const operationsOrder: (keyof typeof gradeBank)[] = ['addition', 'subtraction', 'multiplication', 'division'];
  let allQuestions: MathQuestion[] = [];

  operationsOrder.forEach(operation => {
    const operationQuestions = gradeBank[operation];
    if (!operationQuestions) return;
    const filtered = difficulty === 'mixed'
      ? operationQuestions
      : operationQuestions.filter(q => q.difficulty === difficulty);
    allQuestions = [...allQuestions, ...filtered];
  });

  if (allQuestions.length === 0) {
    return [defaultProblem];
  }

  if (maxCount <= 0) {
    return allQuestions;
  }

  return allQuestions.slice(0, Math.min(maxCount, allQuestions.length));
};

const MathFactsSpeedway = () => {
  const [gameState, setGameState] = useState<GameState>({
    grade: "grade3",
    difficulty: "mixed",
    currentProblem: defaultProblem,
    score: 0,
    problemsCorrect: 0,
    problemsTotal: 0,
    timeLeft: gradeSettings.grade3.timeLimit,
    gameStarted: false,
    gameComplete: false,
    userAnswer: "",
    showResult: false,
    carPosition: 0,
    streak: 0,
    questionQueue: [defaultProblem],
    targetQuestions: 1
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState.gameStarted && !gameState.gameComplete && gameState.timeLeft > 0) {
      timer = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            return { ...prev, timeLeft: 0, gameComplete: true };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.gameStarted, gameState.gameComplete, gameState.timeLeft]);

  const startGame = () => {
    const settings = gradeSettings[gameState.grade as keyof typeof gradeSettings] ?? gradeSettings.grade3;
    const queue = buildQuestionQueue(gameState.grade, gameState.difficulty, settings.problemCount);
    const questionQueue = queue.length > 0 ? queue : [defaultProblem];
    const firstProblem = questionQueue[0];

    setGameState(prev => ({
      ...prev,
      gameStarted: true,
      timeLeft: settings.timeLimit,
      score: 0,
      problemsCorrect: 0,
      problemsTotal: 0,
      carPosition: 0,
      streak: 0,
      currentProblem: firstProblem,
      gameComplete: false,
      userAnswer: "",
      showResult: false,
      questionQueue,
      targetQuestions: questionQueue.length
    }));
  };

  const submitAnswer = () => {
    if (!gameState.userAnswer.trim() || gameState.showResult) return;

    const isCorrect = parseInt(gameState.userAnswer, 10) === gameState.currentProblem.answer;
    const newStreak = isCorrect ? gameState.streak + 1 : 0;

    let baseScore = 100;
    if (gameState.currentProblem.difficulty === 'medium') baseScore = 150;
    if (gameState.currentProblem.difficulty === 'hard') baseScore = 200;

    const speedBonus = newStreak >= 3 ? 2 : 1;
    const newPosition = Math.min(100, gameState.carPosition + (isCorrect ? 5 * speedBonus : 0));

    setGameState(prev => ({
      ...prev,
      showResult: true,
      problemsCorrect: isCorrect ? prev.problemsCorrect + 1 : prev.problemsCorrect,
      problemsTotal: prev.problemsTotal + 1,
      score: isCorrect ? prev.score + baseScore * speedBonus : prev.score,
      carPosition: newPosition,
      streak: newStreak
    }));

    setTimeout(() => {
      setGameState(prev => {
        const remainingQuestions = prev.problemsTotal < prev.targetQuestions;
        const raceFinished = newPosition >= 100 || !remainingQuestions;

        if (raceFinished) {
          return { ...prev, gameComplete: true };
        }

        const nextProblem = prev.questionQueue[prev.problemsTotal] ?? prev.currentProblem;
        return {
          ...prev,
          currentProblem: nextProblem,
          userAnswer: "",
          showResult: false
        };
      });
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !gameState.showResult) {
      submitAnswer();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameState.gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🏎️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Math Facts Speedway</h1>
            <p className="text-xl text-gray-600 mb-8">
              Race your car by solving NJSLA math problems quickly and accurately!
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Game Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Grade Level</label>
                  <Select value={gameState.grade} onValueChange={(value) => setGameState(prev => ({ ...prev, grade: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade3">Grade 3 (Addition & Subtraction)</SelectItem>
                      <SelectItem value="grade4">Grade 4 (+ Multiplication)</SelectItem>
                      <SelectItem value="grade5">Grade 5 (All Operations)</SelectItem>
                      <SelectItem value="grade6">Grade 6 (Advanced Problems)</SelectItem>
                      <SelectItem value="grade7">Grade 7 (Complex Operations)</SelectItem>
                      <SelectItem value="grade8">Grade 8 (Pre-Algebra)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty</label>
                  <Select value={gameState.difficulty} onValueChange={(value: 'easy' | 'medium' | 'hard' | 'mixed') => setGameState(prev => ({ ...prev, difficulty: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy (100 pts per correct)</SelectItem>
                      <SelectItem value="medium">Medium (150 pts per correct)</SelectItem>
                      <SelectItem value="hard">Hard (200 pts per correct)</SelectItem>
                      <SelectItem value="mixed">Mixed (All difficulties)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <Button onClick={startGame} className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Start Race!
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Games
        </Link>
        
        {/* Race Track */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">NJSLA Math Facts Speedway</h1>
            <div className="flex items-center gap-4 text-sm">
              <div>Score: <span className="font-bold text-green-600">{gameState.score}</span></div>
              <div>Time: <span className="font-bold">{formatTime(gameState.timeLeft)}</span></div>
              <div>Streak: <span className="font-bold text-orange-600">{gameState.streak}</span></div>
              <div>Progress: <span className="font-bold">{gameState.problemsCorrect}/{gameState.targetQuestions}</span></div>
            </div>
          </div>
          
          <div className="bg-gray-200 h-20 rounded-lg relative overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 h-2 top-9"></div>
            <div 
              className="absolute top-4 w-12 h-12 bg-red-500 rounded transition-all duration-500 flex items-center justify-center text-2xl"
              style={{ left: `${gameState.carPosition}%` }}
            >
              🏎️
            </div>
            <div className="absolute right-2 top-6 text-sm font-bold">FINISH</div>
          </div>
        </div>

        {/* Problem Section */}
        {!gameState.gameComplete && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Solve to Move Forward!</h2>
            <div className="text-3xl font-bold text-center mb-6 p-4 bg-blue-50 rounded-lg">
              {gameState.currentProblem.question} = ?
            </div>
            
            <div className="flex justify-center gap-4 mb-4">
              <input
                type="number"
                value={gameState.userAnswer}
                onChange={(e) => setGameState(prev => ({ ...prev, userAnswer: e.target.value }))}
                onKeyPress={handleKeyPress}
                className="w-32 p-3 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                disabled={gameState.showResult}
                placeholder="?"
                autoFocus
              />
              <Button 
                onClick={submitAnswer} 
                disabled={gameState.showResult || !gameState.userAnswer.trim()}
                className="px-8 py-3 text-lg"
              >
                Submit
              </Button>
            </div>
            
            {gameState.showResult && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                parseInt(gameState.userAnswer) === gameState.currentProblem.answer 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <p className="font-medium">
                  {parseInt(gameState.userAnswer) === gameState.currentProblem.answer 
                    ? `Correct! ${gameState.currentProblem.question} = ${gameState.currentProblem.answer}` 
                    : `Incorrect. ${gameState.currentProblem.question} = ${gameState.currentProblem.answer}`}
                </p>
                {gameState.streak >= 3 && (
                  <p className="text-orange-600 font-bold">Speed Boost! 🚀</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Game Complete Modal */}
        {gameState.gameComplete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Race Complete!</h2>
              <p className="text-gray-600 mb-6">Great job on your NJSLA math facts!</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Final Score: <span className="font-bold text-green-600">{gameState.score}</span></div>
                  <div>Time Used: <span className="font-bold">{formatTime(gradeSettings[gameState.grade as keyof typeof gradeSettings].timeLimit - gameState.timeLeft)}</span></div>
                  <div>Correct: <span className="font-bold">{gameState.problemsCorrect}/{gameState.targetQuestions}</span></div>
                  <div>Accuracy: <span className="font-bold">{gameState.problemsTotal > 0 ? Math.round((gameState.problemsCorrect / gameState.problemsTotal) * 100) : 0}%</span></div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button onClick={startGame} className="flex-1">
                  Race Again
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
  );
};

export default MathFactsSpeedway;