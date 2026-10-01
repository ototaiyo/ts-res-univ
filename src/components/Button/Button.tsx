import type { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  className?: string;
  title: string;
  active: boolean;
  backgroundImage?: string;
  icon: string;
  onClick: () => void;
};

function Button({
  className,
  title,
  active,
  backgroundImage,
  icon,
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
    >
      <img className="image-button__icon" src={icon} alt="" draggable={false} />
    </div>
  );
}

export default Button;
