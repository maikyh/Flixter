## Week 1 Assignment: Flixster

Submitted by: **Miguel Angel Garza Carranza - maiky@meta.com**

Estimated time spent: **11** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://maikyh.github.io/Flixter/)

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [x] Deploy website using GitHub Pages.
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

<a href="https://www.loom.com/share/0cf3b292071d4b05a59e4de039a9ac59">
  <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/0cf3b292071d4b05a59e4de039a9ac59-with-play.gif">
</a>

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The first lab helped me a lot in recalling everything I previously learned about HTML, CSS, and JavaScript, such as how to initialize the document, connect the index.html file with CSS and JS files. The third lab was the one that taught me how to fetch data from a public API, how to handle the data, find the endpoints, manipulate them, and display them in a grid view. In my opinion, this lab benefited me the most because the project also involved similar concepts of calling an API, in this case for movies, and displaying them in a grid. Thanks to this, I was able to complete all the core and stretch features.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have spent more time designing how to store movie information. Every time I clicked the "Add More Movies" button, it added more information. However, when I wanted to view the details of a movie that was no longer on the current page, nothing loaded. So, I had to create an array and push all the information back, which was not the most efficient solution. In a future iteration, I would handle a database where I could store all the movies only once, without repetition.
Additionally, I would improve the aesthetics and user interface of the pop-ups. I would choose slightly darker colors, clearer font styles, and give different shapes to the backgrounds. I would also make the text more prominent and make the pop-ups more compact, especially for mobile devices.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

In general, everything turned out well as I completed all the core and stretch features on time. However, there is always room for improvement. I would have liked to have better control over my time to implement enhancements, such as storing data in a database. This could have been better managed if I had improved my time management skills because there were moments when time slipped away from me, and it ended up being much later than expected.
To improve this, I will make note of the time, work intensely for a set period, and then take short breaks at regular intervals. This way, I can prioritize intensity over quantity and complete projects more efficiently, allowing more time for final touches and improvements.
