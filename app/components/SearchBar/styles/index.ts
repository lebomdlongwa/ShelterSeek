import { Colors } from "@/app/components/colors";
import { Fonts } from "@/app/components/fonts";
import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: 0 20px;
  width: 100%;
`;

export const SearchBar = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.whitish};
  padding: 0 10px;
  gap: 20px;
  border-radius: 10px;
`;

export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.TextInput`
  font-family: ${Fonts.rubikRegular};
`;

export const FilterIcon = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
`;
