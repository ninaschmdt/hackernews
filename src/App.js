import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [articles, setArticles] = useState ([])
  const testURL = fetch("http://hn.algolia.com/api/v1/search?query=react")
  .then((response) => {
      return response.json();
  }).then((data) => {
    setArticles (data.hits) 
      });

      // line 9 to 14 is the fetch
    
     
 
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
