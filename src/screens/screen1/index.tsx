import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DrawerSceneWrapper from "../../components/DrawerSceneWrapper";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Screen1 = ({ navigation }: { navigation: DrawerNavigationProp<any> }) => {
  const openDrawer = () => navigation.openDrawer();
  return (
    <SafeAreaView style={styles.container}>
      <DrawerSceneWrapper>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={openDrawer} style={styles.searchBar}>
            <View>
              <Icon name="menu" size={30} color="#666" />
            </View>
            <Text style={styles.searchTextPlaceHolder}>START</Text>
          </TouchableOpacity>
        </View>
      </DrawerSceneWrapper>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: { flex: 1, zIndex: 100, backgroundColor: "white" },
  wrapper: { padding: 16 },
  searchBar: {
    borderRadius: 50,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  searchTextPlaceHolder: {
    color: "#666",
    marginLeft: 12,
    fontSize: 20,
  },
});
