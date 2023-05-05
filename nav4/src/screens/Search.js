import { React, Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/Styles.js'


export class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
        <Image source={require("../../assets/tabs.png")} style={styles.icons} />
        <TextInput style={StyleSheet.compose(styles.textinput, {backgroundColor: 'transparent'})} placeholder={"Pesquise aqui"} placeholderTextColor={"#fff"}></TextInput>
          <View style={{ position: "absolute", right: 20, top: 20, flexDirection: "row" }}>
            <Image source={require("../../assets/search.png")} style={styles.icons} />
            <Image source={require("../../assets/threedots.png")} style={styles.icons} />
          </View>
        </View>


        <View style={styles.body}></View>

        <View style={styles.dock}>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('Início')}
          >
            <Image source={require("../../assets/home.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Início</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('Pesquisa')}
          >
            <Image source={require("../../assets/search.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Pesquisar</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff99" }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('Transferências')}
          >
            <Image source={require("../../assets/transfer.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff" }}>Transferências</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dockitem} onPress={() =>
            this.props.navigation.navigate('Explorar')}
          >
            <Image source={require("../../assets/folder.png")} style={StyleSheet.compose(styles.icons, { margin: 0 })} />
            <Text style={{ color: "#fff", }}>Explorar</Text>
            <View style={{ width: "100%", height: "5%", backgroundColor: "#ffffff00" }}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Search;