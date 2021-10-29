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
<img width="605" alt="TL3" src="https://user-images.githubusercontent.com/18460931/139427702-8183ca9b-60a4-40f4-ae0f-a1a228532c2a.png">

I have always found CSS and front-end development significantly harder to master than back-end scripting. However, I set myself the challenge of displaying the beer list in a visually appealing manner. Having the pump clip images align with the pump image in the background was no mean feat. Furthermore, ensuring that the pumps did not appear on smaller displays and having the information realigned was also satisfying.  
<img width="391" alt="TL4" src="https://user-images.githubusercontent.com/18460931/139427693-3ff6884b-5a48-4c60-bb01-13f514f110a4.png">
![TL5](https://user-images.githubusercontent.com/18460931/139427720-ed8a357f-1805-4c19-a212-6c62f92f158d.png)
![TL6](https://user-images.githubusercontent.com/18460931/139427713-76fd601a-0b5a-41e2-ab89-f019bcfa2c45.png)

I added two boolean options to the backend so each ale either appears in the 'on now' section, 'coming soon' section or not at all. This allows the client to keep an ale on the database in case he reorders it again in the future. If he does not have a graphic for the pump clip, a blank one is displayed by default with a 'chalkboard' style font showing the information, as is often the case in pubs.
![TL7](https://user-images.githubusercontent.com/18460931/139427712-a586bd7d-acfb-453f-ade6-545f3633b0a2.png)

### Services
The three highlighted services are the same and look almost identical as on the previous incarnation of the site. Again, as all I had was static pages from Wordpres I basically had to use Element Inspector to work out how to recreate them. As you will see from the second screenshot below, the client actually has the option to amend these, though is perhaps unlikely to do so given the fundamentals of the business will probably remain the same.   

<img width="343" alt="TL8" src="https://user-images.githubusercontent.com/18460931/139429331-13b7fb74-b68f-4c21-b595-017ae020c70e.png">   

![TL9](https://user-images.githubusercontent.com/18460931/139430706-8b51b7df-d9e0-444e-82ea-1145c563ba94.png)  

### Events
Occasionally the client hosts events, such as a Beer Club, Vinyl Night or Rock 'N' Roll Bingo. Once again, he has complete control over these, having the ability to add, remove or amend events from the backend. He can reuse an event by simply changing the date value so that it is in the future. I set myself the challenge of only showing a limited number of future events in chronological order. Furthermore, an event should no longer appear on the page once it has taken place. This was a reasonably challenging proposition, but did not provide too many hurdles. Once I had downloaded the events data, it was simply a case of filtering out events that had taken place, sorting the new list and then slicing the first four options so that they could be displayed. I liked that this solution combined a few small fundamental data manipulation techniques, though I anticipate that there is a more efficient way of doing so!   
<img width="661" alt="TL10" src="https://user-images.githubusercontent.com/18460931/139430550-91059158-c33d-45b8-ac30-fab7f0c5f18a.png">

## Drinks/Food
Other than the live ale list, the drinks and food page make use of React components to swiftly switch between categories. In truth, this section would require quite a lot of work in order to make it adaptable for other establishments. The bottled drinks and wines all have a variety of measures which are presently hard-coded, while I had to consider that not all dishes require a description and the bar snacks menu needed to be constructed slightly differently from the rest. However, once again the client has full control over the content on these pages, though not currently the categories. We would also like to add photographs to these pages, but this would really need a further meeting with the client to establish how he would like them to be displayed. If I were to choose, I would suggest that we have a small number of featured photos to simply display at the top or bottom of the page.  
