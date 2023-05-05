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

          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.push('B')}
          >
            <Text style={{ color: "#fff" }}>B</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default A;