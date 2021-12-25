import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar, TextInput, Button } from 'react-native'
import axios from 'axios'
import cold from '../../assets/cold.jpg'

const Home = () => {
    const [city, setCity] = useState();

    const getWeather = () => {
        const api = "fb4c68b2c921418c658c71e0b4bb9286";
        try {
            const res = axios.get(`api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api}`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }        
    }
    return (
        <ImageBackground source={cold} style={styles.cold}>
            <SafeAreaView style={styles.container}>
                <View style={styles.city}>
                    <TextInput                 
                        style={styles.cityInput}
                        value={city}
                        placeholder='اكتب مدينتك'
                        onChangeText={text => setCity(text)}
                    />                             
                    <Button
                    onPress={getWeather}
                        style={styles.validateBtn}                    
                        title="Ok"
                        color="#000"                        
                    />
                </View>                                            
            </SafeAreaView>                    
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,          
        alignItems: 'flex-start',          
    },
    cold: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%'                       
    },  
    city: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,        
        width: '100%',       
        maxHeight: 100,                         
    },
    cityInput: {
        backgroundColor: "rgba(255, 255, 255, .7)",
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 30,
        width: "80%",
        height: 60,
        marginVertical: 50,
        borderRadius: 10,
    },
    validateBtn: {
        width: 150,
        height: 50
    }
})

export default Home
