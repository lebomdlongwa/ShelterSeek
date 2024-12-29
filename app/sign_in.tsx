import React from "react";
import images from "./components/images";
import * as styled from "./styles/sign_in";
import icons from "./components/icons";
import { Text } from "react-native";

const Sign_in = () => {
  return (
    <styled.SafeAreaView>
      <styled.ScrollView>
        <styled.SignInWrapper>
          <styled.SignInBanner source={images.onboarding} />
          <styled.FormWrapper>
            <styled.Welcome>WELCOME TO SHELTERSEEK</styled.Welcome>
            <styled.LetsGetYouText>
              Lets Get You Closer To{"\n"}
              <styled.IdealHomeText>Your Ideal Home</styled.IdealHomeText>
            </styled.LetsGetYouText>
            <styled.GoogleLogin>
              Login to ShelterSeek with Google
            </styled.GoogleLogin>
            <styled.LoginButton>
              <styled.GoogleIcon source={icons.google} />
              <styled.LoginButtonText>
                Continue with Google
              </styled.LoginButtonText>
            </styled.LoginButton>
          </styled.FormWrapper>
        </styled.SignInWrapper>
      </styled.ScrollView>
    </styled.SafeAreaView>
  );
};

export default Sign_in;
