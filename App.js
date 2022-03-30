// import { StatusBar } from "expo-status-bar";
import React from 'react' /*on importe react pour créer des composants. */
import About from './components/About'
import Search from './Components/Search'
import { View, StatusBar } from 'react-native' /*on importe des composants au sein de React Native.*/
import{TabNavigator} from 'react-navigation' //on fait fonction TabNavigator avec une constante Tabs
/*React Native est une bibliothèque permet de créer des composants natifs. */
/*il y a des composants qui sont partagés entre les deux plateformes. Et il y a des composants qui sont spécifiques à IOS et androïd. */

const Tabs = TabNavigator[{ //On configure le TabNavigator avec des paramètres.
  //le premier paramètre sert à définir les différentes vues qui vont composer nos onglets. (La vue Search et la vue About) 
  Search: { screen: Search },
  About: { screen: About },
},{
  // Le second paramètre : choisir la position des onglets et les options pour la tabBarOptions
  tabBarPosition: 'botton',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: '#FFF'
    },
    style: {
      backgroundColor: "#a2273C",
      borderTopWidth: 1,
      borderColor: "#3f101c"
    }
  },


}]

export default class App extends React.Component {
  /*On exporte React.Component (composant React)*/
  render() {
    return (
            /*dans cette fonction, on retourne du jsx, donc du vitual DOM.*/
      <View style={{ flex: 1 }}> 
        {/* //flex:1 sinon le systeme de table ne sait pas quel espace occuper */}
        <StatusBar hidden={true}/>
        <Tabs/> 
        {/* Avec Tabs, j'ouvre le navigateur */}
      </View>



    );
  }
}



const styles = StyleSheet.create({
  /*ça pourrait fonctionner sans stylesheet mais StyleSheet offre quelques fonctionnalités notamment des gains de performance et des vérifications au niveau des attributs. Si on utilise une fonctionnalité qui n'existe pas , il nous le dira.*/
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
