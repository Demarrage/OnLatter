import React from "react";
import { Text, View, Image, TouchableOpacity, Touchable } from "react-native";
import { styleFormat } from "./css/Styles";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const pilha = createStackNavigator();
let us = "";
let sh = "";

export default function App() {
  return (
    <NavigationContainer>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerTitleAlign: "center" }}
        />
        <pilha.Screen
          name="Home"
          component={Home}
          options={{ headerTitleAlign: "center" }}
        />
      </pilha.Navigator>
    </NavigationContainer>
  );
}
function TelaInicial({ navigation }) {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  return (
    <View style={styleFormat.container}>
      <Image source={{}} style={styleFormat.logo} />
      <View style={styleFormat.cxinput}>
        <TextInput
          style={styleFormat.input}
          placeholder="Nome Usuario"
          placeholderTextColor="black"
          textAlign="center"
          value={usuario}
          keyboardType="email-address"
          onChangeText={() => setUsuario(value)}
        />
        <TextInput
          style={styleFormat.input}
          placeholder="Senha"
          placeholderTextColor="black"
          textAlign="center"
          value={senha}
          keyboardType="default"
          secureTextEntry
          onChangeText={(value) => setSenha(value)}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "silver" }}>
            Se não possui cadastro clique em
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "white", marginLeft: 5 }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styleFormat.btnLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="login" size={30} color="white" />
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
