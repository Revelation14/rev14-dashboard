import Spinner from './Spinner';

interface IActionButton {
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  width?: string;
  handleClick?: () => void;
  loading?: boolean;
}

const ActionButton: React.FC<IActionButton> = ({
  label,
  backgroundColor,
  hoverBackgroundColor,
  color,
  width = 'w-14',
  handleClick,
  loading = false,
}) => (
  <button
    type="button"
    className={`flex h-8 items-center justify-center rounded-2xl text-sm font-normal ${width} ${color} ${backgroundColor} ${hoverBackgroundColor}`}
    onClick={handleClick}
  >
    {loading ? <Spinner className="h-5 w-5" /> : label}
  </button>
);

export { ActionButton };
