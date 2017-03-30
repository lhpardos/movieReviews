# movieReviews
App with react and redux

Instructions for run the application.

Install dependencies

$ npm install

And then run de server

$npm start

#First of all, the aplications loads all the current most popular tv shows from tmdb.

#FILTERED SEARCH ADVICE:
If you want to use the filtered search, you need to write in the input and then click outside the input.
I prefered to use onBlur event listener to avoid the multiple calls to the api every time the user writes. But if you want a instant search only needs to use onChange or onKeyUp to see the results inmediatly.