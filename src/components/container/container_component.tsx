import React from 'react';
import './container_component.css';

interface ContainerComponentProps {
  children: React.ReactNode;
}

const ContainerComponent: React.FC<ContainerComponentProps> = ({ children }) => {
  return <>
  
    <div className=' mx-0'>
        <div className="container">{children}</div>
    </div>
  </>;
};

export default ContainerComponent;
