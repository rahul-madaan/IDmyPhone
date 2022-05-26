# IDmyPhone
ReactJS based Web Application to link all the Digital Devices with Aadhaar Number of individuals and enable transfer of devices and reporting of
lost/stolen devices to stop trading of stolen phones and reduce crime.

# Tech Stack
- FrontEnd: ReactJS
- BackEnd: Python FastAPI https://github.com/rahul-madaan/phone-one-server
- Database: MySQL

# Features

# Initial Setup
1. Install Node and NPM - Follow steps here: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
2. Download and install MySQL - Follow steps here: https://www.javatpoint.com/how-to-install-mysql
3. Clone the repo using `git clone https://github.com/rahul-madaan/IDmyPhone.git` command
4. Open the project in IntelliJ Idea(preferred)
5. Open terminal/command prompt and cd into the project folder
6. Run commands `npm install` and `npm start` (npm install will take time for initial setup)
7. Start MySQL server on your machine.
8. Run create schema script from `./SQL scripts`
9. Populate database with seed data using the  `./SQL scrips/data` folder commands. 
10. Run https://github.com/rahul-madaan/phone-one-server python FastAPI on local machine (port 8000).
11. Run command `npm start` to start the ReactJS server on port 3000
12. Open http://localhost:3000/ on your browser.
