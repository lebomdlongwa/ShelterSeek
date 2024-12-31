import { ImageSourcePropType } from "react-native";

declare global {
  type Card = {
    rating: number;
    image: ImageSourcePropType;
    placeName: string;
    location: string;
    price: number;
    liked: boolean;
  };
}
