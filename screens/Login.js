import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ipserver } from "../config/settings";
import { styles } from "../css/Styles";

let us = "";
let sh = "";

export default function Login() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  return (
    <View>
      <TextInput
        placeholder="Usuario"
        style={style.input}
        onChangeText={(value) => setUsuario(value)}
        value={usuario}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={style.input}
        onChangeText={(value) => setSenha(value)}
        value={senha}
      />
      <TouchableOpacity
        onPress={() => {
          us = usuario;
          sh = senha;
          efetuarLogin();
        }}
        style={style.btnlogin}
      >
        <Text style={styles.txtlogin}>Logar</Text>
      </TouchableOpacity>
    </View>
  );
}
