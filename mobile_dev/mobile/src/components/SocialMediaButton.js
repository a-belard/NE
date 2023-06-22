import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function SocialMediaButton({ name, color, text, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            { name && <MaterialCommunityIcons name={name} color={color} size={30}/>}
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GRAY,
        height: 50,
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginVertical: 10,
    },
    text: {
        alignSelf: 'center',
        marginLeft: '25%',
    }
});

export default SocialMediaButton;