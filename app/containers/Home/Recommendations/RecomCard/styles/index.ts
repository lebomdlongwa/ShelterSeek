import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const RecomCardWrapper = styled.View`
  width: 160px;
  height: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
  margin: 12px 12px 0 0;
`;

export const CardBannerContainer = styled.View`
  width: 159px;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBackground = styled.Image`
  width: 149px;
  height: 144px;
  border-radius: 10px;
`;

export const RatingWrapper = styled.View`
  width: 37px;
  height: 22px;
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
  width: 10px;
  height: 10px;
`;

export const RatingNumber = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  font-size: 10px;
  color: ${Colors.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardDetails = styled.View`
  position: absolute;
  left: 10px;
  bottom: 10px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardName = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  color: ${Colors.blackGray};
  font-size: 16px;
`;

export const Location = styled.Text`
  font-family: ${Fonts.rubikRegular};
  color: ${Colors.grayWhite};

  font-size: 12px;
`;

export const Price = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  color: ${Colors.purple};
  font-size: 16px;
`;

export const HeartIcon = styled.Image`
  object-fit: contain;
  width: 17px;
  height: 16px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
