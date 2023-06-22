import React, { useContext } from 'react';
import Screen from './Screen';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

function HomeScreen({ navigation }) {
    const { setUser } = useContext(AuthContext);

    const handleLogout = async () => {
        await authStorage.removeToken();
        setUser(null);
    }

    return (
        <Screen>
            <View style={styles.container} >
                <AppButton title={'Logout'} onPress={handleLogout} color={colors.DODGERBLUE}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default HomeScreen;