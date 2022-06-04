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
  const { data } = route.params;
  return (
    <SafeAreaView style={{}}>
      <Text>Details</Text>
    </SafeAreaView>
  );
}

export default Details;