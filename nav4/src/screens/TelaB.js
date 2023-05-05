import { React, Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from '../styles/Styles.js'


export class B extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Tela B</Text>

      </View>
    );
  }
}

export default B;