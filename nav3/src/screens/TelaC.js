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

      </View>
    );
  }
}

export default C;