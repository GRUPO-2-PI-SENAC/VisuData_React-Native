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
                            <TouchableOpacity style = {styles.firstSetBt} type="">  
                                <View style= {styles.amountText}>
                                    <Text style= {styles.textBt}>FUNCIONANDO</Text>
                                    <Text style= {styles.textBt}>NORMALMENTE</Text> 
                                    <Text style= {styles.amountText}>2</Text> 
                                </View>
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity style = {styles.secSetBt} type="">  
                        <View style= {styles.amountText}>
                            <Text style= {styles.textBt}>FUNCIONANDO </Text>
                            <Text style= {styles.textBt}>EM ALERTA</Text>
                            <Text style= {styles.amountText}>0</Text> 
                        </View> 
                    </TouchableOpacity>
                    </View>  
                </View> 
                <View style = { styles.firstSet}>
                    {/* <Button styles= {styles.buttons1} onPress={() => navigation.navigate('ListMachine')}> */}
                    <View style={styles.row}>
                        <View style = {styles.healthyMc}>  
                            <TouchableOpacity style = {styles.trdSetBt} type="">  
                                <View style= {styles.amountText}>
                                    <Text style= {styles.textBt}>EM ESTADO</Text>
                                    <Text style= {styles.textBt}>CRÍTICO</Text> 
                                    <Text style= {styles.amountText}>1</Text> 
                                </View>
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity style = {styles.fortSetBt} type="">  
                        <View style= {styles.amountText}>
                        <Text style= {styles.textBt}>TODAS AS </Text>
                            <Text style= {styles.textBt}>MÁQUINAS </Text> 
                            <Text style= {styles.amountText}>15</Text> 
                        </View>
                    </TouchableOpacity>
                    </View>  
                </View> 
            </View>
            <View style = {styles.catSpacing}>
                <Text style = {styles.mainTexts}> Categorias </Text> 
            </View>
            <View style = {styles.categories}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.firstSetCatBt} type="">Motores</TouchableOpacity>
                        <TouchableOpacity style={styles.firstSetCatBt} type="">Injetoras</TouchableOpacity>
                    </View>             
                <View style={styles.row}>
                    <TouchableOpacity style={styles.secSetCatBt} type="">Sensores</TouchableOpacity>
                    <TouchableOpacity style={styles.secSetCatBt}type="">Extratoras</TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity  style={styles.thirdSetCatBt} type="">Empilhadeiras</TouchableOpacity>
                    <TouchableOpacity  style={styles.thirdSetCatBt} type="">Esteiras</TouchableOpacity>
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
        fontFamily: 'Montserrat',

    },

    mainTexts: {
        marginTop: '5%',
        fontWeight: 'bold', 
        fontSize: '25px',
        color: '#212529',
        fontFamily: 'Calibri',
        marginLeft: '4%'

        

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
        marginTop: '5%',
        textAlign: 'justify',
        marginLeft: '5%'


    },
    catSpacing: {
        marginTop: '2%',
        marginBottom: '2%'
    },

    textBt:{
        fontSize: '18px',
        fontFamily: 'Calibri',
        marginLeft: '2%',

    },    
    categories: {
        fontFamily: 'Calibri',
        fontSize: '18px',
        marginTop: '4%',
        justifyContent: 'space-evenly',


    },
    row: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'left',
    },
    firstSetBt: {
        backgroundColor: 'white',
        borderLeftColor: '#0D9B5B',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',
        height: screenHeight * 0.15,
        width: screenWidth * 0.4,
        
    },
    secSetBt: {
        backgroundColor: 'white',
        borderLeftColor: '#F6C23E',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',
        height: screenHeight * 0.15,
        width: screenWidth * 0.4,
        
    },
    trdSetBt: {
        backgroundColor: 'white',
        borderLeftColor: '#E74A3B',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',
        height: screenHeight * 0.15,
        width: screenWidth * 0.4,
        


    },

    fortSetBt: {
        backgroundColor: 'white',
        borderLeftColor: '#D2D2D2',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop:'30px',
        marginLeft: '8%',
        textAlign: 'justify',
        height: screenHeight * 0.15,
        width: screenWidth * 0.4,

    },

    firstSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        fontSize: '20px',
        marginTop: '1%',
        height: screenHeight * 0.06,
        width: screenWidth * 0.4,
        justifyContent: 'center'


    },
    
    secSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        fontSize: '20px',
        marginTop: '2%',
        height: screenHeight * 0.06,
        width: screenWidth * 0.4,
        justifyContent: 'center'


    },

    thirdSetCatBt: {
        backgroundColor: '#09427D',
        border: 'none',
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        marginBottom: '2%',
        marginLeft: '5%',
        minWidth: '118px',
        fontSize: '20px',
        marginTop: '2%',
        height: screenHeight * 0.06,
        width: screenWidth * 0.4,
        justifyContent: 'center'


    },



    
});