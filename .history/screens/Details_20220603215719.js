import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";

import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";

function Details({ route, navigation }) {
  console.log(route);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default Details;