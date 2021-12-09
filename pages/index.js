import React from "react";
import Welcome from "../components/welcome/Welcome";
import About from "../components/about/About";
import Roadmap from "../components/roadmap/Roadmap";
import PurpleBox from "../components/purpleBox/PurpleBox";
import NomoLeague from "../components/nomoLeague/NomoLeague";

export default function Home({ desktopSize }) {
  return (
    <div>
      <Welcome desktopSize={desktopSize} />
      <NomoLeague desktopSize={desktopSize} />
      <About desktopSize={desktopSize} />
      <Roadmap desktopSize={desktopSize} />
      <PurpleBox desktopSize={desktopSize} />
    </div>
  );
}
