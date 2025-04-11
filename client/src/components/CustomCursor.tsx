import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const clickables = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      setIsPointer(
        clickables.includes(target.tagName) || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isHidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
          backgroundColor: isPointer ? 'rgb(145, 189, 255)' : 'rgb(59, 130, 246)'
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isHidden ? 0 : 1,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          borderColor: isPointer ? 'rgba(145, 189, 255, 0.5)' : 'rgba(59, 130, 246, 0.5)'
        }}
      />
    </>
  );
};

export default CustomCursor;