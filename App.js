import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}> 22 </Text>
          <Text style={styles.description}> Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}> 27 </Text>
          <Text style={styles.description}> Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}> 27 </Text>
          <Text style={styles.description}> Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },

  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    // backgroundColor: "blue",
  },

  day: {
    width: windowWidth,
    alignItems: "center",
  },

  temp: {
    marginTop: 50,
    fontSize: 168,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
