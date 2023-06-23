import React, {useEffect, useState} from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import Screen from './Screen'
import purchasedToken from '../api/purchasedToken';
import { routes } from '../constants/routes';

export default function Tokens({navigation, route}) {
    const [tokens, setTokens] = useState([]);
    const fetchTokens = async () => {
        const response = await purchasedToken.getTokensByMeterNumber(route.params.meterNumber)
        if(response.data?.error){
            return Alert.alert(response.data.error)
        }
        setTokens(response.data.tokens)
    }  
    useEffect(() => {
        fetchTokens()
    }, [route.params]) 
  return (
    <Screen><View className="flex flex-col items-center justify-center px-3 my-10">
    <View className="flex flex-row items-center justify-start mb-4">  
    <TouchableOpacity className="w-10 h-10 flex items-center justify-center bg-white rounded-full mr-3" onPress={() => navigation.navigate(routes.welcome)}>
    <Text className="font-bold text-lg text-[dodgerblue]">{"<"}</Text></TouchableOpacity>  
    <Text className="font-bold text-lg text-white">History of Meter number {route.params.meterNumber}</Text>
    </View>
        {tokens && tokens.map(token => (
            <View key={token.id} className="my-2 bg-white p-4 w-full rounded-xl">
                <Text>Token: {token.token}</Text>
                <Text>Amount: {token.amount}</Text>
                <Text>Number of days: {token.token_value_days}</Text>
                <Text>Status: {token.token_status}</Text>
            </View>
        ))}
    </View></Screen>
  )
}
