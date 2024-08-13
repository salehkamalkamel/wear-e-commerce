import classNames from "classnames";

export default function Container({ children, className }) {
  const baseStyle =
    "w-[100%] max-w-[75rem] mx-auto flex flex-col md:flex-row items-center justify-center p-4 gap-12 sm:gap-20";
  const containerStyle = classNames(baseStyle, className);
  return <div className={containerStyle}>{children}</div>;
}
