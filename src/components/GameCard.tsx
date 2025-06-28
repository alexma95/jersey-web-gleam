
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  game: {
    title: string;
    description: string;
    icon: string;
    path: string;
    difficulty: string;
    subjects: string[];
    estimatedTime: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 border-2 hover:border-blue-300">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-4xl">{game.icon}</div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">{game.title}</CardTitle>
            <div className="flex gap-2 mt-1">
              {game.subjects.map((subject, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <CardDescription className="text-gray-600 text-base">
          {game.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Difficulty:</span>
            <span className="font-medium text-gray-700">{game.difficulty}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Estimated Time:</span>
            <span className="font-medium text-gray-700">{game.estimatedTime}</span>
          </div>
        </div>
        
        <Link to={game.path}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
            Play Game
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default GameCard;
