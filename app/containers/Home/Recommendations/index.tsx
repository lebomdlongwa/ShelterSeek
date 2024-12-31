import React from "react";
import * as styled from "./styles";
import SlideBarComponent from "@/app/components/SlideBar";
import RecomCard from "./RecomCard";
import { RecommendationsList } from "./definitions";
import { VerticalScroll } from "@/app/styles";

const Recommendations = () => {
  return (
    <styled.RecommendationWrapper>
      <styled.HeaderWrapper>
        <styled.HeaderLabel>Our Recommendation</styled.HeaderLabel>
        <styled.SeeAllLabel>See All</styled.SeeAllLabel>
      </styled.HeaderWrapper>
      <SlideBarComponent />
      <VerticalScroll>
        <styled.RecomCardsContainer>
          {RecommendationsList.map((item) => (
            <RecomCard key={item.placeName} card={item} />
          ))}
        </styled.RecomCardsContainer>
        <styled.ExtraSpace />
      </VerticalScroll>
    </styled.RecommendationWrapper>
  );
};

export default Recommendations;
