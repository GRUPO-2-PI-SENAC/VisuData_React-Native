import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Checkbox, Button, Dimensions } from 'react-native';
import { YellowBox } from 'react-native-web';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function InfoMachine(){
    return(
        <View style={styles.container}>
            <View style = {styles.headerTxt}>
                <View style={styles.row}> 
                    <Text style={styles.mainTxtBlack}>Temperatura</Text>
                    <Text style={styles.mainTxtBlack}>Ruído</Text>
                    <Text style={styles.mainTxtBlack}>Vibração</Text>       
                </View>
            </View>
            <View style = {styles.headerValues}>
                <View style = {styles.row}>
                    <View style = {styles.txtGreen}>
                        <Text style={styles.sectxtblack}>75 C</Text>
                        <TouchableOpacity style = {styles.greenBt}></TouchableOpacity>
                    </View>
                    <View style = {styles.txtRed}>
                        <Text style={styles.sectxtblack}>64 Hz</Text>
                        <TouchableOpacity style = {styles.redBt}></TouchableOpacity>
                    </View>
                    <View style = {styles.txtYellow}>
                        <Text style={styles.sectxtblack}>220 dB</Text>
                        <TouchableOpacity style = {styles.yellowBt}></TouchableOpacity>
                    </View>
                </View>
            </View>
        <View style={styles.valuesCheckbox}>
            <View style={styles.row}>
                    <div style = {styles.valuesTexts}> 
                        <input type="checkbox" id = "temperatura" defaultChecked={true}/>
                        <label for="temperatura">Temperatura</label>
                    </div>
                    <div style = {styles.valuesTexts}>
                        <input type="checkbox"  id = "ruido" defaultChecked={false}/>
                        <label for="ruido">Ruído</label>
                    </div>
                    <div style = {styles.valuesTexts}>
                        <input type="checkbox" id = "vibracao" defaultChecked={false}/>
                        <label for="vibracao">Vibração</label>
                    </div>
            </View>
        </View>
        <View style={styles.secButtons}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.blueBt}>
                    <Text style={styles.whiteTxt}>Tempo real</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blueBt}>
                    <Text style={styles.whiteTxt}>Histórico</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blueBt}>
                    <Text style={styles.whiteTxt}>Exportar</Text>
                </TouchableOpacity>
            </View>
        </View>
            <View style={styles.lastSec}>
            <View style={styles.row}>
                <Text styles = {styles.mainTxtBlack}>Marca:</Text>
                <Text styles = {styles.mainTxtBlack}>Modelo:</Text>
                <Text styles = {styles.mainTxtBlack}>Série:</Text>
            </View>
            <View style={styles.row}>
                <Text styles = {styles.mainTxtBlack}>Minipa</Text>
                <Text styles = {styles.mainTxtBlack}>HT-670M:</Text>
                <Text styles = {styles.mainTxtBlack}>RQW34213ASDA</Text>
            </View>
            <View style={styles.row}>
                <Text styles = {styles.mainTxtBlack}>Tag:</Text>
                <Text styles = {styles.mainTxtBlack}>Categoria:</Text>
                <Text styles = {styles.mainTxtBlack}>Status:</Text>
            </View>
            <View style={styles.row}>
                <Text styles = {styles.mainTxtBlack}>BD-01</Text>
                <Text styles = {styles.mainTxtBlack}>Injetora</Text>
                <Text styles = {styles.mainTxtBlack}>Crítico</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Montserrat',
    },

    row: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'left',

    },

    mainTxtBlack: {
        fontSize: '20px'
    },
    sectxtblack: {
        fontSize: '18px'
    },

    headerTxt: {
        textAlign: 'justify',

    },
    valuesCheckbox: {
        marginTop: '75%',
        backgroundColor: '#CCCCCC',
        textAlign: 'center',
        borderRadius: '5px',
        minHeight: '35px',
        justifyContent: 'center'
        
    },
    valuesTexts: {
        fontSize: '20px',
        marginRight: '6%',

    },
    // bts

    greenBt: {
        backgroundColor: 'green'
    },

    redBt: {
        backgroundColor: 'red'


    },
     
    yellowBt: {
        backgroundColor: 'yellow'


    },

    whiteTxt: {
        color: 'white',
        backgroundColor: '#09427D',
        borderRadius: '5px',
        fontSize: '15px',
        minHeight: '30px',
     


    },

    blueBt: {
        marginTop: '5%',
        marginLeft: '3%',
        minHeight: '30px',
        minWidth: '110px',
        marginBottom: '5%',
        justifyContent: 'center',
        textAlign: 'center',


    }
    
});