import type { InputHTMLAttributes } from "react";
import "./Slider.css";

type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" | "onChange"
> & {
  title: string;
  value: number;
  onChange: (value: number) => void;
};

function Slider({ className, title, value, onChange }: SliderProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(Number(event.target.value));

  return (
    <input
      className={`slider ${className ?? ""}`}
      type="range"
      min="0"
      max="100"
      title={title}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Slider;
