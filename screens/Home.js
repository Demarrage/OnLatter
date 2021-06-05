import * as React from "react";
import { View, Text, TextInput } from "react-native";
import { set } from "react-native-reanimated";
import { styleFormat } from "../css/Styles";
import {ReactCardFlip} from "react-card-flip";
import { render } from "react-dom";
import FlipCard from "react-native-flip-card";


export default function Home() {
  return(
  <FlipCard style={styleFormat.card} friction={6} perspective={1000} flipHorizontal={true} flipVertical={false} flip={false} clickable={true} onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd',isFlipEnd)}}>
{/* Face Side */}
<View style={styleFormat.face}>
    <Text>The Face</Text>
  </View>
  {/* Back Side */}
  <View style={styleFormat.back}>
    <Text>The Back</Text>
  </View>
  </FlipCard>
  )
}