// FactContent.js
import React from 'react';
import { View, Text } from 'react-native';
import { Color, FontFamily } from '../GlobalStyles';

const FactContent = ({ item }) => {
    return (
        <View style={styles.factContent}>
            <Text style={[styles.factText, styles.factTextTypo]}>
                {item.fact}
            </Text>
            <Text style={[styles.factSource, styles.factTextTypo]}>
                {item.source}
            </Text>
        </View>
    );
};

const styles = {
    factContent: {
        marginTop: -103,
        marginLeft: -147.5,
        top: "50%",
        left: "50%",
        position: "absolute",
    },
    factText: {
        fontSize: 24,
        lineHeight: 28,
        color: "#fff",
        display: "flex",
        width: 295,
        alignItems: "center",
        textAlign: "left",
        fontFamily: FontFamily.lexendDecaRegular,
    },
    factSource: {
        fontSize: 12,
        letterSpacing: 1.2,
        color: Color.white24,
        marginTop: 24,
    },
    factTextTypo: {
        textAlign: "left",
        fontFamily: FontFamily.lexendDecaRegular,
    },
};

export default FactContent;
