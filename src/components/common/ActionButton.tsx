interface IActionButton {
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  width?: string;
  handleClick?: () => void;
}

const ActionButton: React.FC<IActionButton> = ({
  label,
  backgroundColor,
  hoverBackgroundColor,
  color,
  width = 'w-14',
  handleClick,
}) => (
  <button
    type="button"
    className={`h-8 rounded-2xl text-sm font-normal ${width} ${color} ${backgroundColor} ${hoverBackgroundColor}`}
    onClick={handleClick}
  >
    {label}
  </button>
);

export { ActionButton };
