import React from 'react';
import styled from "styled-components";

function Home(porps) {

  // const { title, description, description2 } = props.homeData;

  return (
    <StyledHomeSection id="Home">
      <div class="home__container">
        <img src="" alt="김서현" class="home__avatar" />
        <h1 class="home__title">
          title<br />
        </h1>
        <h2 class="home__description">
          description<br /><br />
        </h2>
        <h3 class="home__description">
          description2
        </h3>
      </div>
    </StyledHomeSection>
  )
}

export default Home;

const StyledHomeSection = styled.section`
  .home__contianer {
    
  }
`;
