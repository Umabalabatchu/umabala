import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Stream from "./Stream/Stream";
// import Footer from "./footer/Footer";
import Activities from "./Activities/Activities";
import Buzz from "./Buzz/Buzz";
import Worldcup from "./WorldCup/Worldcup";
import ListYourShow from "./ListYourShow/ListYourShow";
import Home from "./Home/Home";
import Sports from "./Sports/Sports";
import Events from "./Events/Events";
import Plays from "./Plays/Plays";
import Offers from "./Offers/Offers";
import Giftcards from "./GiftCards/Giftcards";

// import Corporates from "./Corporates/Corporatesbody";
import Movies from "./Movies/Movies";

// import Slider from "./Slider/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/plays" element={<Plays></Plays>}></Route>
          <Route path="/sports" element={<Sports></Sports>}></Route>
          <Route path="/activities" element={<Activities></Activities>}></Route>
          <Route path="/buzz" element={<Buzz></Buzz>}></Route>
          <Route path="/worldcup" element={<Worldcup></Worldcup>}></Route>
          <Route
            path="/listyourshow"
            element={<ListYourShow></ListYourShow>}
          ></Route>
          {/* <Route path="/corporates" element={<Corporates></Corporates>}></Route> */}
          <Route path="/offers" element={<Offers></Offers>}></Route>
          <Route path="/gifts" element={<Giftcards></Giftcards>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
