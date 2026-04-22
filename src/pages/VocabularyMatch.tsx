
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { vocabularyQuestionBanks, VocabularyPair } from "@/data/vocabularyQuestionBanks";

interface Card {
  id: string;
  content: string;
  type: 'word' | 'definition';
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  grade: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  cards: Card[];
  flippedCards: Card[];
  matches: number;
  attempts: number;
  score: number;
  gameComplete: boolean;
  timeLeft: number;
  gameStarted: boolean;
}

const VocabularyMatch = () => {
  const [gameState, setGameState] = useState<GameState>({
    grade: 'grade2',
    difficulty: 'mixed',
    cards: [],
    flippedCards: [],
    matches: 0,
    attempts: 0,
    score: 0,
    gameComplete: false,
    timeLeft: 300,
    gameStarted: false
  });

  const initializeGame = () => {
    const gradeWords = vocabularyQuestionBanks[gameState.grade as keyof typeof vocabularyQuestionBanks];
    let selectedWords: VocabularyPair[] = [];
    
    if (gameState.difficulty === 'mixed') {
      selectedWords = gradeWords.slice(0, 6); // Mix of all difficulties
    } else {
      const filteredWords = gradeWords.filter(word => word.difficulty === gameState.difficulty);
      selectedWords = filteredWords.slice(0, Math.min(6, filteredWords.length));
    }

    const cards: Card[] = [];
    selectedWords.forEach((pair) => {
      cards.push({
        id: `word-${pair.id}`,
        content: pair.word,
        type: 'word',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      });
      cards.push({
        id: `def-${pair.id}`,
        content: pair.definition,
        type: 'definition',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      });
    });

    // Shuffle cards
    const shuffledCards = cards.sort(() => Math.random() - 0.5);

    setGameState(prev => ({
      ...prev,
      cards: shuffledCards,
      flippedCards: [],
      matches: 0,
      attempts: 0,
      score: 0,
      gameComplete: false,
      gameStarted: true,
      timeLeft: 300
    }));
  };

  const flipCard = (cardId: string) => {
    if (gameState.flippedCards.length >= 2) return;

    const card = gameState.cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    const newFlippedCards = [...gameState.flippedCards, card];
    
    setGameState(prev => ({
      ...prev,
      cards: prev.cards.map(c => 
        c.id === cardId ? { ...c, isFlipped: true } : c
      ),
      flippedCards: newFlippedCards
    }));

    if (newFlippedCards.length === 2) {
      setTimeout(() => checkMatch(newFlippedCards), 1000);
    }
  };

  const checkMatch = (flippedCards: Card[]) => {
    const [card1, card2] = flippedCards;
    const isMatch = card1.pairId === card2.pairId;

    if (isMatch) {
      const difficulty = vocabularyQuestionBanks[gameState.grade as keyof typeof vocabularyQuestionBanks]
        .find(word => word.id === card1.pairId)?.difficulty || 'easy';
      
      let points = 100;
      if (difficulty === 'medium') points = 150;
      if (difficulty === 'hard') points = 200;

      setGameState(prev => ({
        ...prev,
        cards: prev.cards.map(c => 
          c.pairId === card1.pairId ? { ...c, isMatched: true } : c
        ),
        matches: prev.matches + 1,
        attempts: prev.attempts + 1,
        score: prev.score + points,
        flippedCards: []
      }));

      // Check if game is complete
      setTimeout(() => {
        setGameState(prev => {
          const totalPairs = prev.cards.length / 2;
          if (prev.matches === totalPairs) {
            return { ...prev, gameComplete: true };
          }
          return prev;
        });
      }, 100);
    } else {
      setTimeout(() => {
        setGameState(prev => ({
          ...prev,
          cards: prev.cards.map(c => 
            flippedCards.some(fc => fc.id === c.id) 
              ? { ...c, isFlipped: false } 
              : c
          ),
          attempts: prev.attempts + 1,
          flippedCards: []
        }));
      }, 500);
    }
  };

  // Timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameState.gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Vocabulary Match Masters</h1>
            <p className="text-xl text-gray-600 mb-8">
              Match words with their definitions to improve your vocabulary!
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Game Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Grade Level</label>
                  <Select value={gameState.grade} onValueChange={(value) => setGameState(prev => ({ ...prev, grade: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade2">Grade 2 (Basic Words)</SelectItem>
                      <SelectItem value="grade3">Grade 3 (Intermediate Words)</SelectItem>
                      <SelectItem value="grade4">Grade 4 (Advanced Words)</SelectItem>
                      <SelectItem value="grade5">Grade 5 (Complex Words)</SelectItem>
                      <SelectItem value="grade6">Grade 6 (Academic Words)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty</label>
                  <Select value={gameState.difficulty} onValueChange={(value: 'easy' | 'medium' | 'hard' | 'mixed') => setGameState(prev => ({ ...prev, difficulty: value }))}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">Easy (100 pts per match)</SelectItem>
                      <SelectItem value="medium">Medium (150 pts per match)</SelectItem>
                      <SelectItem value="hard">Hard (200 pts per match)</SelectItem>
                      <SelectItem value="mixed">Mixed (All difficulties)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <Button onClick={initializeGame} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
              Start Matching!
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
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Vocabulary Match Masters</h1>
              <div className="flex items-center gap-4 text-sm">
                <div>Score: <span className="font-bold text-indigo-600">{gameState.score}</span></div>
                <div>Time: <span className="font-bold">{formatTime(gameState.timeLeft)}</span></div>
                <div>Matches: <span className="font-bold">{gameState.matches}/{gameState.cards.length / 2}</span></div>
                <div>Attempts: <span className="font-bold">{gameState.attempts}</span></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {gameState.cards.map((card) => (
              <div
                key={card.id}
                className={`aspect-square rounded-lg cursor-pointer transition-all duration-300 ${
                  card.isMatched 
                    ? 'bg-green-200 border-2 border-green-400' 
                    : card.isFlipped 
                      ? card.type === 'word' 
                        ? 'bg-blue-200 border-2 border-blue-400' 
                        : 'bg-yellow-200 border-2 border-yellow-400'
                      : 'bg-gray-200 border-2 border-gray-300 hover:bg-gray-300'
                }`}
                onClick={() => flipCard(card.id)}
              >
                <div className="h-full flex items-center justify-center p-4 text-center">
                  {card.isFlipped || card.isMatched ? (
                    <div className={`text-sm font-medium ${card.type === 'word' ? 'text-blue-800' : 'text-yellow-800'}`}>
                      {card.content}
                    </div>
                  ) : (
                    <div className="text-4xl">❓</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button onClick={initializeGame} variant="outline" className="mr-4">
              <RotateCcw className="mr-2" size={16} />
              New Game
            </Button>
          </div>

          {gameState.gameComplete && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                <div className="text-6xl mb-4">
                  {gameState.matches === gameState.cards.length / 2 ? '🏆' : '⏰'}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {gameState.matches === gameState.cards.length / 2 ? 'Excellent Work!' : 'Time\'s Up!'}
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Final Score: <span className="font-bold text-indigo-600">{gameState.score}</span></div>
                    <div>Matches: <span className="font-bold">{gameState.matches}/{gameState.cards.length / 2}</span></div>
                    <div>Attempts: <span className="font-bold">{gameState.attempts}</span></div>
                    <div>Accuracy: <span className="font-bold">{gameState.attempts > 0 ? Math.round((gameState.matches / gameState.attempts) * 100) : 0}%</span></div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button onClick={initializeGame} className="flex-1">
                    Play Again
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

export default VocabularyMatch;
