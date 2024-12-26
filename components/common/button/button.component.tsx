import { ButtonHTMLAttributes } from 'react';

enum ButtonVariant {
  PrimaryFilled,
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const getClassName = (variant: ButtonVariant) => {
  if (variant === ButtonVariant.PrimaryFilled) return 'text-black bg-yellow';
};

const Button = ({ variant, className, children, ...props }: IProps) => {
  const variantClass = getClassName(variant);

  return (
    <button
      className={`font-semibold py-3 px-6 rounded-md text-lg leading-normal ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.Variant = ButtonVariant;

export default Button;
