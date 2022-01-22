import "../App.css";
import { useContext, useState } from "react";
import { BandsContext } from "../context/BandsContext";

const ReviewCard = ({ bandName, albumTitle, genre, albumCover }) => {
  const [users, setUsers] = useContext(BandsContext);
  console.log("----CARD-----");
  console.log(users.results[0]);
  //   const bandName =
  //     users.results[0].mainMember.location.street.name.split(" ")[0];

  //   const albumCover = "https://random.imagecdn.app/200/200";

  return (
    <div className="review-card">
      <img src={albumCover} alt="album cover" className="album-cover" />
      <p className="review-artist">{bandName}</p>
      <p className="review-title">{albumTitle}</p>
      <p className="review-genre">{genre}</p>
      <p className="review-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius eveniet
        laudantium iusto recusandae tempora natus quos, est obcaecati ducimus
        impedit quia maxime in quae mollitia consequuntur tenetur qui rem aut.
      </p>
    </div>
  );
};

export default ReviewCard;
