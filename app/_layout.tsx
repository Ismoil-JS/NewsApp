import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="article" />
      <Stack.Screen name="sections" />
    </Stack>
  );
}
