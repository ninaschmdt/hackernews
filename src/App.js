import "./App.css";
import { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";

const ArticleElement = ({ data }) => {
  console.log(data);
  return (
    <div id="titleContainer" type="text">
      <a href={data.url}> {data.title} </a>
    </div>
  );
};

function App() {
  const [userInput, setUserInput] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.hits);
      });
  }, []);

  const search = () => {
    //console.log(userInput);
    fetch("http://hn.algolia.com/api/v1/search?query=" + userInput)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.hits);
      });
  };

  // line 9 to 14 is the fetch

  //useEffect

  return (
    <div className="App">
      <input
        id="ugly"
        onChange={(event) => {
          //console.log(event.target.value);
          setUserInput(event.target.value);
        }}
      />
      <button onClick={search}>ugly button</button>
      {articles.map((article) => {
        return <ArticleElement key={article.objectID} data={article} />;
      })}
      <div>{articles.length !== 0 ? "" : <SpinnerCircular />}</div>
    </div>
  );
}

export default App;
