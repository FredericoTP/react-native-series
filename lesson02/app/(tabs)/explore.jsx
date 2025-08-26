import coffeeSplash from '@/assets/images/coffee-splash.png'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeSplash} resizeMode='cover' style={styles.image}>
        <Text style={styles.text}>Here you can drink lots of coffee</Text>
      </ImageBackground>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
})