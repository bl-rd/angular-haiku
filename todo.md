# Plan

## What the app will do

Going to the app will display a random haiku. The user can interact with the app to get another one (eg swipe, press button), they can open a menu, or they can click the name of the poet to see a list of the haiku written by then.

## Structure of the app

- The app will be written using Angular at the front end. 
- Navigating the app will be done using ui-router
- There will be a service that controls fetching/transforming the data
- There will be a top level component, with other elements being sub-components

## Nice to have's

- The data for the app will be served via an API
  - **Idea**: When running locally, serve a .NET core api from localhost (will need to be tied into another application)
  - When deploying for production, dynamically create the JSON that will be used...
- Service worker will allow the app to be installed like a native app
- Testing!