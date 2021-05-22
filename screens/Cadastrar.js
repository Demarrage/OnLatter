import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styleFormat } from "../css/Styles";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../App";
const pilha = createStackNavigator();
export default function Cadastrar() {
  return (
    <NavigationContainer independent={true}>
      <pilha.Navigator>
        <pilha.Screen
          name="TelaCadastrar"
          component={TelaCadastrar}
          options={{ headerTitleAlign: "center", headerShown: false }}
        />

        <pilha.Screen
          name="App"
          component={App}
          options={{ headerShown: false }}
        />
      </pilha.Navigator>
    </NavigationContainer>
  );
}

let us = "";
let em = "";
let sh = "";

function TelaCadastrar({ navigation }) {
  const [usuario, setUsuario] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <View style={styleFormat.container}>
      <TouchableOpacity onPress={() => navigation.navigate("App")}>
        <AntDesign
          style={{ marginRight: 370, marginTop: 50, margin: 10 }}
          name="left"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <ScrollView horizontal={false}>
        {/* Area do cadastro do usuario */}
        <View style={styleFormat.containerCadastro}>
          <Text
            style={{
              margin: 50,
              textAlign: "center",
              color: "white",
              fontSize: 20,
            }}
          >
            Cadastre-se
          </Text>
          <TextInput
            style={styleFormat.input}
            placeholder="Nome Usuário"
            placeholderTextColor="black"
            textAlign="center"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
            color="black"
          />
          <TextInput
            style={styleFormat.input}
            placeholder="E-Mail"
            placeholderTextColor="black"
            textAlign="center"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            color="black"
          />
          <TextInput
            style={styleFormat.input}
            placeholder="Senha"
            placeholderTextColor="black"
            textAlign="center"
            secureTextEntry
            value={senha}
            keyboardType="default"
            onChangeText={(value) => setSenha(value)}
            color="black"
          />
          <TouchableOpacity style={styleFormat.btnLogin}>
            <Text style={{ color: "white" }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
