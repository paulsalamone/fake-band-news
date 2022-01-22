import "./App.css";
import { BandsController } from "./context/BandsContext";
import NavBar from "./components/NavBar";
import TopStory from "./components/TopStory";
import Reviews from "./components/Reviews";
function App() {
  return (
    <div className="App">
      <BandsController>
        <NavBar />
        <main>
          <TopStory />
          <Reviews />
        </main>
        <footer>©2022 Paul Salamone Design</footer>
      </BandsController>
    </div>
  );
}

export default App;
