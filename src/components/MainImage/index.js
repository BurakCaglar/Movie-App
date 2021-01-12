import React from "react";
import { Wrapper, Content, Text } from "./MainImage.styles";

const MainImage = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{}</h1>
          <p>{}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MainImage;
