import { useState, useRef, useEffect } from "react";
import { Gamepad2, Download, Award, Clock, Users, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Study Games",
      description: "Engaging educational games that make learning fun while reinforcing key NJSLA concepts across all subjects.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      darkBgColor: "from-blue-950/20 to-indigo-950/20"
    },
    {
      icon: Download,
      title: "Downloadable Materials",
      description: "Print-ready worksheets, practice tests, and study guides for Grades 3-5 that you can use offline anytime.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      darkBgColor: "from-orange-950/20 to-red-950/20"
    },
  ];

  const benefits = [
    { icon: Award, text: "96% Success Rate", subtext: "Students see improved scores", color: "text-green-600" },
    { icon: Clock, text: "Save 12+ Hours", subtext: "Efficient study methods", color: "text-blue-600" },
    { icon: Users, text: "Expert Created", subtext: "By New Jersey educators", color: "text-purple-600" },
    { icon: TrendingUp, text: "Proven Results", subtext: "Track your progress", color: "text-orange-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-effect text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full text-sm font-medium mb-8 modern-shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Award size={16} />
            </motion.div>
            <span className="font-semibold">Comprehensive Learning Platform</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6 text-shadow"
          >
            Everything You Need to
            <span className="block gradient-text mt-2">
              Ace Your NJSLA
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Our comprehensive platform combines interactive learning, expert instruction, 
            and proven study methods to ensure your NJSLA success.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              data-index={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 lg:p-10 bg-card rounded-3xl border border-border/50 modern-shadow-lg hover:modern-shadow-xl transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} dark:bg-gradient-to-br dark:${feature.darkBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles size={20} className="text-primary-400" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 modern-shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <feature.icon size={28} className="text-white" />
                  </motion.div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 lg:p-12 modern-shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                data-index={index + 4}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl mb-4 modern-shadow-lg`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <benefit.icon size={24} className={`${benefit.color} dark:text-primary-400`} />
                </motion.div>
                <div className="text-lg font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {benefit.text}
                </div>
                <div className="text-sm text-foreground/60 font-medium">
                  {benefit.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;