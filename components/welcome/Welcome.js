import React from "react";
import Container from "../container/Container";
import Button from "../button/Button";

const Welcome = ({ desktopSize }) => (
  <div className="section--1 hardBlue--bg">
    <Container>
      <div className="section-1-first-flex">
        <div className="home-welcome-txt">
          <h1>
            Decentralized, Tokenized, & <span>Shakin’ Up Fantasy Sports</span>
          </h1>
          <p className="welcome-txt-1">
            LeagueDAO enables a global community of fans to collectively play,
            build, and define the future of fantasy gaming.
          </p>
          <p className="welcome-txt-2">
            We’re combining the best of DeFi protocols, play-to-earn gaming, and
            NFTs to create a web3 fantasy gaming reality where users can own and
            trade the players on their team and where on-chain scoring is based
            on real-world stats.
          </p>
          <Button variant="contained" className="contained">
            Read The Whitepaper
          </Button>
        </div>
      </div>
      {desktopSize.isDesktop && (
        <div className="section-1-flex">
          <img
            src="assets/images/home-welcome-img.png"
            alt="Home Welcome Img"
          />
        </div>
      )}
      {(desktopSize.isTablet || desktopSize.isMobile) && (
        <div className="section-1-flex">
          <img
            src="assets/images/home-welcome-img-mobile.png"
            alt="Home Welcome Img"
          />
        </div>
      )}
    </Container>
  </div>
);

export default Welcome;
