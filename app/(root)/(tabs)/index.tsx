import images from "@/app/components/images";
import icons from "@/app/components/icons";
import SearchComponent from "@/app/components/SearchBar";
import FeaturedComponent from "@/app/containers/Home/Featured";
import Recommendations from "@/app/containers/Home/Recommendations";
import * as styled from "./styles";
import { SafeView, VerticalScroll } from "@/app/styles";

const HomeComponent = () => {
  return (
    <SafeView>
      <VerticalScroll>
        <styled.Header>
          <styled.UserComponent>
            <styled.UserPic source={images.avatar} />
            <styled.UserDetails>
              <styled.Greetings>Good Morning {"\n"}</styled.Greetings>
              <styled.UserName>Steve Rodgers</styled.UserName>
            </styled.UserDetails>
            <styled.BellIcon source={icons.bell} />
          </styled.UserComponent>
        </styled.Header>
        <styled.SearchBarWrapper>
          <SearchComponent />
        </styled.SearchBarWrapper>
        <FeaturedComponent />
        <Recommendations />
      </VerticalScroll>
    </SafeView>
  );
};

export default HomeComponent;
