import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Photography Booking Platform",
      category: "Web Development",
      description: "A simple way for clients to book photographers, secure their schedule, and attach payments — all in one smooth experience.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with your image path
      tags: ["React", "Next.js", "PostgreSQL"],
      link: "https://projectkuro.vercel.app/" // Replace with your project link
    },
    {
      id: 2,
      title: "Akavia Rates Your Anime!",
      category: "Web Development",
      description: "A fun web app that predicts the attractiveness of anime characters using a custom-trained machine learning regression model, blending subjective ratings with objective features.",
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800", // placeholder stock image, anime-inspired UI screenshot would be even better
      tags: ["Machine Learning", "Regression", "Web App"],
      link: ""
    }
    // {
    //   id: 2,
    //   title: "Brand Identity Design",
    //   category: "Branding",
    //   description: "Complete brand identity package including logo, guidelines, and marketing materials.",
    //   image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800", // Replace with your image path
    //   tags: ["Design", "Branding", "Identity"],
    //   link: "#" // Replace with your project link
    // }
    // ,
    // {
    //   id: 3,
    //   title: "Mobile Banking App",
    //   category: "Mobile Development",
    //   description: "Secure and intuitive mobile banking application with advanced features.",
    //   image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["React Native", "Security", "FinTech"]
    // },
    // {
    //   id: 4,
    //   title: "Corporate Website",
    //   category: "Web Design",
    //   description: "Professional corporate website with modern design and optimized performance.",
    //   image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   tags: ["UI/UX", "Performance", "SEO"]
    // }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#363A3D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#FFFFFF] mb-6">
            Selected <span className="font-semibold">Works</span>
          </h2>
          <p className="text-lg text-[#FFFFFF]/70 max-w-2xl mx-auto">
            A showcase of our finest projects that demonstrate our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] hover:transform hover:scale-[1.02] transition-all duration-500 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#363A3D]/60 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-[#363A3D] text-[#FFFFFF] rounded-full hover:scale-110 transform transition-transform">
                    <Eye size={16} />
                  </button>
                </div>
                
                <h3 className="text-xl font-semibold text-[#363A3D] mb-3">
                  {project.title}
                </h3>
                
                <p className="text-[#363A3D]/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex-grow"></div> {/* This will push the tags to the bottom */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#363A3D]/10 text-[#363A3D] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#363A3D]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#FFFFFF] text-[#363A3D] px-6 py-3 rounded-full font-medium hover:scale-105 transform transition-transform"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="flex items-center space-x-2 bg-[#FFFFFF]/80 text-[#363A3D]/70 px-6 py-3 rounded-full font-medium">
                    <span>Link Unavailable</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;