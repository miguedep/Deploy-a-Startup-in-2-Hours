var express = require('express');
var app = express();
var redis = require('redis'),
    client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

const { promisify } = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async function(req, res) {
    const jobs = await getAsync('github');
    // console.log(JSON.parse(jobs).length);
    res.header('Access-Control-Allow-Origin', 'http://jr-job.deeplearningerp.com');
    return res.send(jobs);
});

app.listen(3001, function() {
    console.log('Example app listening on port 3001!');
});
