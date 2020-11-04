// import logo from './logo.svg';
import './App.css';


// cd learning-react/src
// npm start

// Change the header on this site from ‘React App’ (seen in the browser bar) to “Grocery Shopping App”
// Get rid of the spinning image on the page, and the ‘Edit src/App.js…’ and replace it with a heading that indicates this is now a grocery list application! 
// Hard-code 3 grocery items (of your choosing). I’d like them to be formatted as a list of bullet points underneath the page heading
// BONUS: Change the favicon visible in your browser tab to an image relevant to grocery shopping!


function App() {
  return (
    <div className="App">
      <header className="Grocery Shopping App">
              <h1>This is now a grocery list application!</h1>
              <ul>
                  <li>Eggs</li>
                  <li>Beer</li>
                  <li>Soup</li>
              </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
