import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = () => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></View>
      <Image
        source={assets.logo}
        resizeMode="contain"
        style={{ width: 90, height: 25 }}
      />
      <View style={{ width: 45, height: 45 }}>
        <Image
          source={assets.person01}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={assets.badge}
          resizeMode="contain"
          style={{ position: "absolute", width: 15, height: "100%" }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
