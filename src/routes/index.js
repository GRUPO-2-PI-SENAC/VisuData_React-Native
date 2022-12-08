
import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={ListMachine} />
        <Tab.Screen name="Adicionar" component={AddMachine}  />
        <Tab.Screen name="Lista" component={ListMachine} />
        <Tab.Screen name="Perfil" component={ListMachine} />

    </Tab.Navigator>
    );
}