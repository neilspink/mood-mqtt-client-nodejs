const mqtt = require('mqtt')

const topicVote = 'test/vote';
const topicMoodometer = 'test/moodometer';
const topicMood = 'test/mood';

const options = {
    port: 1883,
    host: 'mqtt://broker.tec2020.fun',
    clientId: 'nodejs_control',
    username: 'sammy',
    password: '1234'
};
const client = mqtt.connect('mqtt://broker.tec2020.fun', options);

let currentMood = 3;

client.on('connect', () => {
    client.subscribe(topicVote)
    client.subscribe(topicMoodometer)
  })

  client.on('message', (topic, message) => {
    console.log('received message %s %s', topic, message)
    switch (topic) {
      case topicVote:
        return handleVote(message)
      case topicMoodometer:
        return handleMoodometer(message)
    }
  })

  function handleVote (message) {
      console.log('handling vote')

      if (message == "+") {  // vote UP e.g. super-happy = 1
        currentMood--;
      }

      if (message == "-") {  // vote DOWN e.g. angry = 5
        currentMood++;
      }

      if (currentMood > 5) {
          currentMood = 5;
      }

      if (currentMood < 1) {
          currentMood = 1;
      }

      console.log('updating mood to %s', currentMood.toString())
      client.publish(topicMood, currentMood.toString())
    }

  function handleMoodometer (message) {
      console.log('Moodometer message %s', message)
  }
