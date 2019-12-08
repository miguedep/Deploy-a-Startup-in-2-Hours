import React from 'react';
import './App.css';
import Jobs from './Jobs';
const keys = require('./keys');

async function fetchJobs(updateCB) {
    const res = await fetch('http://jr-job.deeplearningerp.com:3001/jobs');
    // console.log(res);

    const json = await res.json();

    updateCB(json);
}

function App() {
    const [jobList, updateJobs] = React.useState([]);

    React.useEffect(() => {
        fetchJobs(updateJobs);
    }, []);

    return (
        <div className="App">
            <Jobs jobs={jobList} />
        </div>
    );
}

export default App;
