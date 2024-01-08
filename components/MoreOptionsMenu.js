import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const MoreOptionsMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <View>
            {/* This is your menu button */}
            <TouchableOpacity onPress={toggleMenu}>
                <Text>Menu</Text>
            </TouchableOpacity>

            {menuVisible && (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.buttonsTextButton, styles.menuSpaceBlock]}
                        onPress={() => {
                            // Handle the "About Us" click action here
                            setMenuVisible(false); // Hide the menu after clicking
                        }}
                    >
                        <Text style={[styles.text, styles.textTypo]}>About Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonsTextButton, styles.menuSpaceBlock]}
                        onPress={() => {
                            // Handle the "Terms & Conditions" click action here
                            setMenuVisible(false); // Hide the menu after clicking
                        }}
                    >
                        <Text style={[styles.text, styles.textTypo]}>
                            Terms & Conditions
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonsTextButton, styles.menuSpaceBlock]}
                        onPress={() => {
                            // Handle the "Feedback" click action here
                            setMenuVisible(false); // Hide the menu after clicking
                        }}
                    >
                        <Text style={[styles.text, styles.textTypo]}>Feedback</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.darkPurple,
        borderRadius: 32,
        paddingHorizontal: 0,
        right: 16,
        position: "absolute",
        overflow: "hidden",
    },
    textTypo: {
        textAlign: "left",
        fontFamily: FontFamily.lexendDecaRegular,
    },
    menuSpaceBlock: {
        paddingVertical: Padding.p_xs,
        width: 240,
    },
    text: {
        fontSize: FontSize.size_base,
        color: Color.colorWhite,
        textAlign: "left",
        fontFamily: FontFamily.lexendDecaRegular,
        flex: 1,
    },
});

export default MoreOptionsMenu;
