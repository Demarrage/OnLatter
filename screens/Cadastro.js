import * as React from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { styleFormat } from "../CSS/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
let us = "";
let sh = "";

export function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styleFormat.container}>
      <TextInput
        style={styleFormat.input}
        placeholder="Nome Usuário"
        placeholderTextColor="white"
        value={usuario}
        keyboardType="email-address"
        onChangeText={(value) => setUsuario(value)}
      />
      <TextInput
        style={styleFormat.input}
        placeholder="Senha"
        placeholderTextColor="white"
        value={senha}
        keyboardType="default"
        secureTextEntry
        onChangeText={(value) => setSenha(value)}
      />
    </View>
  );
}
