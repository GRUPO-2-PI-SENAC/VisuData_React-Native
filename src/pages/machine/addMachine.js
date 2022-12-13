import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

var categoryName = "";
var brandName = "";
var modelName = "";
var tag = ""; 
var maxTemp = 0 ; 
var minTemp = 0 ;
var maxVibration = 0; 
var minVibration = 0 ;
var minNoise = 0 ; 
var maxNoise = 0 ; 

function Grandeza(props) {
    return(
        <View style={styles.rowGrandeza}>
            <View >
                <Text style={styles.textoGrandeza}>Mínimo</Text>
                <TextInput style={styles.inputGrandeza}/>
            </View>
            <View >
                <Text style={styles.textoGrandeza}>Máximo</Text>
                <TextInput style={styles.inputGrandeza}/>
            </View>
            <View >
                <Text style={styles.textoGrandeza}>{props.nome}</Text>
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
                
                    <Text style={styles.textoSerie}>Numero de série</Text>
                    <TextInput style={styles.inputSerie}/>
                
                <Grandeza nome="Temperatura"/>
                <Grandeza nome="Vibração"/>
                <Grandeza nome="Ruído"/>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                     <Text  style={styles.textoButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        flex:1,
    },

    header: {
        flex: 0.1,
        paddingTop: 5,
        width: screenWidth * 0.9,
        alignSelf: 'center'
        
    },
    textoHeader: {
        alignItems: 'center',
        fontSize: 25,
    },
    textoHeaderSec: {
        fontSize: 25,
        color: '#09427D'

    },
    main: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

    },

    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
    },

    texto:{
        width: screenWidth * 0.4,
        marginTop: 10,
        fontWeight: 'bold',
        marginHorizontal: 10,

    },

    input: {
        borderBottomWidth: 1,
        width: screenWidth * 0.4,
        height: 40,
        marginHorizontal: 10,
    },

    inputSerie: {
        borderBottomWidth: 1,
        width: screenWidth * 0.85 ,
        height: 40,
        marginBottom: 5,

    },
    
    textoSerie: {
        marginTop: 10,
        fontWeight: 'bold', 
        width: screenWidth * 0.85,
    },

    rowGrandeza: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
    },

    textoGrandeza: {
        width: screenWidth * 0.27,
        fontWeight: 'bold', 
    },

    inputGrandeza: {
        borderBottomWidth: 1,
        width: screenWidth * 0.22,
        height: 20,
        marginRight: 23,
        marginBottom: 10,
        alignSelf: 'left',
    },

    footer: {
        flex: 0.1,
    },

    button: {
        marginTop: 10,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 10, 
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: '#09427D',

    },

    textoButton: {
        color: '#fff',
        fontSize: 18,
    }


});
