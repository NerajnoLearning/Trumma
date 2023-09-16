import { useState, useEffect } from "react";

export function useAudio(audioClip: string) {
    const [audio, setAudio] = useState(new Audio(audioClip));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setAudio(new Audio(audioClip));
    }, [audioClip]);

    const playAudio = async () => {
        try {
            await audio.play();
            setIsPlaying(true);
        } catch (error) {
            console.error(error);
        }
    };

    const pauseAudio = () => {
        audio.pause();
        setIsPlaying(false);
    };

    return {
        playAudio,
        pauseAudio,
        isPlaying,
    };
}
