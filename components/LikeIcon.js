// LikeIcon.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LikeIcon = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require('../assets/icon-like-empty.png')}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 72,
        height: 48,
        borderRadius: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 56
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default LikeIcon;
