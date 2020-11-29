import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/about_img.jpg";
import homeImg from "../../images/home_img.jpg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="Kangaroo Island Resort"
        text="React JS Styled-Components"
      >
        <PrimaryBtn t="1rem">view details</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
