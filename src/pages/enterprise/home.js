import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Home(navigation) {
    return(
        <View style = {styles.body}>
            <Text style = {styles.mainTexts}> Visão Geral</Text>
            <View style = {styles.good}>
                <View style = { styles.firstSet}>
                    {/* <Button styles= {styles.buttons1} onPress={() => navigation.navigate('ListMachine')}> */}
                    <View style={styles.row}>
                        <View style = {styles.healthyMc}>  
                            <button style = {styles.firstSetBt} type="">  
                                <View style= {styles.amountText}>
                                    <Text style= {styles.textBt}>FUNCIONANDO</Text>
                                    <Text style= {styles.textBt}>NORMALMENTE</Text> 
                                    <Text style= {styles.amountText}>2</Text> 
                                </View>
                            </button>
                        </View>
                    <button style = {styles.secSetBt} type="">  
                        <View style= {styles.amountText}>
                            <Text style= {styles.textBt}>FUNCIONANDO </Text>
                            <Text style= {styles.textBt}>EM ALERTA</Text>
                            <Text style= {styles.amountText}>0</Text> 
                        </View> 
                    </button>
                    </View>  
                </View> 
                <View style = { styles.firstSet}>
                    {/* <Button styles= {styles.buttons1} onPress={() => navigation.navigate('ListMachine')}> */}
                    <View style={styles.row}>
                        <View style = {styles.healthyMc}>  
                            <button style = {styles.trdSetBt} type="">  
                                <View style= {styles.amountText}>
                                    <Text style= {styles.textBt}>EM ESTADO</Text>
                                    <Text style= {styles.textBt}>CRÍTICO</Text> 
                                    <Text style= {styles.amountText}>1</Text> 
                                </View>
                            </button>
                        </View>
                    <button style = {styles.fortSetBt} type="">  
                        <View style= {styles.amountText}>
                        <Text style= {styles.textBt}>TODAS AS </Text>
                            <Text style= {styles.textBt}>MÁQUINAS </Text> 
                            <Text style= {styles.amountText}>15</Text> 
                        </View>
                    </button>
                    </View>  
                </View> 
            </View>
            <View style = {styles.catSpacing}>
                <Text style = {styles.mainTexts}> Categorias </Text> 
            </View>
            <View style = {styles.categories}>
                    <View style={styles.row}>
                        <button style={styles.firstSetCatBt} type="">Motores</button>
                        <button style={styles.firstSetCatBt} type="">Injetoras</button>
                    </View>             
                <View style={styles.row}>
                    <button style={styles.secSetCatBt} type="">Sensores</button>
                    <button style={styles.secSetCatBt}type="">Extratoras</button>
                </View>
                <View style={styles.row}>
                    <button  style={styles.thirdSetCatBt} type="">Empilhadeiras</button>
                    <button  style={styles.thirdSetCatBt} type="">Esteiras</button>
                </View>
            </View>        
        </View>   
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexGrow: 1,
        width: screenWidth,
        height: screenHeight,
    },
    body: {
        justifyContent: 'space-evenly',
        marginLeft: '3%',
        fontFamily: 'Montserrat',

    },

    mainTexts: {
        marginTop: '5%',
        fontWeight: 'bold', 
        fontSize: '25px',
        color: '#212529',
        fontFamily: 'Calibri',

        

    },
    header: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: '#fff',
    },
    
    buttons1: { 
        backgroundColor: 'white',
        width: '50px',
        height: '30px',


    },
    amountText: {
        fontSize: '25px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        marginTop: '3%',
        textAlign: 'justify',
        marginLeft: '2%'


    },
    catSpacing: {
        marginTop: '2%'
    },

    textBt:{
        fontSize: '18px',
        fontFamily: 'Calibri',
        marginLeft: '2%'

    },    
    categories: {
        fontFamily: 'Calibri',
        fontSize: '18px',
        marginTop: '4%',
        justifyContent: 'space-evenly'

    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'left',
    },
    firstSetBt: {
        backgroundColor: 'white',
        minWidth: '115px',
        width: '210px',
        height: '118px',
        borderLeftColor: '#0D9B5B',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify'
        
    },
    secSetBt: {
        backgroundColor: 'white',
        minWidth: '115px',
        width: '210px',
        height: '118px',
        borderLeftColor: '#F6C23E',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify'


        
    },
    trdSetBt: {
        backgroundColor: 'white',
        minWidth: '115px',
        width: '210px',
        height: '118px',
        borderLeftColor: '#E74A3B',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',
        


    },

    fortSetBt: {
        backgroundColor: 'white',
        minWidth: '115px',
        width: '210px',
        height: '118px',
        borderLeftColor: '#D2D2D2',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',

    },

    firstSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        height: '56px',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        minWidth: '118px',
        fontSize: '20px',
        width: '200px',
        marginTop: '1%'

    },
    
    secSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        height: '56px',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        minWidth: '118px',
        maxWidth: '225px',
        fontSize: '20px',
        width: '200px',
        marginTop: '2%'



    },

    thirdSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        width: '200px',
        height: '56px',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        minWidth: '118px',
        fontSize: '20px',
        marginTop: '2%'


    },



    
});