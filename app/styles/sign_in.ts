import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";
import { Colors } from "../components/colors";

export const SafeAreaView = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const ScrollView = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const SignInWrapper = styled.View`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export const SignInBanner = styled.Image`
  width: 100%;
  height: 67%;
  object-fit: contain;
`;

export const FormWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.Text`
  font-family: ${Fonts.rubikRegular};
  /* margin: 10px 0; */
  font-weight: 500;
  font-size: 15px;
  color: ${Colors.gray};
`;

export const LetsGetYouText = styled.Text`
  font-family: ${Fonts.rubikBold};
  font-size: 24px;
  color: ${Colors.blackGray};
  margin-top: 5px;
  text-align: center;
`;

export const IdealHomeText = styled(LetsGetYouText)`
  width: 100%;
  color: ${Colors.blue};
  text-align: center;
`;

export const GoogleLogin = styled.Text`
  width: 90%;
  margin-top: 10px;
  font-size: 15px;
  color: ${Colors.grayWhite};
  text-align: center;
`;

const shadowMixin = {
  elevation: 1, // Android
  shadowColor: "#000", // iOS
  shadowOffset: { width: 0, height: 2 }, // iOS
  shadowOpacity: 0.25, // iOS
  shadowRadius: 3.84, // iOS
};

export const LoginButton = styled.TouchableOpacity`
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f5f5f5;
  margin-top: 10px;
  padding: 10px 0;
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;

  ${shadowMixin}
`;

export const GoogleIcon = styled.Image`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const LoginButtonText = styled.Text`
  font-size: 17px;
  color: ${Colors.blackGray};
  font-family: ${Fonts.rubikMedium};
`;
