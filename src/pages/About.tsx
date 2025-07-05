import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/floating-shapes";
import { motion } from "framer-motion";
import ChromaGrid from "@/components/ui/chroma-grid"; // Adjust path as needed

const About = () => {
  const milestones = [
    { year: "2020", title: "Founded", description: "Started with a vision to revolutionize digital experiences" },
    { year: "2021", title: "First Breakthrough", description: "Developed our signature glassmorphic design system" },
    { year: "2022", title: "Growth", description: "Expanded team and served 100+ clients globally" },
    { year: "2023", title: "Innovation", description: "Pioneered neon-aesthetic web applications" },
  ];

  const team = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Chen",
      subtitle: "Creative Director",
      handle: "@alexchen",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://linkedin.com/in/alexchen"
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Sarah Kim",
      subtitle: "Lead Developer",
      handle: "@sarahkim",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg,#10B981,#000)",
      url: "https://github.com/sarahkim"
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Mike Rodriguez",
      subtitle: "UX Strategist",
      handle: "@mikerodriguez",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg,#F59E0B,#000)",
      url: "https://dribbble.com/mikerodriguez"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 tracking-tight">
              About <span className="gradient-text">NeonFlow Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              We're a passionate team of designers and developers crafting the future of digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/20 dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-space font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To push the boundaries of what's possible in digital design, creating immersive experiences 
                that blend cutting-edge technology with stunning visual aesthetics.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in the power of glassmorphism and neon aesthetics to create interfaces 
                that feel both futuristic and approachable.
              </p>
              <Button variant="hero" size="lg" className="transition-all duration-300 hover:scale-105">
                Join Our Journey
              </Button>
            </div>
            <div className="glass-card p-8 glow-purple rounded-2xl shadow-xl backdrop-blur">
              <h3 className="text-2xl font-space font-semibold mb-4 gradient-text">
                Our Values
              </h3>
              <ul className="space-y-4">
                {[
                  "Innovation in every pixel",
                  "User-centric design thinking",
                  "Performance without compromise",
                  "Beautiful, accessible experiences"
                ].map((value, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space font-bold text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-0.5 before:w-1 before:bg-gradient-to-b before:from-neon-purple before:to-neon-blue">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`mb-12 flex items-start gap-6 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${isLeft ? "text-left" : "text-right"}`}>
                    <div className="glass-card p-6 rounded-xl shadow-lg glow-blue group hover:glow-pink transition-all duration-300">
                      <span className="text-sm font-space gradient-text block mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-space font-semibold mb-1 text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/20 dark:bg-[#0B0B0F]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space font-bold text-center mb-16">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <ChromaGrid items={team} className="pt-4 " />
        </div>
      </section>
    </div>
  );
};

export default About;
