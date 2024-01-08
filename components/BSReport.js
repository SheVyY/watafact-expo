import * as React from 'react';
import { Text, StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native';

const BSReport = () => {
    const [description, setDescription] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(true); // Add isVisible state

    // Function to handle toggling visibility
    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Render the component conditionally
    return isVisible ? (
        <View style={styles.bsReport}>
            <View style={styles.bottomSheet}>
                <View style={styles.headline}>
                    <Text style={styles.report}>Report</Text>
                    <TouchableOpacity onPress={handleToggleVisibility}>
                        <View style={[styles.buttonsIconButtonRound, styles.buttonsFlexBox]}>
                            <Image
                                style={styles.iconClose}
                                resizeMode="cover"
                                source={require("../assets/icon-close.png")}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.isThereSomething}>
                    Is there something wrong? Let us know.
                </Text>
                <TextInput
                    style={[styles.input, styles.inputText]}
                    placeholder="Describe what’s wrong..."
                    placeholderTextColor="rgba(255, 255, 255, 0.24)"
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    multiline={true}
                    numberOfLines={4}
                    color="#fff"
                />
                <TouchableOpacity onPress={handleToggleVisibility}>
                    <View style={[styles.buttonsMediumButton, styles.buttonsFlexBox]}>
                        <Text style={[styles.text, styles.textTypo]}>Send report</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    ) : null; // Render null if isVisible is false
};

const styles = StyleSheet.create({
    bsReport: {
        width: '100%',
        height: 416,
        flex: 1,
    },
    buttonsFlexBox: {
        justifyContent: 'center',
        height: 48,
        borderRadius: 32,
        alignItems: 'center',
        flexDirection: 'row',
    },
    textTypo: {
        color: 'rgba(255, 255, 255, 0.24)',
        fontSize: 16,
        textAlign: 'left',
    },
    report: {
        fontSize: 24,
        lineHeight: 28,
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'LexendDeca-SemiBold',
        fontWeight: '600',
        flex: 1,
    },
    iconClose: {
        width: 24,
        height: 24,
        overflow: 'hidden',
    },
    buttonsIconButtonRound: {
        width: 48,
    },
    headline: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    isThereSomething: {
        color: 'rgba(255, 255, 255, 0.64)',
        marginTop: 24,
        fontFamily: 'LexendDeca-Regular',
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    inputText: {
        color: '#fff', // Text color
    },
    input: {
        borderRadius: 16,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.12)',
        borderWidth: 1,
        height: 160,
        padding: 16,
        marginTop: 24,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    text: {
        fontFamily: 'LexendDeca-SemiBold',
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.24)',
    },
    buttonsMediumButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        width: 335,
        marginTop: 24,
    },
    bottomSheet: {
        position: 'absolute',
        marginLeft: -187.5,
        bottom: 0,
        left: '50%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#100b24',
        width: 375,
        paddingHorizontal: 20,
        paddingTop: 31,
        paddingBottom: 48,
        overflow: 'hidden',
    },
});

export default BSReport;
