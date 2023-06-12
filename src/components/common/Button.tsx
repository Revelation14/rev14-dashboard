/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable react/button-has-type */
/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

interface IButton {
  icon?: string;
  text: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  handleClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  width?: string;
}

const Button: React.FC<IButton> = ({
  icon,
  text,
  className,
  handleClick,
  color = 'white',
  backgroundColor = 'gold',
  type = 'button',
  width = 'w-full md:w-48',
}) => {
  return (
    <button
      type={type}
      className={`order-1 flex h-10 ${width} flex-none grow-0 flex-row items-center justify-center gap-2 rounded-3xl bg-${backgroundColor} px-2.5 py-3 text-${color} ${className}`}
      onClick={handleClick}
    >
      {icon && <img src={icon} alt="Button Icon" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
