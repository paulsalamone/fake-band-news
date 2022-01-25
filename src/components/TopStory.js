import "../App.css";
import { useContext, useState } from "react";
import { BandsContext } from "../context/BandsContext";

const TopStory = () => {
  const [users, setUsers] = useContext(BandsContext);
  // console.log(users);
  const mainMember = users.results[0];
  console.log(mainMember);
  const mainPhoto = mainMember.picture.large;
  const mainName = `${mainMember.name.first} ${mainMember.name.last}`;
  const bandName = mainMember.location.street.name.split(" ")[0];
  const bandCity = mainMember.location.city;
  const bandCountry = mainMember.location.country;
  const bandState = mainMember.location.state;
  // const bandName = user.results[0];

  const bandmate1 = users.results[1].picture.large;
  const bandmate2 = users.results[2].picture.large;
  const bandmate3 = users.results[3].picture.large;
  const bandmate4 = users.results[4].picture.large;

  let gender = mainMember.gender;
  let pronounNom;
  let pronounPoss;
  if (gender === "female") {
    pronounNom = "she";
    pronounPoss = "her";
  } else {
    pronounNom = "he";
    pronounPoss = "his";
  }

  return (
    <>
      <section className="top-section">
        <div className="top-story">
          <div className="top-story-image">
            <img src={mainPhoto} alt="band leader" />
            <p>
              {mainName}, lead singer of {bandName}
            </p>
          </div>

          <div className="top-story-text">
            <h4>TOP STORY</h4>
            <h2>
              <span className="gradient-span">{bandName}</span> lead singer{" "}
              {mainName} announces band break-up, new solo tour
            </h2>
            <p>
              <i>
                {bandCity}, {bandCountry}
              </i>
              : The tension was high in {bandCountry} this morning as famed lead
              singer of hard rock band {bandName}, the notiously outspoken{" "}
              {mainName}, announced "irreconcilable differences" with bandmates.
              "I'm excited to focus on my solo album," {pronounNom} told a
              packed press conference, announcing further plans to embark on a
              small solo tour of {bandState} this fall.
            </p>
            <div className="band-members">
              <img
                src={bandmate1}
                className="band-mate"
                alt="random band number"
              />
              <img
                src={bandmate2}
                className="band-mate"
                alt="random band number"
              />
              <img
                src={bandmate3}
                className="band-mate"
                alt="random band number"
              />
              <img
                src={bandmate4}
                className="band-mate"
                alt="random band number"
              />
              <p>{bandName} bandmates feeling "betrayed", "deeply hurt".</p>
            </div>
            <div className="read-more-div">
              <a className="read-more">Read More</a>
            </div>
          </div>
        </div>
        <div className="fake-ad">fake ad</div>
      </section>
    </>
  );
};
export default TopStory;
