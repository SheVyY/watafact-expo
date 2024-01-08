// SwiperContent.js

import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import FactContent from './FactContent';

const SwiperContent = ({ factsData, onIndexChanged }) => {
    const [shuffledFactsData, setShuffledFactsData] = useState([]);

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    useEffect(() => {
        // Shuffle the factsData array when the component mounts or when factsData changes
        const shuffledData = [...factsData];
        shuffleArray(shuffledData);
        setShuffledFactsData(shuffledData);
    }, [factsData]);

    return (
        <Swiper
            showsPagination={false}
            horizontal={false}
            onIndexChanged={onIndexChanged}
        >
            {shuffledFactsData.map((item, index) => (
                <FactContent key={index} item={item} />
            ))}
        </Swiper>
    );
};

export default SwiperContent;
