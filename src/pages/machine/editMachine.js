import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
// import { Grandeza, Campo} from './addMachine';

let category = "";
let brand = ""; 
let tag = "";
let model = "";
let minTemp = "";
let maxTemp = "";
let minVibration = "";
let maxVibration = "";
let minNoise = "";
let maxNoise = ""; 
let serialNumber= "";

async function sendForm(){
    let response = await fetch('https://localhost:55186/machine/add',{
       method: 'POST',
       headers:{
        Accept: 'application/json',
        'Content-Type' : 'application/json'
       },
       body: JSON.stringify({
        id: 1,
                model: model,
                serialNumber : serialNumber,
                maxTemp: maxTemp,
                minTemp: minTemp,
                maxNoise: maxNoise,
                minNoise: minNoise,
                maxVibration: maxVibration,
                minVibration: minVibration,
                category: category,
                tag: tag,
                brand: brand,
                status: ""
       }) 
    });
}

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

export default function EditMachine() {

    const navigation = useNavigation();

    const [ machines, setMachines ] = useState ([]);

    useEffect(() => {
        fetch(`https://localhost:54332/Machine/61363`)
        .then(response => response.json())
        .then(data => setMachines(data))
        
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoHeader}>Edite as principais informações de sua máquina
                    <Text style={styles.textoHeaderSec}> máquina</Text></Text>
            </View>
            <View style={styles.main}>
                <View style={styles.row}>
                    <View >
                        <Text style={styles.texto}>Marca</Text>
                        <TextInput style={styles.input} value={machines.brand} onChangeText={text=> brand = text} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Categoria</Text>
                        <TextInput style={styles.input} value={machines.category} onChangeText={text => category = text}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Text style={styles.texto}>Modelo</Text>
                        <TextInput style={styles.input} value={machines.model} onChangeText={text => model = text} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Tag</Text>
                        <TextInput style={styles.input} value={machines.tag} onChangeText={text => tag = text}/>
                    </View>
                </View>

                <Text style={styles.textoSerie}>Numero de série</Text>
                <TextInput style={styles.inputSerie} value={machines.serialNumber} onChangeText={text => serialNumber = text} />

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minTemp} onChangeText={text => minTemp = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxTemp} onChangeText={text => maxTemp = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Temperatura</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minVibration} onChangeText={text => minVibration = text}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxVibration} onChangeText={text => maxVibration = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Vibração</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minNoise} onChangeText={text => minNoise = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxNoise} onChangeText={text => maxNoise = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Ruído</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                    <Text style={styles.textoButton}>Editar</Text>
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
        fontSize: 20,
    },
    textoHeaderSec: {
        fontSize: 20,
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
