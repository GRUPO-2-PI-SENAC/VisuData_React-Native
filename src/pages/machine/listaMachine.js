import { StyleSheet, Text, View, TextInput } from 'react-native';

function Header(props){
    return(
      <View>
        <Text>
            {props.titulo}
        </Text>
      </View>
    );
  }

export default function ListMachine() {
    return (
        <View style={styles.container}>
            <Header titulo="Lista de Máquinas"/>
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
