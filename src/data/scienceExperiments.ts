export interface ScienceExperiment {
  id: string;
  title: string;
  description: string;
  materials: string[];
  steps: string[];
  observations: string[];
  conclusion: string;
  safetyNote: string;
  icon: string;
  focus: string;
}

export const scienceExperiments: ScienceExperiment[] = [
  {
    id: 'volcano',
    title: 'Volcanic Eruption',
    description: 'Create a safe chemical reaction that mimics a volcanic eruption.',
    materials: ['Baking soda', 'Vinegar', 'Dish soap', 'Food coloring', 'Funnel'],
    steps: [
      'Put on safety goggles.',
      'Add 2 tablespoons of baking soda to the volcano model.',
      'Add 3 drops of dish soap.',
      'Add 2 drops of red food coloring.',
      'Slowly pour in 1/4 cup of vinegar.',
      'Observe the reaction.'
    ],
    observations: [
      'Fizzing sound occurs.',
      'Foam begins to form.',
      'Red foam overflows like lava.',
      'Reaction gradually slows down.'
    ],
    conclusion:
      'When an acid (vinegar) meets a base (baking soda), they react to produce carbon dioxide gas, creating the fizzing eruption effect.',
    safetyNote: 'Always wear safety goggles when mixing chemicals, even safe ones.',
    icon: '🌋',
    focus: 'Chemical Reactions'
  },
  {
    id: 'magnetism',
    title: 'Magnetic Fields',
    description: 'Explore how magnets attract and repel different materials.',
    materials: ['Bar magnet', 'Iron filings', 'Paper clips', 'Coins', 'Plastic items'],
    steps: [
      'Place the bar magnet on the table.',
      'Sprinkle iron filings around the magnet.',
      'Observe the pattern formed.',
      'Test different materials with the magnet.',
      'Record which items are attracted.',
      'Try bringing two magnets together.'
    ],
    observations: [
      'Iron filings form curved lines.',
      'Paper clips stick to the magnet.',
      'Coins may or may not be attracted.',
      'Plastic items are not attracted.'
    ],
    conclusion:
      'Magnets create invisible force fields that attract ferromagnetic materials like iron and steel, but not non-magnetic materials like plastic.',
    safetyNote: 'Keep magnets away from electronic devices and credit cards.',
    icon: '🧲',
    focus: 'Physics'
  },
  {
    id: 'plants',
    title: 'Plant Growth',
    description: 'Observe how plants respond to different conditions.',
    materials: ['Bean seeds', 'Soil', 'Pots', 'Water', 'Light source', 'Measuring ruler'],
    steps: [
      'Plant seeds in three different pots.',
      'Place one pot in sunlight.',
      'Place one pot in darkness.',
      'Place one pot in partial shade.',
      'Water all plants equally.',
      'Measure growth daily for one week.'
    ],
    observations: [
      'Sunlight plant grows tallest.',
      'Dark plant grows slowly and pale.',
      'Partial shade plant grows moderately.',
      'All plants need water to survive.'
    ],
    conclusion:
      'Plants need sunlight for photosynthesis to grow healthy and strong. Without adequate light, plants become weak and pale.',
    safetyNote: 'Wash hands after handling soil and plants.',
    icon: '🌱',
    focus: 'Life Science'
  },
  {
    id: 'water-cycle',
    title: 'Mini Water Cycle',
    description: 'Model evaporation, condensation, and precipitation using household materials.',
    materials: ['Large bowl', 'Small cup', 'Plastic wrap', 'Warm water', 'Ice cubes'],
    steps: [
      'Fill the large bowl halfway with warm water.',
      'Place the empty small cup in the center of the bowl.',
      'Cover the bowl tightly with plastic wrap.',
      'Put ice cubes on top of the plastic wrap.',
      'Observe droplets forming on the underside of the wrap.',
      'Watch as water drips into the small cup.'
    ],
    observations: [
      'Steam rises from the warm water.',
      'Water droplets collect beneath the plastic wrap.',
      'Droplets fall into the cup like rain.'
    ],
    conclusion:
      'Warm water evaporates, condenses on the cool plastic wrap, and falls as precipitation into the cup—just like the real water cycle.',
    safetyNote: 'Use caution with warm water and ask an adult for help if needed.',
    icon: '💧',
    focus: 'Earth Science'
  }
];
