import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  LineChart,
} from 'react-native-svg-charts'

class Market extends React.Component {
  render() {
    return (
      <>
        <View style={[styles.Market, styles.Shadow]}>
          <Text>{this.props.ticker}</Text>
          <View>
          <LineChart
            style={{ height: 68 }}
            data={
              [ Math.random() * (100),
                Math.random() * (100),
                Math.random() * (100),
                Math.random() * (100),
                Math.random() * (100),
                Math.random() * (100),
                Math.random() * (100),
              ]
            }
            svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 2 }}
            contentInset={{ top: 5, bottom: 5 }}
          >
          </LineChart>
          </View>
          <View style={styles.Change}>
            <Text style={[styles.ChangeText, (this.values.value1 < 0 ? {color: "#f00"} : {color: "#34a336"})]}>{this.values.value1}%{this.values.value1 < 0 ? '▼' : '▲'}</Text>
            <Text style={[styles.ChangeText, (this.values.value2 < 0 ? {color: "#f00"} : {color: "#34a336"})]}>{this.values.value2}%{this.values.value2 < 0 ? '▼' : '▲'}</Text>
          </View>
        </View>
      </>
    )
  }

  constructor() {
    super();
    this.values = {
      value1: (Math.random() * (10) - 5).toFixed(2),
      value2: (Math.random() * (10) - 5).toFixed(2),
    }
  }
}

const styles = StyleSheet.create({
  Market: {
    flexGrow: 1,
    flexBasis: 0,
    padding: 5,
    margin: 5,
    borderRadius: 6,
    aspectRatio: 1/1,
  },
  Shadow: {
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 2
  },
  Change: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ChangeText: {
    fontSize: 10,
  }
})

export default Market