export interface MathRacingQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const mathRacingQuestionBank: Record<'easy' | 'medium' | 'hard', MathRacingQuestion[]> = {
  easy: [
    {
      id: 'easy-1',
      question: '15 + 23 = ?',
      options: ['36', '38', '32', '40'],
      correct: 1,
      explanation: 'Adding 15 and 23 gives 38.'
    },
    {
      id: 'easy-2',
      question: '42 - 19 = ?',
      options: ['24', '23', '25', '21'],
      correct: 1,
      explanation: 'Subtracting 19 from 42 leaves 23.'
    },
    {
      id: 'easy-3',
      question: '6 × 7 = ?',
      options: ['48', '40', '42', '36'],
      correct: 2,
      explanation: 'Six groups of seven equal 42.'
    },
    {
      id: 'easy-4',
      question: '81 ÷ 9 = ?',
      options: ['6', '9', '8', '7'],
      correct: 1,
      explanation: 'Nine goes into 81 exactly 9 times.'
    },
    {
      id: 'easy-5',
      question: '27 + 14 = ?',
      options: ['41', '37', '43', '39'],
      correct: 0,
      explanation: '27 plus 14 equals 41.'
    },
    {
      id: 'easy-6',
      question: '64 ÷ 8 = ?',
      options: ['7', '6', '8', '9'],
      correct: 2,
      explanation: 'Eight fits into 64 eight times.'
    },
    {
      id: 'easy-7',
      question: '50 - 28 = ?',
      options: ['24', '22', '20', '18'],
      correct: 1,
      explanation: '50 minus 28 leaves 22.'
    },
    {
      id: 'easy-8',
      question: '9 × 5 = ?',
      options: ['35', '45', '40', '50'],
      correct: 1,
      explanation: 'Nine groups of five equal 45.'
    },
    {
      id: 'easy-9',
      question: '35 + 27 = ?',
      options: ['60', '63', '62', '61'],
      correct: 2,
      explanation: 'Adding 35 and 27 gives 62.'
    },
    {
      id: 'easy-10',
      question: '90 - 54 = ?',
      options: ['32', '36', '42', '38'],
      correct: 1,
      explanation: 'Subtracting 54 from 90 leaves 36.'
    }
  ],
  medium: [
    {
      id: 'medium-1',
      question: '156 + 87 = ?',
      options: ['243', '233', '253', '223'],
      correct: 0,
      explanation: 'Adding 156 and 87 equals 243.'
    },
    {
      id: 'medium-2',
      question: '72 ÷ 8 = ?',
      options: ['8', '10', '9', '12'],
      correct: 2,
      explanation: 'Eight fits into 72 nine times.'
    },
    {
      id: 'medium-3',
      question: '15 × 12 = ?',
      options: ['160', '175', '210', '180'],
      correct: 3,
      explanation: 'Fifteen groups of twelve equal 180.'
    },
    {
      id: 'medium-4',
      question: '320 - 175 = ?',
      options: ['165', '145', '155', '135'],
      correct: 1,
      explanation: 'Subtracting 175 from 320 leaves 145.'
    },
    {
      id: 'medium-5',
      question: '48 × 6 = ?',
      options: ['268', '288', '258', '298'],
      correct: 1,
      explanation: 'Multiplying 48 by 6 gives 288.'
    },
    {
      id: 'medium-6',
      question: '945 ÷ 9 = ?',
      options: ['115', '105', '95', '125'],
      correct: 1,
      explanation: 'Nine fits into 945 one hundred and five times.'
    },
    {
      id: 'medium-7',
      question: '208 + 367 = ?',
      options: ['565', '575', '585', '595'],
      correct: 1,
      explanation: 'Adding 208 and 367 gives 575.'
    },
    {
      id: 'medium-8',
      question: '630 ÷ 14 = ?',
      options: ['35', '45', '40', '50'],
      correct: 1,
      explanation: '630 divided by 14 is 45.'
    },
    {
      id: 'medium-9',
      question: '18 × 14 = ?',
      options: ['248', '258', '252', '262'],
      correct: 2,
      explanation: 'Multiplying 18 by 14 equals 252.'
    },
    {
      id: 'medium-10',
      question: '1,250 - 675 = ?',
      options: ['585', '565', '595', '575'],
      correct: 3,
      explanation: 'Subtracting 675 from 1,250 leaves 575.'
    }
  ],
  hard: [
    {
      id: 'hard-1',
      question: 'What is 3/4 of 48?',
      options: ['36', '32', '38', '42'],
      correct: 0,
      explanation: 'Three quarters of 48 equals 36.'
    },
    {
      id: 'hard-2',
      question: '0.75 + 0.25 = ?',
      options: ['1.0', '0.95', '1.1', '0.85'],
      correct: 0,
      explanation: 'Adding 0.75 and 0.25 gives 1.0.'
    },
    {
      id: 'hard-3',
      question: 'If a car travels 60 miles in 2 hours, what is its speed?',
      options: ['35 mph', '30 mph', '25 mph', '40 mph'],
      correct: 1,
      explanation: 'Speed is distance divided by time: 60 ÷ 2 = 30 mph.'
    },
    {
      id: 'hard-4',
      question: 'Solve for x: 5x - 15 = 40',
      options: ['11', '12', '10', '9'],
      correct: 0,
      explanation: 'Add 15 to both sides and divide by 5 to get x = 11.'
    },
    {
      id: 'hard-5',
      question: 'What is 35% of 240?',
      options: ['96', '84', '90', '72'],
      correct: 1,
      explanation: '35% of 240 equals 0.35 × 240 = 84.'
    },
    {
      id: 'hard-6',
      question: 'Convert 3.5 hours to minutes.',
      options: ['215', '205', '210', '200'],
      correct: 2,
      explanation: '3.5 hours × 60 minutes = 210 minutes.'
    },
    {
      id: 'hard-7',
      question: 'A rectangle has a perimeter of 54 cm and a length of 16 cm. What is the width?',
      options: ['10 cm', '12 cm', '11 cm', '9 cm'],
      correct: 2,
      explanation: 'Perimeter = 2(l + w); 54 = 2(16 + w) so w = 11 cm.'
    },
    {
      id: 'hard-8',
      question: 'What is the value of 2^5 × 3^2?',
      options: ['288', '192', '324', '256'],
      correct: 0,
      explanation: '2^5 = 32 and 3^2 = 9; 32 × 9 = 288.'
    },
    {
      id: 'hard-9',
      question: 'Simplify: (45 ÷ 5) + (64 ÷ 8)',
      options: ['18', '17', '16', '15'],
      correct: 1,
      explanation: '45 ÷ 5 = 9 and 64 ÷ 8 = 8; 9 + 8 = 17.'
    },
    {
      id: 'hard-10',
      question: 'The ratio of boys to girls is 5:7. If there are 60 students, how many are girls?',
      options: ['35', '28', '32', '30'],
      correct: 0,
      explanation: 'Total parts = 12, so each part is 5 students. Girls = 7 × 5 = 35.'
    }
  ]
};
