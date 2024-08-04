import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import thumbsUpAnimation from '../../lottie/golden-thumbs-up.json';
// import thumbsUpAnimation from '../../lottie/pink-thumb.json'

const ThumbsUp = () => {
    const [loop, setLoop] = useState(true); // Initial state for loop
    const [isStopped, setIsStopped] = useState(false); // State to control stopping the animation

    useEffect(() => {
        // Set up a timeout to change loop state after 2 seconds
        const loopTimer = setTimeout(() => {
            setLoop(false);
        }, 1500); // 2000 milliseconds = 2 seconds

        // Optionally, set up another timeout to stop the animation if needed
        const stopTimer = setTimeout(() => {
            setIsStopped(true);
        }, 5000); // Stop the animation after 3 seconds (if needed)

        return () => {
            clearTimeout(loopTimer); // Clean up the loop timer
            clearTimeout(stopTimer); // Clean up the stop timer
        };
    }, []);

    return (
        <Lottie
            animationData={thumbsUpAnimation}
            loop={loop}
            isStopped={isStopped}
            style={{ width: '100px', height: '100px' }}
        />
    );
};

export default ThumbsUp;
