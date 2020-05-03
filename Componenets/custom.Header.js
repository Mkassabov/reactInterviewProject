import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <>
        <View style={styles.Header}>
          <View style={styles.View}>
            <Text style={{ fontSize: 10 }}>{this.dateFormat()}</Text>
            <Text style={{ fontSize: 18 }}>Dashboard</Text>
          </View>
          <View style={styles.View}>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity  
                style={styles.Button}
                activeOpacity={0.9}
                touchSoundDisabled={true}
              >
                <Image style={styles.ButtonImage} source={require('../assets/notification.png')}/>
              </TouchableOpacity>
              <TouchableOpacity  
                style={styles.Button}
                activeOpacity={0.9}
                touchSoundDisabled={true}
              >
                <Image style={styles.ButtonImage} source={require('../assets/settings.png')}/> 
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    )
  }
  dateFormat() {
    return new Date().toDateString().replace(" ", ", ")
  }
}

const styles = StyleSheet.create({
  Header: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row"
  },
  View: { 
    flexGrow: 1,
    justifyContent: "center",
  },
  ButtonContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  Button: {
    width: 25,
    height: 25,
    margin: 2,
    borderRadius:6,
    backgroundColor: "#1a73e8",
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonImage: {
    width: 18,
    height: 18,
  }
})

export default Header