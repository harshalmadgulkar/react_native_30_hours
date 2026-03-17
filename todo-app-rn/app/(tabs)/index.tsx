import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.content}>Hie</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>
          Toggle the opacity
        </Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
    gap: 10
  },
  content: {
    fontSize: 18,
    // color: 'green'
  }
});