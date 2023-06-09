interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline
}) => {
  return (
    <button
    disabled = {disabled}
    onClick= {onClick}
    className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-sm
      hover:rounded-xl
      font-semibold
      hover:opacity-80
      transition
      border-2
      ${fullWidth ? 'w-full' : 'w-fit'}
      ${secondary ? 'border-white' : 'bg-lime-500'}
      ${secondary ? 'text-white' : 'text-white'}
      ${secondary ? 'border-black' : 'border-lime-500'}
      ${large ? 'text-md' : 'text-sm'}
      ${large ? 'px-5' : 'px-4'}
      ${large ? 'py-3' : 'py-2'}
      ${outline ? 'bg-transparent' : ''}
      ${outline ? 'border-white' : ''}
      ${outline ? 'text-white' : ''}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
