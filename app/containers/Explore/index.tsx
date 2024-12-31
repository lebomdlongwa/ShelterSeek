import { View, Text } from "react-native";
import React from "react";
import { SafeView, VerticalScroll } from "@/app/styles";
import * as styled from "./styles";
import icons from "@/app/components/icons";
import SearchComponent from "@/app/components/SearchBar";
import SlideBarComponent from "@/app/components/SlideBar";
import ExploreCard from "./ExploreCard";
import { ExploreList } from "./definitions";

const ExploreComponent = () => {
  return (
    <SafeView>
      <VerticalScroll>
        <styled.ExplorePageWrapper>
          <styled.ExploreHeader>
            <styled.BackButton>
              <styled.BackIcon source={icons.backArrow} />
            </styled.BackButton>
            <styled.HeaderLabel>Search for Your Ideal Home</styled.HeaderLabel>
            <styled.BackIcon source={icons.bell} />
          </styled.ExploreHeader>
          <SearchComponent />
          <styled.SlideBarConatiner>
            <SlideBarComponent />
          </styled.SlideBarConatiner>
          <styled.FoundText>Found 182 Apartments</styled.FoundText>
          <VerticalScroll>
            <styled.CardsContainer>
              {ExploreList.map((item) => (
                <ExploreCard key={item.placeName} card={item} />
              ))}
            </styled.CardsContainer>
          </VerticalScroll>
        </styled.ExplorePageWrapper>
      </VerticalScroll>
    </SafeView>
  );
};

export default ExploreComponent;
