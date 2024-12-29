import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const TabsWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.Text`
  font-family: ${Fonts.rubikRegular};
  margin: 10px 0;
  font-weight: 500;
  font-size: 23px;
`;
