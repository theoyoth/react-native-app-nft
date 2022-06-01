import { View, Text } from "react-native";
import { COLORS, SIZES, assets } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};
export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};
export const ImageCmp = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};
export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp />
        )
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
