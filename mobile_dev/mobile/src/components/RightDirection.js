import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function RightDirection({ color = colors.WHITE, size = 50, txt, txtSize = 20, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={{ fontSize: txtSize, color }}>{txt}</Text>
            <MaterialCommunityIcons name='chevron-right' color={color} size={size}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})
export default RightDirection;