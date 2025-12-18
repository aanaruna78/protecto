import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protecto Status</Text>
      <Text style={styles.subtitle}>Your device is protected</Text>

      <Button 
        title="Check Data Breach" 
        onPress={() => navigation.navigate("Breach")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
});
