import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Github } from 'lucide-react';
import shImage from '../img/sayyid.png';
import auliaImage from '../img/auliacropped.png';
import akmalImage from '../img/akmalcropped.png';

interface Member {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const Members: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const members: Member[] = [
    {
      id: 1,
      name: "Sayyid Haris",
      role: "Lead Manager",
      bio: "Passionate about creating meaningful experiences through thoughtful design and strategic thinking.",
      image: shImage,
      social: {
        linkedin: "#",
        twitter: "#",
      }
    },
    {
      id: 2,
      name: "Aulia Rahman",
      role: "Lead Designer",
      bio: "Full-stack developer with expertise in modern web technologies and scalable architecture solutions.",
      image: auliaImage,
      social: {
        linkedin: "#",
        github: "#",
      }
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Lead Engineer",
      bio: "User-centered design advocate who believes in creating intuitive and accessible digital experiences.",
      image: akmalImage,
      social: {
        linkedin: "#",
        twitter: "#",
      }
    }
  ];

  return (
    <section id="members" className="py-20 bg-[#363A3D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#FFFFFF] mb-6">
            Meet Our <span className="font-semibold">Team</span>
          </h2>
          <p className="text-lg text-[#FFFFFF]/70 max-w-2xl mx-auto">
            A diverse group of creative and technical professionals united by our passion for exceptional software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-[#FFFFFF] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-[#363A3D] mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-sm font-medium text-[#363A3D]/60 uppercase tracking-wide mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-[#363A3D]/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="flex-grow"></div> {/* This will push the social links to the bottom */}
                <div className="mt-6 flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-[#363A3D]/10 rounded-full text-[#363A3D] hover:bg-[#363A3D] hover:text-[#FFFFFF] transition-all duration-300"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-[#363A3D]/10 rounded-full text-[#363A3D] hover:bg-[#363A3D] hover:text-[#FFFFFF] transition-all duration-300"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="p-2 bg-[#363A3D]/10 rounded-full text-[#363A3D] hover:bg-[#363A3D] hover:text-[#FFFFFF] transition-all duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;