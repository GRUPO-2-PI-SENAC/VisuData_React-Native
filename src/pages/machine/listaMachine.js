import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

function Status(){
    return(
        <span class="badge text-bg-danger"> </span>
    );
}

function Cell(props){

    const navigation = useNavigation();

    return(        
    <TouchableOpacity style={styles.buttonCell}  onPress={() => navigation.navigate('infoMachine')}>
        <View style={styles.row}>
            <Text style={styles.textCellTopMod}>{props.modelo}</Text> 
            <Text style={styles.textCellTopSerie}>{props.serie}</Text> 
        </View>
        <View style={styles.row}>
            <Text style={styles.textCellBottom}><Status/>{props.temperatura}</Text> 
            <Text style={styles.textCellBottom}><Status/>{props.ruido}</Text> 
            <Text style={styles.textCellBottom}><Status/>{props.vibracao}</Text> 
        </View>
    </TouchableOpacity>
    
    );
} 


export default function ListMachine() {

    return (
        <View style={styles.container}>
            <Header titulo="Lista de Máquinas"/>

            <Cell style={styles.buttonCell}
            modelo={modelo} 
            serie={serie} 
            temperatura={temperatura} 
            ruido={ruido} 
            vibracao={vibracao} />
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
        padding: 20,
        alignItems: 'left',

    },
    textHeader: {
        fontSize: 27,
    },
    
    buttonCell: {
        // flex: 0.15,
        height: screenHeight * 0.1,
        width: screenWidth * 0.9,
        backgroundColor: '#E9F0F8', 
        borderRadius: 10,
        justifyContent: 'center',

    },

    textCellTopMod: {
        // marginHorizontal: 8,
        fontSize: 21,
        width: screenWidth * 0.4,
        color: '#09427D',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textCellTopSerie: {
        // marginHorizontal: 10,
        fontSize: 21,
        width: screenWidth * 0.4,
        color: '#09427D',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    textCellBottom: {
        marginTop: 5,
        fontWeight: 'bold',
        width: screenWidth * 0.3,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    status: {
        backgroundColor: '#A80202',
        color: '#A80202',
        height: 5,
        borderRadius: 50,
        fontSize: 10,
        
    },

    
});
