import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UpdateCard from './custom.UpdateCard'
import {ExpandableTotal, ExpandableStock} from './custom.ExpandableCards'

class DailyUpdates extends React.Component {
  render() {
    return (
      <>
        <View style={styles.DailyUpdates}>
          <View style={styles.Title}>
            <Text>Your Daily Updates</Text>
          </View>
          <UpdateCard/>
          <ExpandableTotal startOpen={true} />
          <ExpandableStock title={'Top Mover'} ticker={this.topMover} />
          <ExpandableStock title={'Bottom Mover'} ticker={this.bottomMover} />
        </View>
      </>
    )
  }

  constructor() {
    super();
    this.topMover = "GOOG";
    this.bottomMover = "MSFT";
  }
}

const styles = StyleSheet.create({
  Title: {
    marginBottom: 10,
  },
  DailyUpdates: {
    marginBottom: 10,
  },
  SpaceAbove: {
    marginTop: 10,
  },
  Shadow: {
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 2
  },
})

export default DailyUpdates