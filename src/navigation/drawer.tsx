import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./tabs";
import DrawerMenu from "../components/DrawerMenu";
import { Colors } from "../utils/colors";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerMenu
          {...props}
        />
      )}
      screenOptions={{
        drawerType: "back",
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: true,
        overlayColor: Colors.transparent,
        drawerStyle: {
          width: "65%",
          backgroundColor: Colors.bg,
        },
      }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
