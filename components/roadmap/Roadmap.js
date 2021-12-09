import React from "react";
import Container from "../container/Container";
import RoadmapItem from "../roadmapItem/RoadmapItem";

const Roadmap = ({ desktopSize }) => {
  return (
    <div className="grey--bg section--4">
      <Container>
        <div className="roadmap">
          <h2>Roadmap</h2>
          <div>
            <RoadmapItem
              number={1}
              // title={desktopSize.isDesktop && ("Launch LeagueDAO Governance Token - LEAG")} {(desktopSize.isTablet || desktopSize.isMobile) && ("LEAG Token")}
              title={
                desktopSize.isDesktop
                  ? "Launch LeagueDAO Governance Token - LEAG"
                  : "LEAG Token"
              }
              text="LeagueDAO is a DAO first open source protocol. We’re using decentralized tools from the start to achieve our final goal of complete decentralization, with a flexible smart contract system to add, upgrade, and remove functionality."
            />
            <RoadmapItem
              number={2}
              title={
                desktopSize.isDesktop
                  ? "Deploy DAO and Yield Farming"
                  : "Deploy DAO"
              }
              text="You can’t call yourself a DAO first organization without having an actual DAO. The DAO will manage the management of LeagueDAO and the products we develop.  The DAO will manage a treasury of funds and it is in the DAO where someone can stake the $LEAG token and vote on new proposals.  The  DAO is a fork of the Universe.XYZ DAO, which was audited by Quantstamp and Haechi."
            />
            <RoadmapItem
              number={3}
              title="Drop first Nomo Player Tokens"
              text="The first Tokenized Fantasy Sports product we will deploy is the Nomo League. In the Nomo League, players are respresented by NFTs (“Nomo Player Tokens”). Anyone can participate in a Nomo League, they just have to draft a team by minting Nomo Player Tokens.  We will be dropping the first batch of Nomo Player Tokens before the launch of the first Nomo League. "
            />
            <RoadmapItem
              number={4}
              title="Launch first Nomo League"
              text="Like we said, the Nomo League will be our first product release. Users (the “Managers”) can join a Nomo League by staking Nomo Player Tokens in their respective Nomo league. By participating in a Nomo League, Managers can earn ERC-20 rewards at the conclusion of each 1-week round. The first Nomo League will be Fantasy Football and will launch following the drop of the first Nomo Player Tokens. "
            />
          </div>
        </div>
        {desktopSize.isDesktop && (
          <div>
            <img
              className="roadmap-scene"
              src="assets/images/home-roadmap-photo.svg"
              alt="Home Football Scene"
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Roadmap;
