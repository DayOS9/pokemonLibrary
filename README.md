# Pokemon Library (ReactJS, ExpressJS, PostgreSQL)

For ASU view only, a more complete Google Doc with screenshots is included here: [Final Report Phase 3](https://docs.google.com/document/d/1z0yB0QR7TbjIHSRQN4iudeUDyjkOXLtiZftuDmv1GXY/edit?usp=sharing)

## Project Description

A Pokedex web application where users can interact with all Pokemon from generations 1 to 3, starring their favorite Pokemon in a condensed, easy-to-use interface. Utilizing a full Javascript interface and PostgreSQL database, users can initialize a local database to store all their favorite Pokemon so that they can view them at a later time while also being able to observe other Pokemon using our search bar! All instructions to set up are listed below!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Set Up Guide

Use the following steps to assist with setting up the application.

## Downloading the Required Files:

1. Go to our [github repository](https://github.com/DayOS9/pokemonLibrary).
2. Either clone our repository or download all files as a Zip file, then extract into your desired directory.
3. Finally, change directories into the pokemonLibrary directory using a command similar to below (will vary based on your current directory): `cd ./pokemonLibrary`
4. Additionally, make sure that [PostgreSQL](https://www.postgresql.org/download/) and [NodeJS/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) work properly on your device.

## Setting up PostgreSQL database:

1. Using instructions provided by ASU-CSE412, set up the database as instructed by Assignment 0 to set up the database on PGPORT=8888 and PGHOST=/tmp. Our server will attempt to interact with the PSQL database specifically on port 8888. Failure to set up the database properly will result in errors on both the client and server. 
2. Note: This step can be done outside of the pokemonLibrary directory, but for clarity and consistency, we will assume that this step is done in the pokemonLibrary directory that was obtained from our github repository.
3. Common errors that occur are not setting the environment variables correctly, not having a database initialized using PSQL, and not starting the database server before all following steps.
4. Our database uses the following parameters for reference:
```
const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: "localhost",
  database: "postgres",
  port: 8888,
});
```
## Setting up ExpressJS Backend Server

1. Before starting this section, make sure that the database has been set up correctly. It is pivotal to complete the database setup before running the following commands.
2. Change directory to `/backend` by doing the “change directory” command. From the outermost directory (pokemonLibrary), the following command can be ran: `cd backend`
3. Run the following command to install all node/npm dependencies (if warnings appear, attempt to continue until step 5. If the resulting screenshot doesn’t appear, there may be an issue with how Node/NPM was installed): `npm install`
4. Run the following command to start the client: `./start.sh`
5. Wait until the following message is shown: `Server running on http://localhost:3001`

## Setting up ReactJS Frontend Client

1. First ensure that all steps prior have been properly read and completed. All prior steps must be completed before moving forward
2. Change directory to `/frontend` by doing the “change directory” command. From the outermost directory (pokemonLibrary), the following command can be ran: `cd frontend`
3. Run the following command to install all node/npm dependencies (if warnings appear, attempt to continue until step 5. If the resulting screenshot doesn’t appear, there may be an issue with how Node/NPM was installed): `npm install`
4. Run the following command to start the client: `npm start`
5. You can now fully utilize our application through [http://localhost:3000](http://localhost:3000) on any browser! Have fun!