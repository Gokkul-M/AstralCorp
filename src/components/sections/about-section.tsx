import React from "react";
const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden dark:bg-[#0B0B0F]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 text-gray-800 dark:text-white">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We're a creative powerhouse dedicated to transforming ideas into stunning visual experiences. From startups to enterprises, we blend artistic vision with technical expertise to deliver solutions that not only look incredible but perform flawlessly.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-[#6C63FF] dark:border-[#FF6EC7]">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💡</div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    "Every pixel matters, every interaction counts, and every project deserves a unique approach."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-space font-semibold text-gray-800 dark:text-white">
                Our Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe in the power of thoughtful design and clean code. Our team combines years of experience with fresh perspectives to create digital experiences that stand the test of time and make a lasting impact.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="glass-card p-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                alt="Our creative team collaborating"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#D9BBF9] rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-2xl">✨</span>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-[#D9BBF9]/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -z-10 bottom-10 -right-10 w-24 h-24 bg-[#FF6EC7]/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;