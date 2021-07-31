import React, { useState } from "react";
import "../styling/index.css";
import "../styling/w3.css";
import Button from "../components/Button";
import exampleCall from "../api/exampleCall";
import axios from "axios";

//import CatGif from '../components/cat.js';

// function showAlert() {
//   alert("You just clicked the button!");
// }

// async function callServer() {
//   const response = await exampleCall();
//   if (response.success) {
//     alert(`Server says: ${JSON.stringify(response.data)}`);
//   } else {
//     alert(`Server had an error: ${JSON.stringify(response.error)}`);
//   }
// }

function IndexPage() {
  const [keyword, setKeyword] = useState(
    "asasdfhudsfhsufhusdhfudhfusdhfuojsifd"
  );
  const [content, setContent] = useState("");
  const [myType, setType] = useState("joke");

  async function addContent() {
    axios
      .post("http://localhost:3001/api/database", {
        id: keyword,
        content: content,
        type: myType,
      })
      .then((res) => {
        console.log(res);
      });
  }

  function handleKeyChange(event) {
    setKeyword(event.target.value);
  }

  // function handleTypeChange(event) {
  //   var thingToReturn = document.querySelector('#typeSelectorKids').value;
  //   setType(thingToReturn);
  // }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  return (
    <div id={"index-container"}>
      <div className={"spacer spacerTop"} />
      <div className={"content"}>
        <img className={"logo"} src="./noodle.png" />
        {/* <p>You have reached the default index page of the WDCC x SESA Mern Hackathon.</p>
        <p>This block of text is vertically centered through the magic of <b>CSS flexbox</b></p> */}
        {/* <p>Go to another page <a href={'/another'}>here</a></p> */}

        <input
          className={"search_input"}
          type="search"
          placeholder="Oodle"
          id="site-search"
          name="q"
          aria-label="Search through data"
        ></input>
        <button className={"search_button"}>I'm Feeling Lazy</button>
        {/* <CatGif></CatGif> */}
        <img
          className={"cat"}
          src="https://media.tenor.com/images/dab9fdca9a4f9125b5fae019ec84550c/tenor.gif"
        />
        <div className={"progress-scaf"}>
          <div className={"progress"}>_</div>
        </div>
        <form className={"noodle_form"}>
          <div className={"cust_grid"}>
            <label for="key">Keyword:</label>
            <input
              type="text"
              id="key"
              placeholder="Enter keyword"
              onChange={handleKeyChange}
            />
            <label for="type">Type:</label>
            <select id="typeSelectorKids" onChange={handleTypeChange} name="type">
              <option value="joke" onChange={handleTypeChange}>
                Joke
              </option>
              <option value="fact" onChange={handleTypeChange}>
                Fact
              </option>
              <option value="video" onChange={handleTypeChange}>
                Video
              </option>
              <option value="gif" onChange={handleTypeChange}>
                Gif
              </option>
            </select>
            <label for="content">Content:</label>
            <input
              type="text"
              id="content"
              placeholder="Enter content"
              onChange={handleContentChange}
            />
          </div>

          {/* <div></div> */}
          <div>
            <button className={"add"} type="submit" onClick={addContent}>
              Feed Me
            </button>
          </div>
        </form>

        {/* <Button buttonText={'Click me!'} clickAction={showAlert} />
        <Button buttonText={'Say hello to the server!'} clickAction={callServer} /> */}
      </div>
      <div className={"spacer"} />
    </div>
  );
}

export default IndexPage;
