import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  techStack: string[];
  goals: string;
  process: string;
  outcome: string;
  clientQuote?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced filtering and seamless checkout experience.",
    category: "Web Development",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    goals: "Create a scalable e-commerce platform with modern UX and seamless payment integration.",
    process: "Built with React frontend, Node.js backend, and implemented real-time inventory management.",
    outcome: "Increased conversion rates by 40% and reduced cart abandonment by 30%.",
    clientQuote: "The platform exceeded our expectations and significantly boosted our online sales.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand redesign including logo, color palette, and marketing materials.",
    category: "Design",
    tags: ["Branding", "Logo", "Print"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    techStack: ["Adobe Illustrator", "Figma", "Photoshop"],
    goals: "Modernize brand identity and create cohesive visual language across all touchpoints.",
    process: "Conducted brand research, created multiple concepts, and refined based on client feedback.",
    outcome: "Brand recognition increased by 60% and customer engagement improved significantly.",
    clientQuote: "The new brand identity perfectly captures our company's vision and values."
  },
  {
    id: 3,
    title: "Social Media Campaign",
    description: "Multi-platform marketing campaign that increased engagement by 200%.",
    category: "Marketing",
    tags: ["Social Media", "Content", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techStack: ["Hootsuite", "Canva", "Google Analytics", "Facebook Ads"],
    goals: "Increase brand awareness and drive conversions through strategic social media marketing.",
    process: "Developed content strategy, created engaging visuals, and optimized ad targeting.",
    outcome: "200% increase in engagement and 150% increase in lead generation.",
    clientQuote: "The campaign delivered exceptional results beyond our initial expectations."
  },
  {
    id: 4,
    title: "IoT Smart Home System",
    description: "Connected home automation system with mobile app control and voice integration.",
    category: "IoT Projects",
    tags: ["IoT", "Mobile App", "Hardware"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    techStack: ["Arduino", "React Native", "AWS IoT", "Python"],
    goals: "Create an intuitive smart home ecosystem with seamless device integration.",
    process: "Designed hardware components, developed mobile app, and integrated cloud services.",
    outcome: "Successfully deployed in 50+ homes with 95% customer satisfaction rate.",
    clientQuote: "The system has transformed how we interact with our home environment."
  },
  {
    id: 5,
    title: "3D Product Visualization",
    description: "Interactive 3D models for product showcase and virtual showroom experience.",
    category: "3D/CAD",
    tags: ["3D Modeling", "WebGL", "VR"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    techStack: ["Blender", "Three.js", "WebGL", "Unity"],
    goals: "Create immersive 3D product experiences for enhanced customer engagement.",
    process: "Modeled products in Blender, optimized for web, and integrated interactive features.",
    outcome: "35% increase in product engagement and 25% boost in conversion rates.",
    clientQuote: "The 3D visualizations have revolutionized our product presentation."
  },
  {
    id: 6,
    title: "Dashboard Analytics UI",
    description: "Clean, intuitive dashboard design for complex data visualization and insights.",
    category: "Design",
    tags: ["UI/UX", "Dashboard", "Data Viz"],
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
    techStack: ["Figma", "React", "D3.js", "Chart.js"],
    goals: "Design an intuitive interface for complex analytics data visualization.",
    process: "User research, wireframing, prototyping, and iterative design refinement.",
    outcome: "User task completion improved by 45% and error rates decreased by 60%.",
    clientQuote: "The new dashboard has dramatically improved our data analysis workflow."
  }
];

const categories = ["All", "Web Development", "Design", "Marketing", "3D/CAD", "IoT Projects"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-600/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-200/80 dark:bg-gray-700/80 flex items-center justify-center hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
            <h2 className="text-4xl font-space font-bold mb-4 text-gray-800 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#6C63FF]/10 dark:bg-[#FF6EC7]/10 text-[#6C63FF] dark:text-[#FF6EC7] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              {project.liveUrl && (
                <Button className="flex items-center gap-2 bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 transition-transform rounded-full">
                  <ExternalLink size={16} />
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="flex items-center gap-2">
                  <Github size={16} />
                  View Code
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Goals</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.goals}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Process</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.process}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Outcome</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.outcome}</p>
            </div>
          </div>

          {project.clientQuote && (
            <div className="glass-card p-6 border-l-4 border-[#6C63FF] dark:border-[#FF6EC7]">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                "{project.clientQuote}"
              </p>
              <p className="text-gray-500 dark:text-gray-400">— Client Testimonial</p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 transition-transform rounded-full px-8">
              Start a Similar Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div className="w-2 h-2 bg-[#D9BBF9] rounded-full blur-sm" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our featured projects across web development, design, marketing, 3D modeling, and IoT engineering.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#FF6EC7] text-white shadow-lg"
                  : "bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-700/50 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6C63FF]/20 dark:hover:shadow-[#FF6EC7]/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30 rounded-full">
                    View Case Study
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-space font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#6C63FF]/10 dark:bg-[#FF6EC7]/10 text-[#6C63FF] dark:text-[#FF6EC7] rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-space font-bold mb-6 text-gray-800 dark:text-white">
              Trusted by <span className="gradient-text">Amazing Clients</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 dark:opacity-40">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 font-semibold"
              >
                Client {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
            Inspired by what you see?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build something great together. Every project starts with a conversation.
          </p>
          <Button className="bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] text-white hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] dark:border-2 dark:border-[#FF6EC7] dark:hover:shadow-[0_0_30px_#FF6EC7]/50 transition-all duration-300 rounded-full px-12 py-4 text-lg font-semibold">
            Start Your Project
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 left-10 w-64 h-64 bg-[#D9BBF9]/10 rounded-full blur-3xl dark:bg-[#6C63FF]/20"></div>
      <div className="absolute -z-10 bottom-1/4 right-10 w-48 h-48 bg-[#FF6EC7]/10 rounded-full blur-3xl dark:bg-[#FF6EC7]/20"></div>
    </div>
  );
};

export default Portfolio;