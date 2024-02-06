import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
    const [isFirstAnimationFinished, setIsFirstAnimationFinished] = useState(false);

    const handleAnimationEnd = () => {
    setIsFirstAnimationFinished(true);
    };

    return (
        <div>
        <Greetings onAnimationEnd={handleAnimationEnd} />
        {isFirstAnimationFinished && <Introduction />}
      </div>)
}

const animation = keyframes`
    0% { opacity: 0; }
    25% { opacity: 0.25; }
    50% { opacity: 0.50; }
    75% { opacity: 0.75; }
    100% { opacity: 1; }
`;

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
`;


const Greetings = ( {onAnimationEnd} ) => (
    <Wrapper onAnimationEnd={onAnimationEnd}><h1>Hello! 👋</h1></Wrapper>
)

const Introduction = () => (
    <Wrapper><h1>My name is Matt and I'm a data scientist.</h1></Wrapper>
);

