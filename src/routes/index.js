// import { createNativeStackNavigator} from '@react-navigation/native-stack'
import AddMachine from '../pages/machine/addMachine';
import ListMachine from '../pages/machine/listaMachine';
// import { createBottomTabNaviagtor} from '@react-navigation/bottom-tabs'

// const Tab = createBottomTabNaviagtor();
// const Stack = createNativeStackNavigator();

// export default function Routes(){
//     return (
//         // <Stack.Navigator>
//         //     <Stack.Screen
//         //         name=" "
//         //         component={AddMachine}
//         //         options={{ headerShown: false}}
//         //     />

//         //     <Stack.Screen
//         //         name="Lista de Máquina"
//         //         component={ListMachine}
//         //         options={{ headerShown: false}}

//         //     />
//         // </Stack.Navigator>
//         <Tab.Navigator>
//             <Tab.Screen name="home" component={AddMachine}/>
//             <Tab.Screen name="lista" component={ListMachine}/>

//         </Tab.Navigator>
//     )
// }

import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function Add() {
//   return (
//     <AddMachine/>
//   );
// }

// function SettingsScreen() {
//   return (
//     <ListMachine/>
//   );
// }

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