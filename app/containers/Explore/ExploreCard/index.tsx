import React from "react";
import icons from "@/app/components/icons";
import { Colors } from "@/app/components/colors";
import * as styled from "./styles";

type ExploreCardProps = {
  card: Card;
};

const ExploreCard = ({ card }: ExploreCardProps) => {
  const heartIconColor = card.liked ? Colors.red : Colors.gray;

  return (
    <styled.ExploreCardWrapper>
      <styled.CardBannerContainer>
        <styled.CardBackground source={card.image} />
        <styled.RatingWrapper>
          <styled.StarIcon source={icons.star} />
          <styled.RatingNumber>{card.rating}</styled.RatingNumber>
        </styled.RatingWrapper>
      </styled.CardBannerContainer>
      <styled.CardDetails>
        <styled.CardName>{card.placeName}</styled.CardName>
        <styled.Location>{card.location}</styled.Location>
      </styled.CardDetails>
      <styled.Price>${card.price}</styled.Price>
      <styled.HeartIcon
        style={{ tintColor: heartIconColor }}
        source={icons.heart}
      />
    </styled.ExploreCardWrapper>
  );
};

export default ExploreCard;
