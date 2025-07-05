import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingShapes from "@/components/floating-shapes";

const Services = () => {
  const services = [
    {
      id: "design",
      title: "UI/UX Design",
      icon: "🎨",
      description: "Stunning glassmorphic interfaces with neon aesthetics",
      features: [
        "Glassmorphism Design Systems",
        "Neon Color Palettes", 
        "Interactive Prototypes",
        "User Research & Testing"
      ]
    },
    {
      id: "development", 
      title: "Web Development",
      icon: "⚡",
      description: "Modern, performant web applications",
      features: [
        "React & TypeScript",
        "Responsive Design",
        "Performance Optimization",
        "SEO & Accessibility"
      ]
    },
    {
      id: "branding",
      title: "Brand Identity", 
      icon: "✨",
      description: "Complete brand experiences that shine",
      features: [
        "Logo & Visual Identity",
        "Brand Guidelines",
        "Marketing Materials",
        "Digital Asset Creation"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions that bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="design" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 glass-card p-2 mb-12">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                >
                  <span className="mr-2 text-lg">{service.icon}</span>
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-space font-bold mb-6">
                      <span className="gradient-text">{service.title}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"></div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" size="lg">
                      Get Started
                    </Button>
                  </div>
                  <div className="glass-card p-8 glow-blue">
                    <div className="text-6xl mb-6 text-center">{service.icon}</div>
                    <h3 className="text-2xl font-space font-semibold text-center mb-4 gradient-text">
                      Premium Quality
                    </h3>
                    <p className="text-muted-foreground text-center">
                      Every project is crafted with attention to detail and the latest design trends.
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space font-bold text-center mb-16">
            Our <span className="gradient-text">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", description: "Understanding your vision and goals" },
              { step: "02", title: "Design", description: "Creating beautiful, functional designs" }, 
              { step: "03", title: "Develop", description: "Building with cutting-edge technology" },
              { step: "04", title: "Deploy", description: "Launching your project to the world" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 mb-4 hover:scale-105 transition-all duration-300 glow-purple group-hover:glow-pink">
                  <div className="text-3xl font-space font-bold gradient-text mb-2">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-space font-semibold mb-2 text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;