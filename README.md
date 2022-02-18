# The App

This app is built with reactjs and uses json server as "fake" database where the tasks are stored. The app focuses on the functionality and was my first project with reactjs.

## Features
  - Add new task
  - Delete unwanted ones
  - Modify task descriptions and tags
  - Arrange tasks
  - Mark tasks as done
  - Archive where you can view tasks marked as done

## How to use

### Requirements
   - Nodejs(and npm/yarn)
    
### Run the app
   If using yarn replace npm with yarn
   
   1. Clone repository and navigate to the folder
   
   2. Run the following commands in terminal while in the app folder

    - npm install
    
    - json-server -H localhost --port 3010 --watch db.json
    
   3. Open second terminal in same folder and run

    - npm start
