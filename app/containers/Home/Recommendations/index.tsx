import React from "react";
import * as styled from "./styles";
import SlideBarComponent from "@/app/components/SlideBar";
import { ScrollView } from "react-native";
import RecomCard from "./RecomCard";
import { RecommendationsList } from "./definitions";

const Recommendations = () => {
  return (
    <styled.RecommendationWrapper>
      <styled.HeaderWrapper>
        <styled.HeaderLabel>Our Recommendation</styled.HeaderLabel>
        <styled.SeeAllLabel>See All</styled.SeeAllLabel>
      </styled.HeaderWrapper>
      <SlideBarComponent />
      <ScrollView>
        <styled.RecomCardsContainer>
          {RecommendationsList.map((item) => (
            <RecomCard card={item} />
          ))}
        </styled.RecomCardsContainer>
        <styled.ExtraSpace />
      </ScrollView>
    </styled.RecommendationWrapper>
  );
};

export default Recommendations;
