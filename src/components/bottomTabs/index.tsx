import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/fontawesome6';
import { HomeScreen, ProfileScreen } from '@/pages';
import { theme } from '@/config/theme';

const Tab = createBottomTabNavigator();

const icons = {
    Habits: "calendar-check",
    Profile: "user"
}

const MainTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    return <Icon name={icons[route.name]} size={size} color={focused ? theme.colors.primary.main : theme.colors.primary.light} iconStyle={focused ? "solid" : "regular"} />;
                },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: 'gray',
                headerStyle: {
                    //backgroundColor: theme.colors.primary.main,
                },
                headerTitleAlign: 'left',
                //headerTintColor: theme.colors.secondary.light,
                headerTitleStyle: {
                    fontWeight: '500',
                    fontSize: 25
                },
            })}
        >
            <Tab.Screen name="Habits" component={HomeScreen}

            />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default MainTabs;
