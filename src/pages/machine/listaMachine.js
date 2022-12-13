import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

// import { FadeOutToBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

    const modelo = "HT-605"
    const serie = "12312412312"
    const temperatura = "27ºC"
    const ruido = "220db"
    const vibracao = "64Hz"


function Header(props){
    return(
      <View style={styles.header}>
        <Text style={styles.textHeader}>
            {props.titulo}
        </Text>
      </View>
    );
  }

function Cell(props){

    return(        
    <TouchableOpacity style={styles.buttonCell} >
        <View>
            <Text style={styles.textHeaderCard}>Seleciona a Maquina</Text>
        </View>
        <View style={styles.rowBody}>
            <Text style={styles.textCellTopMod}>{props.modelo}</Text> 
            <Text style={styles.textCellTopSerie}>{props.serie}</Text> 
        </View>
        <View style={styles.rowFooter}>
            <Text style={styles.textCellBottom}>{props.temperatura} ºC</Text> 
            <Text style={styles.textCellBottom}>{props.ruido} Hz</Text> 
            <Text style={styles.textCellBottom}>{props.vibracao} dB</Text> 
        </View>
    </TouchableOpacity>
    
    );
} 

function Icons(){

    const navigation = useNavigation();

    return(
        <View style={styles.colIcons}>
            <TouchableOpacity style={styles.buttonIcon} onPress={() => navigation.navigate('editMachine')}>
                <Ionicons name="brush" color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonIcon}>
                <Ionicons name="trash" color="red" />
            </TouchableOpacity>
        </View> 
    );
}


export default function ListMachine() {

    const [ machines, setMachines ] = useState ([]);

    useEffect(() => {
        fetch(`https://localhost:54332/Machine/getall`)
        .then(response => response.json())
        .then(data => setMachines(data))
        
    }, [])

    return (
        <View style={styles.container}>
            <Header titulo="Lista de Máquinas"/>
            <>
                {machines.map((machine) => 
                    (<View style={styles.row}>
                        <Cell 
                            key={machine.id}
                            modelo={machine.model} 
                            serie={machine.serialNumber} 
                            temperatura={machine.tempAvg} 
                            ruido={machine.noiseAvg} 
                            vibracao={machine.vibrationAvg} 
                        />
                        <Icons/>
                    </View>)
                )}
            </>
           
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
        flex:1
    },

    header: {
        padding: 20
    },

    textHeader: {
        fontSize: 27,
        fontWeight: 'bold'
    },

    textHeaderCard: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#09427D',
        color: '#FFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    textCellTopMod: {
        fontSize: 20,
        width: screenWidth * 0.4,
        color: '#09427D',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 10
    },

    textCellTopSerie: {
        fontSize: 20,
        width: screenWidth * 0.4,
        color: '#09427D',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 12,
    },

    textCellBottom: {
        marginTop: 5,
        fontWeight: 400,
        width: screenWidth * 0.3,
        textAlign: 'center'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',  
    },

    rowBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 8
        
    },

    rowFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
        minHeight: '20px',
        borderTopWidth: 1,
        borderColor: '#dee2e6'
    },

    buttonIcon: {
        width: screenWidth * 0.1,
        height: screenHeight * 0.05,
        backgroundColor: '#E9F0F8', 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    colIcons: {
        marginTop: 40,
        marginLeft: 10
    },

    buttonCell: {
        // height: screenHeight * 0.1,
        width: screenWidth * 0.75, 
        borderColor: '#dee2e6',
        borderWidth: 1,
        borderRadius: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        marginBottom: 10,
        minHeight: '100px',
        marginBottom: 20,
        marginTop: 10
    },

});

