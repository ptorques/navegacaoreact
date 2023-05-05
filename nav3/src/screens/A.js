import { React, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles.js'


export class A extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela A</Text>


        <View style={styles.dock}>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('A')}
          >
            <Text style={{ color: "#fff" }}>A</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff99" }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('B')}
          >
            <Text style={{ color: "#fff" }}>B</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('C')}
          >
            <Text style={{ color: "#fff" }}>C</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default A;