import React from "react";
import * as styled from "./styles";
import FeaturedCard from "./FeaturedCard";
import { featuredList } from "./FeaturedCard/definitions";
import { HorizontalScroll } from "@/app/styles";

const FeaturedComponent = () => {
  return (
    <styled.FeaturedComponentWrapper>
      <styled.HeaderWrapper>
        <styled.HeaderLabel>Featured</styled.HeaderLabel>
        <styled.SeeAllLabel>See All</styled.SeeAllLabel>
      </styled.HeaderWrapper>
      <HorizontalScroll>
        <styled.CardsWrapper>
          {featuredList.map((card) => (
            <FeaturedCard key={card.placeName} card={card} />
          ))}
        </styled.CardsWrapper>
      </HorizontalScroll>
    </styled.FeaturedComponentWrapper>
  );
};

export default FeaturedComponent;
