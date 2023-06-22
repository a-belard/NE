import React, { useState } from 'react';
import Screen from './Screen';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, VirtualizedList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import OrderItem from '../components/OrderItem';
import AppButton from '../components/AppButton';

const DRINKS = [
    {
        id: 1,
        title: 'Tom Yummy - 12.5',
        description: 'Kaffir Lime Vodka, Lemongrass, Ginger, Citrus',
        price: 5000,
        imgUrl: 'https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2019/08/27-2.jpg',
    },
    {
        id: 2,
        title: 'Singapore Sling - 12.5',
        description: 'Gin, Grenadine, Citrus, Cucumber',
        price: 5000,
        imgUrl: 'https://www.thespruceeats.com/thmb/F1Hz60kgIYucFSDdaxRZttgxHdo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/singapore-sling-recipe-760602-Final-b17e433d43734705a3ff6d358d396cb8.jpg',
    },
    {
        id: 3,
        title: 'White Russian - 12.5',
        description: 'Vanilla, Coffee and Chocolate with hints of Orange',
        price: 6000,
        imgUrl: 'https://www.liquor.com/thmb/wzgqg2FC1Sqbwo_PAJofVVZIMRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg',
    },
];

function OrderScreen({ navigation, route }) {
    const [menu, setMenu] = useState(route.params.menu_name);

    let total = 0;
    DRINKS.map((drink) => {
        total += drink.price;
    });

    return (
        <Screen>
            <ScrollView style={styles.container} >
                <Text style={{ textAlign: 'right', color: colors.BLACK, fontSize: 32 }}>Choose Kigali</Text>
                <Text style={{ textAlign: 'right', color: colors.PRIMARY, fontSize: 32 }}>{ menu + 's'}</Text>
                <View style={styles.itemsContainer}>
                    { DRINKS.map((drink) => (
                        <OrderItem 
                        key={drink.id}
                        description={drink.description}
                        imgUrl={drink.imgUrl}
                        title={drink.title}
                        price={drink.price}
                        onPress={(amount) => console.log(amount)}
                        />
                    ))}
                    {/* <FlatList
                    data={DRINKS}
                    keyExtractor={(item) => item.id }
                    renderItem={({item}) => (
                    <OrderItem 
                    description={item.description} 
                    imgUrl={item.imgUrl} 
                    title={item.title}
                    price={item.price}
                    onPress={(amount) => console.log(amount)}
                    />
                    )}
                    /> */}
                </View>

                <TouchableOpacity onPress={() => console.log()}>
                <View style={styles.moreItems}>
                    <Text style={{ marginRight: 30, fontSize: 22, color: colors.PRIMARY, textTransform: 'lowercase' }}>more {menu + 's'}</Text>
                    <MaterialCommunityIcons name='arrow-right' size={35} color={colors.PRIMARY}/>
                </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.BLACK, fontSize: 20, fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ color: colors.PRIMARY, fontSize: 20 }}>Frw {total}</Text>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <AppButton title={'Proceed to Checkout'} onPress={() => navigation.navigate('checkout') }/>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 12,
    },
    itemsContainer: {
        // padding: 10,
    },
    moreItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    }
})
export default OrderScreen;