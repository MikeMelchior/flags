import React from "react";
import { Link } from "react-router-dom";


function App() {
  return (
    <div>
      <h1> <Link to={'/database'}>Flag Database</Link></h1>
      <h1> <Link to={'/trivia'}>Trivia</Link></h1>
    </div>
  );
}

export default App;
