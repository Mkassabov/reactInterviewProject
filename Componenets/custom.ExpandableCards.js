import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';
import {
  LineChart,
  Grid,
  YAxis,
} from 'react-native-svg-charts'

class ExpandableGeneric extends React.Component {
  render() {
    return (
      <>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.toggle}
          style={[genericStyles.Shadow, genericStyles.ExpandGeneric]}
        >
          <Animated.View style={{ height: this.state.animation }}>
            {!this.state.expanded &&
              this.props.small
            }
            {this.state.expanded &&
              this.props.big
            }
          </Animated.View>
        </TouchableOpacity>
      </>
    )
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded,
    });

    let initialValue = this.state.expanded ? this.maxHeight : this.minHeight;
    let finalValue = this.state.expanded ? this.minHeight : this.maxHeight;

    this.state.animation.setValue(initialValue);
    Animated.timing(
      this.state.animation,
      {
        duration: 250,
        toValue: finalValue,
        useNativeDriver: false,
      },
    ).start();
  }

  constructor(props) {
    super();
    this.toggle = this.toggle.bind(this)
    this.minHeight = 40;
    this.maxHeight = 200;
    this.state = {
      expanded: props.startOpen,
      animation: new Animated.Value(props.startOpen ? this.maxHeight : this.minHeight),
    };
  }
}
ExpandableGeneric.defaultProps = {
  startOpen: false,
};

