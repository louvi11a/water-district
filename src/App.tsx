import React, { useEffect, useState } from 'react';

function App() {
 const [report, setReport] = useState('');

 useEffect(() => {
    fetch('http://localhost:3000/runEpanet')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setReport(data))
      .catch(error => console.error('There has been a problem with your fetch operation: ', error));
 }, []);

 return (
    <div className="App">
      <header className="App-header">
        <h1>epanet-js Example One</h1>
        <p>
          In this example we are saving net1.inp to the Workspace, running the
          model and reading the report file.
        </p>
        <p>
          You can see the output below. Learn more about
          <a href="https://github.com/modelcreate/epanet-js"
            >epanet-js on GitHub</a
          >
        </p>
        <textarea value={report} />
      </header>
    </div>
 );
}

export default App;