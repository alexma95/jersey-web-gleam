
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { ArrowLeft, Beaker, Microscope, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

interface Experiment {
  id: string;
  title: string;
  description: string;
  materials: string[];
  steps: string[];
  observations: string[];
  conclusion: string;
  safetyNote: string;
}

interface LabState {
  selectedExperiment: Experiment | null;
  currentStep: number;
  observations: string[];
  completed: boolean;
  safetyCheckPassed: boolean;
}

const ScienceLab = () => {
  const [labState, setLabState] = useState<LabState>({
    selectedExperiment: null,
    currentStep: 0,
    observations: [],
    completed: false,
    safetyCheckPassed: false
  });

  const experiments: Experiment[] = [
    {
      id: "volcano",
      title: "Volcanic Eruption",
      description: "Create a safe chemical reaction that mimics a volcanic eruption",
      materials: ["Baking soda", "Vinegar", "Dish soap", "Food coloring", "Funnel"],
      steps: [
        "Put on safety goggles",
        "Add 2 tablespoons of baking soda to the volcano model",
        "Add 3 drops of dish soap",
        "Add 2 drops of red food coloring",
        "Slowly pour in 1/4 cup of vinegar",
        "Observe the reaction"
      ],
      observations: [
        "Fizzing sound occurs",
        "Foam begins to form",
        "Red foam overflows like lava",
        "Reaction gradually slows down"
      ],
      conclusion: "When an acid (vinegar) meets a base (baking soda), they react to produce carbon dioxide gas, creating the fizzing eruption effect.",
      safetyNote: "Always wear safety goggles when mixing chemicals, even safe ones!"
    },
    {
      id: "magnetism",
      title: "Magnetic Fields",
      description: "Explore how magnets attract and repel different materials",
      materials: ["Bar magnet", "Iron filings", "Paper clips", "Coins", "Plastic items"],
      steps: [
        "Place the bar magnet on the table",
        "Sprinkle iron filings around the magnet",
        "Observe the pattern formed",
        "Test different materials with the magnet",
        "Record which items are attracted",
        "Try bringing two magnets together"
      ],
      observations: [
        "Iron filings form curved lines",
        "Paper clips stick to the magnet",
        "Coins may or may not be attracted",
        "Plastic items are not attracted"
      ],
      conclusion: "Magnets create invisible force fields that attract ferromagnetic materials like iron and steel, but not non-magnetic materials like plastic.",
      safetyNote: "Keep magnets away from electronic devices and credit cards!"
    },
    {
      id: "plants",
      title: "Plant Growth",
      description: "Observe how plants respond to different conditions",
      materials: ["Bean seeds", "Soil", "Pots", "Water", "Light source", "Measuring ruler"],
      steps: [
        "Plant seeds in three different pots",
        "Place one pot in sunlight",
        "Place one pot in darkness",
        "Place one pot in partial shade",
        "Water all plants equally",
        "Measure growth daily for one week"
      ],
      observations: [
        "Sunlight plant grows tallest",
        "Dark plant grows slowly and pale",
        "Partial shade plant grows moderately",
        "All plants need water to survive"
      ],
      conclusion: "Plants need sunlight for photosynthesis to grow healthy and strong. Without adequate light, plants become weak and pale.",
      safetyNote: "Wash hands after handling soil and plants!"
    }
  ];

  const startExperiment = (experiment: Experiment) => {
    setLabState({
      selectedExperiment: experiment,
      currentStep: 0,
      observations: [],
      completed: false,
      safetyCheckPassed: false
    });
  };

  const completeSafetyCheck = () => {
    setLabState(prev => ({ ...prev, safetyCheckPassed: true }));
  };

  const nextStep = () => {
    if (labState.currentStep < labState.selectedExperiment!.steps.length - 1) {
      setLabState(prev => ({ ...prev, currentStep: prev.currentStep + 1 }));
    } else {
      setLabState(prev => ({ ...prev, completed: true }));
    }
  };

  const recordObservation = (observation: string) => {
    setLabState(prev => ({
      ...prev,
      observations: [...prev.observations, observation]
    }));
  };

  const resetLab = () => {
    setLabState({
      selectedExperiment: null,
      currentStep: 0,
      observations: [],
      completed: false,
      safetyCheckPassed: false
    });
  };

  if (!labState.selectedExperiment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Link to="/games" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2" size={20} />
            Back to Games
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🔬</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Science Lab Simulator</h1>
            <p className="text-xl text-gray-600 mb-8">
              Conduct virtual experiments and learn through interactive discovery!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiments.map((experiment) => (
                <div key={experiment.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">
                    {experiment.id === 'volcano' ? '🌋' : 
                     experiment.id === 'magnetism' ? '🧲' : '🌱'}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{experiment.title}</h3>
                  <p className="text-gray-600 mb-4">{experiment.description}</p>
                  <div className="mb-4">
                    <Badge variant="outline" className="mr-2">
                      {experiment.steps.length} Steps
                    </Badge>
                    <Badge variant="outline">
                      {experiment.materials.length} Materials
                    </Badge>
                  </div>
                  <Button 
                    onClick={() => startExperiment(experiment)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Start Experiment
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const experiment = labState.selectedExperiment;

  if (!labState.safetyCheckPassed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Safety First!</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-2">Safety Note for {experiment.title}</h2>
              <p className="text-yellow-700">{experiment.safetyNote}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Safety Checklist:</h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>I have read the safety instructions</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>I will ask an adult for help if needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>I will clean up after the experiment</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={completeSafetyCheck}
              className="bg-green-600 hover:bg-green-700 mr-4"
            >
              I Understand - Start Experiment
            </Button>
            <Button 
              onClick={resetLab}
              variant="outline"
            >
              Choose Different Experiment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (labState.completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Experiment Complete!</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Lab Report: {experiment.title}</h2>
              
              <div className="text-left space-y-4">
                <div>
                  <h3 className="font-bold text-green-600">Your Observations:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {labState.observations.map((obs, index) => (
                      <li key={index}>{obs}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-blue-600">Scientific Conclusion:</h3>
                  <p>{experiment.conclusion}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button onClick={resetLab} className="flex-1">
                Try Another Experiment
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{experiment.title} Experiment</h1>
            <Badge variant="outline">
              Step {labState.currentStep + 1} of {experiment.steps.length}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Experiment Area */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Beaker className="text-green-600" />
                Current Step
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-lg font-medium">{experiment.steps[labState.currentStep]}</p>
              </div>
              
              {labState.currentStep < experiment.steps.length - 1 ? (
                <Button onClick={nextStep} className="w-full bg-blue-600 hover:bg-blue-700">
                  Complete This Step
                </Button>
              ) : (
                <Button onClick={nextStep} className="w-full bg-green-600 hover:bg-green-700">
                  Finish Experiment
                </Button>
              )}
            </div>
            
            {/* Materials & Observations */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <FlaskConical className="text-blue-600" />
                  Materials Needed
                </h3>
                <ul className="space-y-2">
                  {experiment.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Microscope className="text-purple-600" />
                  Record Observations
                </h3>
                <div className="space-y-2 mb-4">
                  {experiment.observations.map((obs, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => recordObservation(obs)}
                      disabled={labState.observations.includes(obs)}
                      className="w-full text-left justify-start"
                    >
                      {labState.observations.includes(obs) ? '✓ ' : '+ '}
                      {obs}
                    </Button>
                  ))}
                </div>
                
                {labState.observations.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h4 className="font-medium mb-2">Your Observations:</h4>
                    <ul className="text-sm space-y-1">
                      {labState.observations.map((obs, index) => (
                        <li key={index} className="text-green-600">✓ {obs}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceLab;
