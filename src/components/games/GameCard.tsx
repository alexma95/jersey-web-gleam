
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, Play, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface GameCardProps {
  game: {
    title: string;
    description: string;
    icon: string;
    path: string;
    difficulty: "Easy" | "Medium" | "Hard";
    subjects: string[];
    estimatedTime: string;
    players?: string;
    featured?: boolean;
  };
  index?: number;
}

const GameCard = ({ game, index = 0 }: GameCardProps) => {
  const difficultyColors = {
    Easy: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    Medium: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    Hard: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
  };

  const difficultyIcons = {
    Easy: "🌱",
    Medium: "⚡",
    Hard: "🔥"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <Card className="h-full bg-card border-border/50 modern-shadow-lg hover:modern-shadow-xl transition-all duration-500 overflow-hidden relative">
        {/* Featured Badge */}
        {game.featured && (
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 modern-shadow-lg"
            >
              <Sparkles size={12} />
              FEATURED
            </motion.div>
          </div>
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0 geometric-pattern opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* Floating Icon */}
        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Zap size={16} className="text-primary-400" />
          </motion.div>
        </div>

        <CardHeader className="relative pb-4">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 15, scale: 1.2 }}
            >
              {game.icon}
            </motion.div>
            <Badge 
              className={`${difficultyColors[game.difficulty]} border font-medium px-3 py-1 text-xs flex items-center gap-1`}
            >
              <span>{difficultyIcons[game.difficulty]}</span>
              {game.difficulty}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {game.title}
          </CardTitle>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {game.subjects.map((subject, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs px-2 py-1 bg-primary/10 text-primary-700 dark:text-primary-300 border-primary/20"
              >
                {subject}
              </Badge>
            ))}
          </div>
          
          <CardDescription className="text-foreground/70 text-sm leading-relaxed">
            {game.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-foreground/60">
                <Clock size={14} className="text-primary-500" />
                <span className="font-medium">Duration</span>
              </div>
              <span className="font-semibold text-foreground">{game.estimatedTime}</span>
            </div>
            
            {game.players && (
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-foreground/60">
                  <Users size={14} className="text-primary-500" />
                  <span className="font-medium">Players</span>
                </div>
                <span className="font-semibold text-foreground">{game.players}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-foreground/60">
                <Award size={14} className="text-primary-500" />
                <span className="font-medium">Difficulty</span>
              </div>
              <span className="font-semibold text-foreground">{game.difficulty}</span>
            </div>
          </div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white modern-shadow-lg hover:modern-shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <Link to={game.path} className="flex items-center justify-center gap-2 py-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play size={16} />
                </motion.div>
                <span className="font-semibold">Play Game</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Sparkles size={14} />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </CardContent>

        {/* Hover Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </motion.div>
  );
};

export default GameCard;
