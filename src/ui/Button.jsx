import classNames from "classnames";

const buttonStyles = {
  base: "rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-95",
  primary: "bg-primary text-custom-white",
  secondary: "bg-transparent text-primary border-2 border-primary",
  option: "bg-custom-white text-custom-black-80",
  sizes: {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-12 py-6 text-lg",
  },
};

export default function Button({
  children,
  type = "primary",
  size = "medium",
  className,
  disabled,
  ...rest
}) {
  const buttonClasses = classNames(
    buttonStyles.base,
    buttonStyles[type],
    buttonStyles.sizes[size],
    className,
    {
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
