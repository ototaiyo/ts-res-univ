import type { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  active: boolean;
  backgroundImage?: string;
  onClick: () => void;
};

function Button({ active, backgroundImage, onClick }: ButtonProps) {
  const style: CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div
      className={`image-button${active ? " active" : ""}`}
      style={style}
      onClick={onClick}
    />
  );
}

export default Button;
