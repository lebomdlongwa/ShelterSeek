import React from "react";
import * as styled from "./styles";
import FeaturedCard from "./FeaturedCard";
import { featuredList } from "./FeaturedCard/definitions";

const FeaturedComponent = () => {
  return (
    <styled.FeaturedComponentWrapper>
      <styled.HeaderWrapper>
        <styled.HeaderLabel>Featured</styled.HeaderLabel>
        <styled.SeeAllLabel>See All</styled.SeeAllLabel>
      </styled.HeaderWrapper>
      <styled.ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <styled.CardsWrapper>
          {featuredList.map((card) => (
            <FeaturedCard card={card} />
          ))}
        </styled.CardsWrapper>
      </styled.ScrollView>
    </styled.FeaturedComponentWrapper>
  );
};

export default FeaturedComponent;
