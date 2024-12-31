import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import { StyleSheet } from "react-native";
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
