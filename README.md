# Theberton Lion

I was provided with a set of static pages and assets that had been downloaded from Wordpress.  

My intention was to redevelop the site using Javascript, adding new features whilst retaining the brand identity of the pub.  

I had recently followed a React course and thoroughly enjoyed learning it, so decided to put what I had learnt into practice.   


## Backend

The present version of the site is hosted on Netlify, using Netlify CMS as the backend. It was important that the client had an interface whereby he could update the contents of the website independently, given the changing nature of the services his business offers. I have been very pleased with the fact that I can make structural updates to the site and have it update through Github, whilst my client can make updates to the content, which I can then pull to avoid any conflicts. One of the biggest challenges I faced was in learning how to use Github commands and then having them integrate with Netlify.  

To develop the backend CMS I taught myself [Stackbit](https://www.stackbit.com/). Below you can see an example of how the client can change the order of the sections on the home page if he wishes.

![TL1](https://user-images.githubusercontent.com/18460931/139420870-f7260677-8f73-4fb0-a399-4b59b06ba053.png)

## Homepage

### Carousel
The homepage carousel was fairly straightforward to set up, making use of [Slick Carousel](https://kenwheeler.github.io/slick/). However, the client wished for it to be clickable so that the user was taken to the page being promoted by each banner as it appeared. I expected this to be straightforward, however I soon discovered that when I added a url to each image, the user was always taken to the final one regardless of the content of the others. In order to get around this problem I created a small function to call and extract the url when the image is clicked.

<img width="652" alt="TL2" src="https://user-images.githubusercontent.com/18460931/139422770-a7f8c4b2-7ceb-48bb-91ea-21382ca92f19.png">

### Live Ale List
This was the part of the site that I found the most fun. Extracting the data from the backend and mapping it so that it dynamically displays on the page was particularly enjoyable and gave a great sense of achievement.  
The first screenshot also shows an example of where the system would benefit from a 'tidy-up'. We can see that the 'Real Ale On Now' heading has been hard coded in, rather than dynamically fetched. There are a few instances where I would like for this to be editable in the CMS and extracted with the rest of the data, but the time pressure of completing this work around my full-time job meant I made a sacrifice on flexibility over meeting the deadline.   

I have always found CSS and front-end development significantly harder to master than back-end scripting. However, I set myself the challenge of displaying the beer list in a visually appealing manner. Having the pump clip images align with the pump image in the background was no mean feat. Furthermore, ensuring that the pumps did not appear on smaller displays and having the information realigned was also satisfying.  

I added two boolean options to the backend so each ale either appears in the 'on now' section, 'coming soon' section or not at all. This allows the client to keep an ale on the database in case he reorders it again in the future. If he does not have a graphic for the pump clip, a blank one is displayed by default with a 'chalkboard' style font showing the information, as is often the case in pubs.
