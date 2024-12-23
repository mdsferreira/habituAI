import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/fontawesome6';
import HomeScreen from '../../pages/home';
import ProfileScreen from '../../pages/profile';

const Tab = createBottomTabNavigator();


const icons = {
    Home: "calendar-check",
    Profile: "user"
}

const MainTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = "home";

                    // Retorna o ícone correto
                    return <Icon name={icons[route.name]} size={size} color={color} iconStyle={focused ? "solid" : "regular"} />;
                },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainTabs;
