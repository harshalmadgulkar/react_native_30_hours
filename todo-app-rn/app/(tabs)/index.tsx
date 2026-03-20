import { createHomeStyles } from "@/assets/styles/home.styles";
// import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
// import { useMutation, useQuery } from "convex/react";
import React from "react";
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import Header from "@/components/Header";

export default function Index() {
  const { toggleDarkMode, colors, isDarkMode } = useTheme();
  const homeStyles = createHomeStyles(colors);

  // const todos = useQuery(api.todos.getTodos);
  // console.log(todos);

  // const addTodo = useMutation(api.todos.addTodo);
  // const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView
        style={homeStyles.safeArea}
      >
        <TouchableOpacity
          // style={homeStyles.button}
          onPress={toggleDarkMode}
        >
          <Text >
            {isDarkMode ? "Dark Mode 🌙" : "Light Mode 🌞"}
          </Text>
        </TouchableOpacity>
        <Header />
      </SafeAreaView>
    </LinearGradient>
  );
}