class ExpandableStock extends React.Component {
  render() {
    return (
      <>
        <ExpandableGeneric
          small={
            <View style={styles.Container}>
              <View>
                <Text style={(this.values.changePrice < 0 ? { color: "#f00" } : { color: "#34a336" })}>{this.props.title}</Text>
                <Text>{this.props.ticker}</Text>
              </View>
              <View>
                <LineChart
                  style={{ height: 40, width: 100 }}
                  data={
                    [this.values.valueStart,
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    Math.random() * (100),
                    this.values.valueEnd,
                    ]
                  }
                  svg={{ stroke: (this.values.changePrice < 0 ? "#f00" : "#34a336"), strokeWidth: 2 }}
                  contentInset={{ top: 5, bottom: 5 }}
                >
                </LineChart>
              </View>
              <View>
                <Text style={{ alignSelf: 'flex-end' }}>{this.values.valueEnd.toFixed(2)}</Text>
                <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                  <View style={styles.Change}>
                    <Text style={styles.ChangeText}>{this.values.changePrice < 0 ? '' : '+'}</Text>
                    <Text style={styles.ChangeText}>{this.values.changePrice.toFixed(2)}</Text>
                    <Text style={[styles.ChangeText, (this.values.changePrice < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePrice < 0 ? ' ▼' : ' ▲'}</Text>
                  </View>
                  <View style={styles.Change}>
                    <Text style={styles.ChangeText}>{this.values.changePercent < 0 ? '' : '+'}</Text>
                    <Text style={styles.ChangeText}>{this.values.changePercent.toFixed(2)}%</Text>
                    <Text style={[styles.ChangeText, (this.values.changePercent < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePercent < 0 ? ' ▼' : ' ▲'}</Text>
                  </View>
                </View>
              </View>
            </View>
          }
          big={
            <Text>
              Big
            </Text>
          }
          big={
            <View>
              <View style={styles.Container}>
                <View>
                  <Text>Total</Text>
                  <Text>Gain/Loss</Text>
                </View>
                <View>
                  <Text style={{ alignSelf: 'flex-end' }}>{this.values.valueEnd.toFixed(2)}</Text>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                    <View style={styles.Change}>
                      <Text style={styles.ChangeText}>{this.values.changePrice < 0 ? '' : '+'}</Text>
                      <Text style={styles.ChangeText}>{this.values.changePrice.toFixed(2)}</Text>
                      <Text style={[styles.ChangeText, (this.values.changePrice < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePrice < 0 ? ' ▼' : ' ▲'}</Text>
                    </View>
                    <View style={styles.Change}>
                      <Text style={styles.ChangeText}>{this.values.changePercent < 0 ? '' : '+'}</Text>
                      <Text style={styles.ChangeText}>{this.values.changePercent.toFixed(2)}%</Text>
                      <Text style={[styles.ChangeText, (this.values.changePercent < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePercent < 0 ? ' ▼' : ' ▲'}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ height: 140, flexDirection: 'row' }}>           
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={this.values.data}
                    svg={{ stroke: (this.values.changePrice < 0 ? "#f00" : "#34a336"), strokeWidth: 2 }}
                    backgroundColor={'#000000'}
                    contentInset={{ top: 5, bottom: 5 }}
                >
                    <Grid />
                </LineChart>
                <YAxis
                    style={{marginLeft: 10, marginRight: 16}}
                    data={this.values.data}
                    contentInset={{ top: 5, bottom: 5 }}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  onPress={() => this.setSelected("1D")}
                  touchSoundDisabled={true}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1D' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1D
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1W')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1W' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1W
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1M')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1M' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('3M')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '3M' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    3M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1Y')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1Y' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1Y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('ALL')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === 'ALL' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    ALL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </>
    )
  }

  setSelected(str) {
    if(str === '1D' || str === '1W' || str === '1M' || str === '3M' || str === '1Y' || str === 'ALL') {
      this.selected = str;
      this.forceUpdate();
    }
  }

  constructor() {
    super();
    this.values = {
      valueStart: Math.random() * (100),
      valueEnd: Math.random() * (100),
    }
    this.values = Object.assign(this.values, {
      changePrice: this.values.valueEnd - this.values.valueStart,
      changePercent: (this.values.valueEnd - this.values.valueStart) / this.values.valueStart,
      data: [this.values.valueStart,
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              this.values.valueEnd,
            ]
    })
    this.selected = "1D"
  }
}

class ExpandableTotal extends React.Component {
  render() {
    return (
      <>
        <ExpandableGeneric startOpen={this.props.startOpen}
          small={
            <View style={styles.Container}>
              <View>
                <Text>Total</Text>
                <Text>Gain/Loss</Text>
              </View>
              <View>
                <LineChart
                  style={{ height: 40, width: 100 }}
                  data={this.values.data}
                  svg={{ stroke: (this.values.changePrice < 0 ? "#f00" : "#34a336"), strokeWidth: 2 }}
                  contentInset={{ top: 5, bottom: 5 }}
                >
                </LineChart>
              </View>
              <View>
                <Text style={{ alignSelf: 'flex-end' }}>{this.values.valueEnd.toFixed(2)}</Text>
                <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                  <View style={styles.Change}>
                    <Text style={styles.ChangeText}>{this.values.changePrice < 0 ? '' : '+'}</Text>
                    <Text style={styles.ChangeText}>{this.values.changePrice.toFixed(2)}</Text>
                    <Text style={[styles.ChangeText, (this.values.changePrice < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePrice < 0 ? ' ▼' : ' ▲'}</Text>
                  </View>
                  <View style={styles.Change}>
                    <Text style={styles.ChangeText}>{this.values.changePercent < 0 ? '' : '+'}</Text>
                    <Text style={styles.ChangeText}>{this.values.changePercent.toFixed(2)}%</Text>
                    <Text style={[styles.ChangeText, (this.values.changePercent < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePercent < 0 ? ' ▼' : ' ▲'}</Text>
                  </View>
                </View>
              </View>
            </View>
          }
          big={
            <View>
              <View style={styles.Container}>
                <View>
                  <Text>Total</Text>
                  <Text>Gain/Loss</Text>
                </View>
                <View>
                  <Text style={{ alignSelf: 'flex-end' }}>{this.values.valueEnd.toFixed(2)}</Text>
                  <View style={{ flexDirection: "row", alignSelf: 'flex-end' }}>
                    <View style={styles.Change}>
                      <Text style={styles.ChangeText}>{this.values.changePrice < 0 ? '' : '+'}</Text>
                      <Text style={styles.ChangeText}>{this.values.changePrice.toFixed(2)}</Text>
                      <Text style={[styles.ChangeText, (this.values.changePrice < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePrice < 0 ? ' ▼' : ' ▲'}</Text>
                    </View>
                    <View style={styles.Change}>
                      <Text style={styles.ChangeText}>{this.values.changePercent < 0 ? '' : '+'}</Text>
                      <Text style={styles.ChangeText}>{this.values.changePercent.toFixed(2)}%</Text>
                      <Text style={[styles.ChangeText, (this.values.changePercent < 0 ? { color: "#f00" } : { color: "#34a336" })]}>{this.values.changePercent < 0 ? ' ▼' : ' ▲'}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ height: 140, flexDirection: 'row' }}>           
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={this.values.data}
                    svg={{ stroke: (this.values.changePrice < 0 ? "#f00" : "#34a336"), strokeWidth: 2 }}
                    backgroundColor={'#000000'}
                    contentInset={{ top: 5, bottom: 5 }}
                >
                    <Grid />
                </LineChart>
                <YAxis
                    style={{marginLeft: 10, marginRight: 16}}
                    data={this.values.data}
                    contentInset={{ top: 5, bottom: 5 }}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />
              </View>
              <View style={{ flexDirection: 'row', justifyContent:'space-evenly'}}>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  onPress={() => this.setSelected("1D")}
                  touchSoundDisabled={true}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1D' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1D
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1W')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1W' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1W
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1M')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1M' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('3M')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '3M' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    3M
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('1Y')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === '1Y' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    1Y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                  style={styles.Button}
                  activeOpacity={1}
                  touchSoundDisabled={true}
                  onPress={() => this.setSelected('ALL')}
                >
                  <Text 
                    style={[styles.ChartOptions,
                      (this.selected === 'ALL' ?
                        ( this.values.changePrice < 0 ? 
                            {color: '#f00', backgroundColor: '#ff00004F'}
                            :{color: '#34a336', backgroundColor: '#34a3364F'}
                        ) : {})
                      ]
                    }
                  >
                    ALL
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </>
    )
  }

  setSelected(str) {
    if(str === '1D' || str === '1W' || str === '1M' || str === '3M' || str === '1Y' || str === 'ALL') {
      this.selected = str;
      this.forceUpdate();
    }
  }

  constructor() {
    super();
    this.values = {
      valueStart: Math.random() * (100),
      valueEnd: Math.random() * (100),
    }
    this.values = Object.assign(this.values, {
      changePrice: this.values.valueEnd - this.values.valueStart,
      changePercent: (this.values.valueEnd - this.values.valueStart) / this.values.valueStart,
      data: [this.values.valueStart,
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              Math.random() * (100),
              this.values.valueEnd,
            ]
    })
    this.selected = "1D"
  }

}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Change: {
    height: 18,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: "flex-end",
  },
  ChangeText: {
    fontSize: 10,
  },
  ChartOptions: {
    color: '#6e6e6e',
    marginTop: 5,
    fontSize: 12,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
})

const genericStyles = StyleSheet.create({
  ExpandGeneric: {
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    paddingVertical: 10,
    borderRadius: 6,
    overflow: 'hidden',
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

export { ExpandableStock, ExpandableTotal }