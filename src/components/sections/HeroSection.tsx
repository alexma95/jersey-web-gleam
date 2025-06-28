import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Users, Award, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Students Helped",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Success Rate",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Award,
      value: "96%",
      label: "Pass Rate",
      color: "from-green-500 to-green-600"
    }
  ];

  const floatingElements = [
    {
      icon: Sparkles,
      delay: 0,
      duration: 4
    },
    {
      icon: Zap,
      delay: 1,
      duration: 5
    },
    {
      icon: Target,
      delay: 2,
      duration: 6
    }
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden bg-gradient-to-br from-background via-primary-50/30 to-secondary/10 dark:from-background dark:via-primary-950/30 dark:to-secondary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 geometric-pattern">
        <div className="absolute inset-0 geometric-dots opacity-30" />
        
        {/* Floating Geometric Shapes */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-200/20 to-secondary/20 flex items-center justify-center`}
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 30}%`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <element.icon size={32} className="text-primary-500/50" />
          </motion.div>
        ))}

        {/* Large Background Circles */}
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary-200/10 to-secondary/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-primary-200/10 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.8, 0.5, 0.8]
          }}
          transition={{
            duration: 6,
            repeat: Infinity
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20 lg:pb-24">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-effect text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-medium mb-8 modern-shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star size={16} className="text-accent" />
            </motion.div>
            <span className="font-semibold">Exclusive Content for New Jersey Students</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-shadow">
              <span className="text-foreground">Master Your</span>
              <br />
              <span className="gradient-text block">NJSLA Success</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground/70 mt-2">
                Journey
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Unlock your potential with our comprehensive collection of interactive games, 
              multimedia lessons, and proven study strategies designed specifically for New Jersey's 
              NJSLA assessments.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white modern-shadow-xl hover:modern-shadow-2xl transition-all duration-300 group relative overflow-hidden px-8 py-4 text-lg"
              >
                <Link to="/games" className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play size={20} />
                  </motion.div>
                  Start Learning Today
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-950/20 hover:border-primary-300 dark:hover:border-primary-700 modern-shadow-lg hover:modern-shadow-xl transition-all duration-300 px-8 py-4 text-lg"
              >
                <Link to="/videos" className="flex items-center gap-2">
                  <Sparkles size={16} />
                  Explore Resources
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="glass-effect rounded-2xl p-6 modern-shadow-lg group-hover:modern-shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 modern-shadow`}>
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;