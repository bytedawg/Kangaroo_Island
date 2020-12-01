import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/about_img.jpg";
import homeImg from "../../images/home_img.jpg";
import HeroBanner from "../globals/HeroBanner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <HeroBanner
        greeting="welcome to"
        title="Kangaroo Island Resort"
        text="React JS Styled-Components"
      >
        <PrimaryBtn t="1rem">View Details</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com">
          view details
        </PrimaryBtn> */}
      </HeroBanner>
    </Hero>
  );
};

export default Header;
