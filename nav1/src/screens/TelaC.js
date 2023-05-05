import { React, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles.js'


export class C extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela C</Text>

          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.push('A')}
          >
            <Text style={{ color: "#fff" }}>A</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default C;