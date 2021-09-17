import { conditionalExpression } from "@babel/types";
import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

export default function App(){
  const [habilitado, setHabilitado] = useState(false);
 // const valor = () => setHabilitado(estadoAnterior => !estadoAnterior);


  function valor(){
    setHabilitado(estadoAnterior => !estadoAnterior);
    console.warn(habilitado)
  }

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={habilitado ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={valor}
        value={habilitado}
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

