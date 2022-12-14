import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@react-navigation/stack';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function HeaderHome (props){
    return(
        <View style={styles.headerHome}>
            <Text style={styles.textHeader}>{props.title}</Text>
        </View>
    );
}

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
        <View>
            <HeaderHome
                    title="VisuData"
            />
            <View style = {styles.body}>
                
                <Text style = {styles.mainTexts}> Visão Geral</Text>
                <View style = {styles.good}>
                    <View >
                        <View style={styles.row}>
                            <View style = {styles.healthyMc}>  
                                <ButtonCard
                                    
                                    nameOne="FUNCIONANDO"
                                    nameTwo=""
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
        marginTop: 20
    },
    headerHome: {
        backgroundColor: '#2b5690',
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    textHeader: {
        color: '#FFF',
        fontSize: 24
    },
    mainTexts: {
        marginTop: '2',
        fontWeight: 'bold', 
        fontSize: '24px',
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
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        marginTop: '8%',
        textAlign: 'justify',
        marginLeft: '5%',
    },
    catSpacing: {
        marginTop: '4%',
        marginBottom: '2%'
    },

    textBt:{
        fontSize: '16px',
        fontFamily: 'Calibri',
        marginLeft: '2%',

    }, 

    categories: {
        fontFamily: 'Calibri',
        fontSize: '18px',
        marginTop: '2%',
        justifyContent: 'space-evenly',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'left',
    },
    setBt: {
        backgroundColor: 'white',
        borderRadius: '10px',
        marginTop: 15,
        marginHorizontal: 10,
        height: screenHeight * 0.14,
        width: screenWidth * 0.4,
        borderLeftColor: "#09427D",
        borderLeftWidth: '5px',
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