# waveSurface

[Live Demo](http://afraid-offer.surge.sh/users)

[Backend API](https://wavesurface.herokuapp.com)

### What it does

This site serves as a resource platform for sheetwave construction. Since that's what i spent the last couple years doing i wanted to create a site to centralize all the information i have and will continue to gather and make it available to anyone interested.

A key feature leverages Slack API's to interact directly with a client interface hosted on the site. Verified users can submit quesitons from the site directly to a slack workspace. Inside slack instructionals can be compiled and deployed to the site as JSON allowing slack to be used as a primitive CMS for site content.

### Features

I wanted different user permissions to have some ability to manually control access to different sections. There is basic, fullAccess and Admin levels of authorizaiton. permissions are stored in localstroage with JWT's. Users, instructionals and sections are stored in a relational postgres database and calls are made with a custom axios class and static methods.

instructionals are generated with JSON objects sent from slack where links and files are hosted.

I relied heavily on material ui for styling. I did this for speed and didn't want to spend a lot of time making the interface 'pretty', for me it was worth the performance cost to accomplish the goals of this application. As a client side render i opted to use redux as well as native context for state managment. I wanted to get experience using both and discover how they were different.

## Tech

Front End - React bootstrapped with [Create React App](https://github.com/facebook/create-react-app) Redux & native Context for state managment, Material-UI components. Slack Web API to deliver to slack workspace, Slack Events API to listen for workspace triggers.

Back End - Posgres DB, Node, Express Routing.

![Diagram](./waveSurface.com-flowChart.drawio.svg)

#### Test Routes

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c16b96f70bb4b6de0703)
