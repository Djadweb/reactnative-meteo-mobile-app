import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar, TextInput } from 'react-native'
import cold from '../../assets/cold.jpg'

const Home = () => {
    const [city, setCity] = useState("");
    return (
        <ImageBackground source={cold} style={styles.cold}>
            <SafeAreaView style={styles.container}>                            
                <TextInput                 
                    style={styles.cityInput}
                    value={city}
                    placeholder='اكتب مدينتك'
                    onChangeText={text => setCity(text)}
                />                
            </SafeAreaView>                    
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignItems: 'center',
    },
    cold: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        width: '100%'                       
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
    }
})

export default Home
