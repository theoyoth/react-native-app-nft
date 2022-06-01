import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Home to you</Text>
    </SafeAreaView>
  );
}

export default Home;
