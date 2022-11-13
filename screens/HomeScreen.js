import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Icon from 'react-native-vector-icons/Fontisto';

import tw from 'tailwind-react-native-classnames';

//Expo fonts
import { useFonts } from 'expo-font';

//Assets
import Logo from '../assets/WeTip-Logo.png';

const logoColor = '#fa044f';
const mainColor = '#F5F3F4';

const backgroundColor = '#A3B9C9';

const buttonsColor = '#364958';

const textColor = '#000';
const textColor2 = '#000';

const HomeScreen = () => {
  const [total, setTotal] = useState(0);
  const [tip, setTip] = useState(20);
  const [split, setSplit] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleTipTotal = (change) => {
    if (change === '+') {
      setTip(tip + 1);
    } else if (change === '-') {
      if (tip === 1) return;
      setTip(tip - 1);
    }
  };

  const handleBillSplit = (change) => {
    if (change === '+') {
      setSplit(split + 1);
    } else if (change === '-') {
      if (split === 1) return;
      setSplit(split - 1);
    }
  };

  const roundNum = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  return (
    <>
      <StatusBar style="auto" />
      <View
        style={[
          tw`flex justify-between items-center h-full p-6 pt-8`,
          { backgroundColor: backgroundColor },
        ]}
      >
        {/* LOGO */}
        <View style={tw`w-full p-10`}>
          {/* <Text
              style={[
                tw``,
                { fontSize: 68, fontFamily: 'dosis', color: logoColor },
              ]}
            >
              WeTip
            </Text> */}
          <Image
            source={require('../assets/WeTip-Logo.png')}
            style={{
              height: 60,
              width: 'auto',
            }}
          />
        </View>

        {/* Each resume */}
        <View
          style={[
            tw`w-full m-2 rounded-2xl p-4 border`,
            { backgroundColor: mainColor, borderColor: '#dbdbdb' },
          ]}
        >
          <View style={tw` flex justify-center items-center `}>
            <View>
              <Text style={[tw`text-3xl`, { color: textColor }]}>
                Total Per Person
              </Text>
            </View>
            <View>
              <Text style={[tw``, { fontSize: 48, color: '#fa044f' }]}>
                ${roundNum(total / split + (total * (tip / 100)) / split)}
              </Text>
            </View>
            <View style={tw`flex flex-row justify-between items-center w-full`}>
              <Text style={[tw``, { color: textColor }]}>Bill p/ Person</Text>
              <Text style={[tw``, { color: textColor }]}>Tip p/ Person</Text>
            </View>
            <View style={tw`flex flex-row justify-between items-center w-full`}>
              <View style={tw`flex flex-row `}>
                <Text style={[tw`text-2xl`, { color: textColor }]}>
                  ${roundNum(total / split)}
                </Text>
              </View>
              <View style={tw`flex flex-row `}>
                <Text style={[tw`text-xl`, { color: textColor }]}>
                  ${roundNum((total * (tip / 100)) / split)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bill Total */}
        <View
          style={[
            tw`w-full flex flex-row justify-between items-center p-2 rounded-xl border`,
            { backgroundColor: mainColor, borderColor: '#dbdbdb' },
          ]}
        >
          <View>
            <Text style={[tw`text-2xl pl-2`, { color: textColor }]}>
              Bill Total
            </Text>
          </View>
          <View style={tw`flex flex-row items-center overflow-hidden`}>
            <Text style={[tw`text-3xl pr-1`, { color: textColor }]}>$</Text>
            <TextInput
              style={[tw`text-4xl`, { color: textColor }]}
              placeholder="00.00"
              autoFocus
              keyboardType={'numeric'}
              value={roundNum(total)}
              onChangeText={(text) => setTotal(text)}
              maxLength={6}
            />
          </View>
        </View>

        {/* Tip */}
        <View
          style={[
            tw`w-full flex justify-between items-center rounded-xl px-2 py-2`,
          ]}
        >
          <View style={tw`mb-2`}>
            <Text style={[tw`text-xl`, { color: textColor2 }]}>
              Choose Your Tip
            </Text>
          </View>

          <View style={tw`flex flex-row justify-between w-full mb-2 `}>
            <TouchableOpacity
              onPress={() => setTip(10)}
              style={[
                tw`py-2 px-6 rounded-lg flex justify-center  border`,
                { backgroundColor: mainColor, borderColor: '#dbdbdb' },
              ]}
            >
              <Text style={[tw`text-xl`, { color: textColor }]}>10%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTip(15)}
              style={[
                tw`py-2 px-6 rounded-lg flex justify-center  border`,
                { backgroundColor: mainColor, borderColor: '#dbdbdb' },
              ]}
            >
              <Text style={[tw`text-xl`, { color: textColor }]}>15%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTip(20)}
              style={[
                tw`py-2 px-6 rounded-lg flex justify-center border`,
                { backgroundColor: mainColor, borderColor: '#dbdbdb' },
              ]}
            >
              <Text style={[tw`text-xl`, { color: textColor }]}>20%</Text>
            </TouchableOpacity>
          </View>

          <View
            style={tw`w-full flex flex-row justify-between items-center p-2 px-10`}
          >
            <TouchableOpacity
              onPress={() => handleTipTotal('-')}
              style={[
                tw`p-1 rounded-lg shadow-sm`,
                { backgroundColor: buttonsColor },
              ]}
            >
              <Icon name="minus-a" size={30} color="#fff" />
            </TouchableOpacity>
            <View style={tw`flex flex-row justify-center items-center`}>
              <Text style={[tw`text-2xl `, { color: textColor2 }]}>{tip}</Text>
              <Text style={[tw`text-2xl `, { color: textColor2 }]}>%</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleTipTotal('+')}
              style={[
                tw`p-1 rounded-lg shadow-sm`,
                { backgroundColor: buttonsColor },
              ]}
            >
              <Icon name="plus-a" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Split */}
        <View
          style={[
            tw`w-full flex flex-row justify-between items-center p-2 rounded-xl border`,
            { backgroundColor: mainColor, borderColor: '#dbdbdb' },
          ]}
        >
          <View>
            <Text style={[tw`text-xl font-bold`, { color: textColor }]}>
              Split
            </Text>
            <Text style={[tw``, { color: textColor }]}>the Total</Text>
          </View>
          <View style={tw` flex flex-row justify-around items-center p-2 px-6`}>
            <TouchableOpacity
              onPress={() => handleBillSplit('-')}
              style={[
                tw`p-1 rounded-lg shadow-sm`,
                { backgroundColor: buttonsColor },
              ]}
            >
              <Icon name="minus-a" size={30} color={mainColor} />
            </TouchableOpacity>

            <Text style={[tw`text-2xl mx-6`, { color: textColor }]}>
              {split}
            </Text>

            <TouchableOpacity
              onPress={() => handleBillSplit('+')}
              style={[
                tw`p-1 rounded-lg shadow-sm`,
                { backgroundColor: buttonsColor },
              ]}
            >
              <Icon name="plus-a" size={30} color={mainColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
