import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";

import * as Font from "expo-font";
import { Footer } from "../components/Footer";
const numColumns = 3;

export default function Rec({ navigation, route }) {
  const [posts, setPosts] = useState(
    Object.values(route.params?.post)[0]
  );
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={styles.menu}
            source={require("../assets/header-icons/menu.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <View style={styles.lent}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.post}>
              <Image
                style={styles.postPicture}
                source={{ uri: item.img }}
                resizeMode="center"
              />
            </View>
          )}
        />
      </View>
      <Footer navigation={navigation}/>
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
  lent: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "#DBDBDB",
    flexDirection: "row",
    flexwrap: "wrap",
  },
  post: {
    flex: 1,
    backgroundColor: "white",
    margin: 1,
  },
  postPicture: {
    width: "100%",
    height: Dimensions.get("window").width / numColumns,
  },
  menu: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: "contain",
  },
});
