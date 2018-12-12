// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.contenedor}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contenedor: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ListView, Grid, Flatlist, Row } from 'react-native';

import { Constants } from 'expo';

export default class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      inputValue: '',
      dataSource: ds.cloneWithRows([]),
    };
    this.Cambio = this.Cambio.bind(this);
  }
  Cambio = (value) => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  }
  BotonPresionado = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource._dataBlob.s1;
    textArray.push(this.state.inputValue);
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(textArray),
      inputValue: '',
    }));
  };
 
  render() {
    return (





<View  style={[ styles.left,styles.row,styles.contenedor, { paddingLeft: this.state.viewPadding }]}>  
  <Text style={{fontWeight: 'bold',color: 'Grey', fontSize: 30}}>
        To Do Prueba 1
        
      </Text>

       <TextInput 
            style={styles.entrada}
            onChangeText={this.Cambio}
            value={this.state.inputValue}

            placeholder="Escribir un todo"
          />
          <Button
            title="+"
             color="#696969"
            onPress={this.BotonPresionado}
          />

        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => {
            
            return (
              <View style={styles.Hacer_Item}>
                <Text style={styles.Hacer}>{rowData}</Text>
             
              </View>
              );
            }
          }
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 2,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightblue',
  },
  formulario: {
    borderBottomWidth: 2,
    borderColor: 'black',
    paddingBottom: 9,
  },
  entrada: {
    backgroundColor: 'white',
    width: 315,
    height: 42,
    padding: 9,
    marginBottom: 9,
  },
  Hacer_Item: {
    alignItems: 'flex-start',
    padding: 9,
    width: 315,
    
    backgroundColor: 'white',
    flex: 2,
  },
  Hacer: {
    flex: 2,
  },
});
