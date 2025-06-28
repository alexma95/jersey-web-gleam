
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface RaceState {
  playerPosition: number;
  opponentPositions: number[];
  currentProblem: MathProblem;
  score: number;
  time: number;
  problemsCorrect: number;
  problemsTotal: number;
  gameComplete: boolean;
  selectedAnswer: string;
  showResult: boolean;
}

interface MathProblem {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const MathRacing = () => {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [gameStarted, setGameStarted] = useState(false);
  const [raceState, setRaceState] = useState<RaceState>({
    playerPosition: 0,
    opponentPositions: [0, 0, 0],
    currentProblem: generateProblem("easy"),
    score: 0,
    time: 0,
    problemsCorrect: 0,
    problemsTotal: 0,
    gameComplete: false,
    selectedAnswer: "",
    showResult: false
  });

  function generateProblem(level: string): MathProblem {
    const problems = {
      easy: [
        {
          question: "15 + 23 = ?",
          options: ["38", "35", "40", "33"],
          correct: 0,
          explanation: "15 + 23 = 38"
        },
        {
          question: "50 - 17 = ?",
          options: ["33", "37", "43", "27"],
          correct: 0,
          explanation: "50 - 17 = 33"
        },
        {
          question: "8 × 4 = ?",
          options: ["32", "28", "36", "24"],
          correct: 0,
          explanation: "8 × 4 = 32"
        }
      ],
      medium: [
        {
          question: "156 + 87 = ?",
          options: ["243", "233", "253", "223"],
          correct: 0,
          explanation: "156 + 87 = 243"
        },
        {
          question: "72 ÷ 8 = ?",
          options: ["9", "8", "7", "10"],
          correct: 0,
          explanation: "72 ÷ 8 = 9"
        },
        {
          question: "15 × 12 = ?",
          options: ["180", "170", "190", "160"],
          correct: 0,
          explanation: "15 × 12 = 180"
        }
      ],
      hard: [
        {
          question: "What is 3/4 of 48?",
          options: ["36", "32", "40", "44"],
          correct: 0,
          explanation: "3/4 × 48 = 36"
        },
        {
          question: "0.75 + 0.25 = ?",
          options: ["1.0", "0.9", "1.1", "0.5"],
          correct: 0,
          explanation: "0.75 + 0.25 = 1.0"
        },
        {
          question: "If a car travels 60 miles in 2 hours, what is its speed?",
          options: ["30 mph", "25 mph", "35 mph", "40 mph"],
          correct: 0,
          explanation: "Speed = Distance ÷ Time = 60 ÷ 2 = 30 mph"
        }
      ]
    };
    
    const problemSet = problems[level as keyof typeof problems];
    return problemSet[Math.floor(Math.random() * problemSet.length)];
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && !raceState.gameComplete) {
      timer = setInterval(() => {
        setRaceState(prev => ({ ...prev, time: prev.time + 1 }));
        
        // Move opponents slowly
        setRaceState(prev => ({
          ...prev,
          opponentPositions: prev.opponentPositions.map(pos => 
            Math.min(100, pos + Math.random() * 0.5)
          )
        }));
      }, 100);
    }
    return () => clearInterval(timer);
  }, [gameStarted, raceState.gameComplete]);

  const startGame = () => {
    setRaceState({
      playerPosition: 0,
      opponentPositions: [0, 0, 0],
      currentProblem: generateProblem(difficulty),
      score: 0,
      time: 0,
      problemsCorrect: 0,
      problemsTotal: 0,
      gameComplete: false,
      selectedAnswer: "",
      showResult: false
    });
    setGameStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    setRaceState(prev => ({ ...prev, selectedAnswer: answerIndex.toString(), showResult: true }));
    
    setTimeout(() => {
      const isCorrect = answerIndex === raceState.currentProblem.correct;
      const newPosition = isCorrect ? Math.min(100, raceState.playerPosition + 15) : raceState.playerPosition;
      const newScore = isCorrect ? raceState.score + 100 : raceState.score;
      
      setRaceState(prev => ({
        ...prev,
        playerPosition: newPosition,
        score: newScore,
        problemsCorrect: isCorrect ? prev.problemsCorrect + 1 : prev.problemsCorrect,
        problemsTotal: prev.problemsTotal + 1,
        currentProblem: generateProblem(difficulty),
        selectedAnswer: "",
        showResult: false,
        gameComplete: newPosition >= 100
      }));
    }, 2000);
  };

  const formatTime = (centiseconds: number) => {
    const seconds = Math.floor(centiseconds / 10);
    const cs = centiseconds % 10;
    return `${seconds}.${cs}s`;
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🏎️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Math Racing Challenge</h1>
            <p className="text-xl text-gray-600 mb-8">
              Race against time while solving math problems to move your car forward!
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Your Difficulty</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level as typeof difficulty)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      difficulty === level
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-lg font-bold capitalize">{level}</div>
                    <div className="text-sm text-gray-600">
                      {level === 'easy' ? 'Addition & Subtraction' :
                       level === 'medium' ? 'Multiplication & Division' :
                       'Fractions & Word Problems'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={startGame}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              Start Race!
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Games
        </Link>
        
        {/* Race Track */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Math Racing Challenge</h1>
            <div className="flex items-center gap-4 text-sm">
              <div>Score: <span className="font-bold text-red-600">{raceState.score}</span></div>
              <div>Time: <span className="font-bold">{formatTime(raceState.time)}</span></div>
              <div>Correct: <span className="font-bold text-green-600">{raceState.problemsCorrect}/{raceState.problemsTotal}</span></div>
            </div>
          </div>
          
          <div className="bg-green-200 h-32 rounded-lg relative overflow-hidden mb-6">
            {/* Race track lanes */}
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {/* Player car */}
              <div className="h-6 bg-green-300 rounded relative">
                <div 
                  className="absolute left-0 top-0 h-full w-8 bg-blue-600 rounded transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
                  style={{ left: `${raceState.playerPosition}%` }}
                >
                  🚗
                </div>
                <div className="absolute right-2 top-1 text-xs font-bold">FINISH</div>
              </div>
              
              {/* Opponent cars */}
              {raceState.opponentPositions.map((position, index) => (
                <div key={index} className="h-6 bg-green-300 rounded relative">
                  <div 
                    className="absolute left-0 top-0 h-full w-8 bg-red-500 rounded transition-all duration-300 flex items-center justify-center text-white text-xs font-bold"
                    style={{ left: `${position}%` }}
                  >
                    🚙
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Section */}
        {!raceState.gameComplete && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Solve to Move Forward!</h2>
            <div className="text-2xl font-bold text-center mb-6 p-4 bg-blue-50 rounded-lg">
              {raceState.currentProblem.question}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {raceState.currentProblem.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={raceState.showResult}
                  className={`p-4 text-lg ${
                    raceState.showResult && index === raceState.currentProblem.correct
                      ? 'bg-green-500 hover:bg-green-600'
                      : raceState.showResult && index.toString() === raceState.selectedAnswer && index !== raceState.currentProblem.correct
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {raceState.showResult && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                <p className="font-medium">{raceState.currentProblem.explanation}</p>
              </div>
            )}
          </div>
        )}

        {/* Game Complete Modal */}
        {raceState.gameComplete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You Won!</h2>
              <p className="text-gray-600 mb-6">Congratulations on finishing the race!</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>Final Score: <span className="font-bold text-red-600">{raceState.score}</span></div>
                  <div>Race Time: <span className="font-bold">{formatTime(raceState.time)}</span></div>
                  <div>Problems Solved: <span className="font-bold">{raceState.problemsCorrect}</span></div>
                  <div>Accuracy: <span className="font-bold">{Math.round((raceState.problemsCorrect / raceState.problemsTotal) * 100)}%</span></div>
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

export default MathRacing;
