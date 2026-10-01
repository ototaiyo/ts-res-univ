import { useEffect, useRef, useState } from "react";

import "./App.css";
import Button from "./components/Button/Button.tsx";

import rainImage from "./assets/rain.jpg";
import summerImage from "./assets/summer.jpg";
import winterImage from "./assets/winter.jpg";
import rainAudio from "./assets/sounds/rain.mp3";
import summerAudio from "./assets/sounds/summer.mp3";
import winterAudio from "./assets/sounds/winter.mp3";
import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";
import pauseIcon from "./assets/icons/pause.svg";
import Slider from "./components/Slider/Slider.tsx";

const SoundType = {
  Summer: "summer",
  Rain: "rain",
  Winter: "winter",
} as const;
type SoundType = (typeof SoundType)[keyof typeof SoundType];

const soundSources: Record<SoundType, string> = {
  summer: summerAudio,
  rain: rainAudio,
  winter: winterAudio,
};

function App() {
  const [sound, setSound] = useState<SoundType | null>(null);
  const [volume, setVolume] = useState<number>(50);
  const [pauseMode, setPauseMode] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (pauseMode) {
      audio.pause();
    } else {
      void audio.play().catch((error) => {
        console.error("Error loading audio file:", error);
      });
    }
  }, [sound, pauseMode]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, sound]);

  return (
    <div className="App">
      <header>Weather sounds</header>
      <div className="Control-panel">
        <Button
          className="Weather-control"
          title="Summer"
          active={sound === SoundType.Summer}
          backgroundImage={summerImage}
          icon={sound === SoundType.Summer && pauseMode ? pauseIcon : sunIcon}
          onClick={() => {
            setPauseMode(sound === SoundType.Summer ? !pauseMode : false);
            setSound(SoundType.Summer);
          }}
        />
        <Button
          className="Weather-control"
          title="Rain"
          active={sound === SoundType.Rain}
          backgroundImage={rainImage}
          icon={sound === SoundType.Rain && pauseMode ? pauseIcon : rainIcon}
          onClick={() => {
            setPauseMode(sound === SoundType.Rain ? !pauseMode : false);
            setSound(SoundType.Rain);
          }}
        />
        <Button
          className="Weather-control"
          title="Winter"
          active={sound === SoundType.Winter}
          backgroundImage={winterImage}
          icon={sound === SoundType.Winter && pauseMode ? pauseIcon : snowIcon}
          onClick={() => {
            setPauseMode(sound === SoundType.Winter ? !pauseMode : false);
            setSound(SoundType.Winter);
          }}
        />
      </div>
      <Slider
        className="Volume-slider"
        min={0}
        max={100}
        title={`Volume: ${volume}%`}
        value={volume}
        onChange={setVolume}
      />

      {sound && <audio ref={audioRef} src={soundSources[sound]} loop />}
    </div>
  );
}

export default App;
