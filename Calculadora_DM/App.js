/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteiner:{
	flex: 1,
	backgroundColor: '#fff',
  },
  titulo: {
	  marginTop: 10,
	  textAlign: "center",
	  fontSize: 30,
  },
  input: {
	  height: 40,
	  borderWidth: 1,
	  borderColor: '#aaaaaa',
	  margin: 10,
	  padding: 10,
  },
  botao: {
	  padding: 10,
  },
  imc: {
	  padding: 10,
	  fontSize: 30,
	  textAlign: "center",
  },
  situacao: {
	  padding: 20,
	  fontSize: 25,
	  textAlign: "center",
	  fontFamily: "Cochin",
  }
});

export default class Calculadora extends Component {
	
	state = {
		altura: 0,
		peso: 0,
		imc: 0
	}
	
	clicar = () => {
		if (this.state.altura == "" || this.state.peso == ""){
			alert("Preencha todos os campos");
			return;
		}
		 var Situacao
		
		
		 var auxAltura = parseFloat(this.state.altura)/100;
		 var IMC = (parseFloat(this.state.peso)/(auxAltura*auxAltura)).toFixed(2);
		 
		 if(IMC < 18.5){
			 Situacao = "MAGREZA"
		 }else if (IMC > 18.5 && IMC < 24.9){
			 Situacao = "NORMAL"
		 }else if (IMC > 25 && IMC < 29.9){
			 Situacao = "SOBREPESO"
		 }else if (IMC > 30 && IMC < 39.9){
			 Situacao = "OBESIDADE"
		 }else if (IMC > 40){
			 Situacao = "OBESIDADE GRAVE"
		 }
		 var result = this.state
		 result.situacao = Situacao
		 this.setState(result);
		 var s = this.state
		 s.imc = IMC
		 this.setState(s);
		 
		 
	}
	
	render() {
		return(
			<SafeAreaView style={styles.conteiner}>
				<View >
					<Text style={styles.titulo}>Calculadora </Text>
				</View>
				<View>
					<TextInput placeholder="Altura"
					style={styles.input} keyboardType
					={"numeric"} value={this.state.altura.toString()} onChangeText={(altura) => {this.setState({altura});}}/>
				</View>
				<View>
					<TextInput placeholder="Peso"
					style={styles.input} keyboardType
					={"numeric"} value={this.state.peso.toString()} onChangeText={(peso) => {this.setState({peso});}}/>
				</View>
				<View style={styles.botao}>
					<Button title="Calcular" onPress={this.clicar} color="#007404" />
				</View>
				<View>
					<Text style={styles.imc}>IMC: {this.state.imc} </Text>
				</View>
				<View>
					<Text style={styles.situacao}>{this.state.situacao}</Text>
				</View>
			</SafeAreaView>
		);
	}
};


