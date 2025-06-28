
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Book, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface StoryChapter {
  id: string;
  title: string;
  text: string;
  character: string;
  question: {
    text: string;
    options: string[];
    correct: number;
    explanation: string;
  };
  nextChapter: (answer: number) => string;
}

interface GameState {
  currentChapter: string;
  score: number;
  questionsAnswered: number;
  hintsUsed: number;
  storyProgress: string[];
  gameComplete: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
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
    showResult: false
  });

  const stories = {
    mystery: {
      title: "Mystery at Moonlight School",
      description: "Help Detective Sarah solve the case of the missing library books",
      character: "🕵️‍♀️",
      chapters: {
        chapter1: {
          id: "chapter1",
          title: "The Discovery",
          text: "Sarah walked into the school library on Monday morning and gasped. The new books that had arrived just last week were nowhere to be seen! Mrs. Henderson, the librarian, looked worried. 'I locked up on Friday evening, and everything was fine,' she said. 'But when I came in this morning, twelve brand-new books had vanished!' Sarah noticed something glinting under the main desk.",
          character: "🕵️‍♀️",
          question: {
            text: "What did Sarah discover that made her gasp?",
            options: [
              "The library was flooded",
              "New books were missing", 
              "The windows were broken",
              "Mrs. Henderson was sleeping"
            ],
            correct: 1,
            explanation: "The text clearly states that the new books that had arrived last week were nowhere to be seen."
          },
          nextChapter: (answer: number) => answer === 1 ? "chapter2a" : "chapter2b"
        },
        chapter2a: {
          id: "chapter2a",
          title: "The Right Track",
          text: "Sarah carefully examined the glinting object under the desk. It was a small golden button with the school's eagle emblem on it. 'This belongs to a school uniform,' Sarah thought. She also noticed muddy footprints leading from the desk to the back door. The footprints were small, about the size a student would make.",
          character: "🕵️‍♀️",
          question: {
            text: "What clues did Sarah find that might help solve the mystery?",
            options: [
              "A golden button and muddy footprints",
              "A torn piece of paper",
              "A broken window",
              "A student's backpack"
            ],
            correct: 0,
            explanation: "Sarah found a golden button with the school emblem and muddy footprints leading to the back door."
          },
          nextChapter: () => "chapter3"
        },
        chapter2b: {
          id: "chapter2b",
          title: "Missing the Clue",
          text: "Sarah looked around the library but didn't pay much attention to the small details. She decided to ask students if they had seen anything suspicious. Most students said they hadn't noticed anything unusual, but one student mentioned seeing someone near the library very early that morning.",
          character: "🕵️‍♀️",
          question: {
            text: "What information did Sarah get from the students?",
            options: [
              "Nothing helpful",
              "Someone was seen near the library early morning",
              "The books were returned",
              "The mystery was solved"
            ],
            correct: 1,
            explanation: "One student mentioned seeing someone near the library very early that morning."
          },
          nextChapter: () => "chapter3"
        },
        chapter3: {
          id: "chapter3",
          title: "The Resolution",
          text: "After following the clues, Sarah discovered that Tommy, a third-grade student, had 'borrowed' the books to create a special reading corner in his treehouse. He wanted to surprise his little sister with a library of her own but didn't realize he should have asked permission first. Tommy apologized and returned all the books safely.",
          character: "🕵️‍♀️",
          question: {
            text: "Why did Tommy take the books?",
            options: [
              "He wanted to sell them",
              "He was angry at the librarian",
              "He wanted to create a reading corner for his sister",
              "He lost his own books"
            ],
            correct: 2,
            explanation: "Tommy took the books to create a special reading corner in his treehouse to surprise his little sister."
          },
          nextChapter: () => "end"
        }
      }
    },
    space: {
      title: "Space Explorer Mission",
      description: "Join Captain Alex on an exciting journey to discover new planets",
      character: "🚀",
      chapters: {
        chapter1: {
          id: "chapter1",
          title: "The Mission Begins",
          text: "Captain Alex received an urgent message from Space Command: 'Explorer, we've detected strange signals from the Zeta system. Your mission is to investigate and report back.' Alex climbed into the spacecraft Starlight and prepared for the long journey. The ship's computer displayed three possible routes to reach the Zeta system.",
          character: "🚀",
          question: {
            text: "What was Captain Alex's mission?",
            options: [
              "To repair a broken spacecraft",
              "To investigate strange signals from the Zeta system",
              "To deliver supplies to a space station",
              "To rescue stranded astronauts"
            ],
            correct: 1,
            explanation: "Space Command asked Alex to investigate strange signals from the Zeta system."
          },
          nextChapter: (answer: number) => answer === 1 ? "chapter2a" : "chapter2b"
        },
        chapter2a: {
          id: "chapter2a",
          title: "The Discovery",
          text: "Following the safest route, Alex arrived at the Zeta system and immediately detected the source of the signals. It was coming from a small, blue planet covered in crystalline structures. As the Starlight approached, the crystals began to glow brighter, creating beautiful patterns of light across the planet's surface.",
          character: "🚀",
          question: {
            text: "What was creating the strange signals?",
            options: [
              "Broken satellites",
              "Alien spaceships",
              "Crystalline structures on a blue planet",
              "Solar storms"
            ],
            correct: 2,
            explanation: "The signals were coming from crystalline structures on a small, blue planet."
          },
          nextChapter: () => "chapter3"
        },
        chapter2b: {
          id: "chapter2b",
          title: "The Detour",
          text: "Alex chose a more adventurous route and encountered a beautiful asteroid field filled with sparkling space gems. While admiring the view, Alex noticed that some asteroids were moving in perfect formation, as if they were being guided by an intelligent force.",
          character: "🚀",
          question: {
            text: "What was unusual about the asteroids?",
            options: [
              "They were made of gold",
              "They were moving in perfect formation",
              "They were disappearing",
              "They were very large"
            ],
            correct: 1,
            explanation: "The asteroids were moving in perfect formation, as if guided by intelligence."
          },
          nextChapter: () => "chapter3"
        },
        chapter3: {
          id: "chapter3",
          title: "First Contact",
          text: "Alex discovered that the signals were actually a greeting from a peaceful alien civilization. The crystal beings communicated through light patterns and wanted to share their knowledge about growing beautiful crystal gardens that could provide clean energy. Alex became the first human ambassador to establish friendly relations with the Zeta crystal beings.",
          character: "🚀",
          question: {
            text: "What did the crystal beings want to share?",
            options: [
              "Their spaceships",
              "Knowledge about crystal gardens for clean energy",
              "Treasure maps",
              "Weapons technology"
            ],
            correct: 1,
            explanation: "The crystal beings wanted to share knowledge about growing crystal gardens that provide clean energy."
          },
          nextChapter: () => "end"
        }
      }
    },
    history: {
      title: "Time Travel Adventure",
      description: "Travel through time with Professor Emma to learn about different historical periods",
      character: "⏰",
      chapters: {
        chapter1: {
          id: "chapter1",
          title: "The Time Machine",
          text: "Professor Emma had just finished building her incredible time machine. 'Today,' she announced to her young assistant Jamie, 'we're going to visit three important moments in history!' The machine hummed with energy as Emma set the coordinates. 'Where should we go first?' she asked, showing Jamie three buttons: Ancient Egypt, Medieval Castle, or American Frontier.",
          character: "⏰",
          question: {
            text: "What had Professor Emma just finished building?",
            options: [
              "A rocket ship",
              "A time machine",
              "A robot",
              "A computer"
            ],
            correct: 1,
            explanation: "Professor Emma had just finished building her incredible time machine."
          },
          nextChapter: (answer: number) => answer === 1 ? "chapter2a" : "chapter2b"
        },
        chapter2a: {
          id: "chapter2a",
          title: "Ancient Egypt",
          text: "Emma and Jamie materialized near the Great Pyramid of Giza. They watched in amazement as hundreds of workers carefully placed massive stone blocks using ramps and levers. A kind Egyptian engineer named Khaemwaset explained how they moved the heavy stones without modern machines, using only human ingenuity and teamwork.",
          character: "⏰",
          question: {
            text: "How did the ancient Egyptians move the heavy stone blocks?",
            options: [
              "With modern cranes",
              "Using ramps and levers with teamwork",
              "With magic spells",
              "They didn't build the pyramids"
            ],
            correct: 1,
            explanation: "The Egyptians used ramps, levers, and teamwork to move the massive stone blocks."
          },
          nextChapter: () => "chapter3"
        },
        chapter2b: {
          id: "chapter2b",
          title: "Wrong Time",
          text: "Emma made a small error with the time machine controls, and they ended up in the wrong period. Instead of ancient times, they found themselves in a bustling 1950s diner with people wearing poodle skirts and listening to rock and roll music. 'Oops!' said Emma, 'Let me recalibrate the machine.'",
          character: "⏰",
          question: {
            text: "What happened when Emma made an error?",
            options: [
              "They went to the future",
              "They ended up in a 1950s diner",
              "The machine broke",
              "They stayed in the present"
            ],
            correct: 1,
            explanation: "Due to Emma's error, they ended up in a 1950s diner instead of ancient times."
          },
          nextChapter: () => "chapter3"
        },
        chapter3: {
          id: "chapter3",
          title: "Lessons Learned",
          text: "After their time-traveling adventures, Emma and Jamie returned to the present with a greater appreciation for history. They had learned that people throughout time have always been creative problem-solvers, working together to build amazing things and create beautiful cultures. 'History isn't just about memorizing dates,' Emma reflected, 'it's about understanding how people lived and what they achieved.'",
          character: "⏰",
          question: {
            text: "What important lesson did Emma and Jamie learn about history?",
            options: [
              "It's only about memorizing dates",
              "It's about understanding how people lived and what they achieved",
              "It's not important to study",
              "It's too difficult to understand"
            ],
            correct: 1,
            explanation: "They learned that history is about understanding how people lived and what they achieved, not just memorizing dates."
          },
          nextChapter: () => "end"
        }
      }
    }
  };

  const getCurrentChapter = (): StoryChapter | null => {
    if (!selectedStory || !gameStarted) return null;
    const story = stories[selectedStory as keyof typeof stories];
    return story.chapters[gameState.currentChapter as keyof typeof story.chapters] || null;
  };

  const startStory = (storyKey: string) => {
    setSelectedStory(storyKey);
    setGameState({
      currentChapter: "chapter1",
      score: 0,
      questionsAnswered: 0,
      hintsUsed: 0,
      storyProgress: [],
      gameComplete: false,
      selectedAnswer: null,
      showResult: false
    });
    setGameStarted(true);
  };

  const handleAnswer = (answerIndex: number) => {
    const chapter = getCurrentChapter();
    if (!chapter) return;

    setGameState(prev => ({ ...prev, selectedAnswer: answerIndex, showResult: true }));

    setTimeout(() => {
      const isCorrect = answerIndex === chapter.question.correct;
      const newScore = isCorrect ? gameState.score + 100 : gameState.score;
      const nextChapterId = chapter.nextChapter(answerIndex);
      const isComplete = nextChapterId === "end";

      setGameState(prev => ({
        ...prev,
        score: newScore,
        questionsAnswered: prev.questionsAnswered + 1,
        currentChapter: nextChapterId,
        storyProgress: [...prev.storyProgress, chapter.id],
        gameComplete: isComplete,
        selectedAnswer: null,
        showResult: false
      }));
    }, 3000);
  };

  const useHint = () => {
    setGameState(prev => ({ ...prev, hintsUsed: prev.hintsUsed + 1 }));
    // Highlight the correct answer briefly
    const chapter = getCurrentChapter();
    if (chapter) {
      // Simple hint implementation - could be enhanced
      alert(`Hint: Look for the answer that matches what was mentioned in the story text.`);
    }
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
      showResult: false
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
  const currentStory = stories[selectedStory as keyof typeof stories];

  if (gameState.gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Adventure Complete!</h1>
            <p className="text-gray-600 mb-6">You've successfully completed "{currentStory.title}"!</p>
            
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
              {currentStory.title}
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
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Need Help?</h3>
                <Button 
                  onClick={useHint}
                  variant="outline" 
                  className="w-full mb-3"
                >
                  Use Hint ({gameState.hintsUsed} used)
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
