import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Style } from "./css/Styles";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
const pilha = createStackNavigator();
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
          name="Login"
          component={Login}
          options={{ headerTitleAlign: "center" }}
        />
        <pilha.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerTitleAlign: "center" }}
        />
      </pilha.Navigator>
    </NavigationContainer>
  );
}
function TelaInicial({ navigation }) {
  return (
    <View style={Style.container}>
      <Image source={{}} style={Style.logo}/>
      <View style={Style.btnApp}>
        <TouchableOpacity
        style={Style.btn}
        onPress={()=>navigation.navigate("Login")}>
          <AntDesign name="login" size={30} color="black"/>
          <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Style.btn}
          onPress={()=>navigation.navigate("Cadastro")}>
            <AntDesign name="adduser" size={30} color="black"/>
            <Text>Cadastro</Text>
            </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
  )
}
