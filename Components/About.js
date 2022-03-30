/*Je créer un fichier pour tester ce que je viens d'apprendre. */
import React from "react"; /*on importe react pour créer des composants. */
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";


/**On créer toujours une class correspondant à notre composant */
export default class About extends React.Component {
  render() {
      return (
        //   <About/>
        /** La méthode render permet de rendre le contenu, de rendre notre page. */
        <View style={style.view}>
          <Text style={style.title}>A propos de moi</Text>
          <Text>lorem ipsum</Text>
          {/* style.view fait référence au style de const style */}
          {/* style.title fait référence au style de const style. */}
          {/* ActivityIndicator permet de mettre un indicateur. si j'en utilise plusieurs, ils vont s'emplier  */}
          <view style={{flex:1, flexdirection:'row', justifyContent:'space-between'}}>
            <ActivityIndicator style={style.view} color="#FF0000" size="large" animating={true} />
            <ActivityIndicator style={style.view}color="#FF0000" size="large" animating={true} />
          </view>
        </View>
      );
  }
}

const style = StyleSheet.create({ // Stylesheet permet de voir les erreur tout de suite
  view: {
        margin:20
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
})