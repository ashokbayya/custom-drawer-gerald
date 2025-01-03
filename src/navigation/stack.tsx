import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";

// Stack Navigator for home screen
const Stack = createStackNavigator();
function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;