
import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/enterprise/home';
// import { FontAwesome5 } from '@expo/vector-icons'; 
// import Profile from '../pages/enterprise/profile';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: '#09427D'
            },
        }}
        >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color='white' size={size} />
            ),
            }} 
        />
        <Tab.Screen name="Adicionar" component={AddMachine} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle-outline" size={size} color="white" />
            ),
            }} />
        <Tab.Screen name="Lista" component={ListMachine} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color="white" />
            ),
            }} />
        
    </Tab.Navigator>
    );
}
