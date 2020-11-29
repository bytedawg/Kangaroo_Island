import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/about_img.jpg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../styles";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about" />
        </div>
        <div className="about-info">
          <Title title="about" />
          <p>
          Kangaroo Island Resort lies off the mainland of South Australia, southwest of Adelaide. Over a third of the island is protected in nature reserves, home to native wildlife like sea lions, koalas and diverse bird species. In the west, Flinders Chase National Park is known for penguin colonies and striking coastal rock formations, like the sculpted Remarkable Rocks and the stalactite-covered Admirals Arch.
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width:100vw;
  max-width:1170px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  .about-img,.about-info{
   align-self:center;
  }
  .about-info{
   p{
    width:80%;
   }
  }
  `}
`;

export default About;
