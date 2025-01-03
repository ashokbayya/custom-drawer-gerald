import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

import { ReactNode } from "react";

const DrawerSceneWrapper = ({ children }: { children: ReactNode }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${interpolate(progress.value, [0, 1], [0, -10], "clamp")}deg`,
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 20]), // Add rounded corners when drawer is open
  }));
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
