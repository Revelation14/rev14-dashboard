/* eslint-disable react/button-has-type */
import React from 'react';

interface AddButtonProps {
  icon?: string;
  text: string;
}

const AddButton: React.FC<AddButtonProps> = ({ icon, text }) => {
  return (
    <button className="order-1 flex h-10 w-full flex-none grow-0 flex-row items-center justify-center gap-2 rounded-3xl bg-gold px-2.5 py-3 md:w-48">
      {icon && <img src={icon} alt="Button Icon" className="text-white" />}
      <span className="text-white">{text}</span>
    </button>
  );
};

export default AddButton;
