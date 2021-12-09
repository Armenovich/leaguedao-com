import React from "react";
import Container from "../container/Container";
import ContributorItem from "../contributorItem/ContributorItem";

const ContributorsData = [
  {
    name: "Aaron McDonald",
    img: "assets/images/contributors/c1.svg",
  },
  {
    name: "Drew Austin",
    img: "assets/images/contributors/c2.svg",
  },
  {
    name: "Santiago Santos",
    img: "assets/images/contributors/c3.svg",
  },
  {
    name: "4RC",
    img: "assets/images/contributors/c4.svg",
  },
  {
    name: "6 Agency",
    img: "assets/images/contributors/c5.svg",
  },
  {
    name: "Aleks Larsen",
    img: "assets/images/contributors/c6.svg",
  },
  {
    name: "Andrew Keys",
    img: "assets/images/contributors/c7.svg",
  },
  {
    name: "Andy Chorlian",
    img: "assets/images/contributors/c8.svg",
  },
  {
    name: "Billy Luedke",
    img: "assets/images/contributors/c9.svg",
  },
  {
    name: "Bogdan",
    img: "assets/images/contributors/c10.svg",
  },
  {
    name: "Cameron Barbas",
    img: "assets/images/contributors/c11.svg",
  },
  {
    name: "Cezar Paraschiv",
    img: "assets/images/contributors/c12.svg",
  },
  {
    name: "D64",
    img: "assets/images/contributors/c13.svg",
  },
  {
    name: "Darren Lau",
    img: "assets/images/contributors/c14.svg",
  },
  {
    name: "Darryl Lau",
    img: "assets/images/contributors/c15.svg",
  },
  {
    name: "Defi Dad",
    img: "assets/images/contributors/c16.svg",
  },
  {
    name: "Defi Ted",
    img: "assets/images/contributors/c17.svg",
  },
  {
    name: "Dragos",
    img: "assets/images/contributors/c18.svg",
  },
  {
    name: "George Lambeth",
    img: "assets/images/contributors/c19.svg",
  },
  {
    name: "Gmoney",
    img: "assets/images/contributors/c20.svg",
  },
  {
    name: "Harrison Hines",
    img: "assets/images/contributors/c21.svg",
  },
  {
    name: "Homer Shillson",
    img: "assets/images/contributors/c22.svg",
  },
  {
    name: "Hyunsu Jung",
    img: "assets/images/contributors/c23.svg",
  },
  {
    name: "Jeff Huang",
    img: "assets/images/contributors/c24.svg",
  },
  {
    name: "Jordan Momtazi",
    img: "assets/images/contributors/c25.svg",
  },
  {
    name: "Justin Blau",
    img: "assets/images/contributors/c26.svg",
  },
  {
    name: "Kain Warwick",
    img: "assets/images/contributors/c27.svg",
  },
  {
    name: "Kevin Rose",
    img: "assets/images/contributors/c28.svg",
  },
  {
    name: "Leighton Cuzack",
    img: "assets/images/contributors/c29.svg",
  },
  {
    name: "Leo Cheng",
    img: "assets/images/contributors/c30.svg",
  },
  {
    name: "Les Borsai",
    img: "assets/images/contributors/c31.svg",
  },
  {
    name: "Mark Ward",
    img: "assets/images/contributors/c32.svg",
  },
  {
    name: "Mark Yusko",
    img: "assets/images/contributors/c33.svg",
  },
  {
    name: "Max Fiege",
    img: "assets/images/contributors/c34.svg",
  },
  {
    name: "Mike Dudas",
    img: "assets/images/contributors/c35.svg",
  },
  {
    name: "Mike Lazerow",
    img: "assets/images/contributors/c36.svg",
  },
  {
    name: "Milad Mostavi",
    img: "assets/images/contributors/c37.svg",
  },
  {
    name: "Pavlo Bendus",
    img: "assets/images/contributors/c38.svg",
  },
  {
    name: "Quinn Abraham",
    img: "assets/images/contributors/c39.svg",
  },
  {
    name: "Limechain",
    img: "assets/images/contributors/c40.svg",
  },
  {
    name: "The LAO",
    img: "assets/images/contributors/c41.svg",
  },
  {
    name: "Tim Kang",
    img: "assets/images/contributors/c42.svg",
  },
  {
    name: "Trevor BB",
    img: "assets/images/contributors/c43.svg",
  },
  {
    name: "Tyler Reynolds",
    img: "assets/images/contributors/c44.svg",
  },
  {
    name: "Vitalik Cherniak",
    img: "assets/images/contributors/c45.svg",
  },
  {
    name: "Blaize",
    img: "assets/images/contributors/c21.svg",
  },
  {
    name: "Jake Craven",
    img: "assets/images/contributors/c22.svg",
  },
  {
    name: "Tyler Ward",
    img: "assets/images/contributors/c23.svg",
  },
  {
    name: "Algernon Holmes",
    img: "assets/images/contributors/c24.svg",
  },
  {
    name: "Andrew Medal",
    img: "assets/images/contributors/c25.svg",
  },
  {
    name: "Blake Jamieson/MikeOday",
    img: "assets/images/contributors/c26.svg",
  },
  {
    name: "Calvin Liu",
    img: "assets/images/contributors/c27.svg",
  },
  {
    name: "Christian Crowley",
    img: "assets/images/contributors/c28.svg",
  },
  {
    name: "Chuba/Ryan",
    img: "assets/images/contributors/c29.svg",
  },
  {
    name: "Dave Carlson / WIMPZ",
    img: "assets/images/contributors/c30.svg",
  },
  {
    name: "Drew/Alex",
    img: "assets/images/contributors/c31.svg",
  },
  {
    name: "EJ Rogers",
    img: "assets/images/contributors/c32.svg",
  },
  {
    name: "FanControlledFootball",
    img: "assets/images/contributors/c33.svg",
  },
  {
    name: "Flashrekt",
    img: "assets/images/contributors/c34.svg",
  },
  {
    name: "Geo Constantinou",
    img: "assets/images/contributors/c35.svg",
  },
  {
    name: "J1mmy Mcnelis",
    img: "assets/images/contributors/c36.svg",
  },
  {
    name: "Jasmine Maietta/Andrew",
    img: "assets/images/contributors/c37.svg",
  },
  {
    name: "Steinthal",
    img: "assets/images/contributors/c38.svg",
  },
  {
    name: "Jesse",
    img: "assets/images/contributors/c39.svg",
  },
  {
    name: "Kieran Warwick",
    img: "assets/images/contributors/c40.svg",
  },
  {
    name: "Maple Leaf Cap",
    img: "assets/images/contributors/c41.svg",
  },
  {
    name: "Matt Beck",
    img: "assets/images/contributors/c42.svg",
  },
  {
    name: "Meltem Demirors",
    img: "assets/images/contributors/c43.svg",
  },
  {
    name: "Nick Chong",
    img: "assets/images/contributors/c44.svg",
  },
  {
    name: "RAC/Dre",
    img: "assets/images/contributors/c45.svg",
  },
  {
    name: "Red Phone",
    img: "assets/images/contributors/c21.svg",
  },
  {
    name: "Roman/MCW",
    img: "assets/images/contributors/c22.svg",
  },
  {
    name: "Ronde Barber/Tiki,Barber",
    img: "assets/images/contributors/c23.svg",
  },
  {
    name: "Stu Hunter",
    img: "assets/images/contributors/c24.svg",
  },
  {
    name: "Trevor FWB",
    img: "assets/images/contributors/c25.svg",
  },
  {
    name: "Vitalik C",
    img: "assets/images/contributors/c41.svg",
  },
  {
    name: "Will/Chris/Adam",
    img: "assets/images/contributors/c42.svg",
  },
  {
    name: "Yekim",
    img: "assets/images/contributors/c43.svg",
  },
  {
    name: "Yossi Hassan",
    img: "assets/images/contributors/c44.svg",
  },
  {
    name: "Zach LeBeau",
    img: "assets/images/contributors/c45.svg",
  },
  {
    name: "Tyler Ward",
    img: "assets/images/contributors/c21.svg",
  },
];

const ContributorsCards = () => (
  <Container>
    <div className="contributors--cards">
      {ContributorsData.map((elem, index) => {
        const { name, img } = elem;
        return <ContributorItem key={index.toString()} name={name} img={img} />;
      })}
    </div>
  </Container>
);

export default ContributorsCards;
