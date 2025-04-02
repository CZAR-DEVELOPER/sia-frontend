import React from 'react';
import './container_component.css';

interface ContainerComponentProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerComponent: React.FC<ContainerComponentProps> = ({ children, className }) => {
  return <>
  
        <div className={`container mx-0 ${className}`}>{children}</div>
  </>;
};

export default ContainerComponent;
