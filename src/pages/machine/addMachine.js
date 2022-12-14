import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react-native';



let category = "";
let brand = ""; 
let tag = "";
let model = "";
let minTemp = "";
let maxTemp = "";
let minVibration = "";
let maxVibration, setMaxVibration = "";
let minNoise, setMinNoise = "";
let maxNoise, setMaxNoise = ""; 
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
    return (
        <View style={styles.rowGrandeza}>
            <View >
                <Text style={styles.textoGrandeza}>Mínimo</Text>
                <TextInput style={styles.inputGrandeza} />
            </View>
            <View >
                <Text style={styles.textoGrandeza}>Máximo</Text>
                <TextInput style={styles.inputGrandeza} />
            </View>
            <View >
                <Text style={styles.textoGrandeza}>{props.nome}</Text>
            </View>
        </View>
    );
}

function Campo(props) {
    return (
        <View >
            <Text style={styles.texto}>{props.nome}</Text>
            <TextInput style={styles.input} />
        </View>
    );
}

export default function AddMachine() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoHeader}>Digite as principais informações da sua
                    <Text style={styles.textoHeaderSec}> máquina</Text></Text>
            </View>
            <View style={styles.main}>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.texto}>Marca</Text>
                        <TextInput style={styles.input} onChangeText={text=> brand = text} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Categoria</Text>
                        <TextInput style={styles.input} onChangeText={text => category = text}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Text style={styles.texto}>Modelo</Text>
                        <TextInput style={styles.input}  onChangeText={text => model = text} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Tag</Text>
                        <TextInput style={styles.input}   onChangeText={text => tag = text}/>
                    </View>
                </View>

                <Text style={styles.textoSerie}>Numero de série</Text>
                <TextInput style={styles.inputSerie}  onChangeText={text => serialNumber = text} />

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza}  onChangeText={text => minTemp = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza}  onChangeText={text => maxTemp = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>ºC Temperatura</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza}  onChangeText={text => minVibration = text}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} onChangeText={text => maxVibration = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Hz Vibração</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} onChangeText={text => minNoise = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} onChangeText={text => maxNoise = text} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>dB Ruído</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
                    <Text style={styles.textoButton}>Cadastrar</Text>
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
        flex: 1,
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
        marginTop: 30
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
        maxHeight: 80
    },

    texto: {
        width: screenWidth * 0.4,
        fontWeight: '500',
        marginHorizontal: 10,
    },

    input: {
        borderBottomWidth: 1,
        width: screenWidth * 0.4,
        height: 30,
        marginHorizontal: 10,
    },

    inputSerie: {
        borderBottomWidth: 1,
        width: screenWidth * 0.85,
        height: 34,
        marginBottom: 5
    },

    textoSerie: {
        marginTop: 10,
        fontWeight: '500',
        width: screenWidth * 0.85,
    },

    rowGrandeza: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        maxHeight: 80,
        marginTop: 20
    },

    textoGrandeza: {
        width: screenWidth * 0.27,
        fontWeight: '500',
    },

    inputGrandeza: {
        borderBottomWidth: 1,
        width: screenWidth * 0.22,
        height: 30,
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
