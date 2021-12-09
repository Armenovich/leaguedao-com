import React, { useState } from "react";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";
import axios from "axios";
import SubscribePopup from "../popups/SubscribePopup";
import Button from "../button/Button";

const Footer = () => {
  const history = useRouter();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      const config = {
        headers: { "Access-Control-Allow-Origin": "*" },
        params: {
          email,
        },
      };
      axios
        .get("https://shielded-sands-48363.herokuapp.com/addContact", config)
        .then((response) => {
          if (response.status === 200) {
            setEmail("");
            document.getElementById("subscribed-hidden-btn").click();
          } else {
            alert("OOPS! Something went wrong.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Email address is invalid.");
    }
  };
  return (
    <footer>
      <Popup
        trigger={
          <button
            type="button"
            id="subscribed-hidden-btn"
            aria-label="hidden"
            style={{ display: "none" }}
          />
        }
      >
        {(close) => <SubscribePopup close={close} showCongrats />}
      </Popup>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__top__container">
            <div className="subscribe">
              <p>Stay up to date with our newsletter</p>
              <div className="form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="button"
                  variant="contained"
                  className="footer"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="join__community">
              <p>Join the community</p>
              <div className="icons">
                <div>
                  <img
                    src="assets/icons/twitter-icon.svg"
                    alt="Twiter"
                    aria-hidden="true"
                    onClick={() =>
                      window.open("https://twitter.com/universe_xyz")
                    }
                  />
                </div>
                <div>
                  <img
                    src="assets/icons/discord-white.svg"
                    alt="Discord"
                    aria-hidden="true"
                    onClick={() => window.open("https://t.co/0hQWlbElpB?amp=1")}
                  />
                </div>
                <div>
                  <img
                    src="assets/icons/coingecko-icon.svg"
                    alt="Coin Gesko"
                    aria-hidden="true"
                    onClick={() =>
                      window.open(
                        "https://www.coingecko.com/en/coins/universe-xyz"
                      )
                    }
                  />
                </div>
                <div>
                  <img
                    src="assets/icons/youtube.svg"
                    alt="Youtube"
                    aria-hidden="true"
                    onClick={() =>
                      window.open(
                        "http://youtube.com/channel/UCWt00md9T2b4iTsHWp_Fapw?sub_confirmation=1"
                      )
                    }
                  />
                </div>
                <div>
                  <img
                    src="assets/icons/medium.svg"
                    alt="Medium"
                    aria-hidden="true"
                    onClick={() =>
                      window.open("https://medium.com/universe-xyz")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle__container">
            <div className="universe">
              <div className="logo-div">
                <img src="assets/icons/footer-logo.svg" alt="logo" />
              </div>
              <p>
                Join one of our Tokenized Fantasy Sports leagues and become a
                part of the LeagueDAO community.
              </p>
            </div>
            <div className="universe-list">
              <div>
                <ul>
                  <li>Products</li>
                  <li
                    onClick={() => history.push("/nomo-leagues")}
                    aria-hidden="true"
                  >
                    Nomo Leagues
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Player drops</li>
                  <li
                    onClick={() => history.push("/polymorphs")}
                    aria-hidden="true"
                  >
                    Nomo Fantasy Football
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Info</li>
                  <li
                    onClick={() =>
                      window.open(
                        "https://github.com/UniverseXYZ/UniverseXYZ-Whitepaper"
                      )
                    }
                    aria-hidden="true"
                  >
                    Whitepaper
                  </li>
                  <li
                    onClick={() => history.push("/contributors")}
                    aria-hidden="true"
                  >
                    Contributors
                  </li>
                  <li
                    aria-hidden="true"
                    onClick={() => window.open("https://docs.universe.xyz/")}
                  >
                    Docs
                  </li>
                  <li
                    onClick={() => history.push("/token-vesting")}
                    aria-hidden="true"
                  >
                    $LEAG Token Vesting
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>DAO</li>
                  <li
                    aria-hidden="true"
                    onClick={() =>
                      window.open("https://dao.universe.xyz/governance")
                    }
                  >
                    Governance
                  </li>
                  <li
                    aria-hidden="true"
                    onClick={() =>
                      window.open("https://dao.universe.xyz/yield-farming")
                    }
                  >
                    Yield farming
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__container">
          <div className="op-sourced">
            <span>LeagueDAO © 2021. Open-sourced.</span>
          </div>
          <div className="powered-by">
            <span
              aria-hidden="true"
              onClick={() =>
                window.open(
                  "https://app.sushi.com/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/0x618679df9efcd19694bb1daa8d00718eacfa2883"
                )
              }
            >
              Add liquidity to SushiSwap USDC/LEAG pool
            </span>
            <span
              aria-hidden="true"
              onClick={() =>
                window.open(
                  "https://app.sushi.com/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x618679df9efcd19694bb1daa8d00718eacfa2883"
                )
              }
            >
              SushiSwap USDC/LEAG market
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
