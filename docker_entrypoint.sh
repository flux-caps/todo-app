#!/bin/sh
set -e

function printBanner {
  echo "..., Doc. Are You Telling Me You Built A Time Machine...Out Of ORBITALS?";
}

function waitForMySQLServer {
  echo "Waiting for databases to start ...";
  while ! nc -z $PROJECTION_MYSQL_HOST $MYSQL_PORT; do sleep 1; done;
  while ! nc -z $EVENTS_MYSQL_HOST $MYSQL_PORT; do sleep 1; done;
  while ! nc -z $STREAM_MYSQL_HOST $MYSQL_PORT; do sleep 1; done;
  echo "Databases ready";
}

function startServer {
  php /app/bin/initialize.php;
}

#php /app/bin/server.php

printBanner
waitForMySQLServer
startServer