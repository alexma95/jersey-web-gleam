
export interface WordCard {
  id: string;
  text: string;
  type: 'subject' | 'verb' | 'object' | 'adjective' | 'punctuation' | 'conjunction' | 'preposition' | 'article';
  color: string;
  category?: string;
}

export const sentenceQuestionBanks = {
  grade2: {
    animals: [
      { id: 'sub1', text: 'The cat', type: 'subject' as const, color: 'bg-blue-200', category: 'animals' },
      { id: 'sub2', text: 'My dog', type: 'subject' as const, color: 'bg-blue-200', category: 'animals' },
      { id: 'sub3', text: 'The bird', type: 'subject' as const, color: 'bg-blue-200', category: 'animals' },
      { id: 'sub4', text: 'A fish', type: 'subject' as const, color: 'bg-blue-200', category: 'animals' },
      { id: 'sub5', text: 'The horse', type: 'subject' as const, color: 'bg-blue-200', category: 'animals' },
      { id: 'verb1', text: 'runs', type: 'verb' as const, color: 'bg-green-200', category: 'animals' },
      { id: 'verb2', text: 'jumps', type: 'verb' as const, color: 'bg-green-200', category: 'animals' },
      { id: 'verb3', text: 'flies', type: 'verb' as const, color: 'bg-green-200', category: 'animals' },
      { id: 'verb4', text: 'swims', type: 'verb' as const, color: 'bg-green-200', category: 'animals' },
      { id: 'verb5', text: 'sleeps', type: 'verb' as const, color: 'bg-green-200', category: 'animals' },
      { id: 'obj1', text: 'quickly', type: 'object' as const, color: 'bg-yellow-200', category: 'animals' },
      { id: 'obj2', text: 'home', type: 'object' as const, color: 'bg-yellow-200', category: 'animals' },
      { id: 'obj3', text: 'outside', type: 'object' as const, color: 'bg-yellow-200', category: 'animals' },
      { id: 'obj4', text: 'happily', type: 'object' as const, color: 'bg-yellow-200', category: 'animals' },
      { id: 'punct1', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'animals' }
    ],
    family: [
      { id: 'sub6', text: 'Mom', type: 'subject' as const, color: 'bg-blue-200', category: 'family' },
      { id: 'sub7', text: 'Dad', type: 'subject' as const, color: 'bg-blue-200', category: 'family' },
      { id: 'sub8', text: 'My sister', type: 'subject' as const, color: 'bg-blue-200', category: 'family' },
      { id: 'sub9', text: 'My brother', type: 'subject' as const, color: 'bg-blue-200', category: 'family' },
      { id: 'verb6', text: 'cooks', type: 'verb' as const, color: 'bg-green-200', category: 'family' },
      { id: 'verb7', text: 'reads', type: 'verb' as const, color: 'bg-green-200', category: 'family' },
      { id: 'verb8', text: 'plays', type: 'verb' as const, color: 'bg-green-200', category: 'family' },
      { id: 'verb9', text: 'helps', type: 'verb' as const, color: 'bg-green-200', category: 'family' },
      { id: 'obj5', text: 'dinner', type: 'object' as const, color: 'bg-yellow-200', category: 'family' },
      { id: 'obj6', text: 'a book', type: 'object' as const, color: 'bg-yellow-200', category: 'family' },
      { id: 'obj7', text: 'games', type: 'object' as const, color: 'bg-yellow-200', category: 'family' },
      { id: 'punct2', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'family' }
    ]
  },
  grade3: {
    school: [
      { id: 'adj1', text: 'smart', type: 'adjective' as const, color: 'bg-purple-200', category: 'school' },
      { id: 'adj2', text: 'happy', type: 'adjective' as const, color: 'bg-purple-200', category: 'school' },
      { id: 'adj3', text: 'kind', type: 'adjective' as const, color: 'bg-purple-200', category: 'school' },
      { id: 'sub1', text: 'The teacher', type: 'subject' as const, color: 'bg-blue-200', category: 'school' },
      { id: 'sub2', text: 'My classmate', type: 'subject' as const, color: 'bg-blue-200', category: 'school' },
      { id: 'sub3', text: 'The students', type: 'subject' as const, color: 'bg-blue-200', category: 'school' },
      { id: 'verb1', text: 'learned', type: 'verb' as const, color: 'bg-green-200', category: 'school' },
      { id: 'verb2', text: 'studied', type: 'verb' as const, color: 'bg-green-200', category: 'school' },
      { id: 'verb3', text: 'wrote', type: 'verb' as const, color: 'bg-green-200', category: 'school' },
      { id: 'obj1', text: 'math problems', type: 'object' as const, color: 'bg-yellow-200', category: 'school' },
      { id: 'obj2', text: 'in the classroom', type: 'object' as const, color: 'bg-yellow-200', category: 'school' },
      { id: 'obj3', text: 'a story', type: 'object' as const, color: 'bg-yellow-200', category: 'school' },
      { id: 'punct1', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'school' }
    ],
    sports: [
      { id: 'adj4', text: 'fast', type: 'adjective' as const, color: 'bg-purple-200', category: 'sports' },
      { id: 'adj5', text: 'strong', type: 'adjective' as const, color: 'bg-purple-200', category: 'sports' },
      { id: 'sub4', text: 'The athlete', type: 'subject' as const, color: 'bg-blue-200', category: 'sports' },
      { id: 'sub5', text: 'Our team', type: 'subject' as const, color: 'bg-blue-200', category: 'sports' },
      { id: 'verb4', text: 'scored', type: 'verb' as const, color: 'bg-green-200', category: 'sports' },
      { id: 'verb5', text: 'practiced', type: 'verb' as const, color: 'bg-green-200', category: 'sports' },
      { id: 'obj4', text: 'a goal', type: 'object' as const, color: 'bg-yellow-200', category: 'sports' },
      { id: 'obj5', text: 'every day', type: 'object' as const, color: 'bg-yellow-200', category: 'sports' },
      { id: 'punct2', text: '!', type: 'punctuation' as const, color: 'bg-red-200', category: 'sports' }
    ]
  },
  grade4: {
    adventure: [
      { id: 'sub1', text: 'The brave explorer', type: 'subject' as const, color: 'bg-blue-200', category: 'adventure' },
      { id: 'sub2', text: 'The ancient treasure', type: 'subject' as const, color: 'bg-blue-200', category: 'adventure' },
      { id: 'verb1', text: 'discovered', type: 'verb' as const, color: 'bg-green-200', category: 'adventure' },
      { id: 'verb2', text: 'searched', type: 'verb' as const, color: 'bg-green-200', category: 'adventure' },
      { id: 'conj1', text: 'and', type: 'conjunction' as const, color: 'bg-orange-200', category: 'adventure' },
      { id: 'conj2', text: 'but', type: 'conjunction' as const, color: 'bg-orange-200', category: 'adventure' },
      { id: 'obj1', text: 'hidden caves', type: 'object' as const, color: 'bg-yellow-200', category: 'adventure' },
      { id: 'obj2', text: 'mysterious maps', type: 'object' as const, color: 'bg-yellow-200', category: 'adventure' },
      { id: 'punct1', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'adventure' },
      { id: 'punct2', text: ',', type: 'punctuation' as const, color: 'bg-red-200', category: 'adventure' }
    ],
    nature: [
      { id: 'sub3', text: 'The mighty oak tree', type: 'subject' as const, color: 'bg-blue-200', category: 'nature' },
      { id: 'sub4', text: 'Beautiful flowers', type: 'subject' as const, color: 'bg-blue-200', category: 'nature' },
      { id: 'verb3', text: 'bloomed', type: 'verb' as const, color: 'bg-green-200', category: 'nature' },
      { id: 'verb4', text: 'swayed', type: 'verb' as const, color: 'bg-green-200', category: 'nature' },
      { id: 'obj3', text: 'in the spring breeze', type: 'object' as const, color: 'bg-yellow-200', category: 'nature' },
      { id: 'obj4', text: 'throughout the garden', type: 'object' as const, color: 'bg-yellow-200', category: 'nature' },
      { id: 'conj3', text: 'while', type: 'conjunction' as const, color: 'bg-orange-200', category: 'nature' }
    ]
  },
  grade5: {
    science: [
      { id: 'sub1', text: 'The dedicated scientist', type: 'subject' as const, color: 'bg-blue-200', category: 'science' },
      { id: 'sub2', text: 'Advanced technology', type: 'subject' as const, color: 'bg-blue-200', category: 'science' },
      { id: 'verb1', text: 'investigated', type: 'verb' as const, color: 'bg-green-200', category: 'science' },
      { id: 'verb2', text: 'revolutionized', type: 'verb' as const, color: 'bg-green-200', category: 'science' },
      { id: 'obj1', text: 'complex equations', type: 'object' as const, color: 'bg-yellow-200', category: 'science' },
      { id: 'obj2', text: 'modern communication', type: 'object' as const, color: 'bg-yellow-200', category: 'science' },
      { id: 'conj1', text: 'because', type: 'conjunction' as const, color: 'bg-orange-200', category: 'science' },
      { id: 'conj2', text: 'although', type: 'conjunction' as const, color: 'bg-orange-200', category: 'science' },
      { id: 'punct1', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'science' }
    ]
  },
  grade6: {
    history: [
      { id: 'sub1', text: 'Ancient civilizations', type: 'subject' as const, color: 'bg-blue-200', category: 'history' },
      { id: 'sub2', text: 'Revolutionary leaders', type: 'subject' as const, color: 'bg-blue-200', category: 'history' },
      { id: 'verb1', text: 'established', type: 'verb' as const, color: 'bg-green-200', category: 'history' },
      { id: 'verb2', text: 'transformed', type: 'verb' as const, color: 'bg-green-200', category: 'history' },
      { id: 'obj1', text: 'democratic governments', type: 'object' as const, color: 'bg-yellow-200', category: 'history' },
      { id: 'obj2', text: 'throughout many centuries', type: 'object' as const, color: 'bg-yellow-200', category: 'history' },
      { id: 'conj1', text: 'consequently', type: 'conjunction' as const, color: 'bg-orange-200', category: 'history' },
      { id: 'punct1', text: '.', type: 'punctuation' as const, color: 'bg-red-200', category: 'history' }
    ]
  }
};
