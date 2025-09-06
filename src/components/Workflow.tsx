import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Workflow: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const steps: Step[] = [
    {
      id: 1,
      title: "Discovery",
      description: "We begin by understanding your vision, goals, and requirements through detailed consultation and research.",
      icon: <Lightbulb size={32} />
    },
    {
      id: 2,
      title: "Design",
      description: "Our team creates thoughtful designs that align with your brand identity and user experience goals.",
      icon: <Palette size={32} />
    },
    {
      id: 3,
      title: "Development",
      description: "We build your solution using modern technologies, ensuring performance, security, and scalability.",
      icon: <Code size={32} />
    },
    {
      id: 4,
      title: "Launch",
      description: "After thorough testing and optimization, we deploy your project and provide ongoing support.",
      icon: <Rocket size={32} />
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 border border-[#363A3D] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#363A3D] transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Our <span className="font-semibold">Process</span>
          </h2>
          <p className="text-lg text-[#363A3D]/70 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to completion.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#363A3D]/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#363A3D] text-[#FFFFFF] rounded-full flex items-center justify-center text-sm font-semibold">
                  {step.id}
                </div>

                <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
                  <div className="text-[#363A3D] mb-6 flex justify-center">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#363A3D] mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#363A3D]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-0.5 h-8 bg-[#363A3D]/20"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;