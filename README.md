
## Inspiration
For college students and professionals alike, creating personal websites helps share work with a larger audience and impress recruiters. 
However, website creation is not easy - most students don't have the skills or the resources to build one on their own. 
For example, setting up a basic, static website requires buying a domain name, purchasing a hosting plan, configuring DNS settings, writing up content, and adding style elements.

Website builders like Wix and Squarespace only help solve some of these problems, but why bother with extensive tools just to make a personal website or portfolio? 
Especially when all of that when all of your information is already on your LinkedIn or resume?

That's why we build thisisMe, a web platform that makes personal website and portfolio creation simple, quick and elegant. In less than 60 seconds.

## What it does
Our web platform allows users to connect their LinkedIn profiles and we do the heavy lifting from there. We use a comprehensive server on the backend that parses through users LinkedIn profiles, analyzing and selecting relevant data to include on their personal websites. Once complete, we embed this data onto a beautifully styled, responsive theme with a custom domain name for the user. We've said it before, but 60 seconds is all it takes.

## How we built it
The application is build with upon two main components: a frontend and a backend. The backend is based upon node.js express.js, and MongoDB to store user's websites on AWS. 
The backend is mainly responsible for mining data from a given LinkedIn account and hosting the newly created site. It uses a client's login details to access their LinkedIn profile and then extracts all relevant information from the HTML. 
Subsequently the program splices the extracted data into a pre-made HTML template which will soon become a new shiny website. The final step is a call to express to open a new port and listener for the website on the local machine. Users can then go right ahead and find their website at the local IP and port.

On the other hand, the frontend mainly handles the logistics of enabling clients to provide their LinkedIn login details and account url. It is a small but slick looking angular application, that users can easily use create their stunning professional website.

## Challenges we ran into
Some of the challenges that we ran into was during the design process. We initially wanted to handle the creation of the html/css of the website all on the client side and then send it to the server for processing. This was tough because Angular was not very flexible and we struggled with debugging. However, once we found a node package that actually parsed LinkedIn for us, we decided that we would instead just create the HTML and parse it all on the server side itself. Furthermore, we tried to divide up the project amongst us, but bringing everything together proved to be difficult at times. For example, when we tried combining the form data to the server using a post request, there proved to be some underlying issue where the response data had no body. As a result, we had to revamp a lot of the code. Additionally, we implemented a standalone resume parsing (given any format) using the Google autoML API but could not integrate it within the time given.

## Accomplishments that we're proud of
We are honestly proud that we even hacked it all together. We were lucky to have first created a working server/backend that properly connected with MongoDB. This allowed us to have the CRUD functionality and focus most of our efforts on the front end (of both the starting site and the website that we were generating). We are also proud of what we constructed with the frontend. None of us had too much exposure with the frontend but we used a familiar template and worked with that to create both the development site and our own site.

## What we learned
We learned more about new technologies such as MongoDB, Express, NodeJS, and Angular and gained experience in the process of building web apps. We also became a better team in the process by appealing to our individual strengths such as Kunal in design and Stefan in backend development.

## What's next for thisisME
As a team we hope to continue this project and turn it into something people use every day. We hope to make website-creation readily accessible to everyone, be it experienced developers who do not have the time to build their own website or people who have not written a single line of code in their life.

