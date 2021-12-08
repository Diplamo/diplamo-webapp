# Diplamo-webapp

https://www.senddiplamo.com/

This webapp was built for a project submission for the Chainlink Fall Hackathon 2021.

The frontend is TypeScript and VueJS. 
For the backend Moralis was used for user authentication and management, database storage with MongoDB, and connection to the smart contracts, which are deployed on the Polygon Mumbai testnet. The website is hosted on pythonanywhere with some very basic flask.

The website is responsive on mobile.

Some parts are mocked because we didn´t have to set up everything for the hackathon deadline.

![web-gif](https://user-images.githubusercontent.com/78375761/145259770-c4969a48-ffeb-47c0-bec5-a6156de4a6e9.gif)

# Run locally
Fork the repo and run 'npm install' and then run 'dev' from the npm scripts. You would also have to set up your own Moralis server credentials (id and url) in an .env file, if you want to use Moralis.
Disclaimer: I haven´t checked whether these instructions work.
