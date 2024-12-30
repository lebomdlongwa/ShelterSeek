import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const ProfileHeaderWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-family: ${Fonts.rubikBold};
  font-size: 17px;
`;

export const BellIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const UserWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfilePic = styled.Image`
  width: 130px;
  height: 130px;
  object-fit: contain;
`;

export const UserName = styled.Text`
  font-family: ${Fonts.rubikBold};
  font-size: 25px;
`;

export const SettingsWrapper = styled.View`
  margin-top: 20px;
  height: 100%;
  width: 100%;
`;

export const TopSettings = styled.View`
  width: 100%;
`;

export const BottomSettings = styled(TopSettings)`
  margin-top: 20px;
`;

export const SettingsOption = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const OptionsIcon = styled.Image`
  height: 27px;
  width: 27px;
`;

export const OptionsName = styled.Text`
  font-family: ${Fonts.rubikSemiBold};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightArrow = styled.Image`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 0;
`;

export const Logout = styled(SettingsOption)`
  margin-top: 20px;
`;
