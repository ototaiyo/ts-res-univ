import { useState } from "react";

import "./App.css";
import Button from "./components/Button.tsx";

import rainImage from "./assets/rain.jpg";
import summerImage from "./assets/summer.jpg";
import winterImage from "./assets/winter.jpg";

const SoundType = {
  Summer: "summer",
  Rain: "rain",
  Winter: "winter",
} as const;
type SoundType = (typeof SoundType)[keyof typeof SoundType];

function App() {
  const [sound, setSound] = useState<SoundType | boolean>(false);

  return (
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
  );
}

export default App;
