import { View, Text, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/app/components/colors";
import * as styled from "./styles/layout";
import icons from "@/app/components/icons";

type TabOptionProps = {
  icon: ImageSourcePropType;
  focused: boolean;
  label: string;
};

const TabsOption = ({ icon, focused, label }: TabOptionProps) => (
  <styled.TabsOptionWrapper>
    <styled.OptionIcon source={icon} />
    <styled.OptionLabel focused={focused}>{label}</styled.OptionLabel>
  </styled.TabsOptionWrapper>
);

const TabsOptionDefinitions = [
  {
    name: "index",
    icon: icons.home,
    label: "Home",
  },
  {
    name: "explore",
    icon: icons.search,
    label: "Explore",
  },
  {
    name: "profile",
    icon: icons.person,
    label: "Profile",
  },
];

const TabsComponent = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: `${Colors.blueFaded}`,
          borderTopWidth: 1,
          minHeight: 60,
        },
      }}
    >
      {TabsOptionDefinitions.map((option) => (
        <Tabs.Screen
          name={option.name}
          options={{
            title: `${option.label}`,
            headerShown: false,
            tabBarIcon: () => (
              <TabsOption
                icon={option.icon}
                focused={false}
                label={option.label}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
