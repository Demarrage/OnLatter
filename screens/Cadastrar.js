import React from "react";
import {View, Text, TextInput, TouchableOpacity, Touchable} from "react-native";
import {styleFormat} from "../css/Styles";
import {ScrollView} from "react-native-gesture-handler"
import {AntDesign} from "@expo/vector-icons"
let us = "";
let em = "";
let sh = "";
export default function Cadastrar(){
    const [usuario,setUsuario] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [senha,setSenha] = React.useState("");

    return(
        <View style={styleFormat.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("TelaInicial")}>
                <AntDesign style={{marginRight:370,margin:10}} name="left" size={30} color="white"/>
            </TouchableOpacity>
            <ScrollView horizontal={false}>
                {/* Area do cadastro do usuario */}
                <View style={styleFormat.containerCadastro}>
                    <Text style={{ margin:50, textAlign:"center", color:"white",fontSize:20}}>Cadastre-se</Text>
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
                  <TextInput style={styleFormat.input} placeholder="E-Mail" placeholderTextColor="black"
                  textAlign="center"
                  value={email}
                  keyboardType="email-address"
                  onChangeText={(value)=> setEmail(value)}
                  color="black"
                  />
                    <TextInput style={styleFormat.input} placeholder="Senha" placeholderTextColor="black"
                    textAlign="center"
                    secureTextEntry
                    value={senha}
                    keyboardType="default"
                    onChangeText={(value)=>setSenha(value)}
                    color="black"
                    />
                    <TouchableOpacity style={styleFormat.btnLogin}>
                        <Text style={{color:"white"}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}