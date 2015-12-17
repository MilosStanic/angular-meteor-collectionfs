#!/bin/bash
echo 'setting up MONGO_URL'
#hostip=`netstat -rn | grep "^0.0.0.0 " | cut -d " " -f10`
#export MONGO_URL="mongodb://$hostip:27017/mean-dev"
export MONGO_URL="mongodb://localhost:27017/testapp"
## export METEOR_WATCH_POLLING_INTERVAL_MS="500"
echo 'running meteor' 
# have to add --allow-incompatible update, so it can load latest angular-material version
meteor run --allow-incompatible-update
