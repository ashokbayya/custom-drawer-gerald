import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const DrawerMenu: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    paddingTop: interpolate(progress.value, [0, 1], [0, 50]),
  }));

  const closeDrawer = () => navigation.closeDrawer();
  return (
    <Animated.View style={[styles.drawerMenu, animatedStyle]}>
      <View style={styles.heading}>
        <Text style={[styles.btnTextStyle,{fontSize:40,fontWeight:'bold'}]}>Beka</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.startBtn} onPress={closeDrawer}>
          <Text style={styles.startBtnText}>Start</Text>
        </TouchableOpacity>
        <Text style={styles.btnTextStyle}>Your Cart</Text>
        <Text style={styles.btnTextStyle}>Favorites</Text>
        <Text style={styles.btnTextStyle}>Your Orders</Text>
        <View style={styles.divider} />
        <Text style={styles.btnTextStyle}>Sign Out</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerMenu: {
    flex: 1,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTextStyle: {
    color: "white",
    padding: 20,
    fontSize: 20,
    fontWeight: "400",
  },
  startBtn: {
    padding: 20,
    backgroundColor: "maroon",
    borderRadius: 6,
  },
  startBtnText: {
    color: "red",
    fontSize: 20,
    fontWeight: "400",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "gray",
    marginVertical: 20,
  },
});

export default DrawerMenu;
