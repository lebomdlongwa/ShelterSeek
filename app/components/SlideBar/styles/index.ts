import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled, { css } from "styled-components/native";

export const SlideBarWrapper = styled.View`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const SlideOptions = styled.View<{ active: boolean }>`
  height: 100%;
  border-radius: 30px;
  padding: 5px 20px;
  background-color: ${({ active }) =>
    active ? `${Colors.purple}` : `${Colors.whitish}`};
  border: ${({ active }) => (active ? "none" : "1px solid #e8e8e8")};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ExtraSpace = styled.View`
  width: 20px;
  height: 100%;
`;

const activeMixin = css`
  font-family: ${Fonts.rubikSemiBold};
  color: white;
`;

export const OptionLabel = styled.Text<{ active: boolean }>`
  font-family: ${Fonts.rubikRegular};
  font-size: 14px;

  ${({ active }) => active && activeMixin}
`;
