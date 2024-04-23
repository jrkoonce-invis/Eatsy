import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import { Switch, Button } from 'react-native-paper';
import { Link } from "expo-router";

const windowWidth = Dimensions.get('window').width;

export default function Page() {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Edit your profile below...</Text>
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>Dark Mode</Text>
        <Switch color="maroon" value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>View Favorites</Text>
        <Button textColor="maroon" mode="outlined">Saved</Button>
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>Log In</Text>
        <Link href="/login">
          <Button textColor="maroon" mode="outlined">Log In</Button>
        </Link>
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.settingsText}>Log Out</Text>
        <Button textColor="maroon" mode="outlined">Log Out</Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  settingsText: {
    fontSize: 15,
  },
  settingsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth*.7,
  },
  container: {
    display: "grid",
    alignItems: "center",
    padding: 24,
    gap: 15,
  },
  main: {
    marginTop: 100,
    maxWidth: 960,
    marginHorizontal: "auto",
    marginBottom: 100,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    textDecorationLine: "underline", 
  }
});
