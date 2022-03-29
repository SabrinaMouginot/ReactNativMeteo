import { StatusBar } from 'expo-status-bar';
import React from 'react'; /*on importe react pour créer des composants. */
import { StyleSheet, Text, View } from 'react-native';/*on importe des composants au sein de React Native.*/
import { Component } from 'react/cjs/react.production.min';
/*React Native est une bibliothèque permet de créer des composants natifs. */
/*il y a des composants qui sont partagés entre les deux plateformes. Et il y a des composants qui sont spécifiques à IOS et androïd. */
export default class App extends React.Component { /*On exporte React.Component (composant React)*/
  render(){
    return (
      /*dans cette fonction, on retourne du jsx, donc du vitual DOM.*/
      <View style={styles.container}> {/*Pour le style, on utilise pas du css*/}
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Ouvre App.js pour commencer à travailler sur ton app!</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({ /*ça pourrait fonctionner sans stylesheet mais StyleSheet offre quelques fonctionnalités notamment des gains de performance et des vérifications au niveau des attributs. Si on utilise une fonctionnalité qui n'existe pas , il nous le dira.*/
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
