import { View, Text, TouchableOpacity, Image } from "react-native";

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
