import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

class Footer extends React.Component {
  render() {
    return (
      <>
        <View style={styles.Footer}>
          <TouchableOpacity  
            style={styles.Button}
            activeOpacity={1}
            touchSoundDisabled={true}
          >
            <Image style={((this.props.page === 'Home') ? {} : styles.NotSelected)} source={require('../assets/home.png')}/>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.Button}
            activeOpacity={1}
            touchSoundDisabled={true}
          >
            <Image style={((this.props.page === 'Research') ? {} : styles.NotSelected)} source={require('../assets/research.png')}/>
            <Text>Research</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.Button}
            activeOpacity={1}
            touchSoundDisabled={true}
          >
            <Image style={((this.props.page === 'Analytics') ? {} : styles.NotSelected)} source={require('../assets/analytics.png')}/>
            <Text>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.Button}
            activeOpacity={1}
            touchSoundDisabled={true}
          >
            <Image style={((this.props.page === 'Academy') ? {} : styles.NotSelected)} source={require('../assets/academy.png')}/>
            <Text>Academy</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Footer: { 
    flexDirection: "row"
  },
  Button: {
    flexGrow: 1,
    height: 80,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotSelected: {
    tintColor: 'gray',
  }
})

export default Footer