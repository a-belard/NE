import React, { useState } from 'react'; 
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function OrderItem({ imgUrl, description, title, price, onPress, imgWidth = 80, imgHeight = 85 }) {
    const [amount, setAmount] = useState(0);

    function handleDecrement() {
        if (amount > 0) {
            setAmount(amount - 1);
            onPress(amount);
        }
    }

    function handleIncrement() {
        setAmount(amount + 1);
        onPress(amount);
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: imgUrl }} style={[styles.img, { width: imgWidth, height: imgHeight }]}/>

            <View style={{ paddingLeft: 20 }}>
                <Text style={{ color: colors.GRAY }} numberOfLines={1}>{description.substring(0, 37)}</Text>
                <Text style={{ color: colors.BLACK, fontSize: 22 }}>{title}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                    <Text style={{ color: colors.PRIMARY, fontSize: 24 }}>{price}</Text>

                    <View style={styles.counterContainer}>
                        <TouchableWithoutFeedback onPress={() => handleDecrement()} style={styles.icons}>
                            <MaterialCommunityIcons name='minus' size={25} color={colors.PRIMARY}/>
                        </TouchableWithoutFeedback>

                        <Text>{amount}</Text>

                        <TouchableWithoutFeedback onPress={() => handleIncrement()} style={styles.icons}>
                            <MaterialCommunityIcons name='plus' size={25} color={colors.PRIMARY}/>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: colors.LIGHT,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    img: {
        borderRadius: 10,
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        borderRadius: 10,
    },
    icons: {
        paddingHorizontal: 10,
    }
})
export default OrderItem;