import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[10px] px-[15px] text-xl",
        {
          "bg-primary text-black": variant === "primary",
          "border bg-transparent text-black": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;