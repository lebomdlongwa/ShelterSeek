import { View, Text, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/app/components/colors";
import * as styled from "./styles/layout";
import icons from "@/app/components/icons";

type TabOptionProps = {
  icon: ImageSourcePropType;
  active: boolean;
  label: string;
};

const TabsOption = ({ icon, active, label }: TabOptionProps) => {
  const iconColor = active ? Colors.purple : Colors.gray;

  return (
    <styled.TabsOptionWrapper>
      <styled.OptionIcon style={{ tintColor: iconColor }} source={icon} />
      <styled.OptionLabel active={active}>{label}</styled.OptionLabel>
    </styled.TabsOptionWrapper>
  );
};

const TabsOptionDefinitions = [
  {
    name: "index",
    icon: icons.home,
    label: "Home",
    active: true,
  },
  {
    name: "explore",
    icon: icons.search,
    label: "Explore",
    active: false,
  },
  {
    name: "profile",
    icon: icons.person,
    label: "Profile",
    active: false,
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
          minHeight: 50,
        },
      }}
    >
      {TabsOptionDefinitions.map((option) => (
        <Tabs.Screen
          key={option.name}
          name={option.name}
          options={{
            title: `${option.label}`,
            headerShown: false,
            tabBarIcon: () => (
              <TabsOption
                icon={option.icon}
                active={option.active}
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
