import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ToogleButtons({ text1, text2 , onPress1, onPress2, btn1Active = true, btn2Active = false }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={[
                styles.button,
                {
                    backgroundColor: btn1Active ? colors.GREEN :  colors.LIGHT,
                    borderRadius: btn1Active ? 10 : 0,
                }
            ]}
            onPress = {onPress1}
            >
                <Text style={{ color: btn1Active ? colors.WHITE :  colors.BLACK, fontSize: 20 }}>{text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[
                styles.button, 
                { 
                    backgroundColor: btn2Active ? colors.GREEN :  colors.LIGHT,
                    borderRadius: btn2Active ? 10 : 0,
                }
            ]}
            onPress = {onPress2}
            >
                <Text style={{ color: btn2Active ? colors.WHITE :  colors.BLACK, fontSize: 20 }}>{text2}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 7,
        backgroundColor: colors.LIGHT,
        overflow: 'hidden'
    },
    button: {
        padding: 20,
        width: '50%',
    }
})
export default ToogleButtons;