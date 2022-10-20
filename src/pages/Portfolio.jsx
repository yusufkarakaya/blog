import React from "react";
import Navigation from "../components/Navigation";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <div>
      <Navigation title={"portfolio"} />
      <PortfolioCard
        title={"Portfolio & Blog Website"}
        description={"This project created by using React, tailwind, Node."}
        link={"https://github.com/yusufkarakaya/blog"}
      />
    </div>
  );
}

export default Portfolio;
