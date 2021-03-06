import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableOpacity} from 'react-native';

export default class App extends Component {
constructor() {
super();
this.state = {
resultText: "",
calculationText: ""};
this.operations = ['DEL', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];
}

calculationResult() {
  const text = this.state.resultText;
  this.setState({
  calculationText: eval(text)
  })
}


validate()
{
  const text=this.state.resultText
  switch(text.slice(-1)){
      case 'Monday':

      case 'Tuesday':

      case 'Wednesday':

      case 'Thursday':
      
      case 'Friday':
        
      return false
      }
      return true
}

onPressButton(text) {
console.log(text);

if (text == '=') {
  return this.validate() && this.calculationResult(this.state.resultText);
}


this.setState({
  resultText: this.state.resultText + text
});
}

operate(operation) {
    switch (operation) {
          case 'DEL':
          console.log(this.state.resultText);
          let text = this.state.resultText.split('');
          text.pop();
          this.setState({
            resultText: text.join('')
          });
        break
        case 'Monday':

        case 'Tuesday':

        case 'Wednesday':

        case 'Thursday':

        case 'Friday':

        const lastChar=this.state.resultText.split( ).pop()

        if(this.operations.indexOf(lastChar) >0 ) return

        if(this.state.text=="")return
        this.setState(
        {
          resultText: this.state.resultText+ operation
        })
    }
}

render() {
    let rows = [];
    let days = [["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"]];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 1; j++) {
        row.push(
        <TouchableOpacity
        key={days[i][j]}
        style={styles.btn}
        onPress={() => this.onPressButton(days[i][j])}
        >
        <Text style={styles.btnText}>{days[i][j]}</Text>
        </TouchableOpacity>
        );
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>);
    }

    let ops = [];
    for (let i = 0; i < 5; i++) {
      ops.push(
      <TouchableOpacity
      key={this.operations[i]}
      style={styles.btn}
      onPress={() => this.operate(this.operations[i])} >
      <Text style={[styles.btnText, styles.white]}>
      {this.operations[i]}
      </Text>
      </TouchableOpacity>
      );
    }

    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
        <View style={styles.calculation}>
         <Text style={styles.calculationText}>{this.state.calculationText} </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
            <View style={styles.operations}>{ops}</View>
          </View>
        </View>
      );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1
      },
      row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'stretch'
      },
      resultText: {
        fontSize: 30,
        paddingRight:5,
        color: 'black'
      },
      btnText: {
        fontSize: 45,
        color: 'lightblue'
      }, 
      white: {
        color: 'orange'
      },
      btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
      devider:{
        borderRightColor:'yellow',
        borderBottomColor:'yellow',
        borderRightWidth : 0.5,
        borderBottomWidth : 0.5
      },
      result: {
        flex: 2,
        backgroundColor: '#EEEDD4',
        justifyContent: 'center',
        alignItems:'flex-end'
      },
      calculation: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems:'flex-end'
      },
      calculationText: {
        fontSize: 45,
        paddingRight:10,
        color: 'black'
      },
      buttons: {
        flex: 7,
        flexDirection: 'row'
      },
      numbers: {
        flex: 3,
        padding :1,
        backgroundColor: '#1e2326'
      },
      operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems:'stretch',
        backgroundColor: '#454e54'
      }
});