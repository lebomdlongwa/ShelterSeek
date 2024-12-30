import { Link } from "expo-router";
import { Text, View } from "react-native";
import * as styled from "./styles";

export default function Index() {
  return (
    <styled.TabsWrapper>
      <styled.Welcome>Welcome to ShelterSeek</styled.Welcome>
    </styled.TabsWrapper>
  );
}
