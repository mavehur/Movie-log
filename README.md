# Movie-log 🎬

1. Display the table (Movie list) only if there is movie data in the array using **ngIf**.
2. Iterate over the table rows for each movie data in the movie array using **ngFor**.
3. Bind a movie name, a title property, a width, and a margin property of an image using **property binding**.
4. Show or hide movie images with a button click using **event binding**.
5. If a value has been previously entered, display it in the filtering input, and when the user enters a new value, output the filtered movie array using **two-way binding (ngModel)**, **getter/setter**.
6. Convert movie name, director, release date, cast, rating, and price data using **built-in pipes**.
7. Convert "_" to "-" in the movie name using **customed pipes**.
8. When rating changes in the parent component (movies), update the star score in the child component (star-score) using **OnChanges** and **Input/Output decorators**.
9. Fetch the movie data and assign it back to the movie array using **Service** in the **ngOnInit lifecycle hook**.
10. Initialize all data taken from filteredMovies so that all movies are visible on the initial screen using **ngOnInit lifecycle hook**.
