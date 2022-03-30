import React from "react"; /*on importe react pour créer des composants. */
import { View } from "react-native"; /* on créer les différents composants dont on a besoin */

export default class Home extends React.Component {

  //Le state définit l'état de notre composant dans le constructeur.
  constructor(props){
    super(props)
    this.state = {
      city: 'Strasbourg'
    }
  }

  setCity(city) {
    this.setState({city})
  }

  render() {
    return (
      //dans le vitual DOM, on utilise le TextIput qui va nous permettre de faire un champ
      <View style={{ marginVertical: 40 }}>
        {/* <search /> */}
        <TextInput
          underlinecolorAndroid="tansparent" //suporter seulement par androïd
          onChangeText={(text) => this.setcity(text)} // Le onChangeText met à jour le state du composant à chaque fois que le texte change
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={this.state.city}
        />
      </View>
    );
  }
}