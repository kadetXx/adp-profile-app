import { Flex, styled } from "@adp/common";

export const StyledContainer = styled(Flex, {
  margin: "auto",
  marginTop: "10rem",
  width: "45rem",
  border: "1px solid $border",
  padding: "4rem 2rem",
  borderRadius: "30px",

  "@tablet": {
    width: "95%",
    height: "auto",
  },

  "@mobile": {
    marginBottom: "5rem",
  },
});

export const StyledDivider = styled("span", {
  margin: "2rem 0",
  backgroundColor: "$border",
  height: "1px",
  width: "100%",
});
