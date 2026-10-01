import type { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  className?: string;
  title: string;
  active: boolean;
  backgroundImage?: string;
  onClick: () => void;
};

function Button({
  className,
  title,
  active,
  backgroundImage,
  onClick,
}: ButtonProps) {
  const style: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className={`image-button${active ? " active" : ""} ${className ?? ""}`}
      style={style}
      title={title}
      onClick={onClick}
    />
  );
}

export default Button;
