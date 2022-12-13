import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
// import { Grandeza, Campo} from './addMachine';

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

    async function sendForm(){
        let response = await fetch('https://localhost:54332/Machine/update',{
           method: 'PUT',
           headers:{
            Accept: 'application/json',
            'Content-Type' : 'application/json'
           },
           body: JSON.stringify({
            machineId: machines.machineId,
                    brand: brand,
                    model: model,
                    serialNumber : serialNumber,
                    category: category,
                    tag: tag,
                    minTemp: minTemp,
                    maxTemp: maxTemp,
                    minVibration: minVibration,
                    maxVibration: maxVibration,
                    maxNoise: maxNoise,
                    minNoise: minNoise     
           }) 
        });
    }

    

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
                        <TextInput style={styles.input} value={machines.brand} 
                        onChange={(e) => { setMachines({ ...machines, brand: e.target.value }) }} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Categoria</Text>
                        <TextInput style={styles.input} value={machines.category} onChange={(e) => { setMachines({ ...machines, category: e.target.value }) }}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Text style={styles.texto}>Modelo</Text>
                        <TextInput style={styles.input} value={machines.model} onChange={(e) => { setMachines({ ...machines, model: e.target.value }) }} />
                    </View>
                    <View >
                        <Text style={styles.texto}>Tag</Text>
                        <TextInput style={styles.input} value={machines.tag} onChange={(e) => { setMachines({ ...machines, tag: e.target.value }) }}/>
                    </View>
                </View>

                <Text style={styles.textoSerie}>Numero de série</Text>
                <TextInput style={styles.inputSerie} value={machines.serialNumber} onChange={(e) => { setMachines({ ...machines, serialNumber: e.target.value }) }} />

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minTemp} onChange={(e) => { setMachines({ ...machines, minTemp: e.target.value }) }}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxTemp} onChange={(e) => { setMachines({ ...machines, maxTemp: e.target.value }) }} />
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Temperatura</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minVibration} onChange={(e) => { setMachines({ ...machines, minVibration: e.target.value }) }}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxVibration} onChange={(e) => { setMachines({ ...machines, maxVibration: e.target.value }) }}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Vibração</Text>
                    </View>
                </View>

                <View style={styles.rowGrandeza}>
                    <View >
                        <Text style={styles.textoGrandeza}>Mínimo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.minNoise} onChange={(e) => { setMachines({ ...machines, minNoise: e.target.value }) }}/>
                    </View>
                    <View >
                        <Text style={styles.textoGrandeza}>Máximo</Text>
                        <TextInput style={styles.inputGrandeza} value={machines.maxNoise} onChange={(e) => { setMachines({ ...machines, maxNoise: e.target.value }) }}/>
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
