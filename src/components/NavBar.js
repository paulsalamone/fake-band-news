import "../App.css";
import Band from "../images/band.jpg";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="masthead">
          <h1>
            FAKE <span className="gradient-span">BAND</span> NEWS
          </h1>
          {/* <h5 style={{ color: "yellow" }}>
            Click "refresh" for all new stories!
          </h5> */}
          <img src={Band} alt="featured band member " className="logo" />
        </div>

        <nav>
          <li>TOP STORIES</li>
          <li>ALBUM REVIEWS</li>
          <li>LIST OF BANDS</li>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
