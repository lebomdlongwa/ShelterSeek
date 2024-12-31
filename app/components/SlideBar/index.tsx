import React from "react";
import * as styled from "./styles";
import { HorizontalScroll } from "@/app/styles";

const SlideBarOptionsDefinition = [
  {
    label: "All",
    active: true,
  },
  {
    label: "House",
    active: false,
  },
  {
    label: "Villa",
    active: false,
  },
  {
    label: "Apartments",
    active: false,
  },
  {
    label: "Other",
    active: false,
  },
];

const SlideBarComponent = () => {
  return (
    <HorizontalScroll style={{ paddingLeft: 20 }}>
      <styled.SlideBarWrapper>
        {SlideBarOptionsDefinition.map((option) => (
          <styled.SlideOptions key={option.label} active={option.active}>
            <styled.OptionLabel active={option.active}>
              {option.label}
            </styled.OptionLabel>
          </styled.SlideOptions>
        ))}
        <styled.ExtraSpace />
      </styled.SlideBarWrapper>
    </HorizontalScroll>
  );
};

export default SlideBarComponent;
