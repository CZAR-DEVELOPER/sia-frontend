import React, { useState, useEffect } from 'react';

export interface MouseFollowerProps {
    label?: string;
    isVisible?: boolean;
}

const MouseFollowerComponent: React.FC<MouseFollowerProps> = ({ label = 'Etiqueta vacia', isVisible=true }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const followerStyle: React.CSSProperties = {
    top: position.y - 50,
    left: position.x,
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div
      style={followerStyle}
      className={`absolute transform  bg-white/30 backdrop-blur-sm   text-black p-2 rounded z-100  `}
    >
      {label}
    </div>
  );
};

export default MouseFollowerComponent;