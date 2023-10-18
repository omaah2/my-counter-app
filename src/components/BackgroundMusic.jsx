import React , { useState } from "react";
import { Button } from "../Styledcomponents"; // Import your styled-components
import styled from "styled-components"; // Import styled from styled-components
import { FaMusic } from "react-icons/fa"; // Import the Music icon from react-icons/fa

const BackgroundMusicContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 35px;
  }
`;

const Icon = styled(FaMusic)`
  font-size: 1.5rem;
  vertical-align: middle;
  margin-right: 5px;
`;

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null); // Create a ref for the audio element
  const audioFile = "goodlife.mp3"; // Replace with your audio file

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioFile);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <BackgroundMusicContainer>
      <Icon />
      <Button onClick={toggleAudio}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </Button>
    </BackgroundMusicContainer>
  );
};

export default BackgroundMusic;
