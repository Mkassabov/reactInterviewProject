import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Stock from './custom.Stock'

class WatchList extends React.Component {
  render() {
    return (
      <>
        <View>
          <View style={styles.Title}>
            <View style={{flexGrow: 1, flexDirection: 'row', alignItems: 'flex-end',}}>
              <Text style={styles.TitleText}>Watch List</Text>
              <TouchableOpacity
                style={{justifyContent: "flex-end"}}
                activeOpacity={0.85}
                touchSoundDisabled={true}
              >
                <Text style={styles.ListTitle}>List 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{justifyContent: "flex-end"}}
                activeOpacity={0.85}
                touchSoundDisabled={true}
              >
                <Text style={styles.ListTitle}>List 2</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{justifyContent: "flex-end"}}
              activeOpacity={0.85}
              touchSoundDisabled={true}
            >
              <Text style={styles.ViewText}>add List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.WatchList}>
            <Stock ticker="AAPL"></Stock>
            <Stock ticker="GM"></Stock>
            <Stock ticker="TSLA"></Stock>
          </View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  WatchList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: "visible",
    marginBottom: 20,
  },
  Title: {
    flexDirection: 'row',
    flexGrow: 10,
    marginBottom: 10,
  },
  ListTitle: {
    marginLeft: 15,
    fontSize: 12,
    color: '#545454',
  },
  ViewText: {
    fontSize: 10,
    color: "#1a73e8"
  }
})

export default WatchList