import React from "react";
import * as styled from "./styles";

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
    <styled.ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <styled.SlideBarWrapper>
        {SlideBarOptionsDefinition.map((option) => (
          <styled.SlideOptions active={option.active}>
            <styled.OptionLabel active={option.active}>
              {option.label}
            </styled.OptionLabel>
          </styled.SlideOptions>
        ))}
        <styled.ExtraSpace />
      </styled.SlideBarWrapper>
    </styled.ScrollView>
  );
};

export default SlideBarComponent;
