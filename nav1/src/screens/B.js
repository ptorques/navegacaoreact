import { React, Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles.js'


export class B extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela B</Text>


          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('C')}
          >
            <Text style={{ color: "#fff" }}>C</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default B;