import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from './Componenets/custom.Header'
import Markets from './Componenets/custom.Markets'
import DailyUpdates from './Componenets/custom.DailyUpdates'
import WatchList from './Componenets/custom.WatchList'
import Footer from './Componenets/custom.Footer'

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ImageBackground source={require('./assets/background.jpg')} style={styles.Image}>
        <Header></Header>
        <ScrollView style={styles.Container}>
          <Markets></Markets>
          <DailyUpdates></DailyUpdates>
          <WatchList></WatchList>
        </ScrollView>
        <Footer page="Home"></Footer>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  },
});