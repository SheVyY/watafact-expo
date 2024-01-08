import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwiperContent from '../components/SwiperContent';
import MoreOptionsButton from '../components/MoreOptionsButton';
import { factsData, gradientColors } from '../data';
import ReportIcon from '../components/ReportIcon';
import LikeIcon from '../components/LikeIcon';
import ShareIcon from '../components/ShareIcon';
import BSReport from '../components/BSReport';

const FactScreen = () => {
    const [currentColorsIndex, setCurrentColorsIndex] = useState(0);
    const [isReportVisible, setReportVisible] = useState(false);

    // Handle swiper index change to update gradient colors
    const handleSwiperIndexChanged = (index) => {
        setCurrentColorsIndex(index % gradientColors.length);
    };

    // Define functions for each icon's functionality
    const handleReportPress = () => {
        // Handle report icon press by toggling visibility state
        setReportVisible(!isReportVisible);
    };

    const handleLikePress = () => {
        // Handle like icon press here
        console.log('Like icon pressed');
    };

    const handleSharePress = () => {
        // Handle share icon press here
        console.log('Share icon pressed');
    };

    const handleMorePress = () => {
        // Handle share icon press here
        console.log('Options icon pressed');
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.linearGradient}
                colors={gradientColors[currentColorsIndex]} // Use the current color set
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                {/* Swiper component for swipeable content */}
                <SwiperContent factsData={factsData} onIndexChanged={handleSwiperIndexChanged} />

                {/* Icons at the bottom */}
                <View style={styles.bottomBar}>
                    <ReportIcon onPress={handleReportPress} />
                    <LikeIcon onPress={handleLikePress} />
                    <ShareIcon onPress={handleSharePress} />
                </View>

                {/* More options button */}
                <MoreOptionsButton />

                {/* Conditionally render BSReport */}
                {isReportVisible && <BSReport />}
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
});

export default FactScreen;
