
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Lightbulb, BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  type: string;
}

interface Passage {
  title: string;
  text: string;
  questions: Question[];
  difficulty: string;
  topic: string;
}

interface GameState {
  grade: string;
  currentPassage: Passage | null;
  currentQuestion: number;
  score: number;
  selectedAnswer: number | null;
  showResult: boolean;
  highlightedText: string[];
  hintsUsed: number;
  completed: boolean;
}

const ReadingDetective = () => {
  const [gameState, setGameState] = useState<GameState>({
    grade: "grade2",
    currentPassage: null,
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    showResult: false,
    highlightedText: [],
    hintsUsed: 0,
    completed: false
  });

  const passages = {
    grade2: [
      {
        title: "The Lost Puppy",
        text: "Emma was walking to school when she heard a small whimpering sound. She looked around and saw a tiny brown puppy hiding under a bush. The puppy looked scared and hungry. Emma gently picked up the puppy and decided to take it to the animal shelter on her way home from school. At the shelter, the workers were very happy to help find the puppy's family.",
        questions: [
          {
            question: "Where did Emma find the puppy?",
            options: ["In her backyard", "Under a bush", "At school", "At the shelter"],
            correct: 1,
            explanation: "The text says 'she saw a tiny brown puppy hiding under a bush.'",
            type: "detail"
          },
          {
            question: "How did the puppy look when Emma found it?",
            options: ["Happy and playful", "Scared and hungry", "Sleepy", "Excited"],
            correct: 1,
            explanation: "The text states 'The puppy looked scared and hungry.'",
            type: "detail"
          },
          {
            question: "What did Emma decide to do with the puppy?",
            options: ["Keep it as a pet", "Leave it alone", "Take it to the shelter", "Give it to a friend"],
            correct: 2,
            explanation: "Emma 'decided to take it to the animal shelter on her way home from school.'",
            type: "main idea"
          }
        ],
        difficulty: "easy",
        topic: "animals"
      }
    ],
    grade3: [
      {
        title: "The Magic Garden",
        text: "Sarah's grandmother had a special garden behind her house. Every morning, Grandma would water the plants and sing to them. Sarah thought this was silly until she noticed something amazing. The plants in Grandma's garden grew bigger and more beautiful than any other garden in the neighborhood. The flowers were more colorful, and the vegetables were larger and tastier. When Sarah asked her grandmother about the secret, Grandma smiled and said, 'Plants need love and care, just like people do.'",
        questions: [
          {
            question: "What made Grandma's garden special?",
            options: ["It had rare plants", "The plants grew bigger and more beautiful", "It was very large", "It had a fence around it"],
            correct: 1,
            explanation: "The text says the plants 'grew bigger and more beautiful than any other garden in the neighborhood.'",
            type: "main idea"
          },
          {
            question: "What did Grandma do every morning?",
            options: ["Pick flowers", "Water plants and sing to them", "Plant new seeds", "Talk to neighbors"],
            correct: 1,
            explanation: "The text states 'Every morning, Grandma would water the plants and sing to them.'",
            type: "detail"
          },
          {
            question: "What was Grandma's secret to having a beautiful garden?",
            options: ["Special fertilizer", "Magic seeds", "Love and care", "Lots of water"],
            correct: 2,
            explanation: "Grandma said 'Plants need love and care, just like people do.'",
            type: "inference"
          }
        ],
        difficulty: "medium",
        topic: "family"
      }
    ],
    grade4: [
      {
        title: "The Science Fair Discovery",
        text: "Marcus had been working on his science fair project for weeks. He wanted to test which type of soil helped plants grow best. He planted bean seeds in three different types of soil: sandy soil, clay soil, and potting soil. Every day for two weeks, he measured the plants and recorded his observations in a notebook. Marcus was surprised to discover that the plants in potting soil grew the tallest, while the plants in sandy soil grew the least. His careful observations and detailed records helped him win second place at the science fair. More importantly, Marcus learned that good science requires patience, careful observation, and accurate record-keeping.",
        questions: [
          {
            question: "What was Marcus trying to find out in his experiment?",
            options: ["How much water plants need", "Which soil helps plants grow best", "How long seeds take to sprout", "What plants need to survive"],
            correct: 1,
            explanation: "The text says 'He wanted to test which type of soil helped plants grow best.'",
            type: "main idea"
          },
          {
            question: "Which soil produced the tallest plants?",
            options: ["Sandy soil", "Clay soil", "Potting soil", "Regular dirt"],
            correct: 2,
            explanation: "Marcus discovered 'that the plants in potting soil grew the tallest.'",
            type: "detail"
          },
          {
            question: "What did Marcus learn was important for good science?",
            options: ["Having expensive equipment", "Working quickly", "Patience and careful observation", "Getting help from others"],
            correct: 2,
            explanation: "The text says 'good science requires patience, careful observation, and accurate record-keeping.'",
            type: "inference"
          }
        ],
        difficulty: "medium",
        topic: "science"
      }
    ],
    grade5: [
      {
        title: "The Underground Railroad",
        text: "The Underground Railroad was not actually a railroad with trains and tracks. Instead, it was a secret network of people who helped enslaved African Americans escape to freedom in the North during the 1800s. Brave conductors like Harriet Tubman risked their lives to guide escaped slaves along hidden routes. They traveled at night and hid during the day in safe houses called 'stations.' The journey was dangerous, but many families found freedom through this network. The Underground Railroad showed how ordinary people could work together to fight injustice and help others, even when it meant breaking the law.",
        questions: [
          {
            question: "What was the Underground Railroad?",
            options: ["A real railroad underground", "A secret network helping slaves escape", "A new type of train", "A government program"],
            correct: 1,
            explanation: "It was 'a secret network of people who helped enslaved African Americans escape to freedom.'",
            type: "main idea"
          },
          {
            question: "Why did people travel at night on the Underground Railroad?",
            options: ["It was cooler", "To avoid being caught", "Trains ran at night", "It was faster"],
            correct: 1,
            explanation: "The text implies they traveled at night for safety, hiding during the day.",
            type: "inference"
          },
          {
            question: "What does this story teach us about ordinary people?",
            options: ["They should follow all laws", "They can work together to fight injustice", "They should mind their own business", "They need leaders to guide them"],
            correct: 1,
            explanation: "The text says it 'showed how ordinary people could work together to fight injustice.'",
            type: "theme"
          }
        ],
        difficulty: "hard",
        topic: "history"
      }
    ],
    grade6: [
      {
        title: "Climate Change and Ocean Currents",
        text: "Ocean currents are like massive rivers flowing through the sea, carrying warm and cold water around the globe. These currents play a crucial role in regulating Earth's climate by distributing heat from the equator toward the poles. The Gulf Stream, for example, carries warm water from the Caribbean to the North Atlantic, making Western Europe much warmer than it would otherwise be. However, climate change is beginning to affect these ocean currents. As global temperatures rise, ice caps melt, adding fresh water to the oceans. This fresh water is less dense than salt water, which can disrupt the normal flow of currents. Scientists worry that if major currents like the Gulf Stream weaken or stop, it could dramatically change weather patterns worldwide, potentially making some regions much colder despite global warming.",
        questions: [
          {
            question: "How do ocean currents affect climate?",
            options: ["They create storms", "They distribute heat around the globe", "They make water salty", "They cause tides"],
            correct: 1,
            explanation: "The text says currents 'play a crucial role in regulating Earth's climate by distributing heat.'",
            type: "main idea"
          },
          {
            question: "Why might climate change disrupt ocean currents?",
            options: ["It makes water warmer", "Fresh water from melting ice is less dense", "It creates more storms", "It changes wind patterns"],
            correct: 1,
            explanation: "The text explains that fresh water from melting ice 'is less dense than salt water, which can disrupt the normal flow.'",
            type: "cause and effect"
          },
          {
            question: "What is ironic about how climate change might affect some regions?",
            options: ["They might get warmer", "They might get colder despite global warming", "They might get more rain", "They might have longer summers"],
            correct: 1,
            explanation: "The text mentions regions could become 'much colder despite global warming' if currents stop.",
            type: "inference"
          }
        ],
        difficulty: "hard",
        topic: "science"
      }
    ]
  };

  const startReading = () => {
    const gradePassages = passages[gameState.grade as keyof typeof passages];
    if (gradePassages && gradePassages.length > 0) {
      const randomPassage = gradePassages[Math.floor(Math.random() * gradePassages.length)];
      setGameState(prev => ({
        ...prev,
        currentPassage: randomPassage,
        currentQuestion: 0,
        score: 0,
        selectedAnswer: null,
        showResult: false,
        highlightedText: [],
        hintsUsed: 0,
        completed: false
      }));
    }
  };

  const selectAnswer = (answerIndex: number) => {
    if (gameState.showResult) return;
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showResult: true
    }));

    setTimeout(() => {
      const isCorrect = answerIndex === gameState.currentPassage!.questions[gameState.currentQuestion].correct;
      const newScore = isCorrect ? gameState.score + (100 - gameState.hintsUsed * 10) : gameState.score;
      
      if (gameState.currentQuestion < gameState.currentPassage!.questions.length - 1) {
        setGameState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          score: newScore,
          selectedAnswer: null,
          showResult: false,
          hintsUsed: 0
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          score: newScore,
          completed: true
        }));
      }
    }, 3000);
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
              <Select value={gameState.grade} onValueChange={(value) => setGameState(prev => ({ ...prev, grade: value }))}>
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
