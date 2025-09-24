import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { ArrowLeft, CheckCircle, XCircle, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";
import { sentenceQuestionBanks, WordCard } from "@/data/sentenceQuestionBanks";

interface GameState {
  grade: string;
  category: string;
  currentSentence: WordCard[];
  availableWords: WordCard[];
  score: number;
  level: number;
  feedback: string;
  isCorrect: boolean | null;
  showFeedback: boolean;
  completedSentences: number;
}

const SentenceBuilder = () => {
  const [gameState, setGameState] = useState<GameState>({
    grade: "grade2",
    category: "animals",
    currentSentence: [],
    availableWords: [],
    score: 0,
    level: 1,
    feedback: "",
    isCorrect: null,
    showFeedback: false,
    completedSentences: 0
  });

  const getAvailableCategories = (grade: string) => {
    const gradeBank = sentenceQuestionBanks[grade as keyof typeof sentenceQuestionBanks];
    return gradeBank ? Object.keys(gradeBank) : ['animals'];
  };

  const startLevel = () => {
    const gradeBank = sentenceQuestionBanks[gameState.grade as keyof typeof sentenceQuestionBanks];
    const categoryWords = gradeBank?.[gameState.category as keyof typeof gradeBank] || [];
    
    setGameState(prev => ({
      ...prev,
      availableWords: [...categoryWords],
      currentSentence: [],
      showFeedback: false,
      isCorrect: null,
      feedback: ""
    }));
  };

  const shuffleWords = () => {
    const gradeBank = sentenceQuestionBanks[gameState.grade as keyof typeof sentenceQuestionBanks];
    const allWords: WordCard[] = [];
    
    // Mix words from all categories for current grade
    if (gradeBank) {
      Object.values(gradeBank).forEach(categoryWords => {
        allWords.push(...categoryWords);
      });
    }
    
    // Shuffle and take random selection
    const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, 12);
    
    setGameState(prev => ({
      ...prev,
      availableWords: shuffled,
      currentSentence: [],
      showFeedback: false,
      isCorrect: null,
      feedback: "",
      category: "mixed"
    }));
  };

  const addWordToSentence = (word: WordCard) => {
    setGameState(prev => ({
      ...prev,
      currentSentence: [...prev.currentSentence, word],
      availableWords: prev.availableWords.filter(w => w.id !== word.id)
    }));
  };

  const removeWordFromSentence = (index: number) => {
    const word = gameState.currentSentence[index];
    setGameState(prev => ({
      ...prev,
      currentSentence: prev.currentSentence.filter((_, i) => i !== index),
      availableWords: [...prev.availableWords, word]
    }));
  };

  const checkSentence = () => {
    const sentence = gameState.currentSentence;
    
    // Enhanced validation rules
    const hasSubject = sentence.some(word => word.type === 'subject');
    const hasVerb = sentence.some(word => word.type === 'verb');
    const hasPunctuation = sentence.some(word => word.type === 'punctuation');
    const endsWithPunctuation = sentence.length > 0 && sentence[sentence.length - 1].type === 'punctuation';
    
    // Advanced rules for higher grades
    const isValid = hasSubject && hasVerb && hasPunctuation && endsWithPunctuation;
    let feedback = "";
    let scoreBonus = 100;
    
    if (!hasSubject) {
      feedback = "Your sentence needs a subject (who or what the sentence is about).";
    } else if (!hasVerb) {
      feedback = "Your sentence needs a verb (action word).";
    } else if (!endsWithPunctuation) {
      feedback = "Your sentence should end with punctuation.";
    } else if (isValid) {
      // Grade-specific bonus scoring
      const gradeNum = parseInt(gameState.grade.replace('grade', ''));
      scoreBonus = 100 + (gradeNum * 25);
      
      // Complexity bonuses
      const hasAdjective = sentence.some(word => word.type === 'adjective');
      const hasConjunction = sentence.some(word => word.type === 'conjunction');
      
      if (hasAdjective) scoreBonus += 50;
      if (hasConjunction) scoreBonus += 75;
      if (sentence.length >= 6) scoreBonus += 25; // Length bonus
      
      feedback = `Excellent! That's a complete sentence! (+${scoreBonus} points)`;
    }
    
    setGameState(prev => ({
      ...prev,
      isCorrect: isValid,
      feedback,
      showFeedback: true,
      score: isValid ? prev.score + scoreBonus : prev.score,
      completedSentences: isValid ? prev.completedSentences + 1 : prev.completedSentences
    }));
  };

  const clearSentence = () => {
    const words = sentenceQuestionBanks[gameState.grade as keyof typeof sentenceQuestionBanks];
    const categoryWords = words?.[gameState.category as keyof typeof words] || [];
    
    setGameState(prev => ({
      ...prev,
      currentSentence: [],
      availableWords: [...categoryWords],
      showFeedback: false,
      isCorrect: null,
      feedback: ""
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Games
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📝</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sentence Construction Challenge</h1>
            <p className="text-xl text-gray-600">Build complete sentences by combining words!</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Select value={gameState.grade} onValueChange={(value) => setGameState(prev => ({ ...prev, grade: value, category: getAvailableCategories(value)[0] }))}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                    <SelectItem value="grade6">Grade 6</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={gameState.category} onValueChange={(value) => setGameState(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableCategories(gameState.grade).map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button onClick={startLevel} size="sm">Load Words</Button>
                <Button onClick={shuffleWords} variant="outline" size="sm">
                  <Shuffle className="w-4 h-4 mr-1" />
                  Mix It Up
                </Button>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">Score: {gameState.score}</div>
                <div className="text-sm text-gray-600">Sentences: {gameState.completedSentences}</div>
              </div>
            </div>
            
            {/* Enhanced Color Legend */}
            <div className="flex flex-wrap gap-2 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-blue-200 rounded"></div>
                <span>Subject</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-green-200 rounded"></div>
                <span>Verb</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                <span>Object/Adverb</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-purple-200 rounded"></div>
                <span>Adjective</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-orange-200 rounded"></div>
                <span>Conjunction</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-red-200 rounded"></div>
                <span>Punctuation</span>
              </div>
            </div>
          </div>
          
          {/* Sentence Building Area */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Build Your Sentence</h2>
            <div className="min-h-20 border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4 flex flex-wrap gap-2 items-center">
              {gameState.currentSentence.length === 0 ? (
                <span className="text-gray-500 italic">Drag words here to build your sentence...</span>
              ) : (
                gameState.currentSentence.map((word, index) => (
                  <div
                    key={`${word.id}-${index}`}
                    className={`${word.color} px-3 py-2 rounded-lg cursor-pointer hover:opacity-80 transition-opacity`}
                    onClick={() => removeWordFromSentence(index)}
                  >
                    {word.text}
                  </div>
                ))
              )}
            </div>
            
            <div className="flex gap-2">
              <Button onClick={checkSentence} disabled={gameState.currentSentence.length === 0}>
                Check Sentence
              </Button>
              <Button onClick={clearSentence} variant="outline">
                Clear
              </Button>
            </div>
            
            {gameState.showFeedback && (
              <div className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                gameState.isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {gameState.isCorrect ? <CheckCircle size={20} /> : <XCircle size={20} />}
                <span>{gameState.feedback}</span>
              </div>
            )}
          </div>
          
          {/* Available Words */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Available Words</h2>
            <div className="flex flex-wrap gap-2">
              {gameState.availableWords.map((word) => (
                <div
                  key={word.id}
                  className={`${word.color} px-3 py-2 rounded-lg cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => addWordToSentence(word)}
                >
                  {word.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuilder;
