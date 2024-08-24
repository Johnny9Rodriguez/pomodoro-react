function useAudioClip() {
    const playAudio = (clip) => {
        const audio = new Audio(`/audio/${clip}.wav`);
        audio.play();
    };

    return { playAudio };
}

export default useAudioClip;
