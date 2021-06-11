
import './App.css';
import {useState, useEffect} from 'react';

function url(path){
  return process.env.NODE_ENV = "development" ? `http://locahost1234${path}` : path
}

//If we're on 'development' that means we're on MY computer, so the path will be my local url for development, otherwise if the path  that is passed in is 
//set to the heroku or deployment url then run that path instead. 

function App() {
  const [data, setData] = useState("Hi"); //Here, data will be set to 'hi'
  useEffect(()=>{
    fetch(url("/api/")) //getting our data from our newly built api
      .then(res=>res.json()) //converting the data to json, then below it's setting that json data to state
      .then(apiData => setData(apiData.data)) //we do .data because that's how we set up our api app.use
    //setData(data+"!") //Just concatinating here & testing things work
  },[]) //empty array so it doesn't repeat infintely 

  return (
    <div className="App">
      <header className="App-header">
        Testing my data collection here: {data}
      </header>
    </div>
  );
}

export default App;
