import { ButtonHTMLAttributes } from 'react';

enum ButtonVariant {
  PrimaryFilled,
  PrimaryOutlined,
  SecondaryFilled,
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const getClassName = (variant: ButtonVariant) => {
  if (variant === ButtonVariant.PrimaryFilled)
    return 'text-black bg-yellow border border-yellow';
  if (variant === ButtonVariant.PrimaryOutlined)
    return 'text-yellow bg-transparent border border-yellow';
  if (variant === ButtonVariant.SecondaryFilled)
    return 'text-black bg-white border border-white';
};

const Button = ({ variant, className, children, ...props }: IProps) => {
  const variantClass = getClassName(variant);

  return (
    <button
      className={`font-semibold py-3 px-6 rounded-md text-lg leading-normal justify-center whitespace-nowrap ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Variant = ButtonVariant;

export default Button;
