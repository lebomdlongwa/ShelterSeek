import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import styled from "styled-components/native";

export const shadowStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});

export const SafeView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const VerticalScroll = styled.ScrollView``;

const Horizontal = styled.ScrollView``;

type HorizontalScrollProps = {
  style?: StyleProp<ViewStyle> | undefined;
  children: ReactNode;
};

export const HorizontalScroll = ({
  children,
  style,
}: HorizontalScrollProps) => (
  <Horizontal style={style} horizontal showsHorizontalScrollIndicator={false}>
    {children}
  </Horizontal>
);
