import React from 'react';

interface AvatarComponentProps {
    size?: 'small' | 'normal' | 'large';
    variant?: 'dark' | 'outline' | 'light' | 'white';
    children?: React.ReactNode;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({ size = 'normal', variant = 'dark', children }) => {
    const sizeClass = size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-15 h-15' : size == 'normal' ? 'w-10 h-10' : '';
    const variantClass =
        variant === 'outline'
            ? 'bg-transparent border border-black text-black'
            : variant === 'light'
            ? 'bg-gray-100/50 text-black'
            : variant === 'white'
            ? 'bg-white text-black'
            : 'bg-black text-white';

    return (
        <div className={`flex justify-center items-center rounded-full  ${variantClass} ${sizeClass}`}>
            {children}
        </div>
    );
};

export default AvatarComponent;