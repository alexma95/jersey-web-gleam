export interface ReadingAdventureNextStep {
  correct?: string;
  incorrect?: string;
  default?: string;
}

export interface ReadingAdventureQuestion {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  next: ReadingAdventureNextStep;
}

export interface ReadingAdventureChapter {
  id: string;
  title: string;
  text: string;
  character: string;
  question: ReadingAdventureQuestion;
}

export interface ReadingAdventureStory {
  id: string;
  title: string;
  description: string;
  character: string;
  chapters: Record<string, ReadingAdventureChapter>;
}

export const readingAdventureStories: Record<string, ReadingAdventureStory> = {
  mystery: {
    id: 'mystery',
    title: 'Mystery at Moonlight School',
    description: 'Help Detective Sarah solve the case of the missing library books.',
    character: '🕵️‍♀️',
    chapters: {
      chapter1: {
        id: 'chapter1',
        title: 'The Discovery',
        text:
          "Sarah walked into the school library on Monday morning and gasped. The new books that had arrived just last week were nowhere to be seen! Mrs. Henderson, the librarian, looked worried. 'I locked up on Friday evening, and everything was fine,' she said. 'But when I came in this morning, twelve brand-new books had vanished!' Sarah noticed something glinting under the main desk.",
        character: '🕵️‍♀️',
        question: {
          text: 'What did Sarah discover that made her gasp?',
          options: ['The library was flooded', 'New books were missing', 'The windows were broken', 'Mrs. Henderson was sleeping'],
          correct: 1,
          explanation: 'The passage states that the new books were nowhere to be seen.',
          next: {
            correct: 'chapter2a',
            incorrect: 'chapter2b'
          }
        }
      },
      chapter2a: {
        id: 'chapter2a',
        title: 'The Right Track',
        text:
          "Sarah carefully examined the glinting object under the desk. It was a small golden button with the school's eagle emblem on it. 'This belongs to a school uniform,' Sarah thought. She also noticed muddy footprints leading from the desk to the back door. The footprints were small, about the size a student would make.",
        character: '🕵️‍♀️',
        question: {
          text: 'What clues did Sarah find that might help solve the mystery?',
          options: ['A golden button and muddy footprints', 'A torn piece of paper', 'A broken window', "A student's backpack"],
          correct: 0,
          explanation: 'Sarah found a golden button and muddy footprints leading to the back door.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter2b: {
        id: 'chapter2b',
        title: 'Missing the Clue',
        text:
          "Sarah looked around the library but did not pay much attention to the small details. She decided to ask students if they had seen anything suspicious. Most students said they had not noticed anything unusual, but one student mentioned seeing someone near the library very early that morning.",
        character: '🕵️‍♀️',
        question: {
          text: 'What information did Sarah get from the students?',
          options: ['Nothing helpful', 'Someone was seen near the library early morning', 'The books were returned', 'The mystery was solved'],
          correct: 1,
          explanation: 'A student reported seeing someone near the library very early that morning.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter3: {
        id: 'chapter3',
        title: 'The Resolution',
        text:
          "After following the clues, Sarah discovered that Tommy, a third-grade student, had 'borrowed' the books to create a special reading corner in his treehouse. He wanted to surprise his little sister with a library of her own but did not realize he should have asked permission first. Tommy apologized and returned all the books safely.",
        character: '🕵️‍♀️',
        question: {
          text: 'Why did Tommy take the books?',
          options: ['He wanted to sell them', 'He was angry at the librarian', 'He wanted to create a reading corner for his sister', 'He lost his own books'],
          correct: 2,
          explanation: 'Tommy was trying to surprise his sister with a reading corner.',
          next: {
            default: 'end'
          }
        }
      }
    }
  },
  space: {
    id: 'space',
    title: 'Space Explorer Mission',
    description: 'Join Captain Alex on an exciting journey to discover new planets.',
    character: '🚀',
    chapters: {
      chapter1: {
        id: 'chapter1',
        title: 'The Mission Begins',
        text:
          "Captain Alex received an urgent message from Space Command: 'Explorer, we've detected strange signals from the Zeta system. Your mission is to investigate and report back.' Alex climbed into the spacecraft Starlight and prepared for the long journey. The ship's computer displayed three possible routes to reach the Zeta system.",
        character: '🚀',
        question: {
          text: "What was Captain Alex's mission?",
          options: ['To repair a broken spacecraft', 'To investigate strange signals from the Zeta system', 'To deliver supplies to a space station', 'To rescue stranded astronauts'],
          correct: 1,
          explanation: 'Space Command asked Alex to investigate strange signals from the Zeta system.',
          next: {
            correct: 'chapter2a',
            incorrect: 'chapter2b'
          }
        }
      },
      chapter2a: {
        id: 'chapter2a',
        title: 'The Discovery',
        text:
          'Following the safest route, Alex arrived at the Zeta system and immediately detected the source of the signals. It was coming from a small, blue planet covered in crystalline structures. As the Starlight approached, the crystals began to glow brighter, creating beautiful patterns of light across the planet\'s surface.',
        character: '🚀',
        question: {
          text: 'What was creating the strange signals?',
          options: ['Broken satellites', 'Alien spaceships', 'Crystalline structures on a blue planet', 'Solar storms'],
          correct: 2,
          explanation: 'The signals were coming from crystalline structures on a small, blue planet.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter2b: {
        id: 'chapter2b',
        title: 'The Detour',
        text:
          'Alex chose a more adventurous route and encountered a beautiful asteroid field filled with sparkling space gems. While admiring the view, Alex noticed that some asteroids were moving in perfect formation, as if they were being guided by an intelligent force.',
        character: '🚀',
        question: {
          text: 'What was unusual about the asteroids?',
          options: ['They were made of gold', 'They were moving in perfect formation', 'They were disappearing', 'They were very large'],
          correct: 1,
          explanation: 'The asteroids were moving in perfect formation, as if guided by intelligence.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter3: {
        id: 'chapter3',
        title: 'First Contact',
        text:
          'Alex discovered that the signals were actually a greeting from a peaceful alien civilization. The crystal beings communicated through light patterns and wanted to share their knowledge about growing beautiful crystal gardens that could provide clean energy. Alex became the first human ambassador to establish friendly relations with the Zeta crystal beings.',
        character: '🚀',
        question: {
          text: 'What did the crystal beings want to share?',
          options: ['Their spaceships', 'Knowledge about crystal gardens for clean energy', 'Treasure maps', 'Weapons technology'],
          correct: 1,
          explanation: 'They wanted to share how to grow crystal gardens that provide clean energy.',
          next: {
            default: 'end'
          }
        }
      }
    }
  },
  history: {
    id: 'history',
    title: 'Time-Traveling Historians',
    description: 'Travel through time with Maya and Leo to protect important moments in history.',
    character: '⌛',
    chapters: {
      chapter1: {
        id: 'chapter1',
        title: 'The Secret Mission',
        text:
          'Maya and Leo activated the time compass and landed in Philadelphia in 1776. Their guide, Professor Wren, explained that someone was trying to steal the newly written Declaration of Independence before it could be signed. The document was hidden in Independence Hall, and guards were keeping watch.',
        character: '⌛',
        question: {
          text: 'Why did Maya and Leo travel to Philadelphia?',
          options: ['To watch a parade', 'To stop the Declaration from being stolen', 'To visit family', 'To test a new invention'],
          correct: 1,
          explanation: 'They were sent to make sure the Declaration of Independence was not stolen.',
          next: {
            correct: 'chapter2a',
            incorrect: 'chapter2b'
          }
        }
      },
      chapter2a: {
        id: 'chapter2a',
        title: 'The Hidden Message',
        text:
          'Inside Independence Hall, Maya discovered a note tucked beneath the meeting table. It warned that a spy planned to sneak in through the bell tower during the signing ceremony. Leo quickly climbed the stairs to warn the guards, who quietly surrounded the tower entrance.',
        character: '⌛',
        question: {
          text: 'How did the team learn about the spy\'s plan?',
          options: ['They overheard a conversation outside', 'They found a warning note under the table', 'A guard told them', 'Professor Wren predicted it'],
          correct: 1,
          explanation: 'Maya found a warning note beneath the meeting table.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter2b: {
        id: 'chapter2b',
        title: 'The Close Call',
        text:
          'Instead of searching the hall, Maya and Leo checked the courtyard. They almost missed the spy until they noticed someone carrying a rolled-up document toward a carriage. When they called for help, the guards rushed over, and the thief dropped the fake Declaration before escaping.',
        character: '⌛',
        question: {
          text: 'What clue helped Maya and Leo spot the spy?',
          options: ['A torn cloak', 'A rolled-up document near a carriage', 'Footprints in the mud', 'A broken window'],
          correct: 1,
          explanation: 'They saw someone leaving with a rolled-up document toward a carriage.',
          next: {
            default: 'chapter3'
          }
        }
      },
      chapter3: {
        id: 'chapter3',
        title: 'History Protected',
        text:
          'Thanks to Maya and Leo, the Declaration of Independence remained safe, and the signing ceremony continued without interruption. Professor Wren congratulated them for preserving history. The time compass glowed, signaling that it was time to return home and prepare for the next mission.',
        character: '⌛',
        question: {
          text: 'What was the result of Maya and Leo\'s mission?',
          options: ['The Declaration was lost', 'History stayed on track', 'The compass stopped working', 'They had to stay in 1776'],
          correct: 1,
          explanation: 'They protected the Declaration, keeping history on track.',
          next: {
            default: 'end'
          }
        }
      }
    }
  }
};
