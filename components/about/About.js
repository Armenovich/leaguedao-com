import React from "react";
import Container from "../container/Container";
import Button from "../button/Button";

const About = ({ desktopSize }) => (
  <div className="section--3 hardBlue--bg">
    <Container>
      {(desktopSize.isMobile || desktopSize.isDesktop) && (
        <div>
          <img
            className="home-footballscene"
            src="assets/images/home-footballscene.png"
            alt="Home Football Scene"
          />
        </div>
      )}
      <div>
        <div className="home-about-us-txt">
          <h2>About Us</h2>
          <p className="welcome-txt-1">
            LeagueDAO is a DAO-first open source project.
          </p>
          <p className="welcome-txt-2">
            LeagueDAO is owned and operated by a community of misfits — degens,
            nerds, sports fans, and athletes — fed up with old school fantasy
            sports and motivated to push the boundaries of NFTs and web3
            technology. Our members are collectively driving decisions to shape
            the future of fantasy gaming, from IRL sports to esports and more.
          </p>
          <Button variant="contained" className="contained">
            Read The Whitepaper
          </Button>
        </div>
      </div>
      {desktopSize.isTablet && (
        <div>
          <img
            className="home-footballscene"
            src="assets/images/home-footballscene.png"
            alt="Home Football Scene"
          />
        </div>
      )}
    </Container>
  </div>
);

export default About;
