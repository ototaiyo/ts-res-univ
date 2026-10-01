import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button.tsx";

import rainImage from "./assets/rain.jpg";
import summerImage from "./assets/summer.jpg";
import winterImage from "./assets/winter.jpg";
import Slider from "./components/Slider/Slider.tsx";

const SoundType = {
  Summer: "summer",
  Rain: "rain",
  Winter: "winter",
} as const;
type SoundType = (typeof SoundType)[keyof typeof SoundType];

function App() {
  const [sound, setSound] = useState<SoundType | boolean>(false);
  const [volume, setVolume] = useState<number>(50);

  return (
    <>
      <div>
        <Button
          title="Summer"
          active={sound === SoundType.Summer}
          backgroundImage={summerImage}
          onClick={() =>
            setSound(sound === SoundType.Summer ? false : SoundType.Summer)
          }
        />
        <Button
          title="Rain"
          active={sound === SoundType.Rain}
          backgroundImage={rainImage}
          onClick={() =>
            setSound(sound === SoundType.Rain ? false : SoundType.Rain)
          }
        />
        <Button
          title="Winter"
          active={sound === SoundType.Winter}
          backgroundImage={winterImage}
          onClick={() =>
            setSound(sound === SoundType.Winter ? false : SoundType.Winter)
          }
        />
      </div>
      <Slider
        min={0}
        max={100}
        title={`Volume: ${volume}%`}
        value={volume}
        onChange={(value) => setVolume(value)}
      />
    </>
  );
}

export default App;
