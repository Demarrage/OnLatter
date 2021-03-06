import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styleFormat } from "./css/Styles";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Cadastrar from "./screens/Cadastrar";
import { NavigationContainer } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { ipserver } from "./config/settings";

const pilha = createStackNavigator();
let us = "";
let sh = "";
let em = "";
let Logar = "";
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ headerTitleAlign: "center", headerShown: false }}
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
      <Image
        source={require("./assets/OnLatter.png")}
        style={styleFormat.logo}
      />
      <View style={styleFormat.cxinput}>
        <TextInput
          style={styleFormat.input}
          placeholder="Nome Usuario"
          placeholderTextColor="black"
          textAlign="center"
          value={usuario}
          keyboardType="email-address"
          onChangeText={(value) => setUsuario(value)}
          color="black"
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
          color="black"
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 13, color: "silver" }}>
            Se n??o possui cadastro clique em
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
            <Text style={{ color: "white", marginLeft: 5 }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styleFormat.btnLogin}
          onPress={() => {
            us = usuario;
            em = usuario;
            sh = senha;
            if(EfetuarLogin){
              navigation.navigate("Home")
              .else("Login ou senha incorreta")
            }
            //  navigation.navigate("Home")
          }}
        >
          <AntDesign name="login" size={30} color="white" />
          <Text style={{ color: "white", marginLeft: 5 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function EfetuarLogin() {
  fetch(`${ipserver}/usuario/login`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nomeusuario: us,
      senha: sh,
      email: em
    })
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((error) => console.error(`Erro ao dan??ar macarena ${error}`));
}
