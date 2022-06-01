import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const CircleButton = (props) => {
  const handlePress = () => {
    console.log("asd");
  };
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={props.imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};
