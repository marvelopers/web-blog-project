import React from 'react';
import styled from "styled-components";

function About_major(props) {

  const { major } = props.aboutData;

  return (
    <div class="about__majors">
      {major.map(m => (
        <div class="major">
          <div class="major__icon">
            <i class={m.icon}></i>
          </div>
          <h2 class="major__title">{m.title}</h2>
          <div class="major__description">
            {m.description.join(',')}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About_major;
