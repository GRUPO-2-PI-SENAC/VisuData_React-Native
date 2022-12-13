import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import InfoMachine from '../pages/machine/infoMachine';

import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
import Home from '../pages/enterprise/home';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

function ListToInfoMachine(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="listaMachine" 
                component={ListMachine}
                options={{ headerShown: false }}
                />
            <AppStack.Screen 
                name="infoMachine" 
                component={InfoMachine}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    );
}

function AddToInfoMachine(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="addMachine" 
                component={AddMachine}
                options={{ headerShown: false }}
                />
            <AppStack.Screen 
                name="infoMachine" 
                component={InfoMachine}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    );
}

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
        <Tab.Screen name="Adicionar" component={AddToInfoMachine} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle-outline" size={size} color="white" />
            ),
            }} />
        <Tab.Screen name="Lista" component={ListToInfoMachine} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color="white" />
            ),
            }} />
        
    </Tab.Navigator>
    
    );
}
