import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchComponent from "./Seach";
import Footer from "./footer";
import FontResult from "./FontList";

function App() {
  const [fontList, setFontList] = useState([]);
  console.log(fontList);

  return (
    <div className="wrapper">
      <div className="center-container">
        <div className="cen">
        <h1>Get any Font You want</h1>
        <h3>From the Huge Open Source Collection of Github</h3>
        </div>
        <SearchComponent setFontList={setFontList} />
        <div className="result">
          <FontResult fontList={fontList}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
