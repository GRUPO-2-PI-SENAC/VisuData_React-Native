import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
import Home from '../pages/enterprise/home';
import EditMachine from '../pages/machine/editMachine';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

function AddToInfoMachine(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="addMachine" 
                component={AddMachine}
                options={{ headerShown: false }}
                />
            <AppStack.Screen 
                name="listaMachine" 
                component={ListMachine}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    );
}

function HomeToListMachine(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="home" 
                component={Home}
                options={{ headerShown: false }}
                />
            <AppStack.Screen 
                name="listMachine" 
                component={ListMachine}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    );
}

function ListToEditMachine(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="listMachine" 
                component={ListMachine}
                options={{ headerShown: false }}
                />
            <AppStack.Screen 
                name="editMachine" 
                component={EditMachine}
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
        <Tab.Screen name="Home" component={HomeToListMachine} options={{
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
            headerShown: false
            }} />
        <Tab.Screen name="Lista" component={ListToEditMachine} options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color="white" />
            ),
            headerShown: false
            }} />
        
    </Tab.Navigator>
    
    );
}
