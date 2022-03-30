import React from "react"; /*on importe react pour créer des composants. */
import { View, Image } from "react-native"; /* on créer les différents composants dont on a besoin */

export default class Home extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require("./icons/home.png")} style={{ width: 20, height: 20 }}/>;
    },
  };

  //Le state définit l'état de notre composant dans le constructeur.
  constructor(props) {
    super(props);
    this.state = {
      city: "Strasbourg",
    };
  }

  setCity(city) {
    this.setState({ city });
}

  render() {
    return (
      //dans le vitual DOM, on utilise le TextIput qui va nous permettre de faire un champ
      //Pour StackNavigator, TabNavigator et DrawerNavigator, j'ai fait "yarn add react-navigation" dans le terminal
      //StackNavigator
      // TabNavigator permet de lire les composants créer
      // DrawerNavigator, pour sortir un panneau de la gauche de l'écran (pratique pour les sous-menus)
      <View style={{ marginVertical: 40 }}>
        {/* <search /> */}
        <TextInput
          underlinecolorAndroid="tansparent" //suporter seulement par androïd
          onChangeText={(text) => this.setCity(text)} // Le onChangeText met à jour le state du composant à chaque fois que le texte change
          //je n'écris pas juste onChangeText = this.setCity(text)} pcq je veux que le setCity fasse bien référence à l'objet
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={this.state.city}
        />
      </View>
    );
  }
}