
export interface VocabularyPair {
  id: string;
  word: string;
  definition: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const vocabularyQuestionBanks = {
  grade2: [
    { id: '1', word: 'Happy', definition: 'Feeling joy or pleasure', difficulty: 'easy' as const, category: 'emotions' },
    { id: '2', word: 'Big', definition: 'Large in size', difficulty: 'easy' as const, category: 'size' },
    { id: '3', word: 'Fast', definition: 'Moving quickly', difficulty: 'easy' as const, category: 'speed' },
    { id: '4', word: 'Kind', definition: 'Being nice to others', difficulty: 'easy' as const, category: 'character' },
    { id: '5', word: 'Bright', definition: 'Full of light', difficulty: 'easy' as const, category: 'light' },
    { id: '6', word: 'Quiet', definition: 'Making little noise', difficulty: 'easy' as const, category: 'sound' },
    { id: '7', word: 'Clean', definition: 'Not dirty', difficulty: 'easy' as const, category: 'cleanliness' },
    { id: '8', word: 'Soft', definition: 'Not hard', difficulty: 'easy' as const, category: 'texture' },
    { id: '9', word: 'Sweet', definition: 'Having a sugary taste', difficulty: 'medium' as const, category: 'taste' },
    { id: '10', word: 'Brave', definition: 'Not afraid', difficulty: 'medium' as const, category: 'character' },
    { id: '11', word: 'Honest', definition: 'Always telling the truth', difficulty: 'medium' as const, category: 'character' },
    { id: '12', word: 'Gentle', definition: 'Soft and careful', difficulty: 'medium' as const, category: 'behavior' }
  ],
  grade3: [
    { id: '13', word: 'Adventure', definition: 'An exciting experience', difficulty: 'easy' as const, category: 'experience' },
    { id: '14', word: 'Curious', definition: 'Wanting to learn', difficulty: 'easy' as const, category: 'learning' },
    { id: '15', word: 'Discover', definition: 'To find something new', difficulty: 'easy' as const, category: 'exploration' },
    { id: '16', word: 'Celebrate', definition: 'To have a party', difficulty: 'easy' as const, category: 'events' },
    { id: '17', word: 'Creative', definition: 'Good at making things', difficulty: 'medium' as const, category: 'skills' },
    { id: '18', word: 'Generous', definition: 'Willing to share', difficulty: 'medium' as const, category: 'character' },
    { id: '19', word: 'Patient', definition: 'Able to wait calmly', difficulty: 'medium' as const, category: 'behavior' },
    { id: '20', word: 'Responsible', definition: 'Taking care of duties', difficulty: 'medium' as const, category: 'character' },
    { id: '21', word: 'Magnificent', definition: 'Very beautiful', difficulty: 'hard' as const, category: 'beauty' },
    { id: '22', word: 'Tremendous', definition: 'Very large or great', difficulty: 'hard' as const, category: 'size' },
    { id: '23', word: 'Marvelous', definition: 'Wonderful', difficulty: 'hard' as const, category: 'quality' },
    { id: '24', word: 'Tremendous', definition: 'Extremely large', difficulty: 'hard' as const, category: 'size' }
  ],
  grade4: [
    { id: '25', word: 'Ambitious', definition: 'Having big goals', difficulty: 'easy' as const, category: 'goals' },
    { id: '26', word: 'Demonstrate', definition: 'To show how', difficulty: 'easy' as const, category: 'teaching' },
    { id: '27', word: 'Evidence', definition: 'Proof of something', difficulty: 'easy' as const, category: 'proof' },
    { id: '28', word: 'Analyze', definition: 'To study carefully', difficulty: 'medium' as const, category: 'thinking' },
    { id: '29', word: 'Persuade', definition: 'To convince someone', difficulty: 'medium' as const, category: 'communication' },
    { id: '30', word: 'Elaborate', definition: 'To explain in detail', difficulty: 'medium' as const, category: 'explanation' },
    { id: '31', word: 'Fundamental', definition: 'Basic and important', difficulty: 'hard' as const, category: 'importance' },
    { id: '32', word: 'Inevitable', definition: 'Cannot be avoided', difficulty: 'hard' as const, category: 'certainty' },
    { id: '33', word: 'Extraordinary', definition: 'Very unusual', difficulty: 'hard' as const, category: 'uniqueness' },
    { id: '34', word: 'Comprehensive', definition: 'Complete and thorough', difficulty: 'hard' as const, category: 'completeness' },
    { id: '35', word: 'Significant', definition: 'Very important', difficulty: 'hard' as const, category: 'importance' },
    { id: '36', word: 'Exceptional', definition: 'Outstanding', difficulty: 'hard' as const, category: 'quality' }
  ],
  grade5: [
    { id: '37', word: 'Resilient', definition: 'Able to recover quickly', difficulty: 'medium' as const, category: 'strength' },
    { id: '38', word: 'Articulate', definition: 'Express clearly', difficulty: 'medium' as const, category: 'communication' },
    { id: '39', word: 'Collaborate', definition: 'Work together', difficulty: 'medium' as const, category: 'teamwork' },
    { id: '40', word: 'Contemplate', definition: 'Think deeply about', difficulty: 'medium' as const, category: 'thinking' },
    { id: '41', word: 'Innovative', definition: 'Using new ideas', difficulty: 'hard' as const, category: 'creativity' },
    { id: '42', word: 'Perspective', definition: 'Point of view', difficulty: 'hard' as const, category: 'viewpoint' },
    { id: '43', word: 'Legitimate', definition: 'Legal and fair', difficulty: 'hard' as const, category: 'legality' },
    { id: '44', word: 'Elaborate', definition: 'Complex and detailed', difficulty: 'hard' as const, category: 'complexity' },
    { id: '45', word: 'Substantial', definition: 'Large in amount', difficulty: 'hard' as const, category: 'quantity' },
    { id: '46', word: 'Contemporary', definition: 'Modern or current', difficulty: 'hard' as const, category: 'time' },
    { id: '47', word: 'Implications', definition: 'Possible results', difficulty: 'hard' as const, category: 'consequences' },
    { id: '48', word: 'Versatile', definition: 'Able to adapt', difficulty: 'hard' as const, category: 'adaptability' }
  ],
  grade6: [
    { id: '49', word: 'Phenomenon', definition: 'Observable event', difficulty: 'medium' as const, category: 'science' },
    { id: '50', word: 'Hypothesis', definition: 'Educated guess', difficulty: 'medium' as const, category: 'science' },
    { id: '51', word: 'Civilization', definition: 'Advanced society', difficulty: 'medium' as const, category: 'history' },
    { id: '52', word: 'Democracy', definition: 'Government by the people', difficulty: 'medium' as const, category: 'government' },
    { id: '53', word: 'Renaissance', definition: 'Period of cultural rebirth', difficulty: 'hard' as const, category: 'history' },
    { id: '54', word: 'Photosynthesis', definition: 'Plant food-making process', difficulty: 'hard' as const, category: 'science' },
    { id: '55', word: 'Metamorphosis', definition: 'Complete change in form', difficulty: 'hard' as const, category: 'biology' },
    { id: '56', word: 'Architecture', definition: 'Art of building design', difficulty: 'hard' as const, category: 'art' },
    { id: '57', word: 'Archaeology', definition: 'Study of ancient cultures', difficulty: 'hard' as const, category: 'history' },
    { id: '58', word: 'Biodiversity', definition: 'Variety of life forms', difficulty: 'hard' as const, category: 'biology' },
    { id: '59', word: 'Constitution', definition: 'Basic laws of a country', difficulty: 'hard' as const, category: 'government' },
    { id: '60', word: 'Precipitation', definition: 'Water falling from sky', difficulty: 'hard' as const, category: 'weather' }
  ]
};
