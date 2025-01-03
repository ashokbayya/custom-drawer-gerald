import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stack";
import Contact from "../screens/contact";

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home"  component={HomeStackScreen} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
export default TabNavigator;