import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Star({ starsNum }) {
    const stars = [];
    for (let i = 0; i < starsNum; i++) stars.push(i);
    
    return (
        <View>
            <TouchableOpacity></TouchableOpacity>
        </View>
    );
}

export default Star;