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

# Database UML Diagram
![image](https://user-images.githubusercontent.com/34760210/171046512-bfbc6818-7a1b-4e2c-b227-3241c7ca86c7.png)


# User Interface
## Register Page
<img width="1439" alt="Screenshot 2022-05-31 at 12 11 37 AM" src="https://user-images.githubusercontent.com/34760210/171046116-336c506f-394d-42a4-966c-c52d5c70dfdc.png">

## Home Page
<img width="1440" alt="Screenshot 2022-05-31 at 12 06 22 AM (2)" src="https://user-images.githubusercontent.com/34760210/171045649-bfec41a6-f367-4675-858f-eb548ba27aca.png">

## Transfer Requests Page
<img width="1438" alt="Screenshot 2022-05-31 at 12 08 47 AM" src="https://user-images.githubusercontent.com/34760210/171045853-31f58c11-c495-45e0-a462-fd8711950443.png">

## Buy New Device Page
<img width="1438" alt="Screenshot 2022-05-31 at 12 09 37 AM" src="https://user-images.githubusercontent.com/34760210/171045943-28f43d7c-346f-4621-8627-f7605af93f11.png">

## Check Owner Page
<img width="1436" alt="Screenshot 2022-05-31 at 12 09 57 AM" src="https://user-images.githubusercontent.com/34760210/171045973-8d2a2ffa-aada-4e93-aeff-10d09b829111.png">
