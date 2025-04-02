import React from "react";

interface Text {
  x: number;
  y: number;
  label: string;
}

interface ImageWithTextsProps {
  texts: Text[];
  imageUrl: string;
}

const ImageWithTexts: React.FC<ImageWithTextsProps> = ({ texts, imageUrl }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover"
      />

      {texts.map((text, index) => (
        <span
          key={index}
          className="absolute text-white text-sm md:text-base font-bold cursor-pointer  bg-black/50 w-10 h-10 rounded-full p-2 backdrop-filter backdrop-blur-sm" 
          style={{
            top: `${text.y}%`,
            left: `${text.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {text.label}
        </span>
      ))}
    </div>
  );
};

export default ImageWithTexts;
