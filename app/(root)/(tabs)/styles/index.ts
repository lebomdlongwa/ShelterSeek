import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const Header = styled.View`
  height: 45px;
  width: 100%;
  padding: 0 20px;
`;

export const UserComponent = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
`;

export const UserPic = styled.Image`
  height: 45px;
  width: 45px;
`;

export const UserDetails = styled.Text`
  flex: 1;
  font-family: ${Fonts.rubikSemiBold};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Greetings = styled.Text`
  font-family: ${Fonts.rubikRegular};
  color: ${Colors.gray};
  font-size: 13px;
`;

export const UserName = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  font-size: 16px;
  border: 1px solid red;
`;

export const BellIcon = styled.Image`
  position: absolute;
  height: 23px;
  width: 23px;
  right: 0;
`;

export const SearchBarWrapper = styled.View`
  margin-top: 15px;
  width: 100%;
  border-radius: 5px;
`;
