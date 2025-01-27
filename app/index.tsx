import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";

const Index = () => {
  const navbar = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Features",
      link: "/featurs",
    },
    {
      title: "Contact",
      link: "/services",
    },
    {
      title: "Blog",
      link: "/contact",
    },
    {
      title: "About",
      link: "/contact",
    },
    {
      title: "Careers",
      link: "/contact",
    },
  ];
  return (
    <View className="flex-1 bg-white py-4 px-8">
      <View className="flex flex-row justify-between items-center rounded-full shadow-sm py-8 px-6">
        <Text className="text-3xl font-bold">Fooderia</Text>

        <View className="flex flex-row items-center gap-x-7">
          {navbar.map((item) => (
            <TouchableHighlight>
              <Text className="text-xl  hover:font-bold">{item.title}</Text>
            </TouchableHighlight>
          ))}
        </View>

        <TouchableOpacity className="bg-black px-4 py-2 rounded-full">
          <Text className="text-sm font-semibold text-white">Book A Demo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
