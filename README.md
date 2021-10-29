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

