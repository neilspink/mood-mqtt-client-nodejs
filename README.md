# Node.js controlling mood barometer via MQTT

This project sends and receives commands to an [MQTT broker](http://mqtt.org/). 

It's part of a mood barometer project
https://github.com/neilspink/mood-barometer
https://github.com/neilspink/mood-infrared-controlled

# Test votes being sent via MQTT

Voting UP
> mosquitto_pub -h localhost -t team1/vote -m "+" -u "sammy" -P "1234"

Voting DOWN
> mosquitto_pub -h localhost -t team1/vote -m "-" -u "sammy" -P "1234"
