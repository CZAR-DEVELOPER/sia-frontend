import React from 'react';
import LoadingGif from '../../assets/icons/loading.gif';


const LoadingComponent: React.FC = () => {
  return (
      <div className="center p-20">
        <img src={LoadingGif} alt="Loading" className="loading-gif w-10" />
    </div>
  );
};

export default LoadingComponent;