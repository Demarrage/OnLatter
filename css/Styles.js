import { StyleSheet } from "react-native";
export const styleFormat = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b3347",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 250,
    marginRight: "auto",
    marginLeft: "auto",
    resizeMode: "contain",
  },
  btnApp: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: "#37304f",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 10,
    elevation: 5,
  },
  btnLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "#2e2843",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
  },
  input: {
    width: 300,
    padding: 5,
    color: "white",
    marginBottom: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
    backgroundColor: "white",
    opacity: 0.2,
    borderRadius: 50,
  },
  containerCadastro:{
    marginTop:100,
  },
  home:{
    flex: 1,
    backgroundColor: "#2b3347",
    justifyContent: "center",
    alignItems: "center",
  },
  card:{
    backgroundColor:"red"
  }
});
