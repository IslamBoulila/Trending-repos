##  Trending Github repositories
This project is my solution for the Front-end Coding Challenge of  [Gempgraphy](https://www.gemography.com/).
It's a small webapp that will list the most starred Github repos that were created in the last 30 days.


## Features
* As a User I should be able to list the most starred Github repos that were created in the last 30 days. 
* As a User I should see the results as a list. One repository per row. 
* As a User I should be able to see for each repo/row the following details :
  * Repository name
  * Repository description 
  * Number of stars for the repo. 
  * Number of issues for the repo.
  * Username and avatar of the owner. 
* As a User I should be able to keep scrolling and new results should appear (pagination).

## Mockup
![Mockup](https://raw.githubusercontent.com/IslamBoulila/Trending-repos/master/mockup.png)


## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App run it in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




## Notes
* Pages take some time to load since the app fetches the data directly from the Github API.
* The Search API has a custom rate limit. So For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.It means that you can paginate through pages only 10 times per minute.

## Why ReactJs ?
Well! I had this curiosity about ReactJs library and i started learning it just few months ago!(No that has nothing to do with my internship). And now i found this challenge from Gemography as an oppurtunity to practice what i learned and see what i can do in a short time.