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
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark content"
        backgroundColor="transparant"
        translucent={true}
      />
      <View>
        <RectButton minWidth={170} fontSize={}/>
      </View>
    </SafeAreaView>
  );
}

export default Details;
