import React, { Component } from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import roomData from "./accomodation-data";
import { setColor, media, setRem } from "../../styles";


export default class Accomodation extends Component {
  state = {
    rooms: roomData
  };
  render() {
  const {rooms} = this.state;
    return (
      <Section color={setColor.lightGrey}>
        <Title title="Our Kangaroo Island accommodation" center />
        <AccomodationCenter>
          {rooms.map(room => {
            return <Room key={room.id} room={room} />;
          })}
        </AccomodationCenter>
      </Section>
    );
  }
}


const AccomodationCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(3,1fr);
  `};
`;
