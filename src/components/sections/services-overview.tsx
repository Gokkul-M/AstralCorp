import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "E-Commerce, APIs, CMS, Hosting, SEO",
      features: ["React & Next.js", "Custom APIs", "E-commerce Solutions", "SEO Optimization"]
    },
    {
      icon: "🎨", 
      title: "UI/UX Design",
      description: "Branding, UI/UX, Social Creatives",
      features: ["User Experience", "Brand Identity", "Social Media Graphics", "Prototyping"]
    },
    {
      icon: "📈",
      title: "Digital Marketing", 
      description: "Ads, Email Marketing, SEO",
      features: ["Google Ads", "Email Campaigns", "Social Media", "Analytics"]
    },
    {
      icon: "🧱",
      title: "3D & IoT Engineering",
      description: "CAD Modeling & Product Engineering", 
      features: ["3D Modeling", "IoT Solutions", "Product Design", "Prototyping"]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0B0B0F]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions crafted for your digital success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card group p-6 rounded-xl bg-white/30 dark:bg-[#14141F]/50 backdrop-blur-xl border border-white/20 dark:border-[#6C63FF]/20 transition-all duration-300 hover:glow-blue hover:scale-[1.03] shadow-md"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-space">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

              <ul className="text-sm space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="w-2 h-2 mr-2 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#D9BBF9]"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:border-[#6C63FF] group-hover:text-[#6C63FF] dark:group-hover:border-[#FF6EC7] dark:group-hover:text-[#FF6EC7] transition-all"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
