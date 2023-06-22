import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';


function WelcomeScreen({ navigation }) {
    return (
        <Screen color={colors.BLACK}>
            <View>
                <Image source={{ uri: 'https://www.lacademie.com/wp-content/uploads/2021/08/how-long-can-cooked-chicken.jpg' }} style={styles.img}/>
                <View>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>Choose Kigali</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 30 }}>
                        <Text style={{ fontSize: 38, color: colors.WHITE }}>|||</Text>
                        <View style={{ width: 50, height: 5, backgroundColor: colors.WHITE, marginTop: 10 }}/>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <AppButton title={'Enter'} width='50%' onPress={() => navigation.navigate('menu')}/>
                        <Text style={{ color: colors.WHITE, fontSize: 20 }}>and checkout our menu</Text>
                    </View>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300
    },
    text: {
        color: colors.WHITE,
        fontSize: 32,
        textAlign: 'center',
        marginTop: 10,
    }
});

export default WelcomeScreen;