var fetch = require('node-fetch');
var redis = require('redis'),
    client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

const { promisify } = require('util');
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

// fetch all pages
async function fetchGithub() {
    let resultCount = 1,
        onPage = 0;
    const allJobs = [];
    while (resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }
    console.log('got', allJobs.length, 'jobs total');

    // filter algo
    const jrJobs = allJobs.filter(job => {
        const jobTittle = job.title.toLowerCase();
        let isJunior = true;

        // algo logic
        if (
            jobTittle.includes('senior') ||
            jobTittle.includes('manager') ||
            jobTittle.includes('sr.') ||
            jobTittle.includes('architect')
        ) {
            return false;
        }
        return true;
    });
    console.log('filtered down to', jrJobs.length);

    // set in redis
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({ success });
}

fetchGithub();
module.exports = fetchGithub;
