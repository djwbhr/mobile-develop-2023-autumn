import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Lent from "../components/Lent";
import Stories from "../components/Stories";
import { Footer } from "../components/Footer";

export default function Main({ navigation, route }) {
  var storiess = route.params?.storie;
  var postss = route.params?.post;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={styles.colocol}
            source={require("../assets/header-icons/notif.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />

      <Text>{}</Text>
      <Stories storiess={storiess} />

      <Lent post={postss} />

      <Footer navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  footer: {
    height: 64,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginLeft: 20,
    fontFamily: "mp-eb",
    fontSize: 28,
  },
  icon: {
    width: 30,
    height: 30,
  },
  colocol: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: "contain",
  },
});
