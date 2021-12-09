import React from "react";
import Container from "../container/Container";
import WhiteBox from "../whiteBox/WhiteBox";

const NomoLeague = ({ desktopSize }) => (
  <div className="section--2">
    <Container>
      <div className="section--2--pos-div">
        {desktopSize.isTablet && (
          <h2>
            Vibin’ on the <br /> Future of Fantasy: <br />
            the Nomo League
          </h2>
        )}
        {desktopSize.isMobile && <h2>Vibin’ on the Future of Fantasy</h2>}
        <WhiteBox className="WB" src="assets/images/rugby-ball.svg">
          <b>Level up to tokenized Nomo Leagues</b> and you’ll never have to
          recruit friends or wrangle dues again. Purchase{" "}
          {desktopSize.isMobile && "$LEAG"}{" "}
          {(desktopSize.isDesktop || desktopSize.isTablet) &&
            "Nomo Player Tokens"}
          to join the action, and collect rewards through a play-to-earn model
          that rewards your skill.
        </WhiteBox>
        {(desktopSize.isDesktop || desktopSize.isTablet) && (
          <img src="assets/images/green-snake.svg"></img>
        )}
        {desktopSize.isMobile && (
          <img src="assets/images/green-snake-mob.svg"></img>
        )}
      </div>
      <div>
        {desktopSize.isDesktop && (
          <h2>
            Vibin’ on the <br /> Future of Fantasy: <br />
            the Nomo League
          </h2>
        )}
        <WhiteBox src="assets/images/blue-hand.svg">
          LeagueDAO goes beyond digital collectibles, using smart contracts,
          Oracles, DeFi, and <b>NFTs as in-game assets with real utility</b>.
          Put your Player Tokens to use in an open week-to-week fantasy league
          that actually distirbutes rewards based on real world stats.
        </WhiteBox>
      </div>
    </Container>
  </div>
);

export default NomoLeague;
