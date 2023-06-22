import { createNativeStackNavigator } from '@react-navigation/native-stack';


import WelcomeScreen from '../screens/WelcomeScreen';
import MenuScreen from '../screens/MenuScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import RestoNavigator from './RestoNavigator';
import InvoiceScreen from '../screens/PaymentSuccessScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name='home' 
            component={WelcomeScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='menu' 
            component={MenuScreen}
            options={{ animation: 'slide_from_bottom', headerShown: false }}
            />
            <Stack.Screen
            name='order'
            component={RestoNavigator}
            options={{ animation: 'slide_from_right', title: '',  }}
            />
            <Stack.Screen
            name='checkout'
            component={CheckoutScreen}
            options={{ animation: 'slide_from_bottom', title: 'Checkout' }}
            />
            <Stack.Screen
            name='invoice'
            component={InvoiceScreen}
            options={{ animation: 'slide_from_bottom', title: 'InvoiceDownload', headerShown: false }}
            />
            <Stack.Screen
            name='feedback'
            component={FeedbackScreen}
            options={{ animation: 'slide_from_bottom', title: 'Feedback', headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppNavigator;