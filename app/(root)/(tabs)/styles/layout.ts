import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const TabsOptionWrapper = styled.View`
  width: 60px;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OptionIcon = styled.Image`
  object-fit: contain;
  width: 20px;
  height: 20px;
  color: red;
`;

export const OptionLabel = styled.Text<{ focused: boolean }>`
  font-family: ${Fonts.rubikMedium};
  font-size: 10px;
  width: 100%;
  text-align: center;
  margin-top: 3px;
  color: ${({ focused }) => (focused ? `${Colors.blue}` : `${Colors.gray}`)};
`;
