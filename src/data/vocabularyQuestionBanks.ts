export interface VocabularyPair {
  id: string;
  word: string;
  definition: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const vocabularyQuestionBanks: Record<string, VocabularyPair[]> = {
  grade2: [
    { id: '1', word: 'Happy', definition: 'Feeling joy or pleasure', difficulty: 'easy', category: 'emotions' },
    { id: '2', word: 'Big', definition: 'Large in size', difficulty: 'easy', category: 'size' },
    { id: '3', word: 'Fast', definition: 'Moving quickly', difficulty: 'easy', category: 'speed' },
    { id: '4', word: 'Kind', definition: 'Being nice to others', difficulty: 'easy', category: 'character' },
    { id: '5', word: 'Bright', definition: 'Full of light', difficulty: 'easy', category: 'light' },
    { id: '6', word: 'Quiet', definition: 'Making little noise', difficulty: 'easy', category: 'sound' },
    { id: '7', word: 'Clean', definition: 'Not dirty', difficulty: 'easy', category: 'cleanliness' },
    { id: '8', word: 'Soft', definition: 'Not hard', difficulty: 'easy', category: 'texture' },
    { id: '9', word: 'Sweet', definition: 'Having a sugary taste', difficulty: 'medium', category: 'taste' },
    { id: '10', word: 'Brave', definition: 'Not afraid', difficulty: 'medium', category: 'character' },
    { id: '11', word: 'Honest', definition: 'Always telling the truth', difficulty: 'medium', category: 'character' },
    { id: '12', word: 'Gentle', definition: 'Soft and careful', difficulty: 'medium', category: 'behavior' }
  ],
  grade3: [
    { id: '13', word: 'Adventure', definition: 'An exciting experience', difficulty: 'easy', category: 'experience' },
    { id: '14', word: 'Curious', definition: 'Wanting to learn', difficulty: 'easy', category: 'learning' },
    { id: '15', word: 'Discover', definition: 'To find something new', difficulty: 'easy', category: 'exploration' },
    { id: '16', word: 'Celebrate', definition: 'To have a party', difficulty: 'easy', category: 'events' },
    { id: '17', word: 'Creative', definition: 'Good at making things', difficulty: 'medium', category: 'skills' },
    { id: '18', word: 'Generous', definition: 'Willing to share', difficulty: 'medium', category: 'character' },
    { id: '19', word: 'Patient', definition: 'Able to wait calmly', difficulty: 'medium', category: 'behavior' },
    { id: '20', word: 'Responsible', definition: 'Taking care of duties', difficulty: 'medium', category: 'character' },
    { id: '21', word: 'Magnificent', definition: 'Very beautiful', difficulty: 'hard', category: 'beauty' },
    { id: '22', word: 'Spectacular', definition: 'Impressive to look at', difficulty: 'hard', category: 'beauty' },
    { id: '23', word: 'Marvelous', definition: 'Wonderful or astonishing', difficulty: 'hard', category: 'quality' },
    { id: '24', word: 'Tremendous', definition: 'Extremely large or great', difficulty: 'hard', category: 'size' }
  ],
  grade4: [
    { id: '25', word: 'Ambitious', definition: 'Having big goals', difficulty: 'easy', category: 'goals' },
    { id: '26', word: 'Demonstrate', definition: 'To show how', difficulty: 'easy', category: 'teaching' },
    { id: '27', word: 'Evidence', definition: 'Proof of something', difficulty: 'easy', category: 'proof' },
    { id: '28', word: 'Analyze', definition: 'To study carefully', difficulty: 'medium', category: 'thinking' },
    { id: '29', word: 'Persuade', definition: 'To convince someone', difficulty: 'medium', category: 'communication' },
    { id: '30', word: 'Elaborate', definition: 'To explain in detail', difficulty: 'medium', category: 'explanation' },
    { id: '31', word: 'Fundamental', definition: 'Basic and important', difficulty: 'hard', category: 'importance' },
    { id: '32', word: 'Inevitable', definition: 'Cannot be avoided', difficulty: 'hard', category: 'certainty' },
    { id: '33', word: 'Extraordinary', definition: 'Very unusual', difficulty: 'hard', category: 'uniqueness' },
    { id: '34', word: 'Comprehensive', definition: 'Complete and thorough', difficulty: 'hard', category: 'completeness' },
    { id: '35', word: 'Significant', definition: 'Very important', difficulty: 'hard', category: 'importance' },
    { id: '36', word: 'Exceptional', definition: 'Outstanding', difficulty: 'hard', category: 'quality' }
  ],
  grade5: [
    { id: '37', word: 'Resilient', definition: 'Able to recover quickly', difficulty: 'medium', category: 'strength' },
    { id: '38', word: 'Articulate', definition: 'Express clearly', difficulty: 'medium', category: 'communication' },
    { id: '39', word: 'Collaborate', definition: 'Work together', difficulty: 'medium', category: 'teamwork' },
    { id: '40', word: 'Contemplate', definition: 'Think deeply about', difficulty: 'medium', category: 'thinking' },
    { id: '41', word: 'Innovative', definition: 'Using new ideas', difficulty: 'hard', category: 'creativity' },
    { id: '42', word: 'Perspective', definition: 'Point of view', difficulty: 'hard', category: 'viewpoint' },
    { id: '43', word: 'Legitimate', definition: 'Legal and fair', difficulty: 'hard', category: 'legality' },
    { id: '44', word: 'Elaborate', definition: 'Complex and detailed', difficulty: 'hard', category: 'complexity' },
    { id: '45', word: 'Substantial', definition: 'Large in amount', difficulty: 'hard', category: 'quantity' },
    { id: '46', word: 'Contemporary', definition: 'Modern or current', difficulty: 'hard', category: 'time' },
    { id: '47', word: 'Implications', definition: 'Possible results', difficulty: 'hard', category: 'consequences' },
    { id: '48', word: 'Versatile', definition: 'Able to adapt', difficulty: 'hard', category: 'adaptability' }
  ],
  grade6: [
    { id: '49', word: 'Phenomenon', definition: 'Observable event', difficulty: 'medium', category: 'science' },
    { id: '50', word: 'Hypothesis', definition: 'Educated guess', difficulty: 'medium', category: 'science' },
    { id: '51', word: 'Civilization', definition: 'Advanced society', difficulty: 'medium', category: 'history' },
    { id: '52', word: 'Democracy', definition: 'Government by the people', difficulty: 'medium', category: 'government' },
    { id: '53', word: 'Renaissance', definition: 'Period of cultural rebirth', difficulty: 'hard', category: 'history' },
    { id: '54', word: 'Photosynthesis', definition: 'Plant food-making process', difficulty: 'hard', category: 'science' },
    { id: '55', word: 'Metamorphosis', definition: 'Complete change in form', difficulty: 'hard', category: 'biology' },
    { id: '56', word: 'Architecture', definition: 'Art of building design', difficulty: 'hard', category: 'art' },
    { id: '57', word: 'Archaeology', definition: 'Study of ancient cultures', difficulty: 'hard', category: 'history' },
    { id: '58', word: 'Biodiversity', definition: 'Variety of life forms', difficulty: 'hard', category: 'biology' },
    { id: '59', word: 'Constitution', definition: 'Basic laws of a country', difficulty: 'hard', category: 'government' },
    { id: '60', word: 'Precipitation', definition: 'Water falling from the sky', difficulty: 'hard', category: 'weather' }
  ]
};
