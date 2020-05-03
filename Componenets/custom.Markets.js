import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Market from './custom.Market'

class Markets extends React.Component {
  render() {
    return (
      <>
        <View>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>Markets</Text>
            <TouchableOpacity
              style={{justifyContent: "flex-end"}}
              activeOpacity={0.85}
              touchSoundDisabled={true}
            >
              <Text style={styles.ViewText}>View Markets</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Markets}>
            <Market ticker="DOW"></Market>
            <Market ticker="S&P500"></Market>
            <Market ticker="NSADAQ"></Market>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  Markets: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: "visible",
    marginBottom: 10,
  },
  Title: {
    flexDirection: 'row',
    flexGrow: 10,
    marginBottom: 10,
  },
  TitleText: {
    flexGrow: 1000
  },
  ViewText: {
    fontSize: 10,
    color: "#1a73e8"
  }
})

export default Markets