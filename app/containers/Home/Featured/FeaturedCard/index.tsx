import React from "react";
import * as styled from "./styles";
import icons from "@/app/components/icons";
import { Colors } from "@/app/components/colors";

type FeaturedCardProps = {
  card: Card;
  isRecommendation?: boolean;
};

const FeaturedCard = ({ card }: FeaturedCardProps) => {
  const heartIconColor = card.liked ? Colors.red : "white";

  return (
    <styled.FeaturedCardWrapper>
      <styled.CardBackground source={card.image} />
      <styled.RatingWrapper>
        <styled.StarIcon source={icons.star} />
        <styled.RatingNumber>{card.rating}</styled.RatingNumber>
      </styled.RatingWrapper>
      <styled.CardDetails>
        <styled.CardName>{card.placeName}</styled.CardName>
        <styled.Location>{card.location}</styled.Location>
        <styled.Price>${card.price}</styled.Price>
      </styled.CardDetails>
      <styled.HeartIcon
        style={{ tintColor: heartIconColor }}
        source={icons.heart}
      />
    </styled.FeaturedCardWrapper>
  );
};

export default FeaturedCard;
