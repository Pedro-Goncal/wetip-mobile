import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Platform, Keyboard, Pressable, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import tw from "tailwind-react-native-classnames";
import { useFonts } from "expo-font";

const HomeScreen = () => {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(20);
  const [split, setSplit] = useState(1);

  const handleTipTotal = change => {
    if (change === "+") {
      setTip(tip + 1);
    } else if (change === "-" && tip > 1) {
      setTip(tip - 1);
    }
  };

  const handleBillSplit = change => {
    if (change === "+") {
      setSplit(split + 1);
    } else if (change === "-" && split > 1) {
      setSplit(split - 1);
    }
  };

  const roundNum = num => Math.round((num + Number.EPSILON) * 100) / 100;

  return (
    <Pressable style={[tw`flex justify-between items-center h-full p-6 pt-8`, { backgroundColor: "#A3B9C9" }]} onPress={Keyboard.dismiss}>
      <View style={tw`w-full p-10`}>
        <Image source={require("../assets/WeTip-Logo.png")} style={{ height: 100, width: "auto", resizeMode: "contain" }} />
      </View>

      <View style={[tw`w-full m-2 rounded-2xl p-4 border`, { backgroundColor: "#F5F3F4", borderColor: "#dbdbdb" }]}>
        <View style={tw` flex justify-center items-center `}>
          <View>
            <Text style={[tw`text-3xl`, { color: "#000" }]}>Total Per Person</Text>
          </View>
          <View>
            <Text style={[tw``, { fontSize: 48, color: "#fa044f" }]}>${roundNum(total / split + (total * (tip / 100)) / split)}</Text>
          </View>
          <View style={tw`flex flex-row justify-between items-center w-full`}>
            <Text style={[tw``, { color: "#000" }]}>Bill p/ Person</Text>
            <Text style={[tw``, { color: "#000" }]}>Tip p/ Person</Text>
          </View>
          <View style={tw`flex flex-row justify-between items-center w-full`}>
            <View style={tw`flex flex-row `}>
              <Text style={[tw`text-2xl`, { color: "#000" }]}>${roundNum(total / split)}</Text>
            </View>
            <View style={tw`flex flex-row `}>              

<View style={tw`w-full flex flex-row justify-between items-center p-2 rounded-xl border`}>
          <Text style={[tw`text-xl`, { color: textColor2 }]}>Bill Total</Text>
          <TextInput
            style={[tw`border-b border-grey-light`, { width: "60%" }]}
            keyboardType="numeric"
            value={`${total}`}
            onChangeText={(text) => setTotal(parseFloat(text) || 0)}
          />
        </View>

        {/* Tip Percentage */}
        <View style={tw`flex flex-row justify-between items-center w-full m-2`}>
          <Text style={[tw`text-xl`, { color: textColor2 }]}>Tip %</Text>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TouchableOpacity onPress={() => handleTipTotal("-")}>
              <Icon name="minus" size={24} color={buttonsColor} />
            </TouchableOpacity>
            <Text style={[tw`text-xl mx-4`, { color: textColor2 }]}>
              {tip}%
            </Text>
            <TouchableOpacity onPress={() => handleTipTotal("+")}>
              <Icon name="plus" size={24} color={buttonsColor} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Split */}
        <View style={tw`flex flex-row justify-between items-center w-full m-2`}>
          <Text style={[tw`text-xl`, { color: textColor2 }]}>Split</Text>
          <View style={tw`flex flex-row justify-between items-center`}>
            <TouchableOpacity onPress={() => handleBillSplit("-")}>
              <Icon name="minus" size={24} color={buttonsColor} />
            </TouchableOpacity>
            <Text style={[tw`text-xl mx-4`, { color: textColor2 }]}>
              {split}
            </Text>
            <TouchableOpacity onPress={() => handleBillSplit("+")}>
              <Icon name="plus" size={24} color={buttonsColor} />
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default HomeScreen;
