import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const FeaturedComponentWrapper = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 355px;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const HeaderLabel = styled.Text`
  font-size: 20px;
  font-family: ${Fonts.rubikSemiBold};
`;

export const SeeAllLabel = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.rubikSemiBold};
  color: ${Colors.purple};
`;

export const CardsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding-left: 20px;
`;
