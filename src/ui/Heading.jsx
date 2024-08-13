import classNames from "classnames";

// Define the base styles and heading sizes
const baseStyles = "font-bold text-custom-black-100 ";
const headingSizes = {
  h1: "text-4xl md:text-6xl lg:text-7xl", // Scaled down for consistency
  h2: "text-3xl md:text-5xl lg:text-6xl",
  h3: "text-2xl md:text-4xl lg:text-5xl font-normal",
  h4: "text-xl md:text-3xl",
  h5: "text-lg md:text-2xl",
  h6: "text-base md:text-lg",
};

export default function Heading({ children, as = "h1", className = "" }) {
  // Determine the heading element and styles
  const Tag = as;
  const styleClasses = classNames(
    baseStyles,
    headingSizes[as] || headingSizes.h1, // Fallback to h1 if 'as' is not valid
    className
  );

  return <Tag className={styleClasses}>{children}</Tag>;
}
