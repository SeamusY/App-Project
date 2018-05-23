# Gophoter

## Description

This is a react-native app, using redux. This is guided towards photographers, where they can see recetn events, join and upload photos. To share with others, where you can learn from others on taking photos.

## Installation
__Note: This installation is for windows computer.__
First when downloading or follow, please install the following program before running this:
* - [Android SDK, Click on the Build Project with Native code](https://facebook.github.io/react-native/docs/getting-started.html) 
* - NodeJS
* - Postgres

Once finished, please set go into Both backend and Yarn install all the files.
You will need [Knex](http://knexjs.org/) to migrate the latest tables, go to backend folder and create a database with with a name and create an `.env` with "DB_NAME=(your table name" then knex migrate:latest.

To run the app, please launch any android phone. Then using command prompt cd into the front end folder and `react-native run-android` and run your progress using `sudo su postgres start` with your postgres running in the background.

## DB initialization
TEST_DB_NAME=
DB_NAME=
DB_USERNAME=
DB_PASSWORD=

NODE_ENV=development
PORT=
---default=3000---

1. npm install
2. npm start

