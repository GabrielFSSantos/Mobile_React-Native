/**
 * Não possuem valor semântico (significado)
 * Não possuel estilização própria
 * Todos os componentes possuem por padrão "display flex"
 * 
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3
 */

import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1"/>
      <View style={styles.container}>
        <Text style={styles.title}>
          Pai ta como?
        </Text>
        <Text style={styles.title}>
          Lançando a Braba!! 
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: "bold",
  }
});