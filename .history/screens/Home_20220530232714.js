import { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;