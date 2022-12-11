import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home(navigation) {
    return(

        <View style = {styles.body}>
            <Text style = {styles.mainTexts}> Visão Geral</Text>
            <View style = {styles.good}>
                <View style = { styles.healthyMachines}>
                    {/* <Button styles= {styles.buttons1} onPress={() => navigation.navigate('ListMachine')}> */}
                    <div className="buttons1" style={{background: "linear-gradient(#e66465, #9198e5);" }}>
                        <Text style= {styles.textBt}>
                            FUNCIONANDO
                        </Text>
                        <Text style= {styles.textBt}>
                            PERFEITAMENTE
                        </Text> 
                    </div>


                        
                    {/* </Button>  */}
                </View> 
                <Text style= {styles.textBt}>
                    FUNCIONANDO
                </Text>
                <Text style= {styles.textBt}>
                    PERFEITAMENTE
                </Text>
                {/* inserir text com a api, post no numero */}

                <Text style= {styles.textBt}>
                    FUNCIONANDO
                </Text>
                <Text style= {styles.textBt}>
                    EM ALERTA
                </Text>
                <Text style= {styles.textBt}>
                    EM ESTADO
                </Text>
                <Text style= {styles.textBt}>
                    CRÍTICO
                </Text>
                <Text style= {styles.textBt}>
                    TODAS AS
                </Text>
                <Text style= {styles.textBt}>
                    MÁQUINAS
                </Text>
            </View>
            <Text style = {styles.mainTexts}> Categorias </Text>
            <View styles = {styles.selectMachine}>
                <Text style= {styles.categories}>
                    Motores
                </Text>
                <Text style= {styles.categories}>
                    Injetoras
                </Text>
                <Text style= {styles.categories}>
                    Sensores
                </Text>
                <Text style= {styles.categories}>
                    Extratoras
                </Text>
                <Text style= {styles.categories}>
                    Empilhadeiras
                </Text>
            </View>

        </View>

       
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    body: {
        marginLeft: '5%'
    },

    mainTexts: {
        marginTop: '5%',
        fontWeight: 'bold', 
        fontSize: '25px',
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
    textBt:{
        fontSize: '18px',
        fontFamily: 'Calibri',
        marginLeft: '7%',

    },    
    categories: {
        fontFamily: 'Calibri',
        fontSize: '18px',
        marginLeft: '15%'

    }

});