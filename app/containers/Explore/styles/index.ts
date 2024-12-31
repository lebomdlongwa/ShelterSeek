import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const ExplorePageWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const ExploreHeader = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

export const BackButton = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${Colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const HeaderLabel = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  font-size: 14px;
`;

export const BellIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const SlideBarConatiner = styled.View`
  width: 100%;
  margin-top: 15px;
`;

export const FoundText = styled.Text`
  font-family: ${Fonts.rubikBold};
  font-size: 20px;
  width: 100%;
  padding: 0 20px;
  margin-top: 15px;
`;

export const CardsContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${Colors.whitish};
`;
