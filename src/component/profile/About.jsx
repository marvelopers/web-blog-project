import React from 'react';
import styled from "styled-components";
import About_major from './About_major';



function About(props) {
  console.log('aboutData', props.aboutData);
  const { title, description } = props.aboutData;

  return (
    <sectionAbout id="about" class="section section__container">

      <h1 class="about__title">{title}</h1>
      <p>{description}</p>
      <About_major></About_major>
      <div class="about__jobs">
        <div class="job">
          {/* <img src={fitpet} alt="fitpet__logo" class="job__logo" /> */}
          <div class="job__description">
            <p class="job__name">핏펫</p>
            <p class="job__period">2020.01 ~ 현재</p>
          </div>
        </div>
        <div class="job">
          {/* <img src={mbi} alt="mbi__logo" class="job__logo" /> */}
          <div class="job__description">
            <p class="job__name">MBI솔루션</p>
            <p class="job__period">2018.8 ~ 2020.01</p>
          </div>
        </div>
        <div class="job">
          {/* <img src={iwt} alt="iwt__logo" class="job__logo" /> */}
          <div class="job__description">
            <p class="job__name">아이원 트래블</p>
            <p class="job__period">2016.11 ~ 2018.01</p>
          </div>
        </div>
      </div>
    </sectionAbout>
  );
}

const sectionAbout = styled.section`
  border : 1px solid black;
  background-color : black;
`;

export default About;