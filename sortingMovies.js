/**
 * @author Chidinma Irene Nwoye
 */
		//Below I have outlined my list of 5 movies in 5 objects with 4 properties
			var myMovies = [];
			var movie1 = {"title": "Forrest Gump", "releaseYear": 1994, "rating": 5, "haveSeen": false};
			var movie2 = {"title": "Captain Phillips", "releaseYear": 2013, "rating": 2, "haveSeen": false};
			var movie3 = {"title": "Life is Beautiful", "releaseYear": 1993, "rating": 1, "haveSeen": true};
			var movie4 = {"title": "Pirates of the Carribean", "releaseYear": 2011, "rating": 3, "haveSeen": false};
			var movie5 = {"title": "Black Hawk Down", "releaseYear": 1999, "rating": 5, "haveSeen": true};
			
			//I used the push method to add the movies i.e. the objects into myMovies array hence increasing its length
			myMovies.push(movie1);
			myMovies.push(movie2);
			myMovies.push(movie3);
			myMovies.push(movie4);
			myMovies.push(movie5);
			
			//I used the for loop below to iterate through my objects in my array.
			//I console.logged to output the results of my counter, i
			for (var i = 0; i < myMovies.length; i++) {
				console.log(myMovies[i]);
			}
			
			//I've used the if/else function to sort myMovies into a new list based on their releaseYear property
			//releaseYearSortFunction is my compare function for comparing any two elements - movieA and movieB. 
			//It will sort through the release year based on size i.e. the integer size
			var releaseYearSortFunction = function(movieA, movieB) {
				 if (movieA.releaseYear < movieB.releaseYear)
				     return -1;
				 else if (movieA.releaseYear > movieB.releaseYear)
				     return 1;
				  // when movieA and movieB have the same release year it will return 0
				return 0;
			}
			
			myMovies.sort(releaseYearSortFunction);  //this function sorts it "in place" i.e. it changes the array already sorted based on its release year
			
			// now console.log by release year
			for (var i = 0; i < myMovies.length; i++) {
				console.log(myMovies[i]);   // this will output the new array
			}
			
			//This if/else statement will sort the movies by their titles i.e. it will sort it lexicographically
			//The compare function here is titleSortFunction
			var titleSortFunction = function(movieA, movieB) {
				 if (movieA.title < movieB.title)
				     return -1;
				 else if (movieA.title > movieB.title)
				     return 1;
				  // movieA and movieB have the same title
				return 0;
			}
			
			myMovies.sort(titleSortFunction);     //this function sorts it "in place" i.e. it changes the array already sorted based on their titles
			
			// now console.log by title
			for (var i = 0; i < myMovies.length; i++) {
				console.log(myMovies[i]);
			} 