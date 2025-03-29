import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import { useState, useEffect } from "react";

const Hero = () => {
  const [visibleElements, setVisibleElements] = useState({
    badge: false,
    heading: false,
    paragraph: false,
    button: false,
    imageLoaded: false
  });
  
  const [hoveredText, setHoveredText] = useState(null);
  const [initialAnimation, setInitialAnimation] = useState({
    empowering: false,
    digital: false,
    transformation: false
  });

  useEffect(() => {
    const timers = {
      badge: setTimeout(() => setVisibleElements(prev => ({ ...prev, badge: true })), 200),
      heading: setTimeout(() => setVisibleElements(prev => ({ ...prev, heading: true })), 600),
      paragraph: setTimeout(() => setVisibleElements(prev => ({ ...prev, paragraph: true })), 1000),
      button: setTimeout(() => setVisibleElements(prev => ({ ...prev, button: true })), 1400),
      imageLoaded: setTimeout(() => setVisibleElements(prev => ({ ...prev, imageLoaded: true })), 200)
    };

    // Initial animation sequence for morphing text
    const morphingTimers = {
      empowering: setTimeout(() => {
        setInitialAnimation(prev => ({ ...prev, empowering: true }));
        setTimeout(() => setInitialAnimation(prev => ({ ...prev, empowering: false })), 1000);
      }, 2000),
      digital: setTimeout(() => {
        setInitialAnimation(prev => ({ ...prev, digital: true }));
        setTimeout(() => setInitialAnimation(prev => ({ ...prev, digital: false })), 1000);
      }, 2950),
      transformation: setTimeout(() => {
        setInitialAnimation(prev => ({ ...prev, transformation: true }));
        setTimeout(() => setInitialAnimation(prev => ({ ...prev, transformation: false })), 1000);
      }, 3900)
    };

    return () => {
      Object.values(timers).forEach(timer => clearTimeout(timer));
      Object.values(morphingTimers).forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#111B33] to-[#0B1120]">
      <Element name="hero" className="mt-16 md:mt-20">
        <div className="container relative z-10 px-4 md:px-8 2xl:px-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 xl:gap-32 items-center justify-items-center">
            <div className="relative z-2 pt-4 md:pt-8 pb-4 md:max-w-xl order-2 md:order-1">
              <div className={`mb-2 md:mb-4 transition-all duration-1000 ${visibleElements.badge ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="caption text-[#4F90FF]">TECHNOLOGY SOLUTIONS</p>
              </div>
              <h1 className={`text-2xl sm:text-3xl md:text-7xl font-bold text-white mb-3 md:mb-6 leading-tight transition-all duration-1000 ${visibleElements.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div 
                  className="morphing-text-container"
                  onMouseEnter={() => setHoveredText('empowering')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text empowering-text ${hoveredText === 'empowering' || initialAnimation.empowering ? 'morphing-text-out' : ''}`}>EMPOWERING</span>
                  <span className={`morphing-text-alt ${hoveredText === 'empowering' || initialAnimation.empowering ? 'morphing-text-in' : ''}`}>INNOVATING</span>
                </div>
                <br />
                <div 
                  className="morphing-text-container"
                  onMouseEnter={() => setHoveredText('digital')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text ${hoveredText === 'digital' || initialAnimation.digital ? 'morphing-text-out' : ''}`}>DIGITAL</span>
                  <span className={`morphing-text-alt ${hoveredText === 'digital' || initialAnimation.digital ? 'morphing-text-in' : ''}`}>MODERN</span>
                </div>
                <br />
                <div 
                  className="morphing-text-container"
                  onMouseEnter={() => setHoveredText('transformation')} 
                  onMouseLeave={() => setHoveredText(null)}
                >
                  <span className={`morphing-text ${hoveredText === 'transformation' || initialAnimation.transformation ? 'morphing-text-out' : ''}`}>TRANSFORMATION</span>
                  <span className={`morphing-text-alt ${hoveredText === 'transformation' || initialAnimation.transformation ? 'morphing-text-in' : ''}`}>EXPERIENCES</span>
                </div>
              </h1>
              <p className={`text-sm md:text-lg text-gray-300 mb-4 md:mb-8 max-w-xl transition-all duration-1000 ${visibleElements.paragraph ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Camel Q is your trusted partner in technology solutions, delivering excellence across India with expertise in Java Fullstack, Python Fullstack, DevOps, Power BI, and Testing services.
              </p>
              <div className={`transition-all duration-1000 ${visibleElements.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <LinkScroll to="solutions" offset={-100} spy smooth>
                  <Button className="bg-gradient-to-r from-[#4F90FF] to-[#00D8D5] hover:from-[#00D8D5] hover:to-[#4F90FF] text-white px-4 py-2 md:px-8 md:py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-xs md:text-base" icon="/images/zap.svg">
                    Explore Solutions
                  </Button>
                </LinkScroll>
              </div>
            </div>

            <div className="relative md:ml-auto md:translate-x-8 xl:translate-x-16 2xl:translate-x-20 image-container order-1 md:order-2 mb-4 md:mb-0">
              <div className={`relative w-full aspect-square max-w-[200px] sm:max-w-[280px] md:max-w-2xl mx-auto transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-100 translate-y-0 animate-float-once' : 'opacity-0 translate-y-8'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-[#4F90FF]/20 via-[#00D8D5]/20 to-transparent rounded-2xl md:rounded-3xl transform rotate-6 scale-95 transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-100 animate-card-1-once' : 'opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br from-[#4F90FF]/10 via-[#00D8D5]/10 to-transparent rounded-2xl md:rounded-3xl transform -rotate-6 scale-95 transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-100 animate-card-2-once' : 'opacity-0'}`}></div>
                <img
                  src="/images/hero.png"
                  className={`relative z-10 w-full h-full object-contain transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  alt="Digital Transformation"
                />
              </div>
              
              {/* Animated gradient orbs */}
              <div className={`absolute -top-6 -right-6 md:-top-20 md:-right-20 w-12 h-12 md:w-40 md:h-40 bg-[#4F90FF]/30 rounded-full filter blur-xl md:blur-3xl transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-30 animate-orb-1-once' : 'opacity-0'}`}></div>
              <div className={`absolute -bottom-6 -left-6 md:-bottom-20 md:-left-20 w-12 h-12 md:w-40 md:h-40 bg-[#00D8D5]/30 rounded-full filter blur-xl md:blur-3xl transition-all duration-1000 ${visibleElements.imageLoaded ? 'opacity-30 animate-orb-2-once' : 'opacity-0'}`}></div>
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-[#0B1120]"></div>
      </Element>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        @keyframes card1 {
          0% { transform: rotate(6deg) scale(0.95); }
          50% { transform: rotate(7deg) scale(0.96); }
          100% { transform: rotate(6deg) scale(0.95); }
        }

        @keyframes card2 {
          0% { transform: rotate(-6deg) scale(0.95); }
          50% { transform: rotate(-7deg) scale(0.96); }
          100% { transform: rotate(-6deg) scale(0.95); }
        }

        @keyframes orb1 {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        @keyframes orb2 {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.3; }
        }

        .animate-float-once {
          animation: float 3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-card-1-once {
          animation: card1 3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-card-2-once {
          animation: card2 3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-orb-1-once {
          animation: orb1 3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-orb-2-once {
          animation: orb2 3s cubic-bezier(0.4, 0, 0.2, 1);
          animation-delay: 0.5s;
        }

        .image-container:hover .relative {
          animation: float 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .image-container:hover .absolute:nth-child(1) {
          animation: card1 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .image-container:hover .absolute:nth-child(2) {
          animation: card2 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .image-container:hover .absolute:nth-child(3) {
          animation: orb1 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .image-container:hover .absolute:nth-child(4) {
          animation: orb2 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
        }

        /* Reset animations when hover ends */
        .image-container .relative,
        .image-container .absolute {
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Morphing text styles */
        .morphing-text-container {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        
        .morphing-text, .morphing-text-alt {
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .morphing-text {
          position: relative;
          opacity: 1;
          transform: translateY(0);
        }
        
        .empowering-text {
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
      `}</style>
    </section>
  );
};

export default Hero;