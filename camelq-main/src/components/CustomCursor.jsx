import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // Use refs instead of state for better performance
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const dotPositionRef = useRef({ x: 0, y: 0 });
  const isClickingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isHiddenRef = useRef(true);
  const requestRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    // Animation function that uses direct DOM manipulation instead of state updates
    const animateCursor = () => {
      // Update dot position with lag effect
      if (dotPositionRef.current.x !== 0 || dotPositionRef.current.y !== 0) {
        const dx = positionRef.current.x - dotPositionRef.current.x;
        const dy = positionRef.current.y - dotPositionRef.current.y;
        
        // Apply lag effect (higher = faster following)
        const lag = 0.35;
        
        dotPositionRef.current.x += dx * lag;
        dotPositionRef.current.y += dy * lag;
        
        // Apply positioning directly to DOM
        dot.style.transform = `translate(${-50}%, ${-50}%) ${isHoveringRef.current ? 'scale(1.3)' : isClickingRef.current ? 'scale(0.8)' : 'scale(1)'}`;
        dot.style.left = `${dotPositionRef.current.x}px`;
        dot.style.top = `${dotPositionRef.current.y}px`;
      }
      
      // Update ring position directly
      ring.style.transform = `translate(${-50}%, ${-50}%)`;
      ring.style.left = `${positionRef.current.x}px`;
      ring.style.top = `${positionRef.current.y}px`;
      
      // Continue animation loop
      requestRef.current = requestAnimationFrame(animateCursor);
    };
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      positionRef.current.x = e.clientX;
      positionRef.current.y = e.clientY;
      
      // Initialize dot position on first move
      if (dotPositionRef.current.x === 0 && dotPositionRef.current.y === 0) {
        dotPositionRef.current.x = e.clientX;
        dotPositionRef.current.y = e.clientY;
      }
      
      // Show cursor when mouse moves
      if (isHiddenRef.current) {
        isHiddenRef.current = false;
        dot.classList.remove('cursor-hidden');
        ring.classList.remove('cursor-hidden');
      }
    };
    
    // Track mouse clicks
    const handleMouseDown = () => {
      isClickingRef.current = true;
      dot.classList.add('cursor-clicking');
      ring.classList.add('cursor-clicking');
    };
    
    const handleMouseUp = () => {
      isClickingRef.current = false;
      dot.classList.remove('cursor-clicking');
      ring.classList.remove('cursor-clicking');
    };
    
    // Track mouse entering/leaving window
    const handleMouseEnter = () => {
      isHiddenRef.current = false;
      dot.classList.remove('cursor-hidden');
      ring.classList.remove('cursor-hidden');
    };
    
    const handleMouseLeave = () => {
      isHiddenRef.current = true;
      dot.classList.add('cursor-hidden');
      ring.classList.add('cursor-hidden');
    };
    
    // Track hovering over interactive elements
    const handleHoverStart = () => {
      isHoveringRef.current = true;
      dot.classList.add('cursor-hovering');
      ring.classList.add('cursor-hovering');
    };
    
    const handleHoverEnd = () => {
      isHoveringRef.current = false;
      dot.classList.remove('cursor-hovering');
      ring.classList.remove('cursor-hovering');
    };
    
    // Setup hover detection on interactive elements
    const setupHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .morphing-text-container, .image-container');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
      
      return interactiveElements;
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial setup
    const interactiveElements = setupHoverListeners();
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(animateCursor);
    
    // Cleanup on unmount
    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={ringRef}
        className="cursor-ring cursor-hidden"
      ></div>
      
      <div 
        ref={dotRef}
        className="cursor-dot cursor-hidden"
      ></div>
      
      <style jsx global>{`
        /* Hide cursor on all elements */
        * {
          cursor: none !important;
        }
        
        /* Main dot cursor */
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          background: #4F90FF;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          will-change: transform, left, top;
          box-shadow: 0 0 10px rgba(79, 144, 255, 0.5);
        }
        
        /* Outer ring cursor */
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 26px;
          height: 26px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          will-change: transform, left, top, width, height;
        }
        
        /* Cursor states */
        .cursor-clicking.cursor-dot {
          background: #00D8D5;
          box-shadow: 0 0 10px rgba(0, 216, 213, 0.5);
          transition: background 0.15s ease-in-out;
        }
        
        .cursor-clicking.cursor-ring {
          width: 22px;
          height: 22px;
          border-color: #00D8D5;
          background: rgba(0, 216, 213, 0.1);
          transition: width 0.2s, height 0.2s, border-color 0.2s, background 0.2s;
        }
        
        .cursor-hovering.cursor-dot {
          background: #4F90FF;
          box-shadow: 0 0 15px rgba(79, 144, 255, 0.7);
          transition: background 0.15s ease-in-out;
        }
        
        .cursor-hovering.cursor-ring {
          width: 36px;
          height: 36px;
          border-color: #4F90FF;
          background: rgba(79, 144, 255, 0.1);
          transition: width 0.2s, height 0.2s, border-color 0.2s, background 0.2s;
        }
        
        .cursor-hidden {
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 