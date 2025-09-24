export interface ReadingDetectiveQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  type: string;
}

export interface ReadingDetectivePassage {
  title: string;
  text: string;
  questions: ReadingDetectiveQuestion[];
  difficulty: string;
  topic: string;
}

export const readingDetectivePassages: Record<string, ReadingDetectivePassage[]> = {
  grade2: [
    {
      title: 'The Lost Puppy',
      text:
        "Emma was walking to school when she heard a small whimpering sound. She looked around and saw a tiny brown puppy hiding under a bush. The puppy looked scared and hungry. Emma gently picked up the puppy and decided to take it to the animal shelter on her way home from school. At the shelter, the workers were very happy to help find the puppy's family.",
      questions: [
        {
          question: 'Where did Emma find the puppy?',
          options: ['In her backyard', 'Under a bush', 'At school', 'At the shelter'],
          correct: 1,
          explanation: "The text says she saw the puppy hiding under a bush.",
          type: 'detail'
        },
        {
          question: 'How did the puppy look when Emma found it?',
          options: ['Happy and playful', 'Scared and hungry', 'Sleepy', 'Excited'],
          correct: 1,
          explanation: "The passage says the puppy looked scared and hungry.",
          type: 'detail'
        },
        {
          question: 'What did Emma decide to do with the puppy?',
          options: ['Keep it as a pet', 'Leave it alone', 'Take it to the shelter', 'Give it to a friend'],
          correct: 2,
          explanation: "Emma took it to the animal shelter on her way home.",
          type: 'main idea'
        }
      ],
      difficulty: 'easy',
      topic: 'animals'
    }
  ],
  grade3: [
    {
      title: 'The Magic Garden',
      text:
        "Sarah's grandmother had a special garden behind her house. Every morning, Grandma would water the plants and sing to them. Sarah thought this was silly until she noticed something amazing. The plants in Grandma's garden grew bigger and more beautiful than any other garden in the neighborhood. The flowers were more colorful, and the vegetables were larger and tastier. When Sarah asked her grandmother about the secret, Grandma smiled and said, 'Plants need love and care, just like people do.'",
      questions: [
        {
          question: "What made Grandma's garden special?",
          options: ['It had rare plants', 'The plants grew bigger and more beautiful', 'It was very large', 'It had a fence around it'],
          correct: 1,
          explanation: "The passage explains that the plants grew bigger and more beautiful than any other garden.",
          type: 'main idea'
        },
        {
          question: 'What did Grandma do every morning?',
          options: ['Pick flowers', 'Water plants and sing to them', 'Plant new seeds', 'Talk to neighbors'],
          correct: 1,
          explanation: "Grandma watered the plants and sang to them every morning.",
          type: 'detail'
        },
        {
          question: "What was Grandma's secret to having a beautiful garden?",
          options: ['Special fertilizer', 'Magic seeds', 'Love and care', 'Lots of water'],
          correct: 2,
          explanation: "Grandma said plants need love and care just like people do.",
          type: 'inference'
        }
      ],
      difficulty: 'medium',
      topic: 'family'
    }
  ],
  grade4: [
    {
      title: 'The Science Fair Discovery',
      text:
        "Marcus had been working on his science fair project for weeks. He wanted to test which type of soil helped plants grow best. He planted bean seeds in three different types of soil: sandy soil, clay soil, and potting soil. Every day for two weeks, he measured the plants and recorded his observations in a notebook. Marcus was surprised to discover that the plants in potting soil grew the tallest, while the plants in sandy soil grew the least. His careful observations and detailed records helped him win second place at the science fair. More importantly, Marcus learned that good science requires patience, careful observation, and accurate record-keeping.",
      questions: [
        {
          question: 'What was Marcus trying to find out in his experiment?',
          options: ['How much water plants need', 'Which soil helps plants grow best', 'How long seeds take to sprout', 'What plants need to survive'],
          correct: 1,
          explanation: "He wanted to test which type of soil helped plants grow best.",
          type: 'main idea'
        },
        {
          question: 'Which soil produced the tallest plants?',
          options: ['Sandy soil', 'Clay soil', 'Potting soil', 'Regular dirt'],
          correct: 2,
          explanation: "The plants in potting soil grew the tallest.",
          type: 'detail'
        },
        {
          question: 'What did Marcus learn was important for good science?',
          options: ['Having expensive equipment', 'Working quickly', 'Patience and careful observation', 'Getting help from others'],
          correct: 2,
          explanation: "He learned that good science requires patience, observation, and record-keeping.",
          type: 'inference'
        }
      ],
      difficulty: 'medium',
      topic: 'science'
    }
  ],
  grade5: [
    {
      title: 'The Underground Railroad',
      text:
        "The Underground Railroad was not actually a railroad with trains and tracks. Instead, it was a secret network of people who helped enslaved African Americans escape to freedom in the North during the 1800s. Brave conductors like Harriet Tubman risked their lives to guide escaped slaves along hidden routes. They traveled at night and hid during the day in safe houses called 'stations.' The journey was dangerous, but many families found freedom through this network. The Underground Railroad showed how ordinary people could work together to fight injustice and help others, even when it meant breaking the law.",
      questions: [
        {
          question: 'What was the Underground Railroad?',
          options: ['A real railroad underground', 'A secret network helping slaves escape', 'A new type of train', 'A government program'],
          correct: 1,
          explanation: "It was a network of people who helped enslaved African Americans escape.",
          type: 'main idea'
        },
        {
          question: 'Why did people travel at night on the Underground Railroad?',
          options: ['It was cooler', 'To avoid being caught', 'Trains ran at night', 'It was faster'],
          correct: 1,
          explanation: "They traveled at night for safety to avoid being caught.",
          type: 'inference'
        },
        {
          question: 'What does this story teach us about ordinary people?',
          options: ['They should follow all laws', 'They can work together to fight injustice', 'They should mind their own business', 'They need leaders to guide them'],
          correct: 1,
          explanation: "The passage shows ordinary people working together to fight injustice.",
          type: 'theme'
        }
      ],
      difficulty: 'hard',
      topic: 'history'
    }
  ],
  grade6: [
    {
      title: 'Climate Change and Ocean Currents',
      text:
        "Ocean currents are like massive rivers flowing through the sea, carrying warm and cold water around the globe. These currents play a crucial role in regulating Earth's climate by distributing heat from the equator toward the poles. The Gulf Stream, for example, carries warm water from the Caribbean to the North Atlantic, making Western Europe much warmer than it would otherwise be. However, climate change is beginning to affect these ocean currents. As global temperatures rise, ice caps melt, adding fresh water to the oceans. This fresh water is less dense than salt water, which can disrupt the normal flow of currents. Scientists worry that if major currents like the Gulf Stream weaken or stop, it could dramatically change weather patterns worldwide, potentially making some regions much colder despite global warming.",
      questions: [
        {
          question: 'How do ocean currents affect climate?',
          options: ['They create storms', 'They distribute heat around the globe', 'They make water salty', 'They cause tides'],
          correct: 1,
          explanation: "The passage says currents distribute heat and regulate climate.",
          type: 'main idea'
        },
        {
          question: 'Why might climate change disrupt ocean currents?',
          options: ['It makes water warmer', 'Fresh water from melting ice is less dense', 'It creates more storms', 'It changes wind patterns'],
          correct: 1,
          explanation: "Fresh water from melting ice is less dense and can disrupt normal flow.",
          type: 'cause and effect'
        },
        {
          question: 'What is ironic about how climate change might affect some regions?',
          options: ['They might get warmer', 'They might get colder despite global warming', 'They might get more rain', 'They might have longer summers'],
          correct: 1,
          explanation: "The passage notes that some regions could get colder even though the planet is warming.",
          type: 'inference'
        }
      ],
      difficulty: 'hard',
      topic: 'science'
    }
  ]
};
