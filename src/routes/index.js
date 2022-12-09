
import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
import * as React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/enterprise/home';
import Profile from '../pages/enterprise/profile';

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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Adicionar" component={AddMachine}  />
        <Tab.Screen name="Lista" component={ListMachine} />
        <Tab.Screen name="Perfil" component={Profile}/>
        
    </Tab.Navigator>
    );
}
