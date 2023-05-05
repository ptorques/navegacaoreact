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

      </View>
    );
  }
}

export default A;