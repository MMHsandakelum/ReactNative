import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays task */}
      <View style={styles.taskwrapper}>
        <Text style={styles.title}>My First ReactNative application</Text>
        <View style={styles.items}>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  taskwrapper: {
    paddingTop: 110,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  items: {},
});
