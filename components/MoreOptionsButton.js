import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MoreOptionsButton = () => {
    return (
        <View style={styles.iconContainer}>
            <Image
                style={styles.icon}
                resizeMode="cover"
                source={require('../assets/icon-more-dots.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 72,
        height: 48,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 60,
        right: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default MoreOptionsButton;
