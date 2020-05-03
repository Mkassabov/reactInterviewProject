import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class UpdateCard extends React.Component {
  render() {
    return (
      <>
        <View style={[styles.UpdateCard, styles.Shadow]}>
          <View style={styles.Time}>
            <TouchableOpacity
              activeOpacity={1} 
              onPress={() => this.setSelected('morning')}
              touchSoundDisabled={true}
            >
              <Text 
                style={[styles.TimeText, (this.selected === 'morning' ? {} : {color: '#6e6e6e'})]}
              >
                Morning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1} 
              onPress={() => this.setSelected('afternoon')}
              touchSoundDisabled={true}
            >
              <Text 
                style={[styles.TimeText, (this.selected === 'afternoon' ? {} : {color: '#6e6e6e'})]}
              >
                Afternoon
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1} 
              onPress={() => this.setSelected('evening')}
              touchSoundDisabled={true}
            >
              <Text 
                style={[styles.TimeText, (this.selected === 'evening' ? {} : {color: '#6e6e6e'})]}
              >
                Evening
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ReadContainer}>
            <Text style={[styles.AvailableText, (this.Times[this.selected] ? {color: '#daa520'} : {color: '#6e6e6e'})]}>● {this.Times[this.selected] ? "Available now" : "Not available"}</Text>
            {this.Times[this.selected] &&
              <TouchableOpacity
                activeOpacity={0.85}
                touchSoundDisabled={true}
              >
                <Text style={styles.ReadText}>Read Now</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </>
    )
  }

  setSelected(str) {
    if(str === 'morning' || str === 'afternoon' || str === 'evening') {
      this.selected = str;
      this.forceUpdate();
    }
  }

  constructor() {
    super();
    this.Times = {
      morning: true,
      afternoon: false,
      evening: false,
    };
    this.selected = 'morning';
    this.setSelected = this.setSelected.bind(this);
  }
}

const styles = StyleSheet.create({
  UpdateCard: {
    marginHorizontal: 5,
    padding: 12,
    paddingVertical: 20,
    borderRadius: 6,
  },
  Time: {
    flexDirection: 'row',
  },
  TimeText: {
    marginRight: 10,
  },
  ReadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 12,
  },
  AvailableText: {
    fontSize: 10,
  },
  ReadText: {
    fontSize: 12,
    color: "#1a73e8"
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

export default UpdateCard