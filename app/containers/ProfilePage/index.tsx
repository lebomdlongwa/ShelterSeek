import React from "react";
import icons from "@/app/components/icons";
import { Colors } from "@/app/components/colors";
import images from "@/app/components/images";
import { ImageSourcePropType } from "react-native";
import { SafeView, VerticalScroll } from "@/app/styles";
import { SettingsDefinition } from "./definitions";
import * as styled from "./styles";

type OptionsComponentProps = {
  icon: ImageSourcePropType;
  name: string;
};

const OptionsComponent = ({ icon, name }: OptionsComponentProps) => (
  <styled.SettingsOption>
    <styled.OptionsIcon style={{ tintColor: Colors.black }} source={icon} />
    <styled.OptionsName>{name}</styled.OptionsName>
    <styled.RightArrow source={icons.rightArrow} />
  </styled.SettingsOption>
);

const ProfileComponent = () => {
  return (
    <SafeView>
      <VerticalScroll style={{ paddingLeft: 20, paddingRight: 20 }}>
        <styled.ProfileHeaderWrapper>
          <styled.HeaderText>Profile</styled.HeaderText>
          <styled.BellIcon source={icons.bell} />
        </styled.ProfileHeaderWrapper>
        <styled.UserWrapper>
          <styled.ProfilePic source={images.avatar} />
          <styled.UserName>Steve Rodgers</styled.UserName>
        </styled.UserWrapper>
        <styled.SettingsWrapper>
          <styled.TopSettings>
            {SettingsDefinition.slice(0, 2).map((option) => (
              <OptionsComponent
                key={option.name}
                name={option.name}
                icon={option.icon}
              />
            ))}
          </styled.TopSettings>
          <styled.BottomSettings>
            {SettingsDefinition.slice(2).map((option) => (
              <OptionsComponent name={option.name} icon={option.icon} />
            ))}
          </styled.BottomSettings>
          <styled.Logout>
            <styled.OptionsIcon
              style={{ tintColor: Colors.red }}
              source={icons.logout}
            />
            <styled.OptionsName style={{ color: Colors.red }}>
              Logout
            </styled.OptionsName>
          </styled.Logout>
        </styled.SettingsWrapper>
      </VerticalScroll>
    </SafeView>
  );
};

export default ProfileComponent;
