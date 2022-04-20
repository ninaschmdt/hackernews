import logo from './logo.svg';
import './App.css';

function App() {
  const testURL = fetch("http://hn.algolia.com/api/v1/search?query=react")
  .then((response) => {
      return response.json();
  }).then((data) => {
    console.log(data);
  });
 
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
