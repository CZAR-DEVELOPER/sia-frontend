import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    type?: 'submit' | 'reset' | 'button' ;
    style?: 'text' | 'outline' | 'solid' | 'icon';
    children?: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, children, disabled = false, className = '', size='md', type = 'button', style = 'solid' }) => {

    //Check the type of button
    let buttonStyle = "";


    switch (size) {
        case 'sm':
            buttonStyle = "text-sm py-2 ";
            break;
        case 'md':
            buttonStyle = "text-md py-3 ";
            break;
        case 'lg':
            buttonStyle = "text-lg py-4 ";
            break;
        default:
            buttonStyle = "";
            break;
    }

    switch (style) {
        case 'text':
            buttonStyle += "bg-transparent text-black px-4";
            break;
        case 'outline':
            buttonStyle += "bg-transparent border-2 border-black text-black px-4";
            break;
        case 'solid':
            buttonStyle += "bg-black text-white px-4";
            break;
        case 'icon':
            buttonStyle += "bg-gray-100 text-black min-w-10 flex justify-center items-center ";
            break;
        default:
            buttonStyle += "bg-black text-white ";
            break;
    }


    return (
        <div className='flex flex-col'>
            <button type={type} className={`cursor-pointer active:opacity-75 rounded-full min-h-10 ${buttonStyle} ${className}`} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};

export default ButtonComponent;