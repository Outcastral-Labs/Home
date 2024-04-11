import React from 'react';

const GrainFilter = () => (
    <svg>
        <filter id="grainFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" stitchTiles="stitch"/>
            {/* <feColorMatrix type="saturate" values="0" in="noise" result="grain" /> */}
            {/* <feBlend mode="multiply" in="SourceGraphic" in2="grain" /> */}
        </filter>
    </svg>
);

export default GrainFilter;
