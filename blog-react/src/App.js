import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

//profile
import Navbar from './component/profile/Navbar';

import { useSelector } from "react-redux";
// import { getProfileData } from "./store/store";
import { RouteContainer } from "./route";

import {
  BrowserRouter as Router,
} from "react-router-dom";

import { getModalStatusData } from "../src/store/store"
import { CardModal } from "./component/blog";

/////////////////////////
const GlobalStyle = createGlobalStyle`
  head{
    
  }
  body{
    width:1080px;
    margin : auto;    
    padding : 0;
    font-family : "Noto Sans KR", sans-serif;
    color : #222222;
    cursor : default;
  }
`

/////////////////////////


function App() {

  //Redux_Store
  // const storeData = useSelector(getProfileData);
  const modalStatusData = useSelector(getModalStatusData);

  useEffect(() => { }, []);

  // const data = JSON.stringify(storeData.homeData);

  return (
    //하나의 객체만 return 한다.
    <>
      <GlobalStyle />
      <Router>
        <Navbar></Navbar>
        <main>
          <section id="portfolio">
            <RouteContainer></RouteContainer>
          </section >
          <section id="blog"></section>
          {modalStatusData.isOpen && <CardModal />}
        </main>
      </Router>
    </>
  );
}

export default App;
