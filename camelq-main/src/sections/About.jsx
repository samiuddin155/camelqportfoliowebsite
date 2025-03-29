import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const About = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  // Simplified scroll-based animations
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const viewportSettings = {
    once: true,
    amount: 0.8,
    margin: "-150px"
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#0B1120] via-[#111B33] to-[#0B1120]">
      <Element name="about">
        <motion.div 
          style={{ opacity, scale }}
          className={`container relative z-10 px-4 md:px-6 2xl:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
            <motion.div 
              className="relative image-container"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5 }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className={`absolute inset-0 bg-gradient-to-br from-[#4F90FF]/20 via-[#00D8D5]/20 to-transparent rounded-3xl transform rotate-6 scale-90 transition-all duration-700 ${isImageHovered ? 'rotate-7 scale-92' : ''}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-[#4F90FF]/10 via-[#00D8D5]/10 to-transparent rounded-3xl transform -rotate-6 scale-90 transition-all duration-700 ${isImageHovered ? '-rotate-7 scale-92' : ''}`}></div>
                <motion.img
                  src="/images/camelq-1.png"
                  className={`relative z-10 w-full h-full object-contain p-6 transition-transform duration-700 ${isImageHovered ? 'translate-y-[-5px]' : ''}`}
                  alt="About Camel Q"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
              
              {/* Animated gradient orbs */}
              <motion.div 
                className={`absolute -top-10 -right-10 w-32 h-32 bg-[#4F90FF]/30 rounded-full filter blur-2xl transition-all duration-1000 ${isImageHovered ? 'scale-110 bg-[#4F90FF]/40' : 'animate-pulse-subtle'}`}
                animate={{
                  scale: isImageHovered ? 1.1 : [1, 1.05, 1],
                  opacity: isImageHovered ? 0.4 : [0.3, 0.35, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className={`absolute -bottom-10 -left-10 w-32 h-32 bg-[#00D8D5]/30 rounded-full filter blur-2xl transition-all duration-1000 ${isImageHovered ? 'scale-110 bg-[#00D8D5]/40' : 'animate-pulse-subtle delay-1000'}`}
                animate={{
                  scale: isImageHovered ? 1.1 : [1, 1.05, 1],
                  opacity: isImageHovered ? 0.4 : [0.3, 0.35, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </motion.div>

            <motion.div 
              className="relative z-2 md:max-w-lg"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="mb-3" variants={fadeInUp}>
                <p className="caption text-[#4F90FF]">ABOUT US</p>
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" variants={fadeInUp}>
                <div 
                  className="morphing-text-container inline-block"
                  onMouseEnter={() => setHoveredText('driving')} 
                  onMouseLeave={() => setHoveredText(null)}
                  style={{ minWidth: '130px' }}
                >
                  <span className={`morphing-text ${hoveredText === 'driving' ? 'morphing-text-out' : ''}`}>Driving</span>
                  <span className={`morphing-text-alt ${hoveredText === 'driving' ? 'morphing-text-in' : ''}`}>Making</span>
                </div>
                {' '}
                <div 
                  className="morphing-text-container inline-block"
                  onMouseEnter={() => setHoveredText('innovation')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text innovation-text ${hoveredText === 'innovation' ? 'morphing-text-out' : ''}`}>Innovation</span>
                  <span className={`morphing-text-alt ${hoveredText === 'innovation' ? 'morphing-text-in' : ''}`}>Excellence</span>
                </div>
                {' '}
                <div 
                  className="morphing-text-container inline-block"
                  onMouseEnter={() => setHoveredText('through')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text ${hoveredText === 'through' ? 'morphing-text-out' : ''}`}>Through</span>
                  <span className={`morphing-text-alt ${hoveredText === 'through' ? 'morphing-text-in' : ''}`}>With</span>
                </div>
                {' '}
                <div 
                  className="morphing-text-container inline-block"
                  onMouseEnter={() => setHoveredText('technology')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text ${hoveredText === 'technology' ? 'morphing-text-out' : ''}`}>Technology</span>
                  <span className={`morphing-text-alt ${hoveredText === 'technology' ? 'morphing-text-in' : ''}`}>Expertise</span>
                </div>
              </motion.h2>
              <motion.div className="space-y-4 text-base text-gray-300" variants={fadeInUp}>
                <p>
                  At Camel Q, we are passionate about transforming businesses through cutting-edge technology solutions. With years of experience and a team of dedicated professionals, we deliver excellence in every project we undertake.
                </p>
                <p>
                  Our comprehensive range of services includes:
                </p>
                <motion.ul className="space-y-2 list-none" variants={fadeInUp}>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4F90FF] rounded-full mr-3"></div>
                    Full Stack Development with Java and Python
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4F90FF] rounded-full mr-3"></div>
                    DevOps and Cloud Solutions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4F90FF] rounded-full mr-3"></div>
                    Data Analytics with Power BI
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#4F90FF] rounded-full mr-3"></div>
                    Comprehensive Testing Services
                  </li>
                </motion.ul>
                <p>
                  With a strong presence across India and a commitment to quality, we help businesses achieve their digital transformation goals efficiently and effectively.
                </p>
              </motion.div>
              <motion.div className="mt-6" variants={fadeInUp}>
                <Button className="bg-gradient-to-r from-[#4F90FF] to-[#00D8D5] hover:from-[#00D8D5] hover:to-[#4F90FF] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105" icon="/images/zap.svg">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-[#0B1120]"></div>
      </Element>

      <style jsx>{`
        /* Morphing text styles */
        .morphing-text-container {
          position: relative;
          display: inline-block;
          cursor: pointer;
          margin-right: 5px;
        }
        
        .morphing-text, .morphing-text-alt {
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          white-space: nowrap;
        }
        
        .morphing-text {
          position: relative;
          opacity: 1;
          transform: translateY(0);
        }
        
        .driving-text {
          background: linear-gradient(90deg, #4F90FF, #00D8D5);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .innovation-text {
          background: linear-gradient(90deg, #4F90FF, #00D8D5);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .morphing-text-alt {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          transform: translateY(20px);
          background: linear-gradient(90deg, #4F90FF, #00D8D5);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .morphing-text-out {
          opacity: 0;
          transform: translateY(-20px);
        }
        
        .morphing-text-in {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulse-subtle {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(1); }
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About; 