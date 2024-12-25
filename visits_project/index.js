const express = require('express');
const redis = require('redis');
//const process = require('process'); //enable this when testing resiliance 

const app = express();
const client = redis.createClient({
  host: 'visits_backend', //redis service name as per docker-compose.yml. In a non-docker setup, IP/hostname/url of redis server must be defined.
  port: 6379              //default redis port. can be skipped
});
client.set('visits', 0); //starting value of counter

app.get('/', (req, res) => {
//  process.exit(0); //enable this to test resiliance. 0 means exit without failure. Any other code means there is error/failure.
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1); // increment count everytime app called in browser
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});