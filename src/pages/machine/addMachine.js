import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function Grandeza(props) {
    return(
        <View style={styles.row}>
            <View style={styles.colGrandeza}>
                <Text style={styles.texto}>Mínimo</Text>
                <TextInput style={styles.inputGrandeza}/>
            </View>
            <View style={styles.colGrandeza}>
                <Text style={styles.texto}>Máximo</Text>
                <TextInput style={styles.inputGrandeza}/>
            </View>
            <View style={styles.colGrandeza}>
                <Text style={styles.texto}>{props.nome}</Text>
            </View>
        </View>
    );
}

function Campo(props){
    return(
        <View >
            <Text style={styles.texto}>{props.nome}</Text>
            <TextInput style={styles.input}/>
        </View>
    );
}

export default function AddMachine() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoHeader}>Digite as principais informações da sua
                <Text style={styles.textoHeaderSec}> máquina</Text></Text>
            </View>
            <View style={styles.main}>
                <View style={styles.row}>
                    <Campo nome="Marca"/>
                    <Campo nome="Categoria"/>
                </View>
                <View style={styles.row}>
                    <Campo nome="Modelo"/>
                    <Campo nome="Tag"/>
                </View>
                <View >
                    <Text style={styles.textoSerie}>Numero de série</Text>
                    <TextInput style={styles.inputSerie}/>
                </View>

                <Grandeza nome="Temperatura"/>
                <Grandeza nome="Vibração"/>
                <Grandeza nome="Ruído"/>

                <TouchableOpacity style = {styles.button}>
                    <Text  style={styles.textoButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexGrow: 1,
    },

    header: {
        padding: 20,
        alignSelf: 'center'
        
    },
    textoHeader: {
        fontSize: 27,
    },
    textoHeaderSec: {
        fontSize: 27,
        color: '#09427D'

    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,

    },
    input: {
        borderBottomWidth: 1,
        width: 150,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
    },

    inputSerie: {
        borderBottomWidth: 1,
        width: 320,
        height: 40,
        marginBottom: 10,

    },
    
    texto:{
        marginRight: 8,
        marginLeft: 10,
        fontWeight: 'bold', 
        width: 84,
    },

    textoSerie: {
        fontWeight: 'bold', 
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'left',
    },
    colGrandeza: {
        flexDirection: 'col', 
    },
    inputGrandeza: {
        borderBottomWidth: 1,
        width: 90,
        height: 20,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        alignSelf: 'left',
    },

    button: {
        marginTop: 20,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 10, 
        paddingBottom: 10,
        borderRadius: 10,

        backgroundColor: '#09427D',

    },

    textoButton: {
        color: '#fff',
        fontSize: 20,
    }


});
