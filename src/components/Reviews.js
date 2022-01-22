import { useContext, useState } from "react";
import { BandsContext } from "../context/BandsContext";
import ReviewCard from "./ReviewCard";

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const Reviews = () => {
  const [users, setUsers] = useContext(BandsContext);

  const albumTitle1 = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  })
    .split("_")
    .join(" ");
  const albumTitle2 = uniqueNamesGenerator({
    dictionaries: [animals, adjectives],
  })
    .split("_")
    .join(" ");
  const albumTitle3 = uniqueNamesGenerator({
    dictionaries: [colors, adjectives],
  })
    .split("_")
    .join(" ");

  const bandName1 = users.results[3].location.street.name.split(" ")[0];
  const bandName2 = users.results[1].location.street.name.split(" ")[0];
  const bandName3 = users.results[2].location.street.name.split(" ")[0];

  const albumCover1 = "https://random.imagecdn.app/200/200";
  const albumCover2 = "https://picsum.photos/200";

  const albumCover3 =
    "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier";

  return (
    <>
      <section className="bottom-section">
        <h4>ALBUM REVIEWS</h4>
        <div className="reviews-block">
          {/* THIS SHOULD BE A COMPONENT */}
          <ReviewCard
            bandName={bandName1}
            albumTitle={albumTitle1}
            genre="punk"
            albumCover={albumCover1}
          />
          <ReviewCard
            bandName={bandName2}
            albumTitle={albumTitle2}
            genre="indie"
            albumCover={albumCover2}
          />
          <ReviewCard
            bandName={bandName3}
            albumTitle={albumTitle3}
            genre="metal"
            albumCover={albumCover3}
          />
        </div>
      </section>
    </>
  );
};

export default Reviews;
