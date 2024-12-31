import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const FeaturedCardWrapper = styled.View`
  width: 250px;
  height: 300px;
  display: flex;
  align-items: start;
  position: relative;
  border-radius: 5px;
`;

export const CardBackground = styled.Image`
  width: 250px;
  height: 300px;
  border-radius: 10px;
`;

export const RatingWrapper = styled.View`
  width: 58px;
  height: 27px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background-color: white;
  border-radius: 15px;
`;

export const StarIcon = styled.Image`
  object-fit: contain;
  width: 12px;
  height: 12px;
`;

export const RatingNumber = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  font-size: 12px;
  color: ${Colors.purple};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardDetails = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardName = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  color: white;
  font-size: 20px;
`;

export const Location = styled.Text`
  font-family: ${Fonts.rubikRegular};
  color: white;
  font-size: 16px;
`;

export const Price = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  color: white;
  font-size: 20px;
`;

export const HeartIcon = styled.Image`
  object-fit: contain;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
