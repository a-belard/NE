import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import Screen  from './Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import ToogleButtons from '../components/ToogleButtons';
import AppInputText from '../components/AppInputText';

function CheckoutScreen({ navigation }) {
    const [isCreditCard, setIsCreditCard] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleCreditCardSelection = () => {
        setIsCreditCard(true);
        setIsMobile(false);
    }

    const handleMobileSelection = () => {
        setIsMobile(true);
        setIsCreditCard(false);
    }

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.paymentMethodsContainer}>
                    <View style={styles.paymentAmountDetails}>
                        <Text style={{ fontSize: 28, color: colors.BLACK }}>Checkout</Text>
                        <View>
                            <Text style={{ color: colors.GREEN, fontSize: 28 }}>Frw 16,000</Text>
                            <Text style={{ color: colors.GRAY }}>Including VAT{`(18%)`}</Text>
                        </View>
                    </View>
                    <View style={styles.toggleBtnContainer}>
                    <ToogleButtons 
                    text1={'Credit card'} 
                    text2={'Mobile & Cash'} 
                    btn1Active={isCreditCard} 
                    btn2Active={isMobile}
                    onPress1={() => handleCreditCardSelection()}
                    onPress2={() => handleMobileSelection()}
                    />
                    </View>
                </View>

                <View style={styles.paymentInputsContainer}>
                { isCreditCard && (
                <>
                  <Text>Card Number</Text>
                  <AppInputText onChangeText={(text) => console.log('card number: ', text)}/>

                  <Text>Cardholder name</Text>
                  <AppInputText onChangeText={(text) => console.log('card holder: ', text)}/>
                  <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ width: '45%'}}>
                        <Text>Expiry Date</Text>
                        <AppInputText onChangeText={(text) => console.log('date: ', text)}/>
                    </View>
                    <View style={{ width: '45%'}}>
                        <Text>CVV / CVC</Text>
                        <AppInputText onChangeText={(text) => console.log('CVV: ', text)}/>
                    </View>
                  </View>
                </>
                )}

                { isMobile && (
                    <>
                       <View style={styles.mobileOptions}>
                          <Image source={{ uri: 'https://archives.beninwebtv.com/wp-content/uploads/2020/08/MTN-Mobile-Money-.jpg' }} style={styles.img}/>
                          <Text style={[styles.txt, { marginLeft: 80 }]}>MTN Mobile Money</Text>
                       </View>
                       
                       <View style={[styles.mobileOptions, { backgroundColor: colors.LIGHT }]}>
                          <Image source={{ uri: 'https://gistreal.com.ng/wp-content/uploads/2023/03/Airtel-Money-Withdraw-Charges-Zambia.jpg' }} style={styles.img}/>
                          <Text style={[styles.txt, { marginLeft: 80 }]}>Airtel Money</Text>
                       </View>

                       <View style={styles.mobileOptions}>
                          <Image source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/52-buy-a-house-net/pay-15.png' }} style={styles.img}/>
                          <Text style={[styles.txt, { marginLeft: 80 }]}>Cash</Text>
                       </View>
                    </>
                )}
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ textAlign: 'center', color: colors.GRAY, marginBottom: 10 }}>We will send you an order details to your email after the successfull payment</Text>
                    <AppButton title={'Pay for the order'} color={colors.GREEN} onPress={() => navigation.navigate('invoice') }/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    paymentMethodsContainer: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: colors.LIGHT,
        borderWidth: 2,
        padding: 5,
        height: 100,
    },
    paymentAmountDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleBtnContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        top: 80,
        left: 5
    },
    paymentInputsContainer: {
        marginTop: 60,   
    },
    img: {
        width: 80,
        height: 60,
    },
    mobileOptions: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10
    },
    txt: {
        fontSize: 20,
    }
});

export default CheckoutScreen;