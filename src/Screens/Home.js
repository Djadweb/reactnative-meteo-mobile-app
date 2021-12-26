import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, StatusBar, TextInput, Button } from 'react-native'
import axios from 'axios'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

const Home = () => {
    const [city, setCity] = useState("");    
    const [weather, setWeather] = useState();    
    const images = [image1, image2, image3];
    const [randomImg, setRandomImg] = useState(images[0]);        

    const getWeather = async () => {        
        const api = "fb4c68b2c921418c658c71e0b4bb9286";
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)            
            setWeather(res.data)
            const random = Math.floor(Math.random() * images.length) 
            setRandomImg(images[random])
        } catch (error) {
            console.log(error)
        }        
    }
    return (        
        <ImageBackground source={randomImg} style={styles.cold}>
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

                {/* Results */}
                <View style={styles.results}>
                    <View style={styles.location}>
                        <Text style={styles.locationTxt}>
                            {weather?.name}                            
                        </Text>
                    </View>                                
                    <View style={styles.weather}>
                        <Text style={styles.weatherTxt}>
                            {weather ? Math.round(weather.main.temp)+"°" : null}  {weather?.weather[0]?.main}                              
                        </Text>
                    </View>                      
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
        top: 20,
        borderRadius: 10,
    },
    validateBtn: {
        width: 150,
        height: 50
    },
    results: {
        width: '80%',      
        marginVertical: 50,
        marginHorizontal: '10%',  
        minHeight: 200,
        backgroundColor: "rgba(255, 255, 255, .5)",
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    location: {
        marginVertical: 20,
    },
    weather: {
        marginVertical: 20,
    },
    locationTxt: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, .2)',
        textShadowOffset: {width: -5, height: 1},
        textShadowRadius: 5,
    },
    weatherTxt: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, .2)',
        textShadowOffset: {width: -5, height: 1},
        textShadowRadius: 5,
    }
})

export default Home
