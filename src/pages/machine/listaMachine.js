import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default function ListMachine() {
    return (
        <View style={styles.container}>
            <Text>Digite as principais informações da sua</Text>
            <Text>máquina</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    },

});
