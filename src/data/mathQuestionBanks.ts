export interface MathQuestion {
  question: string;
  answer: number;
  operation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const mathQuestionBanks = {
  grade3: {
    addition: [
      { question: '5 + 3', answer: 8, operation: 'addition', difficulty: 'easy' as const },
      { question: '7 + 2', answer: 9, operation: 'addition', difficulty: 'easy' as const },
      { question: '4 + 6', answer: 10, operation: 'addition', difficulty: 'easy' as const },
      { question: '8 + 5', answer: 13, operation: 'addition', difficulty: 'easy' as const },
      { question: '9 + 4', answer: 13, operation: 'addition', difficulty: 'easy' as const },
      { question: '6 + 7', answer: 13, operation: 'addition', difficulty: 'medium' as const },
      { question: '8 + 8', answer: 16, operation: 'addition', difficulty: 'medium' as const },
      { question: '9 + 7', answer: 16, operation: 'addition', difficulty: 'medium' as const },
      { question: '12 + 5', answer: 17, operation: 'addition', difficulty: 'medium' as const },
      { question: '14 + 6', answer: 20, operation: 'addition', difficulty: 'hard' as const },
      { question: '15 + 4', answer: 19, operation: 'addition', difficulty: 'hard' as const },
      { question: '11 + 9', answer: 20, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '8 - 3', answer: 5, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '9 - 4', answer: 5, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '10 - 6', answer: 4, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '12 - 5', answer: 7, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '15 - 8', answer: 7, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '16 - 9', answer: 7, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '18 - 9', answer: 9, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '17 - 8', answer: 9, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '20 - 12', answer: 8, operation: 'subtraction', difficulty: 'hard' as const },
      { question: '19 - 13', answer: 6, operation: 'subtraction', difficulty: 'hard' as const },
      { question: '18 - 14', answer: 4, operation: 'subtraction', difficulty: 'hard' as const }
    ]
  },
  grade4: {
    addition: [
      { question: '25 + 17', answer: 42, operation: 'addition', difficulty: 'easy' as const },
      { question: '34 + 28', answer: 62, operation: 'addition', difficulty: 'easy' as const },
      { question: '46 + 35', answer: 81, operation: 'addition', difficulty: 'medium' as const },
      { question: '58 + 27', answer: 85, operation: 'addition', difficulty: 'medium' as const },
      { question: '67 + 29', answer: 96, operation: 'addition', difficulty: 'hard' as const },
      { question: '78 + 18', answer: 96, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '42 - 15', answer: 27, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '58 - 23', answer: 35, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '76 - 38', answer: 38, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '84 - 47', answer: 37, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '93 - 56', answer: 37, operation: 'subtraction', difficulty: 'hard' as const },
      { question: '81 - 49', answer: 32, operation: 'subtraction', difficulty: 'hard' as const }
    ],
    multiplication: [
      { question: '2 × 3', answer: 6, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '4 × 2', answer: 8, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '3 × 5', answer: 15, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '6 × 2', answer: 12, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '4 × 4', answer: 16, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '5 × 3', answer: 15, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '6 × 4', answer: 24, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '7 × 3', answer: 21, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '8 × 4', answer: 32, operation: 'multiplication', difficulty: 'hard' as const },
      { question: '9 × 5', answer: 45, operation: 'multiplication', difficulty: 'hard' as const },
      { question: '7 × 6', answer: 42, operation: 'multiplication', difficulty: 'hard' as const }
    ]
  },
  grade5: {
    addition: [
      { question: '145 + 267', answer: 412, operation: 'addition', difficulty: 'easy' as const },
      { question: '238 + 156', answer: 394, operation: 'addition', difficulty: 'easy' as const },
      { question: '389 + 245', answer: 634, operation: 'addition', difficulty: 'medium' as const },
      { question: '467 + 358', answer: 825, operation: 'addition', difficulty: 'medium' as const },
      { question: '578 + 367', answer: 945, operation: 'addition', difficulty: 'hard' as const },
      { question: '689 + 278', answer: 967, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '432 - 158', answer: 274, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '567 - 239', answer: 328, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '684 - 397', answer: 287, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '753 - 468', answer: 285, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '821 - 547', answer: 274, operation: 'subtraction', difficulty: 'hard' as const },
      { question: '904 - 678', answer: 226, operation: 'subtraction', difficulty: 'hard' as const }
    ],
    multiplication: [
      { question: '12 × 5', answer: 60, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '8 × 7', answer: 56, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '9 × 8', answer: 72, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '11 × 6', answer: 66, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '12 × 9', answer: 108, operation: 'multiplication', difficulty: 'hard' as const },
      { question: '15 × 8', answer: 120, operation: 'multiplication', difficulty: 'hard' as const }
    ],
    division: [
      { question: '24 ÷ 4', answer: 6, operation: 'division', difficulty: 'easy' as const },
      { question: '35 ÷ 5', answer: 7, operation: 'division', difficulty: 'easy' as const },
      { question: '48 ÷ 6', answer: 8, operation: 'division', difficulty: 'medium' as const },
      { question: '63 ÷ 7', answer: 9, operation: 'division', difficulty: 'medium' as const },
      { question: '84 ÷ 12', answer: 7, operation: 'division', difficulty: 'hard' as const },
      { question: '96 ÷ 8', answer: 12, operation: 'division', difficulty: 'hard' as const }
    ]
  },
  grade6: {
    addition: [
      { question: '1,245 + 3,678', answer: 4923, operation: 'addition', difficulty: 'easy' as const },
      { question: '2,567 + 1,899', answer: 4466, operation: 'addition', difficulty: 'medium' as const },
      { question: '5,678 + 2,945', answer: 8623, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '4,567 - 1,234', answer: 3333, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '7,891 - 2,456', answer: 5435, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '9,234 - 3,789', answer: 5445, operation: 'subtraction', difficulty: 'hard' as const }
    ],
    multiplication: [
      { question: '25 × 12', answer: 300, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '34 × 15', answer: 510, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '67 × 23', answer: 1541, operation: 'multiplication', difficulty: 'hard' as const }
    ],
    division: [
      { question: '144 ÷ 12', answer: 12, operation: 'division', difficulty: 'easy' as const },
      { question: '225 ÷ 15', answer: 15, operation: 'division', difficulty: 'medium' as const },
      { question: '384 ÷ 16', answer: 24, operation: 'division', difficulty: 'hard' as const }
    ]
  },
  grade7: {
    addition: [
      { question: '12,345 + 67,890', answer: 80235, operation: 'addition', difficulty: 'easy' as const },
      { question: '23,456 + 78,912', answer: 102368, operation: 'addition', difficulty: 'medium' as const },
      { question: '56,789 + 34,567', answer: 91356, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '67,890 - 12,345', answer: 55545, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '89,123 - 34,567', answer: 54556, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '123,456 - 78,912', answer: 44544, operation: 'subtraction', difficulty: 'hard' as const }
    ],
    multiplication: [
      { question: '125 × 8', answer: 1000, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '234 × 15', answer: 3510, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '456 × 27', answer: 12312, operation: 'multiplication', difficulty: 'hard' as const }
    ],
    division: [
      { question: '1,000 ÷ 25', answer: 40, operation: 'division', difficulty: 'easy' as const },
      { question: '2,400 ÷ 48', answer: 50, operation: 'division', difficulty: 'medium' as const },
      { question: '3,600 ÷ 72', answer: 50, operation: 'division', difficulty: 'hard' as const }
    ]
  },
  grade8: {
    addition: [
      { question: '15,678 + 89,234', answer: 104912, operation: 'addition', difficulty: 'easy' as const },
      { question: '34,567 + 98,765', answer: 133332, operation: 'addition', difficulty: 'medium' as const },
      { question: '78,901 + 56,789', answer: 135690, operation: 'addition', difficulty: 'hard' as const }
    ],
    subtraction: [
      { question: '98,765 - 23,456', answer: 75309, operation: 'subtraction', difficulty: 'easy' as const },
      { question: '123,456 - 67,890', answer: 55566, operation: 'subtraction', difficulty: 'medium' as const },
      { question: '234,567 - 98,765', answer: 135802, operation: 'subtraction', difficulty: 'hard' as const }
    ],
    multiplication: [
      { question: '234 × 56', answer: 13104, operation: 'multiplication', difficulty: 'easy' as const },
      { question: '567 × 89', answer: 50463, operation: 'multiplication', difficulty: 'medium' as const },
      { question: '789 × 123', answer: 97047, operation: 'multiplication', difficulty: 'hard' as const }
    ],
    division: [
      { question: '5,600 ÷ 70', answer: 80, operation: 'division', difficulty: 'easy' as const },
      { question: '8,400 ÷ 120', answer: 70, operation: 'division', difficulty: 'medium' as const },
      { question: '12,600 ÷ 180', answer: 70, operation: 'division', difficulty: 'hard' as const }
    ]
  }
};