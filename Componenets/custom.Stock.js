import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import getCurrentPrice from '../MarketTracker'

class Stock extends React.Component {
  render() {
    return (
      <>
        <View style={[styles.Stock, styles.Shadow]}>
          <View style={styles.Header}>
            <Text>{this.props.ticker}</Text>
            <View style={[styles.ChangeIcon, (this.values.changePrice < 0 ? {backgroundColor: "#ff00004F"} : {backgroundColor: "#34a3364F"})]}>
              <Text style={(this.values.changePrice < 0 ? {color: "#f00"} : {color: "#34a336", transform: [{ rotate: '180deg'}]})}>▼</Text>
            </View>
          </View>
          <Text style={{marginLeft: 8, marginBottom: 4, fontWeight: "bold"}}>{this.values.closePrice}</Text>
          <View style={styles.Change}>
            <Text style={[styles.ChangeText, (this.values.changePrice < 0 ? {color: "#f00"} : {color: "#34a336"})]}>{this.values.changePrice}</Text>
            <Text style={[styles.ChangeText, (this.values.changePercent < 0 ? {color: "#f00"} : {color: "#34a336"})]}>{this.values.changePercent}%</Text>
          </View>
        </View>
      </>
    )
  }

  constructor() {
    super();
    this.values = {
      closePrice: null,
      changePrice: null,
      changePercent: null,
    }
  }

  setValues(obj) {
    this.values = obj;
    this.forceUpdate();
  } 

  componentDidMount() {
    (getCurrentPrice(this.props.ticker))
    .then((data) => (
      this.setValues({
        closePrice: parseFloat(data.close).toFixed(2),
        changePrice: parseFloat(data.open - data.close).toFixed(2),
        changePercent: parseFloat((data.open - data.close) / data.open).toFixed(2),
      })
    ))
    .catch(function(error) {
      console.log(error)
    })
  }
}

const styles = StyleSheet.create({
  Stock: {
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
  Header: {
    margin: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ChangeIcon: {
    borderRadius: 1000,
    fontSize: 15,
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems:"center",
    // opacity: 0.25,
  },
  Change: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ChangeText: {
    fontSize: 13,
  }
})

export default Stock