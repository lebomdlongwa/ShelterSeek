import React from "react";
import icons from "@/app/components/icons";
import { Colors } from "@/app/components/colors";
import * as styled from "./styles";

type RecomCardProps = {
  card: Card;
};

const RecomCard = ({ card }: RecomCardProps) => {
  const heartIconColor = card.liked ? Colors.red : Colors.grayWhite;

  return (
    <styled.RecomCardWrapper>
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
        <styled.Price>${card.price}</styled.Price>
      </styled.CardDetails>
      <styled.HeartIcon
        style={{ tintColor: heartIconColor }}
        source={icons.heart}
      />
    </styled.RecomCardWrapper>
  );
};

export default RecomCard;
