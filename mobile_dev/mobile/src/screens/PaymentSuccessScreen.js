import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function InvoiceScreen({ navigation }) {

    return (
        <Screen color={colors.BLACK}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name='account-cash' color={colors.WHITE} size={100}/>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={{ fontSize: 28, color: colors.PRIMARY, textAlign: 'center'}}>Payment Success, Yayy!</Text>
                    <Text style={{ textAlign: 'center', color: colors.WHITE }}>We will send order details and invoice in your contact no. and registered email</Text>
                </View>
                <View>
                <TouchableOpacity onPress={() => navigation.navigate('feedback')}>
                <View style={styles.moreItems}>
                    <Text style={{ marginRight: 30, fontSize: 22, color: colors.PRIMARY }}>Check Details</Text>
                    <MaterialCommunityIcons name='arrow-right' size={35} color={colors.PRIMARY}/>
                </View>
                </TouchableOpacity>
                    <AppButton color={colors.PRIMARY} title={'Download Invoice'} onPress={() => console.log('download invoice')}/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsContainer: {
    },
    moreItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    }
})
export default InvoiceScreen;