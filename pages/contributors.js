import React from "react";
import ContributorsWlcm from "../components/contributorsWlcm/ContributorsWlcm";
import ContributorsCards from "../components/contributorsCards/ContributorsCards";

export default function Contributors() {
  return (
    <div className="hardBlue--bg">
      <ContributorsWlcm />
      <ContributorsCards />
    </div>
  );
}
