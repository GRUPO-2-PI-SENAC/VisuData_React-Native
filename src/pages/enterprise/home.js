import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const red = '#ff0000';


function ButtonCard(props){

    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style = {styles.setBt}  
            onPress={() => navigation.navigate('listMachine')}>  
                <View style={styles.amountText}>
                    <Text style= {styles.textBt}>{props.nameOne}</Text>
                    <Text style= {styles.textBt}>{props.nameTwo}</Text> 
                    <Text style= {styles.amountText}>{props.number}</Text> 
                </View>
        </TouchableOpacity>
    );
}

function ButtonCat(props){

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
        onPress={() => navigation.navigate('listMachine')}
        style={styles.setCatBt}>
            {props.categoria}
    </TouchableOpacity>
    );
}

export default function Home(navigation) {
    return(
        <View style = {styles.body}>
            <Text style = {styles.mainTexts}> Visão Geral</Text>
            <View style = {styles.good}>
                <View >
                    <View style={styles.row}>
                        <View style = {styles.healthyMc}>  
                            <ButtonCard
                                nameOne="FUNCIONANDO"
                                nameTwo="NORMALMENTE"
                                number="2"
                            />
                        </View>
                        <ButtonCard
                                nameOne="FUNCIONANDO"
                                nameTwo="EM ALERTA"
                                number="0"
                            />
                    </View>  
                </View> 
                <View >
                    <View style={styles.row}>
                        <View style = {styles.healthyMc}>  
                            <ButtonCard
                                nameOne="EM ESTADO"
                                nameTwo="CRÍTICO"
                                number="1"
                            />
                        </View>
                        <ButtonCard
                                nameOne="TODAS AS"
                                nameTwo="MÁQUINAS"
                                number="15"
                            />
                    </View>  
                </View> 
            </View>
            <View style = {styles.catSpacing}>
                <Text style = {styles.mainTexts}> Categorias </Text> 
            </View>
            <View style = {styles.categories}>
                <View style={styles.row}>
                    <ButtonCat categoria="Motores"/>
                    <ButtonCat categoria="Injetoras"/>
                </View>             
                <View style={styles.row}>
                    <ButtonCat categoria="Sensores"/>
                    <ButtonCat categoria="Extratoras"/>
                </View>
                <View style={styles.row}>
                    <ButtonCat categoria="Empilhadeiras"/>
                    <ButtonCat categoria="Esteiras"/>
                </View>
            </View>        
        </View>   
    );
}


const styles = (cor) => StyleSheet.create({
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
        marginTop: '2',
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
        justifyContent: 'center',
        alignSelf: 'left',
    },

    setBt: {
        backgroundColor: 'white',
        borderLeftColor: {colorCell},
        borderRadius: '10px',
        borderLeftWidth: '5px',
        marginTop: 15,
        marginHorizontal: 10,
        height: screenHeight * 0.15,
        width: screenWidth * 0.4,
    },

    setCatBt: {
        backgroundColor: '#09427D',
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign: 'center',
        borderRadius: '10px',
        color: 'white',
        fontSize: '20px',
        height: screenHeight * 0.06,
        width: screenWidth * 0.4,
        justifyContent: 'center',
        alignContent: 'center',  
    },
});