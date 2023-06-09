import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Main = ({navigation}) => {
  const data = [
    {
      id: "1",
      title: "Código Limpo",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    },
    {
      id: "2",
      title: "C Completo e Total",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    },
    {
      id: "3",
      title: "A bíblia do PHP",
      anotations: "Livro muito bom!",
      read: false,
      photo: null,
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity
          style={styles.toolboxButton}
          onPress={() => {
            navigation.navigate("Book");
          }}
          >
          <Icon name="add" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data} 
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  toolbox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#3498db",
  },
  toolboxButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16,
  },
});

export default Main;