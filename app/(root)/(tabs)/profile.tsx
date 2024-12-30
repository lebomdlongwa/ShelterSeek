import React from "react";
import * as styled from "./styles/profile";
import icons from "@/app/components/icons";
import { Colors } from "@/app/components/colors";
import images from "@/app/components/images";
import { ImageSourcePropType } from "react-native";

const SettingsDefinition = [
  {
    icon: icons.calendar,
    name: "My Bookings",
  },
  {
    icon: icons.wallet,
    name: "Payments",
  },
  {
    icon: icons.person,
    name: "Profile",
  },
  {
    icon: icons.bell,
    name: "Notifications",
  },
  {
    icon: icons.shield,
    name: "Security",
  },
  {
    icon: icons.language,
    name: "Language",
  },
  {
    icon: icons.info,
    name: "Help Center",
  },
  {
    icon: icons.people,
    name: "Invite Friends",
  },
];

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

const Profile = () => {
  return (
    <styled.SafeAreaView>
      <styled.ScrollView>
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
              <OptionsComponent name={option.name} icon={option.icon} />
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
      </styled.ScrollView>
    </styled.SafeAreaView>
  );
};

export default Profile;
