import classNames from "classnames";

const iconButtonStyles = {
  base: "  flex items-center rounded-full justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-95 text-custom-white",
  primary: "bg-primary",
  secondary: "bg-custom-black-80",
  ternary: "bg-custom-black-80 opacity-30 hover:opacity-20",
  delete: "bg-custom-red",
};

export default function IconButton({
  children,
  type = "primary",
  size = "md",
  disabled,
  className,
  ...rest
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconClasses = classNames(
    iconButtonStyles.base,
    iconButtonStyles[type],
    sizes[size],
    className,
    {
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  return (
    <button
      type="button" // Explicitly set button type
      className={iconClasses}
      disabled={disabled}
      aria-label={children} // Provide descriptive aria-label
      {...rest}
    >
      {children}
    </button>
  );
}
