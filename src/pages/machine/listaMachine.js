import { StyleSheet, Text, View, Dimensions } from 'react-native';

// import 'bootstrap/dist/css/bootstrap.min.css';

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

    return(
        <View style={styles.cell}>
            <View style={styles.row}>
                <Text style={styles.textCellTop}>{props.modelo}</Text> 
                <Text style={styles.textCellTop}>{props.serie}</Text> 
            </View>
            <View style={styles.row}>
                <Text style={styles.textCellBottom}><Status/>{props.temperatura}</Text> 
                <Text style={styles.textCellBottom}><Status/>{props.ruido}</Text> 
                <Text style={styles.textCellBottom}><Status/>{props.vibracao}</Text> 
            </View>
        </View>
    );
} 

export default function ListMachine() {
    return (
        <View style={styles.container}>
            <Header titulo="Lista de Máquinas"/>
            <Cell modelo={modelo} serie={serie} temperatura={temperatura} ruido={ruido} vibracao={vibracao} />
        </View>
    );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    flexGrow: 1,
    },
    header: {
        padding: 20,
        alignItems: 'left',

    },
    textHeader: {
        fontSize: 27,
    },
    cell: {
        alignItems: 'center',  
        backgroundColor: '#E9F0F8', 
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 10,
        padding: 5,
    },
    textCellTop: {
        left: 0,
        right: 0,
        marginHorizontal: 10,
        fontSize: 23,
        width: 150,
        color: '#09427D',
        fontWeight: 'bold',
    },
    textCellBottom: {
        left: 0,
        right: 0,
        marginTop: 5,
        marginHorizontal: 35,
        fontWeight: 'bold',
        width: 60,

    },
    row: {
        flexDirection: 'row',
        
    },
    status: {
        backgroundColor: '#A80202',
        color: '#A80202',
        height: 5,
        borderRadius: 50,
        fontSize: 10,
        
    }
});
