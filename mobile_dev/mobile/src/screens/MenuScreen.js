import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import RightDirection from '../components/RightDirection';

function MenuScreen({ navigation }) {
    return (
        <Screen color={colors.BLACK}>
            <View style={styles.container}>
                <Text style={styles.headers}>Choose Kigali</Text>
                <View style={styles.helpContainer}>
                    <View style={{ width: '40%', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='garage-open-variant' color={colors.PRIMARY} size={60}/>
                        <Text style={{ color: colors.WHITE, fontWeight: 'bold', fontSize: 28 }}>Enter</Text>
                        <Text style={{ color: colors.WHITE, fontSize: 20 }}>Table Number</Text>
                    </View>
                    <View style={{ width: 3, height: 100, backgroundColor: colors.PRIMARY }}></View>
                    <View style={{ width: '40%'}}>
                        <MaterialCommunityIcons name='hand-pointing-left' color={colors.PRIMARY} size={60}/>
                        <Text style={{ color: colors.WHITE, fontSize: 20 }}>Call waiter</Text>
                    </View>
                </View>
                <Text style={styles.headers}>menu</Text>
                <View style={{ paddingHorizontal: 50 }}>
                    <RightDirection txt={'Appetizer'} txtSize={28} onPress={() => navigation.navigate('order', { params: { menu_name: 'Appetizer' }, screen: 'RestoItems' }) }/>
                    <RightDirection txt={'Starter'} txtSize={28} onPress={() => navigation.navigate('order', { params: { menu_name: 'Starter' }, screen: 'RestoItems' }) } />
                    <RightDirection txt={'Main'} txtSize={28} onPress={() => navigation.navigate('order', { params: { menu_name: 'Main' }, screen: 'RestoItems' }) } />
                    <RightDirection txt={'Dessert'} txtSize={28} onPress={() => navigation.navigate('order', { params: { menu_name: 'Dessert' }, screen: 'RestoItems' }) } />
                    <RightDirection txt={'Drink'} txtSize={28} onPress={() => navigation.navigate('order', { params: { menu_name: 'Drink' }, screen: 'RestoItems' }) } />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    helpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 35,
    },
    headers: {
        color: colors.PRIMARY,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 10,
    }
})
export default MenuScreen;