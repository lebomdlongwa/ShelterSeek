import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const ExploreCardWrapper = styled.View`
  height: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 10px 10px;
  border-radius: 15px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const CardBannerContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBackground = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const RatingWrapper = styled.View`
  width: 35px;
  height: 15px;
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 4px 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background-color: white;
  border-radius: 15px;
`;

export const StarIcon = styled.Image`
  object-fit: contain;
  width: 8px;
  height: 8px;
`;

export const RatingNumber = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  font-size: 8px;
  color: ${Colors.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardDetails = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardName = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  color: ${Colors.blackGray};
  font-size: 18px;
  width: 130px;
  line-height: 28px;
`;

export const Location = styled.Text`
  margin-top: 10px;
  font-family: ${Fonts.rubikRegular};
  color: ${Colors.grayWhite};
  font-size: 14px;
`;

export const Price = styled.Text`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: ${Fonts.rubikSemiBold};
  color: ${Colors.purple};
  font-size: 16px;
`;

export const HeartIcon = styled.Image`
  object-fit: contain;
  width: 22px;
  height: 22px;
  position: absolute;
  top: 20px;
  right: 10px;
`;
