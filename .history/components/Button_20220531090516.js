import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

export const CircleButton = () => {
  return (
    <TouchableOpacity
      style={{ width: 40, height: 40, backgroundColor: COLORS.white }}
    ></TouchableOpacity>
  );
};
export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};
