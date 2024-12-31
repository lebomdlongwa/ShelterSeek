import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const RecommendationWrapper = styled.View`
  width: 100%;
  margin-top: 5px;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

export const RecomCardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 10px;
  padding: 0 20px;
  padding-top: 10px;
  background-color: ${Colors.whitish};
`;

export const ExtraSpace = styled.View`
  margin-bottom: 50px;
`;
