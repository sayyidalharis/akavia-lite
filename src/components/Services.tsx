import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, Code, Smartphone, Search, Zap, Shield, Brain, BarChart3 } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      icon: <Code size={32} />,
      features: ["Responsive Design", "Performance Optimization", "SEO Ready"]
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      icon: <Palette size={32} />,
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone size={32} />,
      features: ["Native Development", "Cross-Platform", "App Store Optimization"]
    },
    {
      id: 4,
      title: "Data & Business Intelligence",
      description: "Transform raw data into actionable insights with streamlined processing, reporting, and visualization.",
      icon: <BarChart3 size={32} />, // or use Database / LineChart / PieChart depending on your style
      features: ["Data Processing", "Automated Reporting", "Business Intelligence Dashboards"]
    },
    {
      id: 5,
      title: "Performance",
      description: "Speed optimization and performance monitoring to ensure the best user experience.",
      icon: <Zap size={32} />,
      features: ["Speed Optimization", "Core Web Vitals", "Monitoring"]
    },
    {
      id: 6,
      title: "AI Integration",
      description: "Seamlessly integrate AI solutions into your workflows to enhance efficiency and decision-making.",
      icon: <Brain size={32} />, // if you're using lucide-react, Brain icon works well
      features: ["Custom AI Models", "Process Automation", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#363A3D] mb-6">
            Our <span className="font-semibold">Services</span>
          </h2>
          <p className="text-lg text-[#363A3D]/70 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to meet your unique business needs and objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <div className="text-[#363A3D] mb-6 group-hover:scale-110 transform transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-[#363A3D] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#363A3D]/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-[#363A3D]/60"
                  >
                    <div className="w-1.5 h-1.5 bg-[#363A3D]/40 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;